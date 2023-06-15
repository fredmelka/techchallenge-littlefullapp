
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SERVER_URI = 'http://localhost:3001';


export default function PhoneDetail () {
    
let [phone, setPhone] = useState({});
let { id } = useParams();

async function getPhoneDetails() {
    let response = {};
    try {response = await axios.get(`${SERVER_URI}/phones/${id}`)}
    catch (error) {console.log(error)};
    console.log('response', response);
    setPhone(response.data.data);
    console.log('phone', phone);
};

useEffect(() => {console.log('effect ran', id); getPhoneDetails();}, []);

if (!id) {return <><p>NO PHONE TO DISLAY!</p></>}

let {name, manufacturer, description, price, imageFileName, processor, ram} = phone;

return (
    <>
    <h2>I am the Phone Details page {id} </h2>
    <h2>{name} - Key Features are:</h2>
    <table>
        <tbody>
        <tr><td>Manufactuer :</td><td>{manufacturer}</td></tr>
        <tr><td>Price :</td><td>{price}</td></tr>
        <tr><td>RAM :</td><td>{ram}</td></tr>
        </tbody>
    </table>
    <br />
    <Link to='/'><button>Return to List</button></Link>
    </>);
};