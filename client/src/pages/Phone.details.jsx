
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
    setPhone(response.data.data);
};

let {name, manufacturer, description, price, imageFileName, processor, ram} = phone;

useEffect(() => {getPhoneDetails()}, [id]);

if (!id) {return <><p>NO PHONE TO DISLAY!</p></>}

return (
    <>
    <h2>I am the Phone Details page!</h2>
    <br />
    <h3>{name} - Key Features are:</h3>
    <table>
        <tbody>
        <tr><td>Manufactuer :</td><td>{manufacturer}</td></tr>
        <tr><td>Price :</td><td>{price}</td></tr>
        <tr><td>RAM :</td><td>{ram}</td></tr>
        <tr><td>Processor :</td> <td>{processor}</td></tr>
        </tbody>
    </table>
    <p>{description}</p>
    <br />
    <img src={`/assets/${imageFileName}`} alt={imageFileName} width='350px'/>
    <br />
    <Link to='/'><button>Return to List</button></Link>
    </>);
};