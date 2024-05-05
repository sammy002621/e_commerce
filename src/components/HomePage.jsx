import React from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function HomePage() {
  return (
    <div>
        <Header/>
        <HeaderHome/>
        {/* body */}
        <div className='flex px-40 py-10 justify-between h-[460px]'>
            {/* the right side */}
            <div className=' bg-green-600 w-1/5 border-r-2 border-gray-600'>
    <div className='flex justify-between mb-5'>
        <div>Woman's Fashion</div>
        <div><ChevronRightIcon/></div>
    </div>
    <div className='flex justify-between mb-5'>
        <div>Men's Fashion</div>
        <div><ChevronRightIcon/></div>
    </div>
    <div className='mb-5'>
    Electronics
    </div>
    <div className='mb-5'>
    Home & Lifestyle
    </div>
    <div className='mb-5'>
    Medicine
    </div>
    <div className='mb-5'>
    Sports & Outdoor
    </div>
    <div className='mb-5'>
    Baby’s & Toys
    </div>
    <div className='mb-5'>
    Groceries & Pets
    </div>
    <div className='mb-5'>
    Health & Beauty
    </div>
            </div>
            {/* the left side */}

            <div className='w-4/5 bg-red-600' >
                <div className='bg-blue-700  text-white w-10/12   '>
                <div className='flex  px-5 h-5/6 pt-10 justify-center'>
                  <div className=' pt-9 bg-yellow-600'>
                  <div className='flex items-center  w-11/12 justify-between mb-5 bg-purple-700'>
                    <div>
       <img src="/apple.svg" alt="" />
                    </div>
                    <div>
                    iPhone 14 Series
                    </div>
                </div>
                <div className='text-4xl font-semibold mb-5 leading-10'>
                <p className='mb-4'>Up to 10%</p> off Voucher
                </div>
                <div className='flex'>
                    <div className='mr-3'>
                        <div className=''>Shop Now</div>
                        <div className='border-b-2 border-white'> </div>
                    </div>
                    <div>
                      <ArrowRightAltIcon/>
                    </div>
                </div>
                </div>
                <div className='w-3/5 overflow-hidden '>
            <img src="/dots.svg" alt="" />
                </div>
                </div>

                <div className='flex justify-center'>
                    <div className='flex justify-center items-center'>
                      <img src="/dots_2.svg" alt="" />  
                    </div>
                </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default HomePage