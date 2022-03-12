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
        price: 55.55,
        reviews: []
    }
];

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return [...products.filter((product) => {
        return product.price >= min && product.price <= max;
    })]
}

function getProductById(id) {
    return products.find((product) => {
        return product.id === id;
    });
}

function addNewProduct(id, description, price) {
    const newProd = {
        id,
        description,
        price,
        reviews: []
    };
    products.push(newProd);
    return newProd;
}

function addProductReview(id, rating, comment) {
    const prod = products.find((product) => {
        return product.id === id;
    });
    prod.reviews.push({
        rating,
        comment
    });
    return prod;
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addProductReview
}