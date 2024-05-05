import React from 'react'
import Footer from './Footer';
import Header from './Header';
import HeaderHome from './HeaderHome';
function Login() {
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