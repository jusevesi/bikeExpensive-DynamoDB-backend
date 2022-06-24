const ProductService = require("../services/products.service");

const getProducts = async(req, res) => {
    try {
        const productService = new ProductService();
        const response = await productService.getProducts();
        res.json(response)
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500)
        res.json({ message: error.message || 'Internal Server Error' })
    }
}


module.exports  =  getProducts;