import React from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'

function CheckOut() {
  return (
    <div>
        <Header/>
        <HeaderHome/>

        <div className='flex  mx-5 lg:mx-20 2xl:mx-80 lg:mt-20 mt-10 mb-10 '>
          <div className='flex   justify-around '>
          <div><span className=''>My</span> Account</div>
          <div className=''>/</div>
          <div>Product</div>
          <div className=''>/</div>
          <div><span className='hidden md:inline'>View</span> Cart</div>
          <div className=''>/</div>
          <div>CheckOut</div>
          

          </div>
        </div>

        <h1 className='xl:mx-20 mx-5 text-3xl mb-10'>Billing Details</h1>

        <div>
            {/* billing details form */}
            <div className='mx-5'>
                <div className='max-w-[750px] mb-5'>
                    <p className='mb-2'>First Name <span className='text-happy'>*</span></p>
                    <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

                </div>
                <div className='max-w-[750px] mb-5'>
                <p className='mb-2'>Company Name</p>
                <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

                </div>
                <div className='max-w-[750px] mb-5'>
                <p className='mb-2'>Street Address <span className='text-happy'>*</span></p>
                <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

                </div>
                <div className='max-w-[750px] mb-5'>
                <p className='mb-2'> Apartment, floor, etc. (optional)</p>
                <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

                </div>
                <div className='max-w-[750px] mb-5'>
                <p className='mb-2'>Town/City <span className='text-happy'>*</span></p>
                <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

                </div>
                <div className='max-w-[750px] mb-5'>
                <p className='mb-2'> Phone Number <span className='text-happy'>*</span></p>
                <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

                </div>
                <div className='max-w-[750px] mb-5'>
                <p className='mb-2'>Email Address <span className='text-happy'>*</span></p>
                <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

                </div>
                <div className='flex items-center'>
                    <div className='mr-2'><img src="checkOut_checkbox.svg" alt="" /></div>
                   <div>Save this information <span className='hidden sm:inline'>for faster check-out next time</span>  </div>
                </div>
            </div>

            {/* product details */}

        </div>
    </div>
  )
}

export default CheckOut