import React,{useState,useContext} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { UserContext } from '../context/userContext';


function HeaderHome() {

  const [open,setOpen]=useState(false);
  const {user}=useContext(UserContext);
  const userName = user?.name || 'Guest';
  const userLetter=userName[0];
  
  return (
    <header className='border-b-2 px-5 lg:px-10  pt-10 pb-5 w-full overflow-hidden'>
    <nav className='flex items-center justify-between relative  '>
        {/*  the left side */}
        
            <h1 className='font-semibold text-xl hidden sm:flex '><Link to='/'>Exclusive</Link></h1>
        
        {/* the middle side */}
        <ul className='  w-full md:w-3/6  sm:w-1/2 
      flex justify-end 
        '>
          <section className='flex justify-between  md:pl-0 w-full sm:w-10/12 md:w-11/12 lg:w-11/12 lg:px-8 md:px-0   mx-auto md:mx-0   '>
          <NavLink to={'/'} style={({ isActive }) => {
 return isActive ? { color: "#fff",borderBottom:"1px solid white"} : {};
 }} className={""}>Home</NavLink>
            <NavLink to={'/contacts'} style={({ isActive }) => {
 return isActive ? { color: "#fff",borderBottom:"1px solid white" } : {};
 }}>Contacts</NavLink>
            <NavLink to={'/about'} style={({ isActive }) => {
 return isActive ? { color: "#fff",borderBottom:"1px solid white" } : {};
 }}>About</NavLink>
            <NavLink to={'/signup'} style={({ isActive }) => {
 return isActive ? { color: "#fff",borderBottom:"1px solid white" } : {};
 }} >Signup</NavLink>
            
            <span className='border-b-2 text-black border-black'></span>
          </section>
            
            </ul>
       

        {/*  right side */}
        <div className=' items-center  w-4/12 bg-happy rounded-md   py-2 px-3 hidden xl:flex lg:w-1/4  lg:px-2'>
<div className='xl:w-10/12'>
<input type="text" placeholder='What are you looking for?'  className='bg-transparent  text-center w-full    outline-none  ' />
</div>      
 <div className='w-1/6  pl-3'>
    <SearchIcon/>
 </div>






































 
 
          </div>

          <div className='lg:flex justify-between w-1/12 hidden items-center lg:w-auto   '>
          <Link to={'/wishlist'} className='mr-4 lg:relative'>
          <FavoriteBorderIcon />
          <div className='absolute text-white bg-sammy rounded-3xl  top-[-7px] right-[-5px] w-5 h-6 text-center  '>4</div>
          
          
          </Link>
          <Link to={'/cart'} className='mr-4 lg:relative'>
            <ShoppingCartIcon/>
            <div className='absolute text-white bg-sammy rounded-3xl  top-[-7px] right-[-5px] w-5 h-6 text-center  '>4</div>

          </Link>
          <Link to={'/account'} className='text-xl rounded-full border-gray-400 border-2 px-2 capitalize pb-[2px] hover:border-white text-white'>
            {userLetter}
          </Link>
        
        
          </div>

          
    </nav>
    </header>
  )
}

export default HeaderHome