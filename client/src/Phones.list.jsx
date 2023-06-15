
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const SERVER_URI = 'http://localhost:3001';

export default function PhoneList() {

let [phoneList, setPhoneList] = useState([]);

async function getAllPhones () {
let response;
try {response = await axios.get(`${SERVER_URI}/phones`);}
catch (error) {console.log(error);};
setPhoneList(response.data.data);
};

useEffect(() => {getAllPhones()}, []);

return (
  <>
  <h2>I am the Phone Cave App!</h2>
  {/* <br/> */}
  <ul>
    {phoneList.map((phone) => <Link to={`/${phone.id}`}><li key={phone.id}>{phone.name}</li></Link>)}
  </ul>
  </>);
};