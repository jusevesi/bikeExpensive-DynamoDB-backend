const getProductFromDb = require("./dynamo.service");

class ProductService {
    constructor() { }

    async getProductById(id) {
        try {
            const product = await getProductFromDb(id);
            return {
                product
            };
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ProductService;