const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.12,
        reviews: [
            {
                rating: 4,
                comment: 'Splendid'
            }
        ]
    },
    {
        id: 'bluejeans',
        description: 'Blue Jeans',
        price: 55.55
    }
];

function getAllProducts() {
    return products;
}

module.exports = {
    getAllProducts
}