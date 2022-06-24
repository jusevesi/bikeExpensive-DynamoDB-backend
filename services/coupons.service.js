const { getCouponsFromDb } = require("./dynamo.service");


class CouponService {
    
    constructor() { }

    async getCoupons() {
        try {
            const coupon = await getCouponsFromDb();
            return {
                coupon
            };
        } catch (error) {
            throw error;
        }
    }

}

module.exports = CouponService;