import React from 'react'
import Footer from './Footer';
import Header from './Header';
import HeaderHome from './HeaderHome';
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <div>
        {/* header */}
        <Header/>


        {/* body */}
<HeaderHome/>

        <div className='px-5 lg:px-0 lg:w-[80%] flex lg:mt-20 lg:h-[720px]'>
                <div className='hidden w-[65%] lg:inline lg:w-[60%] object-cover bg-center bg-footer_texture bg-red-600'>
                </div>
                <div className='lg:w-[5%]  flex items-center justify-center  '>
                   
                </div>
                <div className='w-full  md:w-[80%] lg:w-[50%]  pt-20 lg:pt-60 flex justify-end md:mx-auto lg:pl-20 overflow-hidden '>
                    <div className=''>
                        <h1 className='text-3xl font-medium mb-4'>Create an account</h1>
                        <p className='text-baseline mb-10'>Enter your details below</p>
                        <form action="" className='mt-5'>
                        
                        <input type="text" placeholder='Name' className='bg-transparent border-b-2  border-gray-700 outline-none pb-2  mb-10 w-full' />
                        <input type="text"  placeholder='Email or Phone Number' className='bg-transparent border-b-2  border-gray-700 outline-none pb-2  mb-10 w-full'/>
                            <input type="text" placeholder='Password' className='bg-transparent border-b-2  outline-none pb-2 border-gray-700  mb-10 w-full' />
                            <div className=''>
                                <div className='mb-4'>
                                <button className='text-white bg-sammy px-10 py-3 rounded-md w-full' type='submit'>Create Account</button>
                                </div>
                                <div className='flex items-center border-black border  px-10 py-3 rounded-md w-full justify-center'>
                                   <div className='mr-2'>
                                             <img src="/Icon-Google.svg" alt="" />
                                   </div>
                                   <div className='text-lg border-gray-500 hover:cursor-pointer '>
                                    Sign up with Google
                                   </div>
                                </div>

                                <div className='text-center mt-9 text-lg text-gray-700 flex items-center justify-center'>
                                      <div className='mr-4'>
                                        Already have Account
                                      </div>
                                      <div>
                                        <Link to={'/login'}>Login</Link>
                                        <div className='border border-gray-600'></div>
                                      </div>
                                     
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


export default Signup