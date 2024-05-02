import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Login() {
  return (
    <div>
        {/* header */}
        <div className='bg-black text-white flex pl-80 items-center py-3'>
            <div>
                <p className='ml-80'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
 <a href='google.com' className='font-bold underline ml-3'>ShopNow</a></p>
            </div>
            <div className='ml-80'>
                <select name="" id=""  className='bg-transparent outline-none'>
                    <option value="English" >English</option>
                    <option value="English" >French</option>
                    <option value="English" >Spanish</option>
                    <option value="English" >Portugeuse</option>
                </select>
            </div>
        </div>


        {/* body */}
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

        <div className='w-[80%] flex mt-20 h-[720px]'>
                <div className='w-[60%] object-cover bg-bottom bg-footer_texture'>
                </div>
                <div className='w-[10%]  flex items-center justify-center  '>
                   
                </div>
                <div className='w-[30%]  pt-60 flex justify-center pl-20 overflow-hidden'>
                    <div className=''>
                        <h1 className='text-3xl font-medium mb-4'>Log in to Exclusive</h1>
                        <p className='text-baseline mb-10'>Enter your details below</p>
                        <form action="" className='mt-5'>
                            <input type="text" placeholder='Email or Phone Number' className='bg-transparent border-b-2  border-gray-700 outline-none pb-2  mb-10 w-full' />
                            <input type="text" placeholder='Password' className='bg-transparent border-b-2  outline-none pb-2 border-gray-700  mb-8 w-full' />
                            <div className='flex justify-between items-center'>
                                <div>
                                <button className='text-white bg-sammy px-10 py-3 rounded-md'>Log In</button>
                                </div>
                                <div>
                                    <p className='text-happy'><a href="google.com">Forgot Password?</a></p>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>


        {/* footer */}


        <div className='bg-black  text-white mt-20'>
    <div className='flex mx-40 py-20 pb-10 justify-between items-start  mt-20 mb-20' >
   <div className=''>
    <h1 className='font-semibold text-3xl mb-8'>Exclusive</h1>
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
   <div className=' w-1/5'>
    <p className='font-semibold text-xl mb-8 '>Support</p>
    <p className=' mb-5 font-medium text-xl w-4/5'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
    <p className='mb-5 text-xl'>exclusive@gmail.com</p>
    <p className='text-xl'>+88015-88888-9999</p>
   </div>
   <div className='text-xl  '>
    <p className='mb-8'><a href="google.com" className='font-medium text-2xl'>Account</a></p>
    <p className='mb-5'><a href="google.com">My Account</a></p>
    <p className='mb-5'><a href="google.com">Login/Register</a></p>
    <p className='mb-5'><a href="google.com">Cart</a></p>
    <p className='mb-5'><a href="google.com">WishList</a></p>
    <p className='mb-5'><a href="google.com">Shop</a></p>
   </div>
   <div className='text-xl  '>
    <p className='font-medium text-2xl mb-8'>Quick Link</p>
    <p className='mb-5'><a href="google.com">Privacy Policy</a></p>
    <p className='mb-5'><a href="google.com">Terms of Policy</a></p>
    <p className='mb-5'><a href="google.com">FAQ</a></p>
    <p className='mb-5'><a href="google.com">Contact</a></p>
   </div>
   <div className=''>
    <p className='font-medium text-2xl mb-8'>Download App</p>
    <p className='text-gray-600 mb-2 font-medium'>Save $3 with App New User Only</p>
    <div >
       <div className='flex mb-8 items-center'>
       <div className='mr-2 flex'>
            <img src="/qr_code.png" alt=""  className='h-[110px]' />
        </div>
        <div className='flex-1'>
            <div className='mb-3'> 
                <img src="/google_play.png" alt="" className='w-full' />
            </div>
            <div> 
                <img src="/app_store.png" alt=""  className='w-full'/>
            </div>
        </div>
       </div>
        <div className='flex justify-around'>
        <div><img src="/facebook_icon.png" alt="" /></div>
        <div><img src="/twitter.png" alt="" /></div>
        <div><img src="/instagram.png" alt="" /></div>
        <div><img src="/linkedIn.png" alt="" /></div>
        </div>
    </div>
   </div>
    </div>
    <div className=' font-medium text-xl text-mama'>
<div className='flex justify-center items-center border-t-2 border-gray-700 pt-2'>
    <div className='mr-2'>
<img src="/copyright.png" alt="" />
    </div>
    <div>
    Copyright Rimel 2022. All right reserved

    </div>
    </div>    
    
    </div>
        </div>
    </div>
  )
}

export default Login