import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Footer from './Footer';

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
                    <option value="French" >French</option>
                    <option value="Spanish" >Spanish</option>
                    <option value="Portugeuse" >Portugeuse</option>
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
        <Footer/>
    </div>
  )
}

export default Login