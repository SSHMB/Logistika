export const properties = [
    {
        id: 1,
        name: '103/143 West Street',
        location: 'Crown Nest',
        price: '$12,500/mo',
        status: 'For Rent',
    },
    {
        id: 2,
        name: '105/143 West Street',
        location: 'Crown Nest',
        price: '$18,200/mo',
        status: 'For Rent',
    },
    {
        id: 3,
        name: '103/143 West Street',
        location: 'Crown Nest',
        price: '$9,200/mo',
        status: 'For Sale',
    },
    {
        id: 4,
        name: '106/143 West Street',
        location: 'Crown Nest',
        price: '$14,900/mo',
        status: 'For Sale',
    },
];

export const getPropertyById = (id) => {
    return properties.find(prop => prop.id === parseInt(id));
};
