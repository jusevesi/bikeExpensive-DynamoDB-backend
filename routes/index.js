const express = require('express');
const getProductById = require('../controllers/products');
const router = express.Router();

router.get('/products/:id',getProductById);

module.exports = router;