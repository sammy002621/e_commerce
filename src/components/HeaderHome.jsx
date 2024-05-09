import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function HeaderHome() {
  return (
    <div className='border-b-2 px-5 lg:px-40  pt-10 pb-5 w-full overflow-hidden'>
    <div className='flex items-center justify-between'>
        {/*  the left side */}
        <div className='hidden sm:flex '>
            <h1 className='font-semibold text-xl'>Exclusive</h1>
        </div>
        {/* the middle side */}
        <div className='flex justify-between  md:pl-0 w-full sm:w-10/12 md:w-2/3 lg:w-1/2 lg:px-5 
        '>
            <div><a href="google.com">Home</a></div>
            <div><a href="">Contact</a></div>
            <div><a href="">About</a></div>
            <div className='flex'><a href="">Sign Up</a>
            
            <div className='border-b-2 text-black border-black'></div>
            </div>
        </div>

        {/*  right side */}
        <div className=' items-center  w-4/12 bg-happy rounded-md   py-2 px-3 hidden xl:flex lg:w-3/12'>
<div className='xl:w-10/12'>
<input type="text" placeholder='What are you looking for?'  className='bg-transparent  text-center w-full    outline-none  ' />
</div>      
 <div className='w-1/6  pl-3'>
    <SearchIcon/>
 </div>
 
          </div>

          <div className='lg:flex justify-between w-1/12 hidden items-center lg:w-1/12  '>
          <div>
            <a href="google.com"><img src="wishlist.svg" alt="" /></a>
          </div>
          <div>
           <a href="google.com"> <img src="cart_notification.svg" alt="" />
</a>          </div>
          <div>
            <a href="google.com"><img src="user.svg" alt="" /></a>
          </div>
          </div>


    </div>
    </div>
  )
}

export default HeaderHome