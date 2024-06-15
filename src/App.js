

// import './App.css';
import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import Cart from './components/Cart'
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Account from './components/Account';
import CheckOut from './components/CheckOut';
import WishList from './components/WishList';
import ProductDetails from './components/ProductDetails';
import Contacts from './components/Contacts'
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './context/userContext';
import Dashboard from './components/Dashboard';
function App() {
  
  axios.defaults.baseURL = 'http://localhost:5000/app';
  axios.defaults.withCredentials=true;




  return (


    // me
    <React.Fragment>
      <UserContextProvider>
      <Toaster position='top-center' toastOptions={{duration:4000}}/>
    <Routes>

      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/error' element={<PageNotFound/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/product_details' element={<ProductDetails/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

    </Routes> 
    </UserContextProvider>
    </React.Fragment>
   
  );
}

export default App;
