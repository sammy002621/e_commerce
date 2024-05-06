import React from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Footer from './Footer';
function HomePage() {
  return (
    <div>
        <Header/>
        <HeaderHome/>
        {/* body */}
        <div className='flex px-40   justify-between h-[434px]'>
            {/* the right side */}
            <div className='  w-1/5 pt-10 '>
    <div className='flex justify-between mb-5'>
        <div>Woman's Fashion</div>
        <div className='pr-10'><ChevronRightIcon/></div>
    </div>
    <div className='flex justify-between mb-5'>
        <div>Men's Fashion</div>
        <div className='pr-10'><ChevronRightIcon/></div>
    </div>
    <div className='mb-5'>
    Electronics
    </div>
    <div className='mb-5'>
    Home & Lifestyle
    </div>
    <div className='mb-5'>
    Medicine
    </div>
    <div className='mb-5'>
    Sports & Outdoor
    </div>
    <div className='mb-5'>
    Baby’s & Toys
    </div>
    <div className='mb-5'>
    Groceries & Pets
    </div>
    <div className='mb-5'>
    Health & Beauty
    </div>
            </div>

            <div className='border-l-2 border-gray-300'></div>
            {/* the left side */}

            <div className='w-4/5  pt-10 ' >
                <div className='  text-white w-11/12 bg-black ml-12  '>
                <div className='flex  pt-8 justify-center'>
                  <div className=' pt-9 bg-black'>
                  <div className='flex items-center  w-8/12 justify-between mb-5'>
                    <div>
       <img src="/apple.svg" alt="" />
                    </div>
                    <div>
                    iPhone 14 Series
                    </div>
                </div>
                <div className='text-5xl font-semibold mb-5 leading-10'>
                <p className='mb-4'>Up to 10%</p> off Voucher
                </div>
                <div className='flex'>
                    <div className='mr-3'>
                        <div className=''>Shop Now</div>
                        <div className='border-b-2 border-white'> </div>
                    </div>
                    <div>
                      <ArrowRightAltIcon/>
                    </div>
                </div>
                </div>
                <div className='w-3/5 overflow-hidden ml-10 pl-60'>
            <img src="/dots.svg" alt=""  />
                </div>
                </div>

                <div className='flex justify-center'>
                    <div className='flex justify-center items-center mt-5 mb-5 '>
                      <img src="/dots_2.svg" alt="" />  
                    </div>
                </div>
                </div>
                
            </div>
            
        </div>

        <div className='px-40 mt-20'>
            {/* the first div */}
            <div className='flex items-center'>
                <div>
                    <img src="/rectangle_red.svg" alt="" />
                </div>
                <div className='text-happy ml-3 font-semibold'>
                    Today's
                </div>
            </div>
            {/* the second div */}
            <div className='flex items-center  mt-3 pr-11'>
      <div className=' text-2xl font-semibold mr-60'>
        Flash Sales
      </div>
      <div className='flex justify-between items-center flex-1'>
      <div className='mr-80'>
        <img src="/time.svg" alt="" />
      </div>
      <div>
      <img src="/arrows.svg" alt="" />
      </div>
      </div>
            </div>
{/*  the third div */}
            <div className='flex justify-between  '>
               <div className='w-full flex justify-between pt-9'>
               <div>
                <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                        <button className='bg-sammy text-white px-3 py-1 rounded-md'>-40%</button>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/gamer.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

                    {/* here */}

               </div>
               <div>
                {/* first */}
               <div className='bg-happy  pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center px-3'>
                    <div>
                        <button className='bg-sammy text-white px-3 py-1 rounded-md'>-35%</button>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between px-3'>
                        <div className='ml-5'>
                            <img src="/chair.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    <div className='bg-black text-white text-center pt-1 pb-1 w-full text-lg font-medium  hover:cursor-pointer'>Add to Chart</div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

               </div>
               <div>
                {/* second */}
               <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                        <button className='bg-sammy text-white px-3 py-1 rounded-md'>-30%</button>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/keyboard.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

               </div>
               <div>
                {/* third */}
               <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                        <button className='bg-sammy text-white px-3 py-1 rounded-md'>-25%</button>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/television.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>
               </div>
               <div>
                {/* fourth */}
               <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                        <button className='bg-sammy text-white px-3 py-1 rounded-md'>-40%</button>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/gamer.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

               </div>
               </div>
            </div>
            {/* HERE ME */}
            
        </div>
        <div className='flex items-center justify-center'><button className='bg-sammy text-white text-xl font-medium px-20 py-3 rounded-md mt-20 mb-20 hover:bg-hover'>View All Products</button></div>
        <div className='border-b-2 border-gray-200 mx-40'></div>

        {/* categories */}

        <div className='px-10 mt-20 lg:px-40'>
            <div className='flex items-center mb-10'>
                <div className=''>
                    <img src="/rectangle_red.svg" alt="" />
                </div>
                <div className='text-happy ml-3 font-semibold'>
  Categories
                </div>
            </div>

            {/* browse by categories */}
            <div className='flex items-center justify-between'>
                <div className=' text-xl font-semibold md:text-4xl md:font-semibold'>Browse By Category</div>
                <div><img src="/arrows.svg" alt="" className='mr-12' /></div>
            </div>

            {/* products */}
            <div className='flex flex-col  mt-20 mb-20 sm:flex-row '>
                <div className=' flex flex-col w-full mb-3 items-center py-10 px-20 rounded-md border-2 border-gray-300 hover:cursor-pointer sm:mr-2 overflow-x-hidden '>
                    <div className='mb-5'>
                        <img src="cell_phone.svg" alt="" />
                    </div>
                    <div>Phones</div>
                </div>
                <div className=' flex flex-col items-center mb-3 py-10 px-20 rounded-md border-2 border-gray-300 hover:cursor-pointer  sm:mr-2 '>
                    <div className='mb-5'>
                        <img src="cell_phone.svg" alt="" />
                    </div>
                    <div>
                        Computers
                    </div>
                </div>
                <div className='  flex flex-col items-center  mb-3 py-10 px-20 rounded-md border-2 border-gray-300 hover:cursor-pointer  sm:mr-2'>
                    <div className='mb-5'>
                        <img src="cell_phone.svg" alt="" />
                    </div>
                    <div>
                    SmartWatch
                    </div>
                </div>
                <div className=' bg-sammy text-white  mb-3 flex flex-col items-center py-10 px-20 rounded-md  sm:mr-2'>
                    <div className='mb-5'><img src="white_camera.svg" alt="" /></div>
                    <div>Camera</div>
                </div>
                <div className=' flex flex-col items-center mb-3 py-10 px-20 rounded-md border-2 border-gray-300 hover:cursor-pointer sm:mr-2 '>
                    <div className='mb-5'>
                        <img src="cell_phone.svg" alt="" />
                    </div>
                    <div>
                    HeadPhones
                    </div>
                </div>
                <div className=' flex flex-col items-center py-10 px-20  rounded-md border-2 border-gray-300 hover:cursor-pointer lg:h-[182px]   '>
                    <div className='mb-5'>
                        <img src="cell_phone.svg" alt="" />
                    </div>

                    <div>
                    Gaming
                    </div>
                </div>
            </div>
            
        </div>
        <div className='border-gray-300 mb-20 border-t-2 mx-40'></div>
            <div className=' mx-10 md:mx-40 md:mb-40'>
            <div className='flex items-center mb-10'>
                <div className=''>
                    <img src="/rectangle_red.svg" alt="" />
                </div>
                <div className='text-happy ml-3 font-semibold'>
This Month
                </div>
            </div>
            <div className='flex items-center justify-between mb-10'>
                <div className=' text-lg font-semibold sm:text-4xl sm:font-semibold'>Best Selling Products</div>
                <div><button  className='bg-sammy text-white px-10 py-3 text-lg font-medium rounded-md hover:bg-hover'>View All</button></div>
            </div>
            {/* BEST SELLING PRODUCTS */}
            <div className='flex  '>
               <div className='w-full flex flex-col  justify-between pt-9 md:flex-row'>
               <div className='mb-5'>
                <div className='bg-happy px-3 pt-3 w-full h-[270px] md:w-[300px] rounded-lg mb-2'>
                    <div className='flex justify-between items-center'>
                    <div>
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
                <div className='bg-white mb-4 '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

                    {/* here */}

               </div>
               <div>
                {/* first */}
               <div className='bg-happy px-3 pt-3 md:w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className=' ml-20 md:ml-5'>
                            <img src="/chair.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white mb-10 '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

               </div>
               <div>
                {/* second */}
               <div className='bg-happy px-3 pt-3 md:w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
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
                <div className='bg-white mb-10 '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

               </div>
               <div>
                {/* third */}
               <div className='bg-happy px-3 pt-3 md:w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
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
                <div className='bg-white  mb-10'>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>
               </div>
               <div>
                {/* fourth */}
               <div className='bg-happy px-3 pt-3 md:w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
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
                <div className='bg-white  mb-10'>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

               </div>
               </div>
            </div>
                  
            </div>

  {/* ENHANCE YOUR MUSIC EXPERIENCE */}
            <div className='mx-40  flex  w-10/12 items-center bg-black justify-center'>
                {/* first enhance your music experience  */}
                    <div className='flex  w-11/12 pt-8 items-center'>
                    <div className='flex-1  '>
                        {/* categories_music_enhance */}
                        <div className='text-sammy mt-3 mb-5'>
                            categories
                        </div>
                        <div className='text-white text-4xl font-medium w-6/12 mb-7'>
                            Enhance Your Music Experience
                        </div>
                                 {/* second time */}
                        <div>
<img src="second_time.svg" alt="" />
                        </div>

                        <div>
                            <button className='bg-button text-white px-10 py-3 mt-7 rounded-md'>Buy Now!</button>
                        </div>
                    </div>
                             {/* second enhance your music experience */}
                             <div className='w-[600px]  flex-1'>
                                <img src="speaker.svg" alt="" />
                             </div>
                    <div>

                    </div>
                    </div>
                  </div>
                  {/* EXPLORE THE PRODUCTS */}


                  <div className='mx-40 mt-20'>
                    <div className='flex items-center mb-10'>
                <div className=''>
                    <img src="/rectangle_red.svg" alt="" />
                </div>
                <div className='text-happy ml-3 font-semibold'>
Our Products
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='text-4xl font-semibold'>Explore Our Products</div>
                <div><img src="/arrows.svg" alt="" className='mr-12' /></div>
            </div>
            {/*  the first  explored products */}

            <div className='flex justify-between mb-20 '>
               <div className='w-full flex justify-between pt-9'>
               <div>
                <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/gamer.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

                    {/* here */}

               </div>
               <div>
                {/* first */}
               <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/chair.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

               </div>
               <div>
                {/* second */}
               <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/keyboard.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

               </div>
               <div>
                {/* third */}
               <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/television.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>
               </div>
               <div>
                {/* fourth */}
               <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/gamer.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            <div className='mr-4 text-happy'>$120</div>
                            <div className='text-mama'>$160</div>
                        </div>
                        <div className='flex'>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                    </div>

               </div>
               </div>
            </div>


            {/* the second explored products */}

            <div className='flex justify-between mb-20 '>
               <div className='w-full flex justify-between pt-9'>
               <div>
                <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                    <button className='bg-button text-white px-3 py-1 rounded-md'>NEW</button>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/gamer.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            
                        </div>
                        <div className='flex'>
                        <div className='text-happy mr-3'>$160</div>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                        {/* THE FIRST BUTTON DIV */}
                        <div className='mt-2'>
                            <img src="colour_change_red.svg" alt="" />
                        </div>
                    </div>

                    {/* here */}

               </div>
               <div>
                {/* first */}
               <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>

                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/chair.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            
                        </div>
                        <div className='flex'>
                           <div className='text-happy mr-3'>$160</div>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                        {/* THE SECOND BUTTON DIV */}
                        <div className='mt-2'>
                            <img src="colour_change_green.svg" alt="" />
                        </div>
                    </div>

               </div>
               <div>
                {/* second */}
               <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                    <button className='bg-button text-white px-3 py-1 rounded-md'>NEW</button>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/keyboard.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                           
                        </div>
                        <div className='flex'>
                        <div className='text-happy mr-3'>$160</div>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                        {/* THE THIRD BUTTON DIV */}

                        <div className='mt-2'>
                            <img src="colour_change_black.svg" alt="" />
                        </div>
                    </div>

               </div>
               <div>
                {/* third */}
               <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/television.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            
                        </div>
                        <div className='flex'>
                        <div className='text-happy mr-3'>$160</div>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                        {/* THE FOURTH BUTTON DIV */}

                        <div className='mt-2'>
                            <img src="colour_change_black.svg" alt="" />
                        </div>
                    </div>
               </div>
               <div>
                {/* fourth */}
               <div className='bg-happy px-3 pt-3 w-[300px] h-[270px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                    </div>
                    <div>
                        <img src="/heart.svg" alt="" />
                    </div>
                    </div>
                    <div className='flex items-start mt-2 justify-between'>
                        <div className='ml-5'>
                            <img src="/gamer.svg" alt="" />
                        </div>
                        <div>
                            <img src="/eye.svg" alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='bg-white '>
                        <div className='text-lg font-medium pt-2 pb-1'>
                        HAVIT HV-G92 Gamepad
                        </div>
                        <div className='flex pb-1'>
                            
                        </div>
                        <div className='flex'>
                        <div className='text-happy mr-3'>$160</div>
                            <div className='mr-3'>
                            <img src="/five_star.svg" alt="" />
                            </div>
                            <div className='text-mama'>(88)</div>
                        </div>
                        {/* THE FIFTH BUTTON DIV */}
                        <div className='mt-2'>
                            <img src="colour_change_red.svg" alt="" />
                        </div>
                    </div>

               </div>
               </div>
            </div>

                  </div>
                  <div className='flex items-center justify-center'><button className='bg-sammy text-white text-xl font-medium px-20 py-3 rounded-md mt-20 mb-20 hover:bg-hover'>View All Products</button></div>

                  <div className='mx-40'>

                   <div  className='flex items-center mb-10'>
                   <div className=''>
                    <img src="/rectangle_red.svg" alt="" />
                </div>

                  <div className='text-happy ml-3 font-semibold'>
Featured
                </div>

                   </div>

                   <div className='mb-10'>
                <div className='text-2xl font-semibold'>New Arrival</div>
            </div>

            <div className='flex  bg-black text-white w-10/12 justify-between' >
                {/* the first div */}
                <div className='relative  '>
                    <div>
                        <img src="arrival_gamer.svg" alt="" />
                    </div>
                    <div className='absolute bottom-8 text-white ml-5'>
                        <p className='mb-3'>PlayStation 5</p>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <div className=''>
                            <div>Shop Now</div>
                            <div className='border-b-2 border-red-600'></div>
                        </div>
                    </div>
                </div>

                {/* the second div */}
                <div className=' bg-green-300'>
                    <div>
                        <div>women's collections</div>
                        <div>
                            <div>Speakers</div>
                            <div>Perfume</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* delivery services */}
            <div className='flex justify-between items-center  w-8/12 ml-40 mt-40 mb-10 '>
               {/* free and fast delivery */}
                <div className='flex flex-col items-center hover:cursor-pointer'>
                    <div className='mb-5'>
                        <img src="services.svg" alt="" />
                    </div>
                    <div className=' flex flex-col items-center '>
                        <p className='text-2xl font-semibold mb-2'>FREE AND FAST DELIVERY</p>
                        <p>Free delivery for all orders over $140</p>
                    </div>
                </div>

                <div>
                <div className='flex flex-col items-center hover:cursor-pointer  mb-5'>
                <img src="services_1.svg" alt="" />
                    </div>
                    <div className='flex flex-col items-center '>
                        <p className='text-2xl font-semibold mb-2'>24/7 CUSTOMER SERVICE</p>
                        <p>Friendly 24/7 customer support</p>
                    </div>
                </div>

                <div className='flex flex-col items-center hover:cursor-pointer'>
                <div className='mb-5'>
                        <img src="services_2.svg" alt="" />
                    </div>
                    <div className='flex flex-col items-center  ' >
                        <p className='text-2xl font-semibold mb-2 '>MONEY BACK GUARANTEE</p>
                        <p>We reurn money within 30 days</p>
                    </div>
                </div>
            </div>
           
                  </div>
                  <div className='flex justify-end mr-40 '> 
                  <img src="up_arrow.svg" alt="" /></div>

                  <Footer/>

    </div>
  )
}

export default HomePage