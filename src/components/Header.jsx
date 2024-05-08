import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Header() {
  return (
    <div className='bg-black w-full overflow-hidden text-white lg:flex  justify-center'>
            <div className='  w-full  flex justify-between text-xl items-start my-4  lg:mx-10'>
            <div className=' w-10/12  flex justify-center pl-1'>
                <p className='font-medium'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
 <a href='google.com' className='ml-2 underline font-bold'>ShopNow</a></p>
            </div>
            <div className='flex justify-between items-center ml-2 pl-5  '>
            
            <div className='font-medium '>
              English
            </div>
            <div className='pr-2'>
<KeyboardArrowDownIcon/>
            </div>
            </div>

            </div>
            
        </div>
  )
}

export default Header