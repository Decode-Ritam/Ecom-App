import './index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import SingleProduct from './Components/SingleProduct';
import AddCart from './Components/AddCart';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import CheckOut from './Components/CheckOut';
import ViewOrder from './ComponentsTemplate/ViewOrder';
import ViewOrderDetails from './ComponentsTemplate/ViewOrderDetails';
import TrackOrderPage from './ComponentsTemplate/TrackOrderPage';
import Header from './ComponentsTemplate/Header';
import Navigation from './ComponentsTemplate/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/productdetails/:id/:colorid' element={<SingleProduct />} />
        <Route path='/addcart' element={<AddCart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/vieworder' element={<ViewOrder />} />
        <Route path='/View_order_details' element={<ViewOrderDetails/>} />
        <Route path='/track_order_page' element={<TrackOrderPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
