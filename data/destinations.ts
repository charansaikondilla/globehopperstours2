// TypeScript interfaces for destination data
export interface TravelPackage {
    id: string;
    title: string;
    location: string;
    image: string;
    features: string[];
    price: string;
    duration?: string;
    featured?: boolean;
    description?: string;
    itinerary?: Array<{
        day: number;
        title: string;
        activities: string[];
    }>;
    included?: string[];
    excluded?: string[];
}

export interface CountryData {
    displayName: string;
    tagline: string;
    description: string;
    heroImage: string;
    packages: TravelPackage[];
    highlights?: string[];
    bestTime?: string;
    currency?: string;
    language?: string;
}

export type DestinationsData = Record<string, CountryData>;

// Main destinations data
export const destinationsData: DestinationsData = {
    'japan': {
        displayName: 'Japan',
        tagline: 'Where Ancient Tradition Meets Modern Innovation!',
        description: 'Experience the perfect blend of ancient temples, cutting-edge technology, exquisite cuisine, and breathtaking natural beauty in the Land of the Rising Sun.',
        heroImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2670&auto=format&fit=crop',
        highlights: ['Cherry Blossoms', 'Mount Fuji', 'Ancient Temples', 'Bullet Trains', 'Sushi & Ramen'],
        bestTime: 'March to May, September to November',
        currency: 'Japanese Yen (¥)',
        language: 'Japanese',
        packages: [
            {
                id: 'tokyo-modern-adventure',
                title: 'Tokyo Modern Adventure',
                location: 'Tokyo • Shibuya • Shinjuku • Akihabara',
                image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2670&auto=format&fit=crop',
                features: ['Tokyo Tower Views', 'Shibuya Crossing', 'Robot Restaurant', 'Anime District', 'Tsukiji Fish Market'],
                price: '$449',
                duration: '4 Days / 3 Nights',
                description: 'Dive into the electric energy of Tokyo, where neon lights meet ancient traditions.',
                itinerary: [
                    { day: 1, title: 'Arrival & Shibuya', activities: ['Shibuya Crossing', 'Hachiko Statue', 'Shopping in Harajuku'] },
                    { day: 2, title: 'Modern Tokyo', activities: ['Akihabara Electronics', 'Tokyo Skytree', 'Asakusa Temple'] },
                    { day: 3, title: 'Food & Culture', activities: ['Tsukiji Market', 'Sushi Making Class', 'Robot Restaurant Show'] },
                    { day: 4, title: 'Departure', activities: ['Last-minute shopping', 'Airport transfer'] }
                ],
                included: ['3 nights hotel', 'Daily breakfast', 'Airport transfers', 'English guide'],
                excluded: ['International flights', 'Lunch & dinner', 'Personal expenses']
            },
            {
                id: 'kyoto-cultural-heritage',
                title: 'Kyoto Cultural Heritage',
                location: 'Kyoto • Nara • Osaka',
                image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2670&auto=format&fit=crop',
                features: ['Fushimi Inari Shrine', 'Bamboo Forest', 'Geisha District', 'Golden Pavilion', 'Nara Deer Park'],
                price: '$499',
                duration: '5 Days / 4 Nights',
                description: 'Journey through ancient Japan with stunning temples, traditional gardens, and cultural wonders.',
                itinerary: [
                    { day: 1, title: 'Kyoto Arrival', activities: ['Check-in', 'Gion District Walk', 'Traditional Tea Ceremony'] },
                    { day: 2, title: 'Temple Tour', activities: ['Fushimi Inari', 'Golden Pavilion', 'Arashiyama Bamboo Forest'] },
                    { day: 3, title: 'Nara Day Trip', activities: ['Todaiji Temple', 'Nara Deer Park', 'Kasuga Taisha Shrine'] },
                    { day: 4, title: 'Osaka Exploration', activities: ['Osaka Castle', 'Dotonbori Street', 'Street Food Tour'] },
                    { day: 5, title: 'Departure', activities: ['Souvenir shopping', 'Airport transfer'] }
                ],
                included: ['4 nights accommodation', 'Daily breakfast', 'All transfers', 'Temple entrance fees'],
                excluded: ['Flights', 'Meals not mentioned', 'Optional activities']
            },
            {
                id: 'mount-fuji-hakone',
                title: 'Mount Fuji & Hakone Retreat',
                location: 'Mount Fuji • Hakone • Lake Ashi',
                image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?q=80&w=2670&auto=format&fit=crop',
                features: ['Mt. Fuji Views', 'Hot Springs', 'Lake Cruise', 'Ropeway Cable Car', 'Traditional Ryokan'],
                price: '$399',
                duration: '3 Days / 2 Nights',
                description: 'Escape to nature with breathtaking views of Mount Fuji and relaxing onsen experiences.',
                itinerary: [
                    { day: 1, title: 'Hakone Arrival', activities: ['Lake Ashi Cruise', 'Hakone Shrine', 'Onsen Experience'] },
                    { day: 2, title: 'Mt. Fuji & Valley', activities: ['Owakudani Valley', 'Ropeway Ride', 'Mt. Fuji 5th Station'] },
                    { day: 3, title: 'Return Journey', activities: ['Morning onsen', 'Scenic train ride', 'Tokyo return'] }
                ],
                included: ['2 nights ryokan', 'Onsen access', 'All transportation', 'Some meals'],
                excluded: ['Tokyo accommodation', 'Additional meals', 'Personal expenses']
            },
            {
                id: 'hiroshima-miyajima',
                title: 'Hiroshima & Miyajima Island',
                location: 'Hiroshima • Miyajima • Peace Memorial',
                image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=2670&auto=format&fit=crop',
                features: ['Peace Memorial Park', 'Floating Torii Gate', 'Itsukushima Shrine', 'Okonomiyaki Food', 'Island Hiking'],
                price: '$359',
                duration: '3 Days / 2 Nights',
                description: 'Discover the poignant history and stunning island beauty of western Japan.',
                included: ['2 nights hotel', 'Ferry tickets', 'Museum entries', 'Breakfast daily'],
                excluded: ['Train from other cities', 'Lunch & dinner', 'Tips']
            },
            {
                id: 'hokkaido-winter-wonderland',
                title: 'Hokkaido Winter Wonderland',
                location: 'Sapporo • Otaru • Niseko',
                image: 'https://images.unsplash.com/photo-1548481899-ad0be729a2d6?q=80&w=2670&auto=format&fit=crop',
                features: ['Sapporo Snow Festival', 'Skiing & Snowboarding', 'Ice Sculptures', 'Fresh Seafood', 'Hot Springs'],
                price: '$549',
                duration: '5 Days / 4 Nights',
                description: 'Experience winter magic in Japan\'s northern island with snow festivals, skiing, and incredible food.',
                included: ['4 nights accommodation', 'Ski pass (1 day)', 'Festival entry', 'Airport transfers'],
                excluded: ['Ski equipment rental', 'Flights', 'Meals', 'Ski lessons']
            },
            {
                id: 'grand-japan-journey',
                title: 'Grand Japan Journey',
                location: 'Tokyo • Kyoto • Osaka • Hiroshima • Mt. Fuji',
                image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2670&auto=format&fit=crop',
                features: ['10 Nights / 11 Days', 'JR Pass Included', 'Bullet Train Experience', 'Hot Springs Stay', 'Cherry Blossom Viewing', 'Culinary Tours'],
                price: '$1,299',
                duration: '11 Days / 10 Nights',
                description: 'The ultimate Japan experience covering all major highlights from bustling Tokyo to serene temples.',
                featured: true,
                itinerary: [
                    { day: 1, title: 'Tokyo Arrival', activities: ['Airport transfer', 'Hotel check-in', 'Welcome dinner'] },
                    { day: 2, title: 'Tokyo Exploration', activities: ['Senso-ji Temple', 'Shibuya', 'Tokyo Tower'] },
                    { day: 3, title: 'Mt. Fuji Day Trip', activities: ['5th Station', 'Lake Kawaguchi', 'Return to Tokyo'] },
                    { day: 4, title: 'Bullet Train to Kyoto', activities: ['JR Pass activation', 'Nishiki Market', 'Gion walk'] },
                    { day: 5, title: 'Kyoto Temples', activities: ['Fushimi Inari', 'Kiyomizu-dera', 'Bamboo Grove'] },
                    { day: 6, title: 'Nara & Osaka', activities: ['Nara Park', 'Todaiji', 'Osaka Castle', 'Dotonbori'] },
                    { day: 7, title: 'Hiroshima', activities: ['Peace Park', 'Atomic Dome', 'Ferry to Miyajima'] },
                    { day: 8, title: 'Miyajima Island', activities: ['Itsukushima Shrine', 'Island hiking', 'Return to Osaka'] },
                    { day: 9, title: 'Hakone Hot Springs', activities: ['Traditional ryokan', 'Private onsen', 'Kaiseki dinner'] },
                    { day: 10, title: 'Tokyo Return', activities: ['Shopping in Ginza', 'Free exploration', 'Farewell dinner'] },
                    { day: 11, title: 'Departure', activities: ['Check-out', 'Airport transfer', 'Sayonara!'] }
                ],
                included: ['10 nights accommodation (mix of hotels & ryokan)', '7-day JR Pass', 'Daily breakfast', 'Welcome & farewell dinners', 'All transfers', 'English-speaking guide', 'Entry fees'],
                excluded: ['International flights', 'Travel insurance', 'Lunches & most dinners', 'Personal expenses', 'Optional activities']
            }
        ]
    },
    'philippines': {
        displayName: 'Philippines',
        tagline: 'More Fun in the Philippines - 7,641 Islands of Paradise!',
        description: 'Discover pristine beaches, vibrant coral reefs, stunning rice terraces, and warm Filipino hospitality across this tropical archipelago.',
        heroImage: 'https://images.unsplash.com/photo-1532164728606-7a3403a932c2?q=80&w=2670&auto=format&fit=crop',
        highlights: ['White Sand Beaches', 'Diving & Snorkeling', 'Rice Terraces', 'Island Hopping', 'Filipino Cuisine'],
        bestTime: 'November to April',
        currency: 'Philippine Peso (₱)',
        language: 'Filipino & English',
        packages: [
            {
                id: 'palawan-el-nido',
                title: 'Palawan El Nido Paradise',
                location: 'El Nido • Nacpan Beach • Bacuit Bay',
                image: 'https://images.unsplash.com/photo-1583257547450-f641c3e3d146?q=80&w=2670&auto=format&fit=crop',
                features: ['Island Hopping Tours', 'Secret Lagoons', 'Snorkeling', 'Beach Resorts', 'Limestone Cliffs'],
                price: '$399',
                duration: '5 Days / 4 Nights',
                description: 'Explore the stunning lagoons and limestone cliffs of El Nido, consistently ranked as one of the world\'s best islands.',
                included: ['4 nights beach resort', 'Island hopping tour', 'Snorkel gear', 'Airport transfers'],
                excluded: ['Flights to El Nido', 'Environmental fees', 'Meals', 'Kayak rentals']
            },
            {
                id: 'boracay-beach-escape',
                title: 'Boracay Beach Escape',
                location: 'Boracay • White Beach • Puka Beach',
                image: 'https://images.unsplash.com/photo-1621277277899-e41b82d4edf6?q=80&w=2670&auto=format&fit=crop',
                features: ['White Beach', 'Water Sports', 'Sunset Sailing', 'Beach Parties', 'Island Activities'],
                price: '$349',
                duration: '4 Days / 3 Nights',
                description: 'Experience the world-famous white sand beaches and vibrant nightlife of Boracay Island.',
                included: ['3 nights hotel', 'Daily breakfast', 'Sunset cruise', 'Boat transfers'],
                excluded: ['Flights', 'Water sports', 'Lunch & dinner', 'Environmental fee']
            },
            {
                id: 'banaue-rice-terraces',
                title: 'Banaue Rice Terraces Adventure',
                location: 'Banaue • Batad • Sagada',
                image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?q=80&w=2670&auto=format&fit=crop',
                features: ['UNESCO Rice Terraces', 'Village Trekking', 'Hanging Coffins', 'Cave Exploration', 'Ifugao Culture'],
                price: '$299',
                duration: '4 Days / 3 Nights',
                description: 'Trek through ancient rice terraces and experience the rich cultural heritage of the Cordillera region.',
                included: ['3 nights homestay/inn', 'Trekking guide', 'All transfers', 'Cultural show'],
                excluded: ['Manila flights', 'Meals', 'Tips', 'Personal expenses']
            },
            {
                id: 'cebu-bohol-adventure',
                title: 'Cebu & Bohol Adventure',
                location: 'Cebu • Bohol • Panglao • Oslob',
                image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2670&auto=format&fit=crop',
                features: ['Whale Shark Swimming', 'Chocolate Hills', 'Tarsier Sanctuary', 'Kawasan Falls', 'Beach Hopping'],
                price: '$449',
                duration: '6 Days / 5 Nights',
                description: 'Combine adventure with nature as you swim with whale sharks, visit unique chocolate hills, and relax on pristine beaches.',
                included: ['5 nights accommodation', 'Island tours', 'Ferry tickets', 'Some meals'],
                excluded: ['Flights', 'Whale shark fee', 'Optional activities', 'Travel insurance']
            },
            {
                id: 'siargao-surfing',
                title: 'Siargao Surfing & Island Life',
                location: 'Siargao • Cloud 9 • Sugba Lagoon',
                image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2670&auto=format&fit=crop',
                features: ['Cloud 9 Surf Break', 'Island Hopping', 'Magpupungko Pools', 'Surfing Lessons', 'Beach Vibes'],
                price: '$379',
                duration: '5 Days / 4 Nights',
                description: 'Surf the legendary Cloud 9 break and discover hidden lagoons in the Philippines\' surfing capital.',
                included: ['4 nights hostel/hotel', '2 surfing lessons', 'Island tour', 'Motorcycle rental'],
                excluded: ['Flights', 'Surfboard rental', 'Meals', 'Additional activities']
            },
            {
                id: 'ultimate-philippines',
                title: 'Ultimate Philippines Island Odyssey',
                location: 'Manila • Palawan • Boracay • Bohol • Cebu',
                image: 'https://images.unsplash.com/photo-1584571942559-29106d9c1a4f?q=80&w=2670&auto=format&fit=crop',
                features: ['12 Nights / 13 Days', 'Multi-Island Experience', 'Beach & Culture Mix', 'Water Activities', 'Local Food Tours', 'All Transfers Included'],
                price: '$1,099',
                duration: '13 Days / 12 Nights',
                description: 'The complete Philippine adventure covering the best islands, beaches, and cultural experiences.',
                featured: true,
                included: ['12 nights accommodation', 'All domestic flights', 'Island tours', 'Daily breakfast', 'Most transfers', 'English guide'],
                excluded: ['International flights', 'Travel insurance', 'Lunch & dinner', 'Personal expenses', 'Environmental fees']
            }
        ]
    },
    'nepal': {
        displayName: 'Nepal',
        tagline: 'Roof of the World - Where Mountains Touch the Sky!',
        description: 'Experience the majestic Himalayas, ancient temples, spiritual enlightenment, and warm Nepali hospitality in this mountain kingdom.',
        heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop',
        highlights: ['Mount Everest', 'Himalayan Trekking', 'Buddhist Temples', 'Spiritual Journey', 'Adventure Sports'],
        bestTime: 'October to November, March to April',
        currency: 'Nepali Rupee (NPR)',
        language: 'Nepali',
        packages: [
            {
                id: 'everest-base-camp',
                title: 'Everest Base Camp Trek',
                location: 'Lukla • Namche Bazaar • EBC • Kala Patthar',
                image: 'https://images.unsplash.com/photo-1571898264949-b5f7f40e8f87?q=80&w=2670&auto=format&fit=crop',
                features: ['Everest Views', 'Sherpa Villages', 'Buddhist Monasteries', 'Kala Patthar Sunrise', 'Mountain Lodges'],
                price: '$1,299',
                duration: '14 Days / 13 Nights',
                description: 'Trek to the base of the world\'s highest mountain and experience the legendary Himalayan adventure.',
                included: ['13 nights accommodation', 'All meals during trek', 'Porter service', 'Permits', 'English guide'],
                excluded: ['Kathmandu hotels', 'Flights to Lukla', 'Travel insurance', 'Tips', 'Personal gear']
            },
            {
                id: 'annapurna-circuit',
                title: 'Annapurna Circuit Trek',
                location: 'Pokhara • Manang • Thorong La Pass',
                image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2670&auto=format&fit=crop',
                features: ['Thorong La Pass', 'Diverse Landscapes', 'Hot Springs', 'Mountain Villages', 'Panoramic Views'],
                price: '$999',
                duration: '12 Days / 11 Nights',
                description: 'Complete the classic Annapurna circuit with stunning mountain passes and diverse terrain.',
                included: ['11 nights teahouse', 'All trek meals', 'TIMS & permits', 'Guide & porter', 'Ground transport'],
                excluded: ['Pokhara hotel', 'Kathmandu stays', 'Emergency evacuation', 'Bar bills']
            },
            {
                id: 'kathmandu-culture',
                title: 'Kathmandu Valley Cultural Tour',
                location: 'Kathmandu • Bhaktapur • Patan • Nagarkot',
                image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2670&auto=format&fit=crop',
                features: ['UNESCO Sites', 'Ancient Temples', 'Durbar Squares', 'Himalayan Views', 'Local Crafts'],
                price: '$349',
                duration: '5 Days / 4 Nights',
                description: 'Explore the rich cultural heritage and ancient wonders of the Kathmandu Valley.',
                included: ['4 nights hotel', 'Daily breakfast', 'All site entries', 'Private car', 'English guide'],
                excluded: ['Flights', 'Lunch & dinner', 'Tips', 'Shopping']
            },
            {
                id: 'pokhara-adventure',
                title: 'Pokhara Adventure & Relaxation',
                location: 'Pokhara • Phewa Lake • Sarangkot',
                image: 'https://images.unsplash.com/photo-1558979423-2141ce3e05e6?q=80&w=2670&auto=format&fit=crop',
                features: ['Paragliding', 'Sunrise Views', 'Boating', 'Peace Pagoda', 'Mountain Panorama'],
                price: '$299',
                duration: '4 Days / 3 Nights',
                description: 'Experience adventure sports and serene lake views with the Annapurna range as your backdrop.',
                included: ['3 nights lakeside hotel', 'Breakfast', 'Boating', 'Sunrise trip', 'City tour'],
                excluded: ['Paragliding fee', 'Flights', 'Other meals', 'Optional activities']
            },
            {
                id: 'chitwan-safari',
                title: 'Chitwan Jungle Safari',
                location: 'Chitwan National Park',
                image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2670&auto=format&fit=crop',
                features: ['Wildlife Safari', 'Elephant Spotting', 'Jungle Activities', 'Cultural Dance', 'Nature Walks'],
                price: '$279',
                duration: '3 Days / 2 Nights',
                description: 'Discover Nepal\'s wildlife in this UNESCO World Heritage jungle with rhinos, tigers, and exotic birds.',
                included: ['2 nights jungle lodge', 'All meals', 'Safari activities', 'Cultural program', 'Park entry'],
                excluded: ['Transport to Chitwan', 'Tips', 'Drinks', 'Personal expenses']
            },
            {
                id: 'nepal-grand-adventure',
                title: 'Nepal Grand Adventure',
                location: 'Kathmandu • Pokhara • Chitwan • Nagarkot',
                image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2670&auto=format&fit=crop',
                features: ['10 Nights / 11 Days', 'Culture & Nature Mix', 'Himalayan Views', 'Jungle Safari', 'Mountain Flight', 'Spiritual Sites'],
                price: '$899',
                duration: '11 Days / 10 Nights',
                description: 'Experience the best of Nepal - culture, mountains, and wildlife in one comprehensive journey.',
                featured: true,
                included: ['10 nights accommodation', 'All breakfasts', 'Some lunches/dinners', 'All tours & activities', 'Domestic transport', 'English guide'],
                excluded: ['International flights', 'Travel insurance', 'Some meals', 'Tips', 'Personal expenses']
            }
        ]
    },
    'sri-lanka': {
        displayName: 'Sri Lanka',
        tagline: 'The Pearl of the Indian Ocean!',
        description: 'Discover ancient ruins, lush tea plantations, pristine beaches, incredible wildlife, and rich cultural heritage in this island paradise.',
        heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop',
        highlights: ['Ancient Temples', 'Tea Plantations', 'Safari', 'Beaches', 'Colonial Heritage'],
        bestTime: 'December to March, July to September',
        currency: 'Sri Lankan Rupee (LKR)',
        language: 'Sinhala & Tamil',
        packages: [
            {
                id: 'cultural-triangle',
                title: 'Cultural Triangle Explorer',
                location: 'Anuradhapura • Polonnaruwa • Sigiriya • Dambulla',
                image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2670&auto=format&fit=crop',
                features: ['Sigiriya Rock Fortress', 'Ancient Ruins', 'Cave Temples', 'UNESCO Sites', 'Village Tours'],
                price: '$449',
                duration: '5 Days / 4 Nights',
                description: 'Journey through Sri Lanka\'s ancient kingdoms and climb the legendary Sigiriya Rock.',
                included: ['4 nights hotels', 'Daily breakfast', 'Site entries', 'Private vehicle', 'English guide'],
                excluded: ['Flights', 'Lunch & dinner', 'Tips', 'Personal expenses']
            },
            {
                id: 'hill-country-tea',
                title: 'Hill Country & Tea Plantations',
                location: 'Kandy • Nuwara Eliya • Ella',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2670&auto=format&fit=crop',
                features: ['Tea Factory Visits', 'Scenic Train Ride', 'Nine Arch Bridge', 'Waterfalls', 'Cool Climate'],
                price: '$399',
                duration: '4 Days / 3 Nights',
                description: 'Experience the misty hills, rolling tea estates, and scenic train rides of Sri Lanka\'s highlands.',
                included: ['3 nights accommodation', 'Breakfast', 'Train tickets', 'Tea factory tour', 'Transport'],
                excluded: ['Other meals', 'Optional activities', 'Tips', 'Travel insurance']
            },
            {
                id: 'yala-safari',
                title: 'Yala Wildlife Safari',
                location: 'Yala National Park • Tissamaharama',
                image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=2670&auto=format&fit=crop',
                features: ['Leopard Spotting', 'Elephant Herds', 'Safari Jeep Tours', 'Bird Watching', 'Beach Nearby'],
                price: '$329',
                duration: '3 Days / 2 Nights',
                description: 'Go on safari in Yala, home to one of the highest leopard densities in the world.',
                included: ['2 nights safari lodge', 'All meals', '2 safari drives', 'Park fees', 'Naturalist guide'],
                excluded: ['Transport to Yala', 'Drinks', 'Tips', 'Additional safaris']
            },
            {
                id: 'south-coast-beaches',
                title: 'South Coast Beach Paradise',
                location: 'Bentota • Hikkaduwa • Unawatuna • Galle',
                image: 'https://images.unsplash.com/photo-1565530916216-bdedacdfa657?q=80&w=2670&auto=format&fit=crop',
                features: ['Beach Resorts', 'Water Sports', 'Galle Fort', 'Snorkeling', 'Turtle Hatchery'],
                price: '$369',
                duration: '5 Days / 4 Nights',
                description: 'Relax on golden beaches and explore the historic Galle Fort on Sri Lanka\'s stunning south coast.',
                included: ['4 nights beach resort', 'Daily breakfast', 'Galle tour', 'Turtle hatchery visit', 'Transfers'],
                excluded: ['Water sports', 'Lunch & dinner', 'Tips', 'Optional tours']
            },
            {
                id: 'adam-peak-pilgrimage',
                title: 'Adam\'s Peak Pilgrimage Trek',
                location: 'Adam\'s Peak • Hatton',
                image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=2670&auto=format&fit=crop',
                features: ['Sacred Mountain Climb', 'Sunrise Views', 'Pilgrimage Experience', 'Tea Country', 'Spiritual Journey'],
                price: '$249',
                duration: '2 Days / 1 Night',
                description: 'Climb the sacred Adam\'s Peak for a breathtaking sunrise and spiritual experience.',
                included: ['1 night guesthouse', 'Meals', 'Guide', 'Transport from Hatton', 'Temple entry'],
                excluded: ['Colombo transport', 'Personal expenses', 'Tips', 'Travel insurance']
            },
            {
                id: 'complete-sri-lanka',
                title: 'Complete Sri Lanka Experience',
                location: 'Colombo • Sigiriya • Kandy • Ella • Yala • Galle',
                image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=2670&auto=format&fit=crop',
                features: ['9 Nights / 10 Days', 'Culture & Wildlife', 'Scenic Train Journey', 'Beach Relaxation', 'Tea Plantations', 'All Highlights'],
                price: '$999',
                duration: '10 Days / 9 Nights',
                description: 'The ultimate Sri Lankan adventure covering ancient sites, tea country, wildlife safaris, and beach relaxation.',
                featured: true,
                included: ['9 nights accommodation', 'Daily breakfast', '3 dinners', 'Train tickets', 'All site entries', 'Safari drives', 'Private vehicle', 'English guide'],
                excluded: ['International flights', 'Travel insurance', 'Most lunches/dinners', 'Tips', 'Personal expenses']
            }
        ]
    },
    'india': {
        displayName: 'India',
        tagline: 'Incredible India - A Land of Colors, Culture & Contrasts!',
        description: 'Experience ancient monuments, vibrant festivals, diverse landscapes, spiritual traditions, and world-renowned cuisine in this vast subcontinent.',
        heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2671&auto=format&fit=crop',
        highlights: ['Taj Mahal', 'Palaces of Rajasthan', 'Spiritual Varanasi', 'Kerala Backwaters', 'Himalayan Mountains'],
        bestTime: 'October to March',
        currency: 'Indian Rupee (₹)',
        language: 'Hindi & English (plus 21 other official languages)',
        packages: [
            {
                id: 'golden-triangle',
                title: 'Golden Triangle Classic',
                location: 'Delhi • Agra • Jaipur',
                image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2671&auto=format&fit=crop',
                features: ['Taj Mahal', 'Amber Fort', 'Red Fort', 'City Palace', 'Local Markets'],
                price: '$449',
                duration: '6 Days / 5 Nights',
                description: 'Discover India\'s most iconic route featuring the magnificent Taj Mahal and royal palaces.',
                included: ['5 nights hotels', 'Daily breakfast', 'All transfers', 'Monument entries', 'English guide'],
                excluded: ['Flights', 'Lunch & dinner', 'Tips', 'Camera fees']
            },
            {
                id: 'rajasthan-royal',
                title: 'Rajasthan Royal Heritage',
                location: 'Jaipur • Udaipur • Jodhpur • Jaisalmer',
                image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2670&auto=format&fit=crop',
                features: ['Desert Safari', 'Palace Hotels', 'Camel Rides', 'Blue City', 'Lake Palace'],
                price: '$699',
                duration: '8 Days / 7 Nights',
                description: 'Journey through the desert kingdoms with magnificent forts, palaces, and vibrant culture.',
                included: ['7 nights accommodation', 'Daily breakfast', 'Camel safari', 'All transfers', 'Site entries', 'Guide'],
                excluded: ['Domestic flights', 'Meals not mentioned', 'Tips', 'Optional activities']
            },
            {
                id: 'kerala-backwaters',
                title: 'Kerala Backwaters & Beaches',
                location: 'Kochi • Alleppey • Munnar • Kovalam',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2662&auto=format&fit=crop',
                features: ['Houseboat Cruise', 'Tea Plantations', 'Ayurvedic Massage', 'Beach Resorts', 'Traditional Dance'],
                price: '$549',
                duration: '7 Days / 6 Nights',
                description: 'Experience the serene backwaters, lush hills, and pristine beaches of "God\'s Own Country".',
                included: ['6 nights accommodation', 'Houseboat stay', 'Daily breakfast', 'All transfers', 'Kathakali show'],
                excluded: ['Flights', 'Lunch & dinner', 'Ayurvedic treatments', 'Tips']
            },
            {
                id: 'varanasi-spiritual',
                title: 'Varanasi Spiritual Journey',
                location: 'Varanasi • Sarnath',
                image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2676&auto=format&fit=crop',
                features: ['Ganges Aarti', 'Boat Ride', 'Temple Tours', 'Buddhist Sites', 'Yoga Sessions'],
                price: '$299',
                duration: '4 Days / 3 Nights',
                description: 'Witness ancient rituals on the ghats of the holy Ganges in India\'s spiritual heart.',
                included: ['3 nights hotel', 'Daily breakfast', 'Boat rides', 'Temple visits', 'Sarnath tour', 'Guide'],
                excluded: ['Flights', 'Other meals', 'Donations', 'Tips']
            },
            {
                id: 'goa-beach-party',
                title: 'Goa Beach & Party Experience',
                location: 'North Goa • South Goa • Panaji',
                image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2674&auto=format&fit=crop',
                features: ['Beach Clubs', 'Water Sports', 'Portuguese Heritage', 'Seafood', 'Nightlife'],
                price: '$399',
                duration: '5 Days / 4 Nights',
                description: 'Relax on golden beaches, party at beach clubs, and explore Portuguese colonial heritage.',
                included: ['4 nights beach resort', 'Daily breakfast', 'Water sports (1 session)', 'Old Goa tour', 'Airport transfers'],
                excluded: ['Flights', 'Lunch & dinner', 'Club entries', 'Additional water sports']
            },
            {
                id: 'incredible-india-grand',
                title: 'Incredible India Grand Tour',
                location: 'Delhi • Agra • Jaipur • Varanasi • Kerala',
                image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2676&auto=format&fit=crop',
                features: ['15 Nights / 16 Days', 'North to South Journey', 'Taj Mahal', 'Spiritual Varanasi', 'Backwater Cruise', 'Palace Hotels', 'Cultural Shows'],
                price: '$1,599',
                duration: '16 Days / 15 Nights',
                description: 'The ultimate Indian odyssey covering iconic monuments, spiritual sites, royal heritage, and tropical paradise.',
                featured: true,
                included: ['15 nights accommodation', '2 domestic flights', 'Daily breakfast', '8 lunches/dinners', 'Houseboat cruise', 'All monument entries', 'Private vehicle', 'English guide', 'Cultural performances'],
                excluded: ['International flights', 'Travel insurance', 'Some meals', 'Tips', 'Personal expenses', 'Camera fees']
            }
        ]
    },
    'china': {
        displayName: 'China',
        tagline: 'Ancient Wonders Meet Modern Marvels!',
        description: 'Explore the Great Wall, imperial palaces, terracotta warriors, modern megacities, and diverse landscapes across the world\'s most populous nation.',
        heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2670&auto=format&fit=crop',
        highlights: ['Great Wall', 'Forbidden City', 'Terracotta Army', 'Modern Shanghai', 'Li River Cruises'],
        bestTime: 'April to May, September to October',
        currency: 'Chinese Yuan (¥)',
        language: 'Mandarin Chinese',
        packages: [
            {
                id: 'beijing-xian',
                title: 'Beijing & Xi\'an Imperial Journey',
                location: 'Beijing • Xi\'an • Great Wall',
                image: 'https://images.unsplash.com/photo-1570519801137-4e30e5f86c2c?q=80&w=2670&auto=format&fit=crop',
                features: ['Great Wall', 'Forbidden City', 'Terracotta Warriors', 'Temple of Heaven', 'Peking Duck Dinner'],
                price: '$599',
                duration: '6 Days / 5 Nights',
                description: 'Experience China\'s ancient imperial capitals and witness some of humanity\'s greatest achievements.',
                included: ['5 nights hotels', 'Daily breakfast', 'Bullet train', 'All site entries', 'English guide', 'Some meals'],
                excluded: ['International flights', 'Lunch & dinner (mostly)', 'Tips', 'Personal expenses']
            },
            {
                id: 'shanghai-modern',
                title: 'Shanghai Modern Metropolis',
                location: 'Shanghai • Suzhou • Hangzhou',
                image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?q=80&w=2670&auto=format&fit=crop',
                features: ['The Bund', 'Yu Garden', 'Maglev Train', 'Water Towns', 'West Lake'],
                price: '$499',
                duration: '5 Days / 4 Nights',
                description: 'Discover futuristic Shanghai and nearby classical gardens and water towns.',
                included: ['4 nights hotels', 'Daily breakfast', 'Train tickets', 'City tours', 'Maglev ride', 'Guide'],
                excluded: ['Flights', 'Lunch & dinner', 'Tips', 'Shopping']
            },
            {
                id: 'guilin-yangshuo',
                title: 'Guilin & Yangshuo Scenic Beauty',
                location: 'Guilin • Yangshuo • Li River',
                image: 'https://images.unsplash.com/photo-1582706675683-b1d18c9a5d6f?q=80&w=2670&auto=format&fit=crop',
                features: ['Li River Cruise', 'Karst Mountains', 'Bamboo Rafting', 'Countryside Cycling', 'Light Show'],
                price: '$449',
                duration: '5 Days / 4 Nights',
                description: 'Float through stunning karst landscapes that have inspired Chinese artists for centuries.',
                included: ['4 nights accommodation', 'Daily breakfast', 'River cruise', 'Countryside tour', 'Transfers', 'Guide'],
                excluded: ['Flights to Guilin', 'Meals not mentioned', 'Optional activities', 'Tips']
            },
            {
                id: 'chengdu-pandas',
                title: 'Chengdu Pandas & Sichuan Cuisine',
                location: 'Chengdu • Leshan • Emei Mountain',
                image: 'https://images.unsplash.com/photo-1582237673412-23fcb19e1e0e?q=80&w=2670&auto=format&fit=crop',
                features: ['Panda Base Visit', 'Giant Buddha', 'Spicy Food Tour', 'Hot Pot Dinner', 'Tea House Culture'],
                price: '$399',
                duration: '4 Days / 3 Nights',
                description: 'Meet adorable giant pandas and savor the famous spicy cuisine of Sichuan province.',
                included: ['3 nights hotel', 'Daily breakfast', 'Panda base entry', 'Leshan tour', 'Hot pot dinner', 'Guide'],
                excluded: ['Flights', 'Most meals', 'Tips', 'Optional panda volunteer']
            },
            {
                id: 'hong-kong-macau',
                title: 'Hong Kong & Macau Getaway',
                location: 'Hong Kong • Macau',
                image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=2670&auto=format&fit=crop',
                features: ['Victoria Peak', 'Star Ferry', 'Macau Casinos', 'Dim Sum', 'Shopping'],
                price: '$549',
                duration: '5 Days / 4 Nights',
                description: 'Experience the unique blend of East meets West in these dynamic Special Administrative Regions.',
                included: ['4 nights hotel', 'Daily breakfast', 'Peak tram', 'Ferry to Macau', 'City tours', 'Dim sum meal'],
                excluded: ['Flights', 'Most meals', 'Casino money', 'Shopping', 'Tips']
            },
            {
                id: 'china-grand-discovery',
                title: 'China Grand Discovery',
                location: 'Beijing • Xi\'an • Guilin • Shanghai • Hong Kong',
                image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=2670&auto=format&fit=crop',
                features: ['14 Nights / 15 Days', 'Ancient to Modern', 'Great Wall', 'Terracotta Army', 'Li River Cruise', 'Bullet Trains', 'Cultural Shows'],
                price: '$1,799',
                duration: '15 Days / 14 Nights',
                description: 'The comprehensive China journey from ancient wonders to modern marvels across five iconic destinations.',
                featured: true,
                included: ['14 nights accommodation', '4 domestic flights', '2 bullet trains', 'Daily breakfast', '10 lunches/dinners', 'All major site entries', 'English-speaking guide', 'Cultural performances', 'All transfers'],
                excluded: ['International flights', 'Travel insurance', 'Some meals', 'Tips', 'Personal expenses', 'Optional activities']
            }
        ]
    },
    // Existing countries
    'thailand': {
        displayName: 'Thailand',
        tagline: 'Land of Smiles & Endless Adventures!',
        description: 'Experience golden temples, pristine beaches, vibrant cities, delicious cuisine, and warm hospitality in Southeast Asia\'s most beloved destination.',
        heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2659&auto=format&fit=crop',
        highlights: ['Bangkok Temples', 'Phuket Beaches', 'Thai Cuisine', 'Elephant Sanctuaries', 'Island Hopping'],
        bestTime: 'November to February',
        currency: 'Thai Baht (฿)',
        language: 'Thai',
        packages: [
            {
                id: 'bangkok-temples',
                title: 'Bangkok City & Temples',
                location: 'Bangkok • Ayutthaya',
                image: 'https://images.unsplash.com/photo-1563492065213-f6de1a1e50b7?q=80&w=2574&auto=format&fit=crop',
                features: ['Grand Palace', 'Floating Markets', 'Street Food Tours'],
                price: '$279',
                duration: '4 Days / 3 Nights'
            },
            {
                id: 'phuket-beach',
                title: 'Phuket Beach Paradise',
                location: 'Phuket • Patong Beach',
                image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2670&auto=format&fit=crop',
                features: ['Beach Resorts', 'Water Sports', 'Island Hopping'],
                price: '$329',
                duration: '5 Days / 4 Nights'
            },
            {
                id: 'chiang-mai-culture',
                title: 'Chiang Mai Cultural Journey',
                location: 'Chiang Mai • Chiang Rai',
                image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=2670&auto=format&fit=crop',
                features: ['Elephant Sanctuary', 'Night Bazaar', 'Mountain Temples'],
                price: '$349',
                duration: '5 Days / 4 Nights'
            },
            {
                id: 'krabi-railay',
                title: 'Krabi & Railay Beach Escape',
                location: 'Krabi • Railay Beach',
                image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2600&auto=format&fit=crop',
                features: ['Rock Climbing', 'Kayaking', 'Sunset Cruises'],
                price: '$369',
                duration: '4 Days / 3 Nights'
            },
            {
                id: 'phi-phi-islands',
                title: 'Phi Phi Islands Adventure',
                location: 'Phi Phi Islands • Maya Bay',
                image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=2670&auto=format&fit=crop',
                features: ['Snorkeling', 'Beach Parties', 'Island Tours'],
                price: '$399',
                duration: '4 Days / 3 Nights'
            },
            {
                id: 'grand-thailand',
                title: 'Grand Thailand Experience',
                location: 'Bangkok • Phuket • Chiang Mai',
                image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2670&auto=format&fit=crop',
                features: ['7 Nights / 8 Days', 'All Major Cities', 'Cultural & Beach Mix', 'Thai Cooking Class'],
                price: '$599',
                duration: '8 Days / 7 Nights',
                featured: true
            }
        ]
    },
    'vietnam': {
        displayName: 'Vietnam',
        tagline: 'Your Adventure Awaits!',
        description: 'Discover stunning natural beauty, rich history, delicious cuisine, and friendly people from north to south.',
        heroImage: 'https://images.unsplash.com/photo-1528127220168-9a3114ed41f8?q=80&w=2574&auto=format&fit=crop',
        highlights: ['Halong Bay', 'Hoi An Ancient Town', 'Mekong Delta', 'Vietnamese Cuisine', 'Motorbike Culture'],
        bestTime: 'February to April, August to October',
        currency: 'Vietnamese Dong (₫)',
        language: 'Vietnamese',
        packages: [
            {
                id: 'hanoi-halong',
                title: 'Hanoi & Halong Bay Adventure',
                location: 'Hanoi • Halong Bay',
                image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2670&auto=format&fit=crop',
                features: ['City Tours', 'Bay Cruise', 'Cultural Sites'],
                price: '$299',
                duration: '4 Days / 3 Nights'
            },
            {
                id: 'saigon-mekong',
                title: 'Saigon & Mekong Delta Escape',
                location: 'Ho Chi Minh City • Mekong Delta',
                image: 'https://images.unsplash.com/photo-1557750255-c76072a7bb19?q=80&w=2574&auto=format&fit=crop',
                features: ['River Tours', 'Cu Chi Tunnels', 'Local Markets'],
                price: '$349',
                duration: '4 Days / 3 Nights'
            },
            {
                id: 'hoi-an-ancient',
                title: 'Hoi An Ancient Town Experience',
                location: 'Hoi An • Da Nang',
                image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2670&auto=format&fit=crop',
                features: ['Ancient Town', 'Lantern Festival', 'Beach Resorts'],
                price: '$279',
                duration: '4 Days / 3 Nights'
            },
            {
                id: 'sapa-trekking',
                title: 'Sapa Mountain Trekking',
                location: 'Sapa • Lao Cai',
                image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2670&auto=format&fit=crop',
                features: ['Mountain Trekking', 'Rice Terraces', 'Local Villages'],
                price: '$399',
                duration: '5 Days / 4 Nights'
            },
            {
                id: 'explore-vietnam',
                title: 'Explore Iconic Vietnam',
                location: 'Hanoi • Hoi An • Sapa',
                image: 'https://images.unsplash.com/photo-1506038634487-60a6989a72af?q=80&w=2670&auto=format&fit=crop',
                features: ['6 Nights / 7 Days', 'Halong Bay Cruise', 'Mountain Trekking in Sapa'],
                price: '$499',
                duration: '7 Days / 6 Nights',
                featured: true
            }
        ]
    },
    // Default fallback for other countries
    'default': {
        displayName: 'Destination',
        tagline: 'Explore the World!',
        description: 'Discover amazing destinations and create unforgettable memories.',
        heroImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2670&auto=format&fit=crop',
        packages: [
            {
                id: 'city-explorer',
                title: 'City Explorer Package',
                location: 'Major Cities',
                image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2644&auto=format&fit=crop',
                features: ['City Tours', 'Cultural Sites', 'Local Cuisine'],
                price: '$299'
            },
            {
                id: 'nature-adventure',
                title: 'Nature & Adventure',
                location: 'National Parks',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop',
                features: ['Hiking', 'Wildlife', 'Scenic Views'],
                price: '$349'
            },
            {
                id: 'cultural-heritage',
                title: 'Cultural Heritage Tour',
                location: 'Historic Sites',
                image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop',
                features: ['Museums', 'Monuments', 'Local Traditions'],
                price: '$279'
            }
        ]
    }
};
