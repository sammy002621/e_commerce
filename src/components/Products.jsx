import React from 'react'

function Products() {
  return (
    <div className='lg:mx-40 mt-10 lg:mt-20'>
        {/* the first row */}
        
        <div className='w-full flex justify-between  px-2 sm:px-12 py-10 text-lg font-baseline mb-10 items-center bg-green-600'>
          <div className='flex-1  sm:flex sm:justify-start '>Product</div>
          <div className='flex-1 '>Price</div>
          <div className='flex-1 '>Quantity</div>
          <div className=' w-[80px] pl-2 pr-1 '>SubTotal</div>
        </div>

        {/* the second row */}
        <div className='w-full flex justify-between  px-2 sm:px-12 py-10 text-lg font-baseline mb-10 items-center  bg-green-600'>
          <div className='flex items-center  flex-1 '>
            <div className='
            pr-2 hidden sm:inline
            '>
                <img src="monitor_cart.svg" alt="" />
            </div>
            <div className='w-1/2 sm:w-2/3'>
                LCD Monitor
            </div>
          </div>
          <div className=' flex-1'>
          $650
          </div>
          <div className='flex-1 '>Quantity</div>
          <div className=' pl-2  w-[70px]'>$650</div>
        </div>


        {/* the third row */}
        <div className='w-full flex justify-between   px-2 sm:px-12 py-10 text-lg font-baseline mb-10 items-center bg-green-600'>
          <div className='flex items-center flex-1   '>
            <div className=' pr-2 hidden sm:inline
            '>
                <img src="gamer_cart.svg" alt="" />
            </div>
            <div className='w-1/2 sm:w-2/3 mr-1'>
            H1 Gamepad
            </div>
          </div>
          <div className='flex-1  '>
          $550
          </div>
          <div className='flex-1 '>Quantity</div>
          <div className=' w-[70px]'>$1100</div>
        </div>
        
    </div>
  )
}

export default Products