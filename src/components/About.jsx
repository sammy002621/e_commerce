import React from 'react'
import HeaderHome from './HeaderHome'
import Header from './Header'
import Pricing from './Pricing'
import Staff from './Staff'
import Services from './Services'
import Footer from './Footer'

function About() {
  return (
    <div>
      <Header/>
      <HeaderHome/>
      <div className='flex mx-5 lg:mx-10 2xl:mx-80 lg:mt-20 mt-10 mb-10 '>
          <div className='flex   w-1/4 sm:w-1/12 justify-around '>
          <div className='text-gray-600'>Home</div>
          <div className='mx-2'>/</div>
          <div>About</div>
          </div>
        </div>


        <div className='flex 2xl:mx-80 lg:items-center lg:justify-between xl:mx-5 '>
          <div className=' ml-5 md:flex-1 lg:ml-0 mr-10'>
            <h1 className='text-4xl font-medium mb-5'>Our Story</h1>
            <p className='mb-5'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
          <div className=' hidden lg:inline'>
            <img src="/about_side.svg" alt="" />
          </div>
        </div>

        <Pricing/>
        <Staff/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default About