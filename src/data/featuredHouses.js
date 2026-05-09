export const featuredHouses = [
    {
        id: 1,
        name: 'Ocean View House',
        location: 'Miami Beach, USA',
        price: '$2,850,000',
        status: 'For Sale',
        description: 'A spectacular beachfront property with panoramic ocean views and modern luxury finishes.',
        fullDescription: 'This stunning oceanfront villa offers the ultimate in coastal living. Located on one of Miami Beach\'s most prestigious streets, this property features floor-to-ceiling windows, a private beach access, infinity pool, and state-of-the-art smart home technology. Perfect for those seeking luxury beach living.',
        bedrooms: 5,
        bathrooms: 4,
        area: '4,500 sq ft',
        features: [
            'Panoramic ocean views',
            'Private beach access',
            'Infinity pool',
            'Smart home technology',
            'Gourmet kitchen',
            'Home theater'
        ],
        amenities: {
            parking: '3-car garage',
            heating: 'Central AC',
            poolType: 'Infinity pool',
            security: '24/7 surveillance'
        },
        accent: 'from-sky-400 to-blue-600'
    },
    {
        id: 2,
        name: 'City Loft',
        location: 'London, UK',
        price: '£1,750,000',
        status: 'For Rent',
        description: 'Modern urban loft in the heart of London with contemporary design and premium amenities.',
        fullDescription: 'An exquisite contemporary loft situated in the vibrant heart of London. This property combines Victorian charm with modern minimalist design. Features include high ceilings, exposed brick, floor-to-ceiling windows overlooking the Thames, and a private rooftop terrace. Ideal for professionals seeking urban luxury.',
        bedrooms: 3,
        bathrooms: 2,
        area: '2,800 sq ft',
        features: [
            'Thames views',
            'Rooftop terrace',
            'Exposed brick',
            'High ceilings',
            'Modern kitchen',
            'Hardwood floors'
        ],
        amenities: {
            parking: 'Underground parking',
            heating: 'Radiant floor heating',
            poolType: 'Building gym',
            security: 'Video intercom'
        },
        accent: 'from-slate-600 to-slate-900'
    },
    {
        id: 3,
        name: 'Mountain Retreat',
        location: 'Swiss Alps, Switzerland',
        price: '€3,200,000',
        status: 'For Sale',
        description: 'Luxury alpine chalet with breathtaking mountain views and world-class amenities.',
        fullDescription: 'Nestled in the heart of the Swiss Alps, this luxurious chalet offers an exclusive mountain retreat. The property features massive windows showcasing panoramic mountain vistas, a wine cellar, spa facilities, and heated infinity pool overlooking the slopes. Perfect for winter sports enthusiasts.',
        bedrooms: 6,
        bathrooms: 5,
        area: '5,200 sq ft',
        features: [
            'Panoramic mountain views',
            'Heated infinity pool',
            'Wine cellar',
            'Spa facilities',
            'Fireplace',
            'Ski access'
        ],
        amenities: {
            parking: 'Heated garages',
            heating: 'Radiant heating',
            poolType: 'Heated infinity pool',
            security: 'Gate access'
        },
        accent: 'from-blue-300 to-cyan-500'
    },
    {
        id: 4,
        name: 'Coastal Villa',
        location: 'Amalfi Coast, Italy',
        price: '€2,500,000',
        status: 'For Rent',
        description: 'Spectacular Mediterranean villa on the famous Amalfi Coast with stunning sea views.',
        fullDescription: 'A breathtaking Mediterranean villa perched on the cliffs of the Amalfi Coast. This masterpiece combines traditional Italian architecture with modern luxury. Features terraced gardens, private beach access, infinity pool, and indoor spa. Surrounded by lemon groves with commanding sea views.',
        bedrooms: 4,
        bathrooms: 3,
        area: '3,800 sq ft',
        features: [
            'Cliff-top location',
            'Private beach access',
            'Infinity pool',
            'Terraced gardens',
            'Spa',
            'Wine room'
        ],
        amenities: {
            parking: 'Private driveway',
            heating: 'Underfloor heating',
            poolType: 'Infinity pool',
            security: 'Private gate'
        },
        accent: 'from-amber-300 to-orange-500'
    },
    {
        id: 5,
        name: 'Urban Penthouse',
        location: 'Downtown Tokyo, Japan',
        price: '¥850,000,000',
        status: 'For Sale',
        description: 'Ultra-luxury penthouse in Tokyo\'s most exclusive skyscraper with stunning city views.',
        fullDescription: 'A state-of-the-art penthouse on the 52nd floor of Tokyo\'s most prestigious tower. This architectural marvel offers 360-degree city views, Japanese minimalist design, smart home automation, private elevator access, and a rooftop garden. Located in the heart of Shibuya district.',
        bedrooms: 3,
        bathrooms: 3,
        area: '3,200 sq ft',
        features: [
            '360-degree city views',
            'Private elevator',
            'Rooftop garden',
            'Smart home system',
            'Minimalist design',
            'High-speed internet'
        ],
        amenities: {
            parking: 'Dedicated parking',
            heating: 'Climate control',
            poolType: 'Building sky pool',
            security: 'Biometric access'
        },
        accent: 'from-purple-400 to-pink-600'
    },
    {
        id: 6,
        name: 'Garden Estate',
        location: 'Surrey, England',
        price: '£2,100,000',
        status: 'For Sale',
        description: 'Historic country estate with sprawling grounds and traditional English charm.',
        fullDescription: 'A magnificent historic estate set on 15 acres of manicured gardens in the English countryside. This Grade II listed property combines period features with modern comforts. Includes guest house, tennis court, and private lake. A timeless country retreat for the discerning.',
        bedrooms: 7,
        bathrooms: 5,
        area: '6,500 sq ft',
        features: [
            '15 acres of gardens',
            'Tennis court',
            'Private lake',
            'Guest house',
            'Historic features',
            'Woodland'
        ],
        amenities: {
            parking: 'Multi-car garage',
            heating: 'Central heating',
            poolType: 'Heated outdoor pool',
            security: 'Gated entrance'
        },
        accent: 'from-emerald-400 to-green-600'
    }
];

export const getFeaturedHouseById = (id) => {
    return featuredHouses.find(house => house.id === parseInt(id));
};
