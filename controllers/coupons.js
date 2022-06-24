const CouponService = require("../services/coupons.service");

const getCoupons = async(req, res) => {
    try {
        const { id } = req.params;
        const couponService = new CouponService();
        const response = await couponService.getCoupons(id);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500)
        res.json({ message: error.message || 'Internal Server Error' })
    }
}

module.exports = getCoupons;