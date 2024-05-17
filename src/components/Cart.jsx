import React from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import Products from './Products'

function Cart() {
  return (
    <div>
        <Header/>
        <HeaderHome/>
        <div className='flex  mx-5 sm:mx-8 lg:mx-40 lg:mt-20 mt-10 '>
          <div className='flex   w-1/4 sm:w-1/12 justify-around '>
          <div className='text-gray-600'>Home</div>
          <div className='mx-2'>/</div>
          <div>Cart</div>
          </div>
        </div>

        <Products/>
    </div>
  )
}

export default Cart