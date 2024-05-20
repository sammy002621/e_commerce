import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom';




function HeaderHome() {

  const [open,setOpen]=useState(false);
  
  return (
    <header className='border-b-2 px-5 lg:px-20  pt-10 pb-5 w-full overflow-hidden'>
    <nav className='flex items-center justify-between relative  '>
        {/*  the left side */}
        
            <h1 className='font-semibold text-xl hidden sm:flex '><Link to='/'>Exclusive</Link></h1>
        
        {/* the middle side */}
        <ul className='flex justify-between  md:pl-0 w-full sm:w-10/12 md:w-2/3 lg:w-1/2 lg:px-8 
      
        '>
            <NavLink to={'/'} style={({ isActive }) => {
 return isActive ? { color: "#fff",borderBottom:"1px solid white"} : {};
 }}>Home</NavLink>
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
            </ul>
       

        {/*  right side */}
        <div className=' items-center  w-4/12 bg-happy rounded-md   py-2 px-3 hidden xl:flex lg:w-3/12 lg:px-2'>
<React.Fragment className='xl:w-10/12'>
<input type="text" placeholder='What are you looking for?'  className='bg-transparent  text-center w-full    outline-none  ' />
</React.Fragment>      
 <div className='w-1/6  pl-3'>
    <SearchIcon/>
 </div>
 
          </div>

          <div className='lg:flex justify-between w-1/12 hidden items-center lg:w-auto  '>
          <Link to={'/wishlist'}><img src="wishlist.svg" alt="" /></Link>
          <Link to={'/cart'}><img src="/cart_notification.svg" alt="" /></Link>
          <Link to={'/account'}><img src='user.svg'/></Link>
        
        
          </div>

          
    </nav>
    </header>
  )
}

export default HeaderHome