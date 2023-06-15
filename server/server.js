
const express = require('express');
const app = express();

const data = require('../data/phones.json');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

let healthCheck = (request, response, next) => {
    return response.status(200).json({success: true, message: 'server is running!'});
};

let getAllPhones = (request, response, next) => {
    let phones = data;
    console.log(phones);
    return response.status(200).json({success: true, data: phones});
};

let getOnePhoneDetails = (request, response, next) => {
    let {id} = request.params;
    console.log(typeof id);
    let phone = data.filter(phone => phone.id === Number(id));
    return response.status(200).json({succes: true, data: phone});
};

// ROUTES
app.get('/', healthCheck);
app.get('/phones', getAllPhones);
app.get('/phones/:id', getOnePhoneDetails);

app.listen(3001, () => {console.log('Server is up and running on port 3001')});