import React, { useRef, useEffect, useState } from 'react';

// These libraries are loaded from CDN in index.html
declare const d3: any;
declare const topojson: any;

interface PointOfInterest {
    name: string;
    coordinates: [number, number];
}

interface EarthProps {
    searchQuery: string | null;
    targetCoordinates?: [number, number] | null; // Added for precise targeting
    onCountryNotFound: () => void;
    onCountryFound?: (countryName: string) => void;
    onPinClick: (destination: PointOfInterest) => void;
    isPaused: boolean;
}

const Earth: React.FC<EarthProps> = ({ searchQuery, targetCoordinates, onCountryNotFound, onCountryFound, onPinClick, isPaused }) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const timerRef = useRef<any>(null);
    const projectionRef = useRef<any>(null);
    const rotationPausedByUserRef = useRef(false);
    const countriesRef = useRef<any[]>([]);
    const startRotationRef = useRef<(() => void) | null>(null);

    // State to manage dynamic pins (added on click)
    const [activePins, setActivePins] = useState<PointOfInterest[]>([]);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const tooltip = d3.select('#tooltip');
        let path: any;
        let globeGroup: any;
        let pinGroup: any;
        const sensitivity = 75;

        const updateElements = () => {
            if (!path || !projectionRef.current || !globeGroup) return;

            // Update Land
            globeGroup.selectAll('path.land').attr('d', path);

            // Update pins
            if (pinGroup) {
                pinGroup.selectAll('.pin-group')
                    .attr('transform', (d: any) => `translate(${projectionRef.current(d.coordinates)})`)
                    .style('display', (d: any) => {
                        const center = projectionRef.current.invert([svg.attr('width') / 2, svg.attr('height') / 2]);
                        const distance = d3.geoDistance(center, d.coordinates);
                        return (distance > Math.PI / 2) ? 'none' : 'block';
                    });
            }
        };

        const rotateToLocation = (coordinates: [number, number], callback?: () => void) => {
            if (timerRef.current) timerRef.current.stop();
            rotationPausedByUserRef.current = true;
            const targetRotation = [-coordinates[0], -coordinates[1]];

            d3.transition().duration(1500)
                .tween('rotate', () => {
                    const r = d3.interpolate(projectionRef.current.rotate(), targetRotation);
                    return (t: number) => {
                        projectionRef.current.rotate(r(t));
                        updateElements();
                    };
                })
                .on('end', () => {
                    if (callback) callback();
                    // Keep rotation paused so user can explore
                });
        };

        startRotationRef.current = () => {
            if (timerRef.current) timerRef.current.stop();
            timerRef.current = d3.timer(() => {
                if (rotationPausedByUserRef.current || isPaused || !projectionRef.current) return;
                const currentRotation = projectionRef.current.rotate();
                projectionRef.current.rotate([currentRotation[0] + 0.05, currentRotation[1], currentRotation[2]]);
                updateElements();
            });
        };

        const stopRotation = () => {
            if (timerRef.current) timerRef.current.stop();
        };

        const drawGlobe = () => {
            const container = svgRef.current?.parentElement;
            if (!container) return;
            const width = container.clientWidth;
            const height = container.clientHeight;

            if (!projectionRef.current) {
                const scale = Math.min(width, height) * 0.4;
                projectionRef.current = d3.geoOrthographic()
                    .scale(scale)
                    .center([0, 0])
                    .rotate([0, -30])
                    .translate([width / 2, height / 2]);
            } else {
                projectionRef.current.translate([width / 2, height / 2]);
            }
            const projection = projectionRef.current;
            svg.attr('width', width).attr('height', height);
            path = d3.geoPath().projection(projection);

            svg.selectAll('*').remove();

            // --- DEFINITIONS (Gradients & Filters) ---
            const defs = svg.append('defs');

            // 1. Water Turbulence Filter (Moving Waves)
            const waterFilter = defs.append('filter').attr('id', 'waterTurbulence');
            const feTurbulence = waterFilter.append('feTurbulence')
                .attr('type', 'fractalNoise')
                .attr('baseFrequency', '0.02')
                .attr('numOctaves', '3')
                .attr('seed', '1');

            // Animate
            feTurbulence.append('animate')
                .attr('attributeName', 'baseFrequency')
                .attr('values', '0.02;0.025;0.02') // Gentle shift
                .attr('dur', '10s')
                .attr('repeatCount', 'indefinite');

            // 2. Realistic Ocean Gradient
            const oceanGradient = defs.append("radialGradient")
                .attr("id", "ocean-gradient")
                .attr("cx", "50%")
                .attr("cy", "50%")
                .attr("r", "50%");
            oceanGradient.append("stop").attr("offset", "0%").attr("stop-color", "#0048ba"); // Richer Blue
            oceanGradient.append("stop").attr("offset", "100%").attr("stop-color", "#000f33"); // Dark Abyss

            // 3. Atmosphere Glow
            const glowFilter = defs.append('filter').attr('id', 'glow');
            glowFilter.append('feGaussianBlur').attr('stdDeviation', '12').attr('result', 'coloredBlur');
            const feMerge = glowFilter.append('feMerge');
            feMerge.append('feMergeNode').attr('in', 'coloredBlur');
            feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

            // 4. Sun Glare (Specular Highlight)
            const sunGradient = defs.append("radialGradient")
                .attr("id", "sun-gradient")
                .attr("cx", "20%")
                .attr("cy", "20%")
                .attr("r", "40%");
            sunGradient.append("stop").attr("offset", "0%").attr("stop-color", "#ffffff").attr("stop-opacity", "0.5");
            sunGradient.append("stop").attr("offset", "100%").attr("stop-color", "#0b2c58").attr("stop-opacity", "0");

            // 5. Sphere Shading (Inner Shadow)
            const shadowGradient = defs.append("radialGradient")
                .attr("id", "sphere-shadow")
                .attr("cx", "50%")
                .attr("cy", "50%")
                .attr("r", "50%");
            shadowGradient.append("stop").attr("offset", "80%").attr("stop-color", "#000000").attr("stop-opacity", "0");
            shadowGradient.append("stop").attr("offset", "100%").attr("stop-color", "#000000").attr("stop-opacity", "0.7");

            // --- LAYERS ---

            // Layer 1: Atmosphere Halo
            svg.append('circle')
                .attr('cx', width / 2)
                .attr('cy', height / 2)
                .attr('r', projection.scale() * 1.03)
                .style('fill', '#4CA1AF')
                .style('opacity', 0.4)
                .style('filter', 'url(#glow)');

            // Layer 2: Main Globe Group
            globeGroup = svg.append('g');

            // 2.1 Ocean Base
            globeGroup.append('circle')
                .attr('cx', width / 2)
                .attr('cy', height / 2)
                .attr('r', projection.scale())
                .style('fill', 'url(#ocean-gradient)');

            // 2.2 Sun Reflection
            globeGroup.append('circle')
                .attr('cx', width / 2)
                .attr('cy', height / 2)
                .attr('r', projection.scale())
                .style('fill', 'url(#sun-gradient)')
                .style('pointer-events', 'none');

            // 2.3 Land Masses (Interactable)
            d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((world: any) => {
                const land = topojson.feature(world, world.objects.countries);
                countriesRef.current = land.features;

                globeGroup.selectAll('.land')
                    .data(land.features)
                    .enter().append('path')
                    .attr('class', 'land')
                    .attr('d', path)
                    .style('fill', '#1a5e1a') // Darker, richer forest green
                    .style('stroke', '#4a8e4a') // Lighter green border for definition
                    .style('stroke-width', 0.5)
                    .style('cursor', 'pointer')
                    .on('mouseover', function (this: any) {
                        d3.select(this).style('fill', '#2d8a2d'); // Highlight color
                    })
                    .on('mouseout', function (this: any) {
                        d3.select(this).style('fill', '#1a5e1a'); // Restore color
                    })
                    .on('click', (event: any, d: any) => {
                        // Handle Country Click
                        const centroid = d3.geoCentroid(d);
                        const countryName = d.properties.name;

                        // Add Pin
                        const newPin: PointOfInterest = { name: countryName, coordinates: centroid };
                        setActivePins([newPin]); // Singular focus as requested

                        // Rotate to it
                        rotateToLocation(centroid, () => onPinClick(newPin));
                    });
            });

            // --- PINS (Dynamic) ---
            pinGroup = svg.append('g').attr('class', 'pins-layer');

            // Layer 3: Sphere Shading (Overlay)
            svg.append('circle')
                .attr('cx', width / 2)
                .attr('cy', height / 2)
                .attr('r', projection.scale())
                .style('fill', 'url(#sphere-shadow)')
                .style('pointer-events', 'none');

            // --- INTERACTIONS ---
            // Desktop: mouse-only click-and-drag to spin the globe manually.
            // `.touchable(false)` keeps d3 off touch events entirely so the mobile
            // swipe handler below fully owns touch, and the mouse wheel is never
            // intercepted here so the page keeps scrolling normally over the globe.
            const drag = d3.drag()
                .touchable(false)
                .on('start', () => { stopRotation(); rotationPausedByUserRef.current = true; })
                .on('drag', (event: any) => {
                    if (!projectionRef.current) return;
                    const rotate = projectionRef.current.rotate();
                    const k = sensitivity / projectionRef.current.scale();
                    projectionRef.current.rotate([rotate[0] + event.dx * k, rotate[1] - event.dy * k]);
                    updateElements();
                })
                .on('end', () => { rotationPausedByUserRef.current = false; startRotationRef.current?.(); });
            svg.call(drag);
        };

        drawGlobe();
        startRotationRef.current?.();

        const handleResize = () => drawGlobe();
        window.addEventListener('resize', handleResize);

        // --- MANUAL TOUCH ROTATION (mobile swipe) ---
        // A single finger on the globe could mean "rotate the earth" or "scroll the
        // page" — we can't know until the finger actually moves. We wait for the
        // gesture to move past a small threshold, lock the direction once (mostly
        // horizontal => rotate the globe manually; mostly vertical => let the
        // browser scroll the page natively), then commit to that mode for the rest
        // of the touch. Auto-rotation pauses only while a real rotate-drag is
        // happening and resumes automatically afterwards.
        // Small threshold so a light flick spins the globe, while a clear vertical
        // drag still scrolls the page.
        const DIRECTION_LOCK_PX = 6;
        let touchState: {
            id: number;
            startX: number;
            startY: number;
            lastX: number;
            lastY: number;
            mode: 'pending' | 'rotate' | 'scroll';
        } | null = null;

        const handleTouchStart = (event: TouchEvent) => {
            if (event.touches.length !== 1) {
                // A second finger means pinch-to-zoom takes over; abandon rotate tracking.
                touchState = null;
                return;
            }
            const t = event.touches[0];
            touchState = { id: t.identifier, startX: t.clientX, startY: t.clientY, lastX: t.clientX, lastY: t.clientY, mode: 'pending' };
        };

        const handleTouchMove = (event: TouchEvent) => {
            if (!touchState || event.touches.length !== 1 || !projectionRef.current) return;
            let t: Touch | null = null;
            for (let i = 0; i < event.touches.length; i++) {
                if (event.touches[i].identifier === touchState.id) { t = event.touches[i]; break; }
            }
            if (!t) return;

            if (touchState.mode === 'pending') {
                const dx = t.clientX - touchState.startX;
                const dy = t.clientY - touchState.startY;
                if (Math.abs(dx) < DIRECTION_LOCK_PX && Math.abs(dy) < DIRECTION_LOCK_PX) {
                    return; // Not enough movement yet to know intent.
                }
                touchState.mode = Math.abs(dx) > Math.abs(dy) ? 'rotate' : 'scroll';
                if (touchState.mode === 'rotate') {
                    stopRotation();
                    rotationPausedByUserRef.current = true;
                }
            }

            if (touchState.mode === 'scroll') return; // Native page scroll handles this.

            event.preventDefault();
            const dx = t.clientX - touchState.lastX;
            const dy = t.clientY - touchState.lastY;
            touchState.lastX = t.clientX;
            touchState.lastY = t.clientY;

            const rotate = projectionRef.current.rotate();
            const k = sensitivity / projectionRef.current.scale();
            projectionRef.current.rotate([rotate[0] + dx * k, rotate[1] - dy * k]);
            updateElements();
        };

        const handleTouchEnd = () => {
            if (touchState?.mode === 'rotate') {
                rotationPausedByUserRef.current = false;
                startRotationRef.current?.();
            }
            touchState = null;
        };

        const svgNode = svgRef.current;
        svgNode?.addEventListener('touchstart', handleTouchStart, { passive: true });
        svgNode?.addEventListener('touchmove', handleTouchMove, { passive: false });
        svgNode?.addEventListener('touchend', handleTouchEnd, { passive: true });
        svgNode?.addEventListener('touchcancel', handleTouchEnd, { passive: true });

        return () => {
            stopRotation();
            window.removeEventListener('resize', handleResize);
            svgNode?.removeEventListener('touchstart', handleTouchStart);
            svgNode?.removeEventListener('touchmove', handleTouchMove);
            svgNode?.removeEventListener('touchend', handleTouchEnd);
            svgNode?.removeEventListener('touchcancel', handleTouchEnd);
        };
    }, []); // Only run on mount, internal state handles updates

    // Effect to update pins when activePins changes
    useEffect(() => {
        if (!svgRef.current || !projectionRef.current) return;
        const svg = d3.select(svgRef.current);

        let pinGroup = svg.select('g.pins-layer');
        if (pinGroup.empty()) {
            return;
        }

        const pins = pinGroup.selectAll('.pin-group').data(activePins);

        // Enter
        const pinsEnter = pins.enter().append('g')
            .attr('class', 'pin-group')
            .attr('cursor', 'pointer')
            .on('click', (event: any, d: any) => {
                onPinClick(d);
            });

        // Pin Path (Map Symbol - Teardrop)
        // Scaled SVG path from Material Icons (Location On)
        const pinPath = "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z";

        pinsEnter.append('path')
            .attr('d', pinPath)
            .attr('fill', '#ff4500') // Orange-Red
            .attr('stroke', '#ffffff')
            .attr('stroke-width', '2')
            .attr('transform', 'translate(-12, -24) scale(1)'); // Center bubble tip on coordinate

        // Update
        pins.merge(pinsEnter)
            .attr('transform', (d: any) => {
                if (!projectionRef.current) return '';
                return `translate(${projectionRef.current(d.coordinates)})`;
            });

        // Exit
        pins.exit().remove();

        // Force an update to set visibility based on horizon
        if (projectionRef.current) {
            pinGroup.selectAll('.pin-group').style('display', (d: any) => {
                const center = projectionRef.current.invert([svg.attr('width') / 2, svg.attr('height') / 2]);
                const distance = d3.geoDistance(center, d.coordinates);
                return (distance > Math.PI / 2) ? 'none' : 'block';
            });
        }

    }, [activePins]);

    useEffect(() => {
        if (isPaused) {
            if (timerRef.current) timerRef.current.stop();
        } else {
            rotationPausedByUserRef.current = false;
            startRotationRef.current?.();
        }
    }, [isPaused]);

    useEffect(() => {
        if (!searchQuery) return;

        // 1. Priority: Explicit Coordinates (from Smart Search)
        if (targetCoordinates) {
            setActivePins([{ name: searchQuery, coordinates: targetCoordinates }]);

            // Trigger rotation
            if (timerRef.current) timerRef.current.stop();
            rotationPausedByUserRef.current = true;
            const targetRotation = [-targetCoordinates[0], -targetCoordinates[1]];

            // Animate
            d3.transition().duration(1500)
                .tween('rotate', () => {
                    const r = d3.interpolate(projectionRef.current.rotate(), targetRotation);
                    return (t: number) => {
                        projectionRef.current.rotate(r(t));
                        if (svgRef.current) {
                            d3.select(svgRef.current).selectAll('path.land').attr('d', d3.geoPath().projection(projectionRef.current));
                            d3.select(svgRef.current).selectAll('.pin-group').attr('transform', (d: any) => `translate(${projectionRef.current(d.coordinates)})`);
                        }
                    };
                })
                .on('end', () => {
                    if (onCountryFound) onCountryFound(searchQuery);
                });
            return;
        }

        // 2. Fallback: Name matching with TopoJSON
        if (!countriesRef.current.length) return;
        const normalizedQuery = searchQuery.trim().toLowerCase();

        const country = countriesRef.current.find(
            c => c.properties.name.toLowerCase() === normalizedQuery
        );

        if (country) {
            const centroid = d3.geoCentroid(country);
            setActivePins([{ name: country.properties.name, coordinates: centroid }]);

            if (timerRef.current) timerRef.current.stop();
            rotationPausedByUserRef.current = true;
            const targetRotation = [-centroid[0], -centroid[1]];

            d3.transition().duration(1500)
                .tween('rotate', () => {
                    const r = d3.interpolate(projectionRef.current.rotate(), targetRotation);
                    return (t: number) => {
                        projectionRef.current.rotate(r(t));
                        d3.select(svgRef.current).selectAll('path.land').attr('d', d3.geoPath().projection(projectionRef.current));
                        d3.select(svgRef.current).selectAll('.pin-group').attr('transform', (d: any) => `translate(${projectionRef.current(d.coordinates)})`);
                    };
                })
                .on('end', () => {
                    if (onCountryFound) onCountryFound(country.properties.name);
                });
        } else {
            onCountryNotFound();
        }
    }, [searchQuery, targetCoordinates, onCountryNotFound]);



    return <svg ref={svgRef} className="cursor-move w-full h-full" style={{ display: 'block', touchAction: 'pan-y' }} />;
};

export default Earth;
