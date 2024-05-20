import React from 'react'

function Footer() {
  return (
    <div className='bg-black  text-white '>
    <div className='flex mx-5 lg:mx-10 py-10 pb-5 justify-between items-start  mt-20  lg:mb-5 ' >
   <div className='hidden md:inline'>
    <h1 className='font-semibold text-xl xl:text-3xl mb-8'>Exclusive</h1>
    <p className='font-semibold text-xl mb-8'>Subscribe</p>
    <p className=' mb-5 text-xl'>Get 10% off  your first order </p>
    <div className='flex    w-[240px] px-3 py-3 border-2 border-white rounded-md items-center'>
        <div className='w-5/5'>
        <input type="text" placeholder='Enter your email' className='w-full pl-3  bg-transparent  font-medium text-lg outline-none' />
        </div>

        <div className='w-1/5'>
<img src="/send_icon.png" alt="" />
          </div>
    </div>
   </div>
   <div className='  hidden lg:inline lg:text-lg  xl:w-1/5'>
    <p className='font-semibold text-xl mb-8 '>Support</p>
    <p className=' mb-5 font-medium text-xl w-4/5'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
    <p className='mb-5 text-xl'>exclusive@gmail.com</p>
    <p className='text-xl'>+88015-88888-9999</p>
   </div>
   <div className='hidden 2xl:inline text-xl  '>
    <p className='mb-8 font-medium text-2xl'>Account</p>
    <p className='mb-5'><a href="google.com">My Account</a></p>
    <p className='mb-5'><a href="google.com">Login/Register</a></p>
    <p className='mb-5'><a href="google.com">Cart</a></p>
    <p className='mb-5'><a href="google.com">WishList</a></p>
    <p className='mb-5'><a href="google.com">Shop</a></p>
   </div>
   <div className='text-lg  mr-3 sm:mr-0 '>
    <p className='font-medium  text-xl lg:text-2xl mb-8  sm:mr-0'>Quick Link</p>
    <p className='mb-5'><a href="google.com">Privacy Policy</a></p>
    <p className='mb-5'><a href="google.com">Terms of Policy</a></p>
    <p className='mb-5'><a href="google.com">FAQ</a></p>
    <p className='mb-5'><a href="google.com">Contact</a></p>
   </div>
   <div className=''>
    <p className='font-medium   text-xl ml-2 lg:text-2xl mb-8'>Download App</p>
    <p className='text-gray-600 mb-2 font-medium'>Save $3 with App New User Only</p>
    <div >
       <div className='flex mb-8 items-center'>
       <div className='mr-2 flex'>
            <img src="/qr_code.png" alt=""  className='h-[110px]' />
        </div>
        <div className='flex-1'>
            <div className='mb-3'> 
                <img src="/Google_play.svg" alt="" className='w-full' />
            </div>
            <div> 
                <img src="/App_store.svg" alt=""  className='w-full'/>
            </div>
        </div>
       </div>
        <div className='flex justify-around'>
        <div><a href="https://www.facebook.com/"> <img src="/facebook_icon.png" alt="" /></a></div>
        <div><a href="https://www.twitter.com/"><img src="/twitter.png" alt="" /></a></div>
        <div><a href="https://www.instagram.com/"><img src="/instagram.png" alt="" /></a></div>
        <div><a href="https://www.linkedIn.com/"><img src="/linkedIn.png" alt="" /></a></div>
        </div>
    </div>
   </div>
    </div>
    <div className=' font-medium  md:text-xl text-mama'>
<div className='flex justify-center items-center border-t-2 border-gray-700 py-4 px-3'>
    <div className='mr-2 hidden sm:inline'>
<img src="/copyright.png" alt="" />
    </div>
    <div className=''>
    Copyright Rimel 2022. All right reserved

    </div>
    </div>    
    
    </div>
        </div>
  )
}

export default Footer