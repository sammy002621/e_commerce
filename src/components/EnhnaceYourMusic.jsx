import React from 'react'

function EnhnaceYourMusic() {
  return (
    <div className='mx-5 lg:mx-20  flex  lg:w-11/12 2xl:w-[1692px]  items-center bg-black justify-center rounded-sm lg:rounded-none'>
                {/* first enhance your music experience  */}
                    <div className='flex  w-11/12 pt-8 items-center'>
                    <div className='flex-1  '>
                        {/* categories_music_enhance */}
                        <div className='text-sammy mt-3 mb-5'>
                            categories  and shopping
                        </div>
                        <div className='text-white text-lg lg:text-4xl font-medium lg:w-6/12 mb-7'>
                            Enhance Your Music Experience
                        </div>
                                 {/* second time */}
                        <div className=''>
<img src="second_time.svg" alt="" />
                        </div>

                        <div>
                            <button className='bg-button text-white px-4 mb-4 lg:px-10 py-3 mt-7 rounded-md'>Buy Now!</button>
                        </div>
                    </div>
                             {/* second enhance your music experience */}
                             <div className='hidden md:ml-10 md:flex lg:w-[600px]  flex-1'>
                                <img src="speaker.svg" alt="" />
                             </div>
                    <div>

                    </div>
                    </div>
                  </div>
  )
}

export default EnhnaceYourMusic