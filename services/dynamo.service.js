const AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.AWS_region,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME1 = 'products';
const TABLE_NAME2 = 'coupons';


const getProductsFromDb = async () => {
    try {
        const params = {
            TableName: TABLE_NAME1
        };
        const products = await dynamoClient.scan(params).promise();
        return products.Items;
    } catch (error) {
        throw error;
    }
};

const getCouponsFromDb = async () => {
    try {
        const params = {
            TableName: TABLE_NAME2
        };
        const coupon = await dynamoClient.scan(params).promise();
        return coupon.Items;
    } catch (error) {
        throw error;
    }
};

module.exports= {
    getProductsFromDb,
    getCouponsFromDb
};