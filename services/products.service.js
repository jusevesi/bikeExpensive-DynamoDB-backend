const { getProductsFromDb } = require("./dynamo.service");


class ProductService {
    
    constructor() { }

    async getProducts() {
        try {
            const products = await getProductsFromDb();
            return {
                products
            };
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ProductService;