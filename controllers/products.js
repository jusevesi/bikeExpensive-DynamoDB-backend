const ProductService = require("../services/products.service");

const getProductById = async(req, res) => {
    try {
        const { id } = req.params;
        const productService = new ProductService();
        const response = await productService.getProductById(id);
        res.json(response)
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500)
        res.json({ message: error.message || 'Internal Server Error' })
    }
}

module.exports  = getProductById;