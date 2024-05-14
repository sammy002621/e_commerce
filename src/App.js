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
function App() {
  return (
    // me
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
  );
}

export default App;
