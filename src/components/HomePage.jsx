import React from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Footer from './Footer';
import Services from './Services';
import CategoryProducts from './CategoryProducts';
import BestSaleProducts from './BestSaleProducts';
import EnhnaceYourMusic from './EnhnaceYourMusic';
import ExploredProducts from './ExploredProducts';
function HomePage() {
  return (
    <div className='relative'>
        <Header/>
        <HeaderHome/>

            {/* <div className=' hidden 2xl:inline 2xl:absolute 2xl:right-16 2xl:text-white 2xl:top-40'>hello</div> */}
        {/* body */}
        <div className='flex px-5 md:px-10 lg:px-40   justify-between'>
            {/* the right side */}
            <div className=' hidden sm:inline lg:w-1/5 pt-10 md:pr-2 '>
    <div className='flex justify-between mb-5'>
        <div>Woman's Fashion</div>
        <div className='pr-2 lg:pr-10'><ChevronRightIcon/></div>
    </div>
    <div className='flex justify-between mb-5'>
        <div>Men's Fashion</div>
        <div className='pr-2 lg:pr-10'><ChevronRightIcon/></div>
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

            <div className='hidden sm:inline border-l-2 border-gray-300 '></div>
            {/* the left side */}

            <div className=' w-full lg:w-4/5  pt-10 md:mr-4 ' >
                <div className='  text-white  bg-black w-full lg:w-full md:ml-8 px-5  '>
                <div className='flex  pt-8 justify-center'>
                  <div className=' pt-9  w-full '>
                  <div className='flex items-center w-full  lg:w-5/12  mb-5  '>
                    <div className='hidden 2xl:inline lg:mr-4'>
       <img src="/apple.svg" alt="" />
                    </div>
                    <div className=' xl:text-lg 2xl:text-2xl'>
                    iPhone 14 Series
                    </div>
                </div>
                <div className='text-semibold text-xl lg:text-5xl font-semibold mb-5 leading-10'>
                <p className='mb-4 '>Up to 10%</p> off Voucher
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
                <div className='hidden w-full xl:w-4/5  md:mt-10  md:inline '>
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

        <div className='px-5 lg:px-20 mt-20'>
            {/* the first div */}
            <div className='flex items-center md:mx-5'>
                <div>
                    <img src="/rectangle_red.svg" alt="" />
                </div>
                <div className='text-happy ml-3 font-semibold'>
                    Today's
                </div>
            </div>
            {/* the second div */}
            <div className='flex items-center  mt-3 pr-11 md:mx-5  xl:relative'>
      <div className='  text-xl lg:text-2xl font-semibold lg:mr-60'>
        Flash Sales
      </div>
    
     <div className='hidden lg:flex lg:justify-between lg:items-center lg:flex-1 xl:w-full  lg:mr-1 lg:ml-auto'>
      <div className='mr-80 hidden 2xl:inline 2xl:absolute right-60
       '>




        <img src="/time.svg" alt="" />
      </div>
      <div className=' ml-auto xl:absolute right-[-50px] xl:right-[-5px]'>
      <img src="/arrows.svg" alt="" />
      </div>
      </div>
     
            </div>
{/*  the third div */}











<div className='flex '>
               <div className=' flex flex-col  pt-9 md:grid md:grid-cols-2 md:gap-x-5 md:mx-5   2xl:flex 2xl:flex-row  xl:grid xl:grid-cols-5 xl:gap-x-80  xl:gap-y-2  2xl:gap-x-5 overflow-auto '>
               <div className='mb-5  '>
                <div className='bg-happy px-3 pt-3 w-full  lg:w-[300px] rounded-lg mb-2'>
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
                <div className=' mb-4 lg:w-[300px]  '>
                        <div className=' font-medium pt-2 pb-1'>
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
               <div>
                {/* first */}
               <div className='bg-happy px-3 pt-3  lg:w-[300px]  rounded-lg '>
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
                <div className=' mb-10 lg:w-[300px] '>
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
                {/* second */}
               <div className='bg-happy px-3 pt-3  lg:w-[300px]  rounded-lg '>
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
                <div className=' mb-10 lg:w-[300px] '>
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
                <div className='  mb-10 lg:w-[300px]'>
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
                <div className='  mb-10 lg:w-[300px]'>
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
            {/* HERE ME */}
            
        </div>
        <div className='flex items-center justify-center'><button className='bg-sammy text-white text-xl font-medium px-10 sm:px-20 py-3 rounded-md mt-20 mb-20 hover:bg-hover'>View All Products</button></div>
        <div className='border-b-2 border-gray-200 mx-40'></div>

        {/* categories */}

        <CategoryProducts/>







        <div className='border-gray-300 mb-20 border-t-2 mx-40'></div>





            <BestSaleProducts/>





























  {/* ENHANCE YOUR MUSIC EXPERIENCE */}
           <EnhnaceYourMusic/>
                  {/* EXPLORE THE PRODUCTS */}

                  <ExploredProducts/>
                  <div className='flex items-center justify-center'><button className='bg-sammy text-white text-xl font-medium px-10 sm:px-20 py-3 rounded-md mt-20 mb-20 hover:bg-hover'>View All Products</button></div>

                  <div className='hidden lg:mx-40'>

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
            
           
                  </div>
                  

                  <Services/>
                  <Footer/>

    </div>
  )
}

export default HomePage