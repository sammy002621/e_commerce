import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function HeaderHome() {
  return (
    <div className='border-b-2  px-40  pt-10 pb-5'>
    <div className='flex items-center justify-between'>
        {/*  the left side */}
        <div className=''>
            <h1 className='font-semibold text-xl'>Exclusive</h1>
        </div>
        {/* the middle side */}
        <div className='flex items-center justify-between  w-1/3'>
            <div><a href="google.com">Home</a></div>
            <div><a href="">Contact</a></div>
            <div><a href="">About</a></div>
            <div className=''><a href="">Sign Up</a>
            
            <div className='border-b-2 text-black border-black'></div>
            </div>
        </div>

        {/*  right side */}
        <div className='flex items-center  w-1/5 bg-happy rounded-md   py-2 px-3'>
<div className='w-11/12'>
<input type="text" placeholder='What are you looking for?'  className='bg-transparent  text-center w-full    outline-none  ' />
</div>      
 <div className='w-1/6  pl-3'>
    <SearchIcon/>
 </div>
          </div>


    </div>
    </div>
  )
}

export default HeaderHome