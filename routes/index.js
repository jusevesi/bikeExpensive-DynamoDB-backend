const express = require('express');
const getCoupons = require('../controllers/coupons');
const getProducts = require('../controllers/products');
const router = express.Router();

router.get('/products',getProducts);
router.get('/coupons',getCoupons);

module.exports = router;