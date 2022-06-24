const { getCouponsFromDb } = require("./dynamo.service");


class CouponService {
    
    constructor() { }

    async getCoupons() {
        try {
            const coupons = await getCouponsFromDb();
            return {
                coupons
            };
        } catch (error) {
            throw error;
        }
    }

}

module.exports = CouponService;