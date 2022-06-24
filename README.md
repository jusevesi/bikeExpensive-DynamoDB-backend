# Test Meridian Backend

This repository contains the backend in node.js for the Meridian development test.

## Steps to execute the project
1. Install node js
2. Clone the project
```sh
git clone https://github.com/jusevesi/test_Meridian
```
3. Install node modules
```sh
npm install
```   
4. Create a .env file with the following information, adding the credentials for AWS DynamoDB
```sh
#PORT
PORT = 8080
#AWS Credentials - **Please insert your credentials**
AWS_region: us-east-1
AWS_ACCESS_KEY_ID: #Your_AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY: #Your_AWS_SECRET_ACCESS_KEY
```   
5. Execute the project
```sh
npm start
```  
Tests. Execute test
```sh
npm run test
```  
Note: You can check the web app working in heroku in the following link:
```sh
https://meridian-test-frontend.herokuapp.com/products
```