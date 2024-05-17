import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom';
function HeaderHome() {

  const [open,setOpen]=useState(false);
  return (
    <div className='border-b-2 px-5 lg:px-20  pt-10 pb-5 w-full overflow-hidden'>
    <div className='flex items-center justify-between relative  '>
        {/*  the left side */}
        <div className='hidden sm:flex '>
            <h1 className='font-semibold text-xl'><Link to='/'>Exclusive</Link></h1>
        </div>
        {/* the middle side */}
        <div className='flex justify-between  md:pl-0 w-full sm:w-10/12 md:w-2/3 lg:w-1/2 lg:px-8 
      
        '>
            <div><NavLink to={'/'} style={({ isActive }) => {
 return isActive ? { color: "#fff",borderBottom:"1px solid white"} : {};
 }}>Home</NavLink></div>
            <div><NavLink to={'/contacts'} style={({ isActive }) => {
 return isActive ? { color: "#fff",borderBottom:"1px solid white" } : {};
 }}>Contacts</NavLink></div>
            <div><NavLink to={'/about'} style={({ isActive }) => {
 return isActive ? { color: "#fff",borderBottom:"1px solid white" } : {};
 }}>About</NavLink></div>
            <div className='flex'><NavLink to={'/signup'} style={({ isActive }) => {
 return isActive ? { color: "#fff",borderBottom:"1px solid white" } : {};
 }} >Signup</NavLink>
            
            <div className='border-b-2 text-black border-black'></div>
            </div>
        </div>

        {/*  right side */}
        <div className=' items-center  w-4/12 bg-happy rounded-md   py-2 px-3 hidden xl:flex lg:w-3/12 lg:px-2'>
<div className='xl:w-10/12'>
<input type="text" placeholder='What are you looking for?'  className='bg-transparent  text-center w-full    outline-none  ' />
</div>      
 <div className='w-1/6  pl-3'>
    <SearchIcon/>
 </div>
 
          </div>

          <div className='lg:flex justify-between w-1/12 hidden items-center lg:w-auto  '>
          <div>
            <a href="google.com"><img src="wishlist.svg" alt="" /></a>
          </div>
          <div>
           <a href="google.com"> <img src="cart_notification.svg" alt="" />
</a>          </div>
          <div onClick={()=>setOpen(!open)} className='hover:cursor-pointer'>
            <img src="user.svg" alt="" />
          </div>
        
        
          </div>

          
    </div>
    </div>
  )
}

export default HeaderHome