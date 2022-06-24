const AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.AWS_region,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_PRODUCTS = 'products';
const TABLE_COUPONS = 'coupons';
const TABLE_INVOICES = 'invoices';


const getProductsFromDb = async () => {
    try {
        const params = {
            TableName: TABLE_PRODUCTS
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
            TableName: TABLE_COUPONS
        };
        const coupon = await dynamoClient.scan(params).promise();
        return coupon.Items;
    } catch (error) {
        throw error;
    }
};

const updateInvoiceInDb = async (invoice) => {
    try {
        const params = {
            TableName: TABLE_INVOICES,
            Item: invoice,
        };
        const response = await dynamoClient.put(params).promise();
        return response;
    } catch (error) {
        throw error;
    }
};

module.exports= {
    getProductsFromDb,
    getCouponsFromDb,
    updateInvoiceInDb
};