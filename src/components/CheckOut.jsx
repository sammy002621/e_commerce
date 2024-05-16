import React from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import Footer from './Footer'

function CheckOut() {
  return (
    <div>
        <Header/>
        <HeaderHome/>

        <div className='flex  mx-5 lg:mx-20 2xl:mx-80 lg:mt-20 mt-10 mb-10 xl:px-5 '>
          <div className='flex   justify-around '>
          <div><span className='hidden sm:inline'>My</span> Account</div>
          <div className=''>/</div>
          <div>Product</div>
          <div className=''>/</div>
          <div><span className='hidden md:inline'>View</span> Cart</div>
          <div className=''>/</div>
          <div>CheckOut</div>
          

          </div>
        </div>

        <h1 className='xl:mx-20 xl:px-5 mx-5 text-3xl mb-10 '>Billing Details</h1>

        <div className='xl:flex xl:mx-20 xl:mb-40'>
            {/* billing details form */}
            <div className='mx-5 xl:mr-40'>
                <div className='max-w-[750px] mb-5'>
                    <p className='mb-2 text-gray-500 md:text-xl'>First Name <span className='text-happy'>*</span></p>
                    <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

                </div>
                <div className='max-w-[750px] mb-5'>
                <p className='mb-2 text-gray-500 md:text-xl'>Company Name</p>
                <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

                </div>
                <div className='max-w-[750px] mb-5'>
                <p className='mb-2 text-gray-500 md:text-xl'>Street Address <span className='text-happy'>*</span></p>
                <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

                </div>
                <div className='max-w-[750px] mb-5'>
                <p className='mb-2 text-gray-500 md:text-xl'> Apartment, floor, etc. (optional)</p>
                <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />
                </div>
                <div className='max-w-[750px] mb-5 md:text-xl'>
                <p className='mb-2 text-gray-500'>Town/City <span className='text-happy'>*</span></p>
                <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

                </div>
                <div className='max-w-[750px] mb-5 md:text-xl'>
                <p className='mb-2 text-gray-500'> Phone Number <span className='text-happy'>*</span></p>
                <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

                </div>
                <div className='max-w-[750px] mb-5 md:text-xl'>
                <p className='mb-2 text-gray-500'>Email Address <span className='text-happy'>*</span></p>
                <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />

                </div>
                <div className='flex items-center'>
                    <div className='mr-2'><img src="checkOut_checkbox.svg" alt="" /></div>
                   <div>Save this information <span className='hidden sm:inline'>for faster check-out next time</span>  </div>
                </div>
            </div>

            {/* product details */}

            <div className='mx-5 my-20 xl:w-2/5'>
              {/* lcd monitor */}
              <div className='flex items-center justify-between mb-3'>
              <div className='flex items-center'>
                <div className='mr-2 xl:mr-4'><img src="gamer_cart.svg" alt="" /></div>
                <div className='md:text-2xl font-baseline'>LCD Monitor</div>
              </div>
              <p className='md:text-2xl'>$650</p>
              </div>
              <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='mr-2 xl:mr-4'><img src="monitor_cart.svg" alt="" /></div>
                <div className='md:text-2xl font-baseline'>H1 Gamepad</div>
              </div>
              <p className='md:text-2xl'>$650</p>
              </div>
              {/* gamepad */}
              

              {/* Subtotal */}
              <div className='flex items-center justify-between border-b-2 mt-2 pb-4 mb-4'>
                <div className='md:text-2xl font-baseline'>SubTotal:</div>
                <div className='md:text-2xl'>$1750</div>
              </div>

              {/* shipping */}
              <div className='flex items-center justify-between border-b-2 pb-4 '>
                <div className='md:text-2xl font-baseline'>Shipping:</div>
                <div className='md:text-2xl'>Free</div>
              </div>

              {/* total */}
              <div className='flex items-center justify-between mt-4 mb-4'>
                <div className='md:text-2xl font-baseline'>Total:</div>
                <div className='md:text-2xl'>$1750</div>
              </div>

              {/* bank and methods of payment */}
              <div className='flex items-center justify-between mb-4'>
                <div><input type="radio" name="" id="" className='mr-4' /><span className='md:text-2xl font-baseline'>Bank</span></div>
                <div><img src="check_out_bank.svg" alt="" /></div>
              </div>

              {/* cash on delivery */}
              <div className='mb-4'>
                <input type="radio" className='mr-4' /> <span className='md:text-2xl font-baseline'>Cash On delivery</span> 
              </div>

              {/* coupon code */}
              <div></div>

              <button className='bg-sammy text-white px-5 py-3 md:text-2xl font-medium rounded-sm hover:bg-hover'>Place Order</button>

            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default CheckOut