import React from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function HomePage() {
  return (
    <div>
        <Header/>
        <HeaderHome/>
        {/* body */}
        <div className='flex px-40 py-10 justify-between h-[480px]'>
            {/* the right side */}
            <div className='  w-1/5 border-r-2 border-gray-300 '>
    <div className='flex justify-between mb-5'>
        <div>Woman's Fashion</div>
        <div><ChevronRightIcon/></div>
    </div>
    <div className='flex justify-between mb-5'>
        <div>Men's Fashion</div>
        <div><ChevronRightIcon/></div>
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
            {/* the left side */}

            <div className='w-4/5 ' >
                <div className='  text-white w-11/12 bg-black ml-5  '>
                <div className='flex  pt-8 justify-center'>
                  <div className=' pt-9 bg-black'>
                  <div className='flex items-center  w-full justify-between mb-5'>
                    <div>
       <img src="/apple.svg" alt="" />
                    </div>
                    <div>
                    iPhone 14 Series
                    </div>
                </div>
                <div className='text-4xl font-semibold mb-5 leading-10'>
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
                <div className='w-3/5 overflow-hidden ml-5 '>
            <img src="/dots.svg" alt="" />
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
                <div className='text-happy ml-3'>
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
                <div className='bg-happy px-3 pt-3 w-[300px] h-[260px] rounded-lg'>
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
               <div className='bg-happy px-3 pt-3 w-[300px] h-[260px] rounded-lg'>
                    <div className='flex justify-between items-center'>
                    <div>
                        <button className='bg-sammy text-white px-3 py-1 rounded-md'>-35%</button>
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
               <div className='bg-happy px-3 pt-3 w-[300px] h-[260px] rounded-lg'>
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
               <div className='bg-happy px-3 pt-3 w-[300px] h-[260px] rounded-lg'>
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
               <div className='bg-happy px-3 pt-3 w-[300px] h-[260px] rounded-lg'>
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
        </div>
    </div>
  )
}

export default HomePage