const express = require('express');
const getCoupons = require('../controllers/coupons');
const updateInvoice = require('../controllers/invoice');
const getProducts = require('../controllers/products');
const router = express.Router();

router.get('/products',getProducts);
router.get('/coupons',getCoupons);
router.post('/invoices',updateInvoice);

module.exports = router;