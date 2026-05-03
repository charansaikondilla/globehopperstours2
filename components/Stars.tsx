
import React, { useMemo } from 'react';

const Stars: React.FC = () => {
    const starCount = 400;

    const stars = useMemo(() => {
        return Array.from({ length: starCount }).map((_, i) => {
            const size = Math.random() * 2 + 1;
            const style = {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 6 + 4}s`,
            };
            return <div key={i} className="absolute bg-white rounded-full animate-twinkle" style={style}></div>;
        });
    }, []);

    return <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">{stars}</div>;
};

export default Stars;
