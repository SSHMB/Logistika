export const locations = [
    {
        id: 1,
        slug: 'america-newyork',
        title: 'America',
        city: 'New York',
        description: 'The city that never sleeps offers world-class real estate opportunities with iconic skyline views.',
        fullDescription: 'New York City is the epicenter of global real estate investment. From luxury penthouses in Manhattan to brownstones in Brooklyn, the market offers diverse opportunities. The city attracts international investors seeking both residential and commercial properties.',
        highlights: [
            'Iconic skyline views',
            'World-class infrastructure',
            'Diverse neighborhoods',
            'Strong investment market',
            'Excellent transportation',
            'Cultural attractions'
        ],
        statistics: {
            avgPrice: '$1.2M',
            properties: '2,450+',
            avgRent: '$3,500/mo',
            investmentReturn: '7-9%'
        },
        image: 'bg-slate-900 text-white',
        accent: 'from-slate-800 to-slate-950'
    },
    {
        id: 2,
        slug: 'spain-barcelona',
        title: 'Spain',
        city: 'Barcelona',
        description: 'Mediterranean charm meets modern architecture. Barcelona is a premier destination for European real estate investment.',
        fullDescription: 'Barcelona combines historic charm with contemporary architecture. The city offers affordable luxury living with Mediterranean climate. Properties range from Gothic Quarter apartments to modern beachfront residences. The tourism market makes it attractive for investment properties.',
        highlights: [
            'Mediterranean beaches',
            'Historic architecture',
            'Vibrant culture',
            'Affordable luxury',
            'Tourism potential',
            'Modern amenities'
        ],
        statistics: {
            avgPrice: '€600K',
            properties: '1,890+',
            avgRent: '€1,800/mo',
            investmentReturn: '5-7%'
        },
        image: 'bg-sky-100 text-sky-900',
        accent: 'from-sky-200 to-sky-300'
    },
    {
        id: 3,
        slug: 'london-mayfair',
        title: 'London',
        city: 'Mayfair',
        description: 'Prestigious Mayfair offers luxurious properties in London\'s most exclusive neighborhood.',
        fullDescription: 'Mayfair is synonymous with luxury and prestige. Home to embassies, exclusive hotels, and multi-million pound residences, it\'s one of the world\'s most expensive neighborhoods. Perfect for high-net-worth individuals seeking prime London real estate.',
        highlights: [
            'Ultra-luxury properties',
            'Prestigious address',
            'Exclusive neighborhood',
            'High-end dining',
            'Premier shopping',
            'Historic architecture'
        ],
        statistics: {
            avgPrice: '£3.5M',
            properties: '850+',
            avgRent: '£4,200/mo',
            investmentReturn: '4-6%'
        },
        image: 'bg-slate-50 text-slate-900',
        accent: 'from-slate-100 to-slate-200'
    },
    {
        id: 4,
        slug: 'france-paris',
        title: 'France',
        city: 'Paris',
        description: 'The City of Light offers romantic Parisian apartments and world-renowned architectural heritage.',
        fullDescription: 'Paris remains one of the world\'s most desirable real estate markets. From charming studios in Le Marais to grand Haussmann apartments on the Champs-Élysées, Paris offers timeless elegance and investment potential. The rental market is strong with consistent demand from tourists and expatriates.',
        highlights: [
            'Parisian elegance',
            'Haussmann architecture',
            'River-view properties',
            'Strong rental market',
            'Cultural attractions',
            'Historic charm'
        ],
        statistics: {
            avgPrice: '€750K',
            properties: '2,100+',
            avgRent: '€1,600/mo',
            investmentReturn: '6-8%'
        },
        image: 'bg-rose-50 text-rose-900',
        accent: 'from-rose-100 to-rose-200'
    }
];

export const getLocationById = (id) => {
    return locations.find(loc => loc.id === parseInt(id));
};

export const getLocationBySlug = (slug) => {
    return locations.find(loc => loc.slug === slug);
};
