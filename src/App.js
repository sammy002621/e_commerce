import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import WishList from './components/WishList';
import HeaderHome from './components/HeaderHome';
import Contacts from './components/Contacts';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Account from './components/Account';
import CheckOut from './components/CheckOut';
function App() {
  return (
    // me
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/error' element={<PageNotFound/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
    </Routes>
  );
}

export default App;
