import React from 'react'
import Footer from './Footer';
import Header from './Header';
import HeaderHome from './HeaderHome';
function Signup() {
  return (
    <div>
        {/* header */}
        <Header/>


        {/* body */}
<HeaderHome/>

        <div className='w-[80%] flex mt-20 h-[720px]'>
                <div className='w-[60%] object-cover bg-bottom bg-footer_texture'>
                </div>
                <div className='w-[10%]  flex items-center justify-center  '>
                   
                </div>
                <div className='w-[30%]  pt-20 flex justify-center pl-20 overflow-hidden'>
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
                                        <a href="google.com">Login</a>
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