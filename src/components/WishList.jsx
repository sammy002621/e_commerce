import React from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import Footer from './Footer'

function WishList() {
  return (
    <div>
        <Header/>
        <HeaderHome/>

        <div>
            {/* wishlist */}
            <div className='mt-10 mx-5 xl:flex xl:items-center xl:mx-20 xl:justify-between'>
                <div className='text-lg'>Wishlist <span>(4)</span></div>
                <div className='hidden xl:inline xl:px-10 xl:py-3 xl:rounded-md xl:border xl:border-gray-100 text-lg font-semibold'><button>Move All To Blog</button></div>
            </div>

            {/* just for you */}









            
            <div className='flex mx-5 '>
               <div className='w-full xl:w-auto flex flex-col  pt-9 md:grid md:grid-cols-2  md:mx-10 md:gap-x-5   2xl:flex 2xl:flex-row  xl:grid xl:grid-cols-3  xl:gap-y-2 xl:gap-x-8 xl:mx-20 2xl:gap-x-5 '>
               <div className='mb-5 '>
                <div className='bg-happy pt-3 w-full  lg:w-[300px] rounded-lg overflow-hidden '>
                    <div className='flex justify-between items-center mx-2'>
                    <div>
                    <button className='bg-sammy text-white px-3 py-1 rounded-md'>-35%</button>
                    </div>
                    <div className=''>
                        <img src="/delete_wishlist.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='mx-16 md:ml-20 '>
                            <img src="/gamer.svg" alt="" />
                        </div>
                       
                    </div>
                    <div className='bg-black w-full flex justify-center py-3 text-white  '>
                        <div className='mr-2'><img src="/wishlist_cart.svg" alt="" /></div>
                        <div>Add to Cart</div>
                    </div>
                    
                </div>
                
                
                <div className=' mb-4 '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        Gucci duffle bag
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>

                    </div>

                    {/* here */}

               </div>
               <div>
                {/* first */}
               <div className='bg-happy  pt-3  lg:w-[300px]  rounded-lg overflow-hidden'>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div className='mr-2'>
                        <img src="/delete_wishlist.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className=' mx-16 md:ml-20'>
                            <img src="/chair.svg" alt="" />
                        </div>
                       
                    </div>
                    <div className='bg-black flex justify-center py-3 rounded-sm text-white  overflow-hidden'>
                        <div className='mr-2'><img src="/wishlist_cart.svg" alt="" /></div>
                        <div>Add to Cart</div>
                    </div>
                    
                </div>
                <div className=' mb-10 '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        RGB liquid CPU Cooler
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            
                        </div>
                        
                    </div>

               </div>
               <div>
                {/* second */}
               <div className='bg-happy  pt-3  lg:w-[300px]  rounded-lg overflow-hidden '>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div className='mr-2'>
                        <img src="/delete_wishlist.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className=' mx-16 md:ml-20'>
                            <img src="/keyboard.svg" alt="" />
                        </div>
                        
                       
                    </div>
                    <div className='bg-black flex justify-center py-3 rounded-sm text-white  overflow-hidden'>
                        <div className='mr-2'><img src="/wishlist_cart.svg" alt="" /></div>
                        <div>Add to Cart</div>
                    </div>
                    
                </div>
                <div className=' mb-10 '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        GP11 Shooter USB Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            
                        </div>
                        
                    </div>

               </div>
               <div>
                {/* third */}
               <div className='bg-happy  pt-3  lg:w-[300px]  rounded-lg overflow-hidden '>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div className='mr-2'>
                        <img src="/delete_wishlist.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='mx-16 md:ml-20'>
                            <img src="/television.svg" alt="" />
                        </div>
                       
                    </div>
                    <div className='bg-black flex justify-center py-3 rounded-sm text-white  overflow-hidden'>
                        <div className='mr-2'><img src="/wishlist_cart.svg" alt="" /></div>
                        <div>Add to Cart</div>
                    </div>
                    
                </div>
                <div className='  mb-10'>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        Quilted Satin Jacket
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            
                        </div>
                        
                    </div>
               </div>
               <div>
                {/* fourth */}
               <div className='bg-happy  pt-3  lg:w-[300px]  rounded-lg sm:mr-2 overflow-hidden'>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div className='mr-2'>
                        <img src="/delete_wishlist.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='mx-16 md:ml-20'>
                            <img src="/gamer.svg" alt="" />
                        </div>
                       
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
                        
                    </div>

               </div>
               </div>
            </div>

            <div className='flex items-center md:mx-5 xl:mx-16 xl:mr-20 xl:justify-between'>
                <div className='flex justify-between items-center mx-5 md:mx-1'>
                <div>
                    <img src="/rectangle_red.svg" alt="" />
                </div>
                <div className=' text-xl ml-3 font-semibold'>
                    Just For You
                </div>
                </div>

                <div className='hidden xl:inline xl:px-10 xl:py-3 xl:rounded-md xl:border xl:border-gray-100 text-lg font-semibold'>
                    <button>See All</button>
                </div>
                
            </div>


            <div className='flex mx-5 '>
               <div className='w-full xl:w-auto flex flex-col  pt-9 md:grid md:grid-cols-2  md:mx-10 md:gap-x-5   2xl:flex 2xl:flex-row  xl:grid xl:grid-cols-3  xl:gap-y-2 xl:gap-x-8 xl:mx-20 2xl:gap-x-5 '>
               <div className='mb-5 '>
                <div className='bg-happy pt-3 w-full  lg:w-[300px] rounded-lg overflow-hidden '>
                    <div className='flex justify-between items-center mx-2'>
                    <div>
                    <button className='bg-sammy text-white px-3 py-1 rounded-md'>-35%</button>
                    </div>
                    <div className=''>
                        <img src="/delete_wishlist.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='mx-16 md:ml-20 '>
                            <img src="/gamer.svg" alt="" />
                        </div>
                       
                    </div>
                    <div className='bg-black w-full flex justify-center py-3 text-white  '>
                        <div className='mr-2'><img src="/wishlist_cart.svg" alt="" /></div>
                        <div>Add to Cart</div>
                    </div>
                    
                </div>
                
                
                <div className=' mb-4 '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        Gucci duffle bag
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>

                    </div>

                    {/* here */}

               </div>
               <div>
                {/* first */}
               <div className='bg-happy  pt-3  lg:w-[300px]  rounded-lg overflow-hidden'>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div className='mr-2'>
                        <img src="/delete_wishlist.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className=' mx-16 md:ml-20'>
                            <img src="/chair.svg" alt="" />
                        </div>
                       
                    </div>
                    <div className='bg-black flex justify-center py-3 rounded-sm text-white  overflow-hidden'>
                        <div className='mr-2'><img src="/wishlist_cart.svg" alt="" /></div>
                        <div>Add to Cart</div>
                    </div>
                    
                </div>
                <div className=' mb-10 '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        RGB liquid CPU Cooler
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            
                        </div>
                        
                    </div>

               </div>
               <div>
                {/* second */}
               <div className='bg-happy  pt-3  lg:w-[300px]  rounded-lg overflow-hidden '>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div className='mr-2'>
                        <img src="/delete_wishlist.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className=' mx-16 md:ml-20'>
                            <img src="/keyboard.svg" alt="" />
                        </div>
                        
                       
                    </div>
                    <div className='bg-black flex justify-center py-3 rounded-sm text-white  overflow-hidden'>
                        <div className='mr-2'><img src="/wishlist_cart.svg" alt="" /></div>
                        <div>Add to Cart</div>
                    </div>
                    
                </div>
                <div className=' mb-10 '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        GP11 Shooter USB Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            
                        </div>
                        
                    </div>

               </div>
               <div>
                {/* third */}
               <div className='bg-happy  pt-3  lg:w-[300px]  rounded-lg overflow-hidden '>
                    <div className='flex justify-between items-center'>

                    <div className='mx-2'>
                    <button className='bg-button text-white px-3 py-1 rounded-md'>NEW</button>
                    </div>
                    <div className='mr-2'>
                        <img src="/delete_wishlist.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='mx-16 md:ml-20'>
                            <img src="/television.svg" alt="" />
                        </div>
                       
                    </div>
                    <div className='bg-black flex justify-center py-3 rounded-sm text-white  overflow-hidden'>
                        <div className='mr-2'><img src="/wishlist_cart.svg" alt="" /></div>
                        <div>Add to Cart</div>
                    </div>
                    
                </div>
                <div className='  mb-10'>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        Quilted Satin Jacket
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            
                        </div>
                        
                    </div>
               </div>
               <div>
                {/* fourth */}
               <div className='bg-happy  pt-3  lg:w-[300px]  rounded-lg sm:mr-2 overflow-hidden'>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div className='mr-2'>
                        <img src="/delete_wishlist.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='mx-16 md:ml-20'>
                            <img src="/gamer.svg" alt="" />
                        </div>
                       
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
                        
                    </div>

               </div>
               </div>
            </div>

            <Footer/>
        </div>
    </div>
  )
}

export default WishList