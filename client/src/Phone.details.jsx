
import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SERVER_URI = 'http://localhost:3001';

export default function PhoneDetails () {
    
let [phone, setPhone] = useState(null);
let { id } = useParams();

async function getPhoneDetails () {
let response = {};
try {response = await axios.get(`${SERVER_URI}/phones/:${id}`)}
catch (error) {console.log(error)};
setPhone(response.data.data);
console.log(phone);
};

useEffect(() => {getPhoneDetails()}, [id]);

if (!id) {return <><p>NO PHONE TO DISLAY!</p></>}

let {name, manufacturer, description, price, imageFileName, processor} = phone;

return (
    <>
    <table>
        <tr><td>Name:</td><td>{name}</td></tr>
        <tr><td>Manufactuer:</td><td>{manufacturer}</td></tr>
        <tr><td>Price:</td><td>{price}</td></tr>
    </table>
    </>);
};

