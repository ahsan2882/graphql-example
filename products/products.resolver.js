const { getAllProducts, getProductsByPrice, getProductById, addNewProduct, addProductReview } = require("./products.model");

module.exports = {
    Query: {
        products: () => {
            return getAllProducts();
        },
        productsByPrice: (_, args) => {
            return getProductsByPrice(args.min, args.max)
        },
        product: (_, args) => {
            return getProductById(args.id)
        }
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return addNewProduct(args.id, args.description, args.price);
        },
        addProductReview: (_, args) => {
            return addProductReview(args.id, args.rating, args.comment);
        }
    }
}