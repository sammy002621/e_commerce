import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import WishList from './components/WishList';
import HeaderHome from './components/HeaderHome';
function App() {
  return (
    // me
    <div className="App">
     <WishList/>
     <HeaderHome/>
    </div>
  );
}

export default App;
