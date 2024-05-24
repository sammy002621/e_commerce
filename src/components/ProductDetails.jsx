import React,{useState} from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import Footer from './Footer'

function ProductDetails() {

    const [count,setCount]=useState(1);

    const incrementCount = ()=>{
        setCount(prev=>prev+1);
    }

    const decrementCount = ()=>{
        if(count<=1){

        }else{
            setCount(prev=>prev-1);
        }
    }
  return (
    <div>
        <Header/>
        <HeaderHome/>
        <div className='flex  mx-5 lg:mx-20 2xl:mx-14 lg:mt-20 mt-10 mb-10  md:text-xl '>
          <div className='flex   justify-around '>
          <div> Account</div>
          <div className='sm:mx-1'>/</div>
          <div>Gaming</div>
          <div className='sm:mx-1'>/</div>
          <div><span className='hidden md:inline'>Havic HV G-92</span>  Gamepad</div>
          

          </div>
        </div>

        {/* product */}
        <div className='flex flex-col xl:flex-row 2xl:mx-60 2xl:items-stretch mx-5 md:mx-20 xl:items-center '>

            {/* product_images */}
            <div className='hidden 2xl:inline  xl:mt-1'>
                <img src="gamepad_1.svg" alt="" className='mb-5' />
                <img src="gamepad_2.svg" alt="" className='mb-5' />
                <img src="gamepad_3.svg" alt="" className='mb-5' />
                <img src="gamepad_4.svg" alt="" />
            </div>

            {/* product_general_image */}
            <div className=' mr-10 2xl:mx-10 xl:w-[80%] xl:h-[700px] 2xl:w-[70%]  '>
                <img src="gamer_product_detail.svg" alt="" className='h-700px bg-cover ' />
            </div>

            {/* product_description_size_price */}

            <div className='my-5 xl:my-0'>
                <h1 className='text-xl font-bold mb-4'>Havic HV G-92 Gamepad</h1>
                {/* product_rating */}
                <div className='flex'>
                    <div></div>
                    <div className='text-gray-500 mb-3'>(150 Reviews)</div>
                    <div className='mx-5'>|</div>
                    <div className='text-button'>In Stock</div>
                </div>

                {/* product_price */}
                <h1 className='text-2xl font-medium mb-4'>$192.00</h1>
                <p className='text-base mb-5 md:w-4/5 '>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                <div className='border-b-2 border-gray-500 md:w-4/5 '></div>
                <div className='flex items-center  w-[130px] justify-between my-7'>
                    <div>Colours:</div>
                    <div><img src="/colour_change.svg" alt="" /></div>
                </div>

                <div className='flex items-baseline  w-[280px] my-7'>
                    <div className='mr-5'>Size:</div>
                    <div className='flex items-center justify-between flex-1'>
                        <div className='py-1 px-3 border border-gray-300 rounded-md'>xs</div>
                        <div className='py-1 px-3 border border-gray-300 rounded-md'>S</div>
                        <div className='py-1 px-3 border border-gray-300 rounded-md bg-sammy text-white border-none font-bold '>M</div>
                        <div className='py-1 px-3 border border-gray-300 rounded-md'>L</div>
                        <div className='py-1 px-3 border border-gray-300 rounded-md'>XL</div>
                    </div>
                </div>

                <div className='flex '>
                    <div className='flex rounded-md '>
                        <div className='px-3 flex items-center bg-sammy text-white' onClick={decrementCount}>-</div>
                        <div className='px-10 text-white flex items-center flex-1'>{count}</div>
                        <div className='bg-sammy text-white mr-5 px-3 flex items-center' onClick={incrementCount}>+</div>
                    </div>
                    <div className='text-center bg-sammy text-white px-5 py-2 rounded-md'><button>Buy Now</button></div>
                    <div className='hidden xl:inline'></div>
                </div>


                <div className='border-gray-700 rounded-md my-10 border md:w-4/5 '>
                    {/* free delivery */}
                    <div className='flex items-center py-7 px-1 border-b-2 border-gray-700'>
                        <div className='mx-5'><img src="/product_details_delivery.svg" alt="" /></div>
                        <div>
                        <div className='mb-3'><h1 className='font-medium text-lg'>Free Delivery</h1></div>
                        <div className='underline'><p>Enter your postal code for Delivery <span className='hidden md:inline'>Availability</span></p></div>
                        </div>
                    </div>
                    {/* return delivery */}
                    <div className='flex items-center  py-7 px-1'>
                        <div className='mx-5'>
                            <img src="product_details_return.svg" alt="" />
                        </div>
                        <div>
                        <div className='mb-3'><h1 className='text-lg font-medium'>Return delivery</h1></div>
                        <p>Free 30 Days Delivery Returns. <span className='hidden md:inline'>Details</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className='flex items-center mx-5 md:mx-20'>
                <div>
                    <img src="/rectangle_red.svg" alt="" />
                </div>
                <div className='text-happy ml-3 font-semibold'>
                Related Item
                </div>
            </div>

            <div className='flex  mx-5 xl:mx-20 2xl:mx-40'>
               <div className='w-full xl:w-auto flex flex-col  pt-9 md:grid md:grid-cols-2 md:gap-x-5 md:mx-10   2xl:flex 2xl:flex-row  xl:grid xl:grid-cols-3  xl:gap-y-2 2xl:gap-x-5 '>
               <div className='mb-5 '>
                <div className='bg-happy px-3 pt-3 w-full  lg:w-[300px] rounded-lg mb-2'>
                    <div className='flex justify-between items-center'>
                    <div>
                    <button className='bg-sammy text-white px-3 py-1 rounded-md'>-35%</button>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-20 md:ml-5'>
                            <img src="/gamer.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className=' mb-4 '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

                    {/* here */}

               </div>







               <div className='hover:cursor-pointer'>
                {/* fourth */}
               <div className='bg-happy  pt-3  lg:w-[300px]  rounded-lg sm:mr-2 overflow-hidden'>
                    <div className='flex justify-between items-center'>
                    <div>
                    <button className='bg-sammy text-white px-3 py-1 rounded-md mx-2'>-35%</button>
                    </div>
                    <div className='mr-2'>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between '>
                        <div className='mx-16  xl:ml-14'>
                            <img src="/gamer.svg" alt="" />
                        </div>
                        <div className='px-2'><img src="eye.svg" alt="" /></div>
                       
                    </div>
                    <div className='bg-black flex justify-center py-3 rounded-sm text-white  overflow-hidden'>
                        <div className='mr-2'><img src="/wishlist_cart.svg" alt="" /></div>
                        <div>Add to Cart</div>
                    </div>
                    
                </div>
                <div className='  mb-10'>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            
                        </div>


                        <div className='flex'>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
                            <div className='text-mama'>(88)</div>
                        </div>
                        
                    </div>

               </div>





               <div>
                {/* second */}
               <div className='bg-happy px-3 pt-3  lg:w-[300px]  rounded-lg '>
                    <div className='flex justify-between items-center'>
                    <div>
                    <button className='bg-sammy text-white px-3 py-1 rounded-md'>-35%</button>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className=' ml-20 md:ml-5'>
                            <img src="/keyboard.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className=' mb-10 '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

               </div>
               <div>
                {/* third */}
               <div className='bg-happy px-3 pt-3  lg:w-[300px]  rounded-lg '>
                    <div className='flex justify-between items-center'>
                    <div>
                    <button className='bg-sammy text-white px-3 py-1 rounded-md'>-35%</button>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-20 md:ml-5'>
                            <img src="/television.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='  mb-10'>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>
               </div>
               <div>
                {/* fourth */}
               <div className='bg-happy px-3 pt-3  lg:w-[300px]  rounded-lg sm:mr-2'>
                    <div className='flex justify-between items-center'>
                    <div></div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-20 md:ml-5'>
                            <img src="/gamer.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='  mb-10'>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

               </div>
               </div>
            </div>

            <Footer/>
    </div>
  )
}

export default ProductDetails