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
    coordinates: [number, number]; // [Longitude, Latitude] for D3 rotation
    keywords?: string[]; // For search matching (e.g. cities not in packages, common misspellings)
}

export type DestinationsData = Record<string, CountryData>;

// Main destinations data
export const destinationsData: DestinationsData = {
    'japan': {
        displayName: 'Japan',
        tagline: 'Where Ancient Tradition Meets Modern Innovation!',
        description: 'Experience the perfect blend of ancient temples, cutting-edge technology, exquisite cuisine, and breathtaking natural beauty in the Land of the Rising Sun.',
<<<<<<< HEAD
        heroImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200&auto=format&fit=crop',
=======
        heroImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        highlights: ['Cherry Blossoms', 'Mount Fuji', 'Ancient Temples', 'Bullet Trains', 'Sushi & Ramen'],
        bestTime: 'March to May, September to November',
        currency: 'Japanese Yen (¥)',
        language: 'Japanese',
        coordinates: [138.2529, 36.2048],
        keywords: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima', 'Hokkaido', 'Nara', 'Fuji', 'Sapporo'],
        packages: [
            {
                id: 'tokyo-modern-adventure',
                title: 'Tokyo Modern Adventure',
                location: 'Tokyo • Shibuya • Shinjuku • Akihabara',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1548481899-ad0be729a2d6?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1548481899-ad0be729a2d6?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
        heroImage: 'https://images.unsplash.com/photo-1532164728606-7a3403a932c2?q=80&w=1200&auto=format&fit=crop',
=======
        heroImage: 'https://images.unsplash.com/photo-1532164728606-7a3403a932c2?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        highlights: ['White Sand Beaches', 'Diving & Snorkeling', 'Rice Terraces', 'Island Hopping', 'Filipino Cuisine'],
        bestTime: 'November to April',
        currency: 'Philippine Peso (₱)',
        language: 'Filipino & English',
        coordinates: [121.7740, 12.8797],
        keywords: ['Manila', 'Boracay', 'Palawan', 'Cebu', 'El Nido', 'Siargao', 'Bohol'],
        packages: [
            {
                id: 'palawan-el-nido',
                title: 'Palawan El Nido Paradise',
                location: 'El Nido • Nacpan Beach • Bacuit Bay',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1583257547450-f641c3e3d146?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1583257547450-f641c3e3d146?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1621277277899-e41b82d4edf6?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1621277277899-e41b82d4edf6?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1584571942559-29106d9c1a4f?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1584571942559-29106d9c1a4f?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
        heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop',
=======
        heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        highlights: ['Mount Everest', 'Himalayan Trekking', 'Buddhist Temples', 'Spiritual Journey', 'Adventure Sports'],
        bestTime: 'October to November, March to April',
        currency: 'Nepali Rupee (NPR)',
        language: 'Nepali',
        coordinates: [84.1240, 28.3949],
        packages: [
            {
                id: 'everest-base-camp',
                title: 'Everest Base Camp Trek',
                location: 'Lukla • Namche Bazaar • EBC • Kala Patthar',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1571898264949-b5f7f40e8f87?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1571898264949-b5f7f40e8f87?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1558979423-2141ce3e05e6?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1558979423-2141ce3e05e6?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
        heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
=======
        heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        highlights: ['Ancient Temples', 'Tea Plantations', 'Safari', 'Beaches', 'Colonial Heritage'],
        bestTime: 'December to March, July to September',
        currency: 'Sri Lankan Rupee (LKR)',
        language: 'Sinhala & Tamil',
        coordinates: [80.7718, 7.8731],
        packages: [
            {
                id: 'cultural-triangle',
                title: 'Cultural Triangle Explorer',
                location: 'Anuradhapura • Polonnaruwa • Sigiriya • Dambulla',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1565530916216-bdedacdfa657?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1565530916216-bdedacdfa657?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
        coordinates: [78.9629, 20.5937],
        keywords: ['Delhi', 'Mumbai', 'Bangalore', 'Goa', 'Agra', 'Jaipur', 'Varanasi', 'Kolkata', 'Chennai', 'Kerala', 'Taj Mahal', 'Kashmir', 'Manali', 'Simla'],
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
                id: 'himalayan-triangle',
                title: 'Himalayan Triangle Adventure',
                location: 'Kashmir • Manali • Simla',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                features: ['Snowy Peaks', 'Dal Lake Shikara', 'Rohtang Pass', 'Mall Road', 'Hill Stations'],
                price: '$599',
                duration: '7 Days / 6 Nights',
                description: 'Experience the breathtaking beauty of North India connecting the paradise of Kashmir with the charm of Manali and Simla.',
                included: ['6 nights mountain resorts', 'Daily breakfast & dinner', 'Private vehicle', 'Shikara ride', 'Sightseeing'],
                excluded: ['Flights', 'Lunch', 'Adventure sports activities', 'Tips']
            },
            {
                id: 'rajasthan-royal',
                title: 'Rajasthan Royal Heritage',
                location: 'Jaipur • Udaipur • Jodhpur • Jaisalmer',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
        heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop',
=======
        heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        highlights: ['Great Wall', 'Forbidden City', 'Terracotta Army', 'Modern Shanghai', 'Li River Cruises'],
        bestTime: 'April to May, September to October',
        currency: 'Chinese Yuan (¥)',
        language: 'Mandarin Chinese',
        coordinates: [104.1954, 35.8617],
        packages: [
            {
                id: 'beijing-xian',
                title: 'Beijing & Xi\'an Imperial Journey',
                location: 'Beijing • Xi\'an • Great Wall',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1570519801137-4e30e5f86c2c?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1570519801137-4e30e5f86c2c?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1582706675683-b1d18c9a5d6f?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1582706675683-b1d18c9a5d6f?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1582237673412-23fcb19e1e0e?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1582237673412-23fcb19e1e0e?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
        coordinates: [100.9925, 15.8700],
        keywords: ['Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya', 'Krabi', 'Phi Phi', 'Koh Samui', 'Patau'], // Added 'Patau' as user example of misspelling/alias
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                features: ['Beach Resorts', 'Water Sports', 'Island Hopping'],
                price: '$329',
                duration: '5 Days / 4 Nights'
            },
            {
                id: 'chiang-mai-culture',
                title: 'Chiang Mai Cultural Journey',
                location: 'Chiang Mai • Chiang Rai',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                features: ['Snorkeling', 'Beach Parties', 'Island Tours'],
                price: '$399',
                duration: '4 Days / 3 Nights'
            },
            {
                id: 'grand-thailand',
                title: 'Grand Thailand Experience',
                location: 'Bangkok • Phuket • Chiang Mai',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
        coordinates: [108.2772, 14.0583],
        packages: [
            {
                id: 'hanoi-halong',
                title: 'Hanoi & Halong Bay Adventure',
                location: 'Hanoi • Halong Bay',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                features: ['Ancient Town', 'Lantern Festival', 'Beach Resorts'],
                price: '$279',
                duration: '4 Days / 3 Nights'
            },
            {
                id: 'sapa-trekking',
                title: 'Sapa Mountain Trekking',
                location: 'Sapa • Lao Cai',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                features: ['Mountain Trekking', 'Rice Terraces', 'Local Villages'],
                price: '$399',
                duration: '5 Days / 4 Nights'
            },
            {
                id: 'explore-vietnam',
                title: 'Explore Iconic Vietnam',
                location: 'Hanoi • Hoi An • Sapa',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1506038634487-60a6989a72af?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1506038634487-60a6989a72af?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
        heroImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop',
=======
        heroImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        coordinates: [0, 0],
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
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
    },
    'united-arab-emirates': {
        displayName: 'Dubai',
        tagline: 'The City of the Future!',
        description: 'Experience the height of luxury, futuristic architecture, and desert adventures in Dubai.',
<<<<<<< HEAD
        heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea904ac66de?q=80&w=1200&auto=format&fit=crop',
=======
        heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea904ac66de?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        highlights: ['Burj Khalifa', 'Desert Safari', 'Palm Jumeirah', 'Luxury Shopping', 'Future Museum'],
        coordinates: [55.2708, 25.2048],
        keywords: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Emirates', 'United Arab Emirates'],
        packages: [
            {
                id: 'dubai-luxury',
                title: 'Dubai Luxury Escape',
                location: 'Dubai • Desert',
                image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2574&auto=format&fit=crop',
                features: ['Burj Khalifa View', 'Yacht Tour', 'Desert Glamping'],
                price: '$899',
                duration: '5 Days / 4 Nights'
            }
        ]
    },
    'south-korea': {
        displayName: 'South Korea',
        tagline: 'Land of Morning Calm',
        description: 'Discover the dynamic blend of ancient palaces, modern pop culture, and delicious cuisine.',
<<<<<<< HEAD
        heroImage: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=1200&auto=format&fit=crop',
=======
        heroImage: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        highlights: ['Seoul Palaces', 'Street Food', 'Jeju Island', 'K-Pop Culture', 'Shopping'],
        coordinates: [127.7669, 35.9078],
        packages: [
            {
                id: 'seoul-adventure',
                title: 'Seoul Adventure & Culture',
                location: 'Seoul • Busan',
                image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=2574&auto=format&fit=crop',
                features: ['Gyeongbokgung Palace', 'Myeongdong Shopping', 'Hanok Village'],
                price: '$699',
                duration: '6 Days / 5 Nights'
            }
        ]
    },
    'europe': {
        displayName: 'Europe',
        tagline: 'The Old World Awaits',
        description: 'Journey through the history, art, and romance of Europe\'s most iconic cities.',
        heroImage: 'https://i.ibb.co/CpDFwYLv/unnamed.webp',
        highlights: ['Eiffel Tower', 'Colosseum', 'Swiss Alps', 'Amsterdam Canals', 'Santorini'],
        coordinates: [10.4515, 51.1657],
        packages: [
            {
                id: 'europe-hop',
                title: 'Grand Europe Hop',
                location: 'Paris • Rome • Venice',
                image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2673&auto=format&fit=crop',
                features: ['Eiffel Tower', 'Colosseum Tour', 'Gondola Ride'],
                price: '$1,299',
                duration: '10 Days / 9 Nights'
            }
        ]
    },
    'united-kingdom': {
        displayName: 'United Kingdom',
        tagline: 'History, Culture & Crown Jewels',
        description: 'Explore the historic streets of London, the rugged highlands of Scotland, and the charming countryside of England.',
<<<<<<< HEAD
        heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
=======
        heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        highlights: ['Big Ben', 'Tower of London', 'Scottish Highlands', 'Stonehenge', 'Edinburgh Castle'],
        bestTime: 'May to September',
        currency: 'British Pound (£)',
        language: 'English',
        coordinates: [-3.4359, 55.3781],
        keywords: ['London', 'England', 'Scotland', 'Wales', 'Edinburgh', 'Manchester', 'UK', 'Britain'],
        packages: [
            {
                id: 'london-royal',
                title: 'Royal London Experience',
                location: 'London • Windsor',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                features: ['Buckingham Palace', 'Tower Bridge', 'Windsor Castle'],
                price: '$699',
                duration: '5 Days / 4 Nights'
            }
        ]
    },
    'france': {
        displayName: 'France',
        tagline: 'Romance, Art & Gastronomy',
        description: 'Discover the romance of Paris, the lavender fields of Provence, and the glamour of the French Riviera.',
        heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2673&auto=format&fit=crop',
        highlights: ['Eiffel Tower', 'Louvre Museum', 'Versailles', 'Riviera Beaches', 'Wine Regions'],
        bestTime: 'April to June, September to November',
        currency: 'Euro (€)',
        language: 'French',
        coordinates: [2.2137, 46.2276],
        keywords: ['Paris', 'Nice', 'Lyon', 'Marseille', 'Riviera', 'Eiffel Tower', 'Louvre'],
        packages: [
            {
                id: 'paris-romance',
                title: 'Parisian Romance',
                location: 'Paris',
                image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2673&auto=format&fit=crop',
                features: ['Seine Cruise', 'Eiffel Tower Dinner', 'Louvre Tour'],
                price: '$799',
                duration: '4 Days / 3 Nights'
            }
        ]
    },
    'italy': {
        displayName: 'Italy',
        tagline: 'La Dolce Vita!',
        description: 'Immerse yourself in the art, history, and culinary masterpieces of Italy.',
        heroImage: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2666&auto=format&fit=crop',
        highlights: ['Colosseum', 'Venice Canals', 'Florence Art', 'Amalfi Coast', 'Vatican City'],
        bestTime: 'April to June, September to October',
        currency: 'Euro (€)',
        language: 'Italian',
        coordinates: [12.5674, 41.8719],
        keywords: ['Rome', 'Venice', 'Florence', 'Milan', 'Naples', 'Amalfi', 'Tuscany'],
        packages: [
            {
                id: 'italian-classics',
                title: 'Italian Classics',
                location: 'Rome • Florence • Venice',
                image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2666&auto=format&fit=crop',
                features: ['Colosseum', 'Uffizi Gallery', 'Gondola Ride'],
                price: '$999',
                duration: '7 Days / 6 Nights'
            }
        ]
    },
    'united-states': {
        displayName: 'United States',
        tagline: 'The Land of Opportunity',
        description: 'From bustling metropolises to stunning national parks, experience the diversity of the USA.',
        heroImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2699&auto=format&fit=crop',
        highlights: ['Times Square', 'Grand Canyon', 'Hollywood', 'Statue of Liberty', 'Las Vegas Strip'],
        bestTime: 'All Year Round',
        currency: 'US Dollar ($)',
        language: 'English',
        coordinates: [-95.7129, 37.0902],
        keywords: ['USA', 'New York', 'NYC', 'California', 'Los Angeles', 'San Francisco', 'Las Vegas', 'Florida', 'Hawaii'],
        packages: [
            {
                id: 'nyc-lights',
                title: 'New York City Lights',
                location: 'New York City',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                features: ['Broadway Show', 'Empire State Building', 'Central Park'],
                price: '$899',
                duration: '5 Days / 4 Nights'
            }
        ]
    },
    'australia': {
        displayName: 'Australia',
        tagline: 'Land Down Under',
        description: 'Discover the Great Barrier Reef, iconic Opera House, and vast outback adventures.',
<<<<<<< HEAD
        heroImage: 'https://images.unsplash.com/photo-1523482580672-01e6f06378c5?q=80&w=1200&auto=format&fit=crop',
=======
        heroImage: 'https://images.unsplash.com/photo-1523482580672-01e6f06378c5?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        highlights: ['Opera House', 'Great Barrier Reef', 'Uluru', 'Bondi Beach', 'Kangaroos'],
        bestTime: 'September to November, March to May',
        currency: 'Australian Dollar (A$)',
        language: 'English',
        coordinates: [133.7751, -25.2744],
        keywords: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Great Barrier Reef', 'Outback'],
        packages: [
            {
                id: 'sydney-reef',
                title: 'Sydney & The Reef',
                location: 'Sydney • Cairns',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1523482580672-01e6f06378c5?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1523482580672-01e6f06378c5?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                features: ['Opera House Tour', 'Reef Snorkeling', 'Harbour Cruise'],
                price: '$1,199',
                duration: '8 Days / 7 Nights'
            }
        ]
    },
    'maldives': {
        displayName: 'Maldives',
        tagline: 'Sunny Side of Life',
        description: 'Escape to a tropical paradise of crystal-clear waters, overwater bungalows, and white sand beaches.',
        heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2655&auto=format&fit=crop',
        highlights: ['Overwater Villas', 'Coral Reefs', 'Underwater Dining', 'Seaplane Rides', 'Luxury Spas'],
        bestTime: 'November to April',
        currency: 'Maldivian Rufiyaa (MVR)',
        language: 'Dhivehi & English',
        coordinates: [73.2207, 3.2028],
        keywords: ['Male', 'Maafushi', 'Honeymoon', 'Island', 'Beach', 'Resort'],
        packages: [
            {
                id: 'maldives-honeymoon',
                title: 'Luxury Honeymoon Escape',
                location: 'Private Island Resort',
                image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2655&auto=format&fit=crop',
                features: ['Overwater Villa', 'Candlelit Dinner', 'Couple Spa'],
                price: '$2,499',
                duration: '6 Days / 5 Nights'
            }
        ]
    },
    'fiji': {
        displayName: 'Fiji',
        tagline: 'Where Happiness Finds You',
        description: 'Experience the warm hospitality, vibrant coral reefs, and untouched beauty of the South Pacific.',
        heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2688&auto=format&fit=crop',
        highlights: ['Mamanuca Islands', 'Coral Coast', 'Fijian Villages', 'Scuba Diving', 'Kava Ceremony'],
        bestTime: 'May to October',
        currency: 'Fijian Dollar (FJD)',
        language: 'Fijian & English',
        coordinates: [178.0650, -17.7134],
        keywords: ['Suva', 'Nadi', 'Denarau', 'Island', 'Pacific'],
        packages: [
            {
                id: 'fiji-island-hop',
                title: 'Fiji Island Hopping',
                location: 'Nadi • Mamanuca Islands',
                image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2688&auto=format&fit=crop',
                features: ['Island Resort', 'Snorkeling', 'Village Visit'],
                price: '$1,299',
                duration: '7 Days / 6 Nights'
            }
        ]
    },
    'indonesia': {
        displayName: 'Indonesia',
        tagline: 'Wonderful Indonesia',
        description: 'Explore an archipelago of thousands of islands, from the beaches of Bali to the jungles of Sumatra.',
        heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2638&auto=format&fit=crop',
        highlights: ['Bali Beaches', 'Borobudur Temple', 'Komodo Dragons', 'Raja Ampat', 'Ubud Rice Terraces'],
        bestTime: 'May to September',
        currency: 'Indonesian Rupiah (IDR)',
        language: 'Indonesian',
        coordinates: [113.9213, -0.7893],
        keywords: ['Bali', 'Jakarta', 'Ubud', 'Kuta', 'Seminyak', 'Komodo', 'Java'],
        packages: [
            {
                id: 'bali-bliss',
                title: 'Bali Bliss & Culture',
                location: 'Ubud • Seminyak • Uluwatu',
                image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2638&auto=format&fit=crop',
                features: ['Rice Terrace Swing', 'Monkey Forest', 'Beach Club', 'Temple Tour'],
                price: '$599',
                duration: '6 Days / 5 Nights'
            }
        ]
    },
    'switzerland': {
        displayName: 'Switzerland',
        tagline: 'Playground of Europe',
        description: 'Experience the breathtaking Alps, pristine lakes, and charming villages of Switzerland.',
<<<<<<< HEAD
        heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
=======
        heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        highlights: ['Swiss Alps', 'Matterhorn', 'Lake Geneva', 'Chocolate & Cheese', 'Scenic Trains'],
        bestTime: 'June to September, December to March (Skiing)',
        currency: 'Swiss Franc (CHF)',
        language: 'German, French, Italian',
        coordinates: [8.2275, 46.8182],
        keywords: ['Zurich', 'Geneva', 'Interlaken', 'Zermatt', 'Lucerne', 'Alps', 'Bern'],
        packages: [
            {
                id: 'swiss-alps',
                title: 'Grand Swiss Alps',
                location: 'Zurich • Interlaken • Lucerne',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                features: ['Jungfraujoch', 'Lake Cruise', 'Panoramic Train'],
                price: '$1,499',
                duration: '6 Days / 5 Nights'
            }
        ]
    },
    'singapore': {
        displayName: 'Singapore',
        tagline: 'Passion Made Possible',
        description: 'A futuristic city-state where nature meets innovation, street food meets fine dining.',
        heroImage: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2671&auto=format&fit=crop',
        highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island', 'Chinatown', 'Orchard Road'],
        bestTime: 'February to April',
        currency: 'Singapore Dollar (S$)',
        language: 'English, Malay, Mandarin, Tamil',
        coordinates: [103.8198, 1.3521],
        keywords: ['Singapore City', 'Sentosa', 'Marina Bay', 'Changi'],
        packages: [
            {
                id: 'singapore-city',
                title: 'Singapore City Break',
                location: 'Marina Bay • Sentosa',
                image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2671&auto=format&fit=crop',
                features: ['Gardens by the Bay', 'Universal Studios', 'Night Safari'],
                price: '$699',
                duration: '4 Days / 3 Nights'
            }
        ]
    },
    'spain': {
        displayName: 'Spain',
        tagline: 'Passion, Fiesta & Siesta',
        description: 'Experience the vibrant culture, sun-drenched beaches, and historic architecture of Spain.',
<<<<<<< HEAD
        heroImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1200&auto=format&fit=crop',
=======
        heroImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        highlights: ['Sagrada Familia', 'Alhambra', 'Ibiza Beaches', 'Tapas', 'Flamenco'],
        bestTime: 'April to June, September to October',
        currency: 'Euro (€)',
        language: 'Spanish',
        coordinates: [-3.7492, 40.4637],
        keywords: ['Madrid', 'Barcelona', 'Seville', 'Valencia', 'Ibiza', 'Granada', 'Mallorca'],
        packages: [
            {
                id: 'spanish-fiesta',
                title: 'Spanish Fiesta',
                location: 'Madrid • Barcelona • Seville',
<<<<<<< HEAD
                image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1200&auto=format&fit=crop',
=======
                image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2670&auto=format&fit=crop',
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                features: ['Sagrada Familia Tour', 'Flamenco Show', 'Tapas Tasting'],
                price: '$1,099',
                duration: '8 Days / 7 Nights'
            }
        ]
    },
    'canada': {
        displayName: 'Canada',
        tagline: 'True North Strong and Free',
        description: 'Explore the majestic Rockies, vibrant cities, and diverse wildlife of Canada.',
        heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2611&auto=format&fit=crop',
        highlights: ['Niagara Falls', 'Banff National Park', 'CN Tower', 'Whistler Skiing', 'Northern Lights'],
        bestTime: 'June to August, December to March (Skiing)',
        currency: 'Canadian Dollar (C$)',
        language: 'English & French',
        coordinates: [-106.3468, 56.1304],
        keywords: ['Toronto', 'Vancouver', 'Montreal', 'Banff', 'Niagara', 'Quebec', 'Ottawa'],
        packages: [
            {
                id: 'canadian-rockies',
                title: 'Canadian Rockies Adventure',
                location: 'Vancouver • Banff • Jasper',
                image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2611&auto=format&fit=crop',
                features: ['Rocky Mountaineer', 'Lake Louise', 'Whale Watching'],
                price: '$1,599',
                duration: '9 Days / 8 Nights'
            }
        ]
    },
};
