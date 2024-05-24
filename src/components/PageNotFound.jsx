import React from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
        <Header/>
        <HeaderHome/>
        <div className='flex mx-5 lg:mx-10 2xl:mx-80 lg:mt-20 mt-10 mb-10   '>
          <div className='flex   justify-around '>
          <div className='text-gray-600'>Home</div>
          <div className='mx-2'>/</div>
          <div> 404 Error</div>
          </div>
        </div>

   <div className='flex justify-center text-center mx-5 items-center  mb-40'>
    <div className='md:mt-20 md:pt-10 mt-10'>
        <h1 className='mb-5 lg:text-3xl lg:font-semibold text-3xl font-medium '>404 Not Found</h1>
        <p className='mb-10 font-light text-sm'>Your visited page not found. You may go home page.</p>
        <Link className='bg-sammy text-white px-5 py-2 rounded-sm font-semibold text-xl' to={'/'}>Back to homepage</Link>
    </div>
   </div>

   <Footer/>

    </div>
  )
}

export default PageNotFound