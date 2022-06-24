const AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.AWS_region,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'products';

const getProductFromDb = async (id) => {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key:{
                id
            }
        };
        const product = await dynamoClient.scan(params).promise();
        return product.Items.find(element => element.id === +id) ;
    } catch (error) {
        throw error;
    }
};

module.exports= getProductFromDb;
