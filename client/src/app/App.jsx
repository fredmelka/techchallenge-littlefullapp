
import React                            from 'react';
import { Route }                        from 'react-router-dom';
import { RouterProvider }               from 'react-router-dom';
import { createBrowserRouter }          from 'react-router-dom';
import { createRoutesFromElements }     from 'react-router-dom';


import ErrorPage                        from '../pages/Error.jsx';
import PhoneList                        from '../pages/Phones.list.jsx';
import PhoneDetail                      from '../pages/Phone.details.jsx';
import Root                             from '../pages/Root.jsx';
 
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={ <Root /> } errorElement={ <ErrorPage /> }>

        <Route index='true' element={ <PhoneList /> } />
        <Route path='/:id' element={ <PhoneDetail /> } />

    </Route>));


export default function App() {

return (
  <>
    <RouterProvider router={router} />
  </>);
};