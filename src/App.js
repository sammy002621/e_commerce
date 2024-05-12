import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import WishList from './components/WishList';
import HeaderHome from './components/HeaderHome';
import { Home } from '@mui/icons-material';
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
    </Routes>
  );
}

export default App;
