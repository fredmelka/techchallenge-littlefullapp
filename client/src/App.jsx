
import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import PhoneList from './Phones.list.jsx';
import PhoneDetails from './Phone.details.jsx';


export default function App() {

return (
  <>
  <PhoneList />
  <Routes>
    <Route path='/:id' element={<PhoneDetails />}></Route>
  </Routes>
  </>);
};