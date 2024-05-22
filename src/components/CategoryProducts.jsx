import React from 'react'

function CategoryProducts() {
  return (
    <div className='px-10 mt-20 lg:px-24'>
            <div className='flex items-center mb-10 '>
                <div className=''>
                    <img src="/rectangle_red.svg" alt="" />
                </div>
                <div className='text-happy ml-3 font-semibold '>
  Categories
                </div>
            </div>

            {/* browse by categories */}
            <div className='flex items-center justify-between relative'>
                <div className=' text-xl font-semibold md:text-4xl md:font-semibold'>Browse By Category</div>
                <div className='hidden lg:inline absolute xl:right-[-30px]'><img src="/arrows.svg" alt="" className='mr-12' /></div>
            </div>

            {/* products */}
            <div className='flex flex-col mt-10 lg:mt-10 mb-20 2xl:flex-row  2xl:justify-between md:grid md:grid-cols-6 md:gap-x-5 2xl:flex overflow-auto '>
                <div className=' flex flex-col  mb-3 items-center py-10 px-10  xl:flex-1  rounded-md border-2 border-gray-300 hover:cursor-pointer   '>
                    <div className='mb-5'>
                        <img src="cell_phone.svg" alt="" />
                    </div>
                    <div>Phones</div>
                </div>
                <div className=' flex flex-col  items-center mb-3 py-10 px-10 xl:flex-1 rounded-md border-2 border-gray-300 hover:cursor-pointer   '>
                    <div className='mb-5'>
                        <img src="category_computer.svg" alt="" />
                    </div>
                    <div>
                        Computers
                    </div>
                </div>
                <div className='  flex flex-col items-center  mb-3 py-10 px-10  xl:flex-1 rounded-md border-2 border-gray-300 hover:cursor-pointer  '>
                    <div className='mb-5'>
                        <img src="category_smartwatch.svg" alt="" />
                    </div>
                    <div>
                    SmartWatch
                    </div>
                </div>
                <div className=' bg-sammy text-white  mb-3 flex flex-col xl:flex-1  items-center py-10 px-10 rounded-md '>
                    <div className='mb-5'><img src="white_camera.svg" alt="" /></div>
                    <div>Camera</div>
                </div>
                <div className=' flex flex-col items-center mb-3 py-10 px-10 xl:flex-1  rounded-md border-2 border-gray-300 hover:cursor-pointer  '>
                    <div className='mb-5'>
                        <img src="category_headphone.svg" alt="" />
                    </div>
                    <div>
                    HeadPhones
                    </div>
                </div>
                <div className=' flex flex-col items-center mb-3 py-10 px-10 xl:flex-1  rounded-md border-2 border-gray-300 hover:cursor-pointer  '>
                    <div className='mb-5'>
                        <img src="category_gamepad.svg" alt="" />
                    </div>
                    <div>
                    Gaming
                    </div>
                </div>
                
            </div>
            
        </div>


  )
}

export default CategoryProducts