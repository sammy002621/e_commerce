import React from 'react'

function Staff() {
  return (
    <div>
        <div className='flex flex-col mx-5 lg:flex-row  lg:justify-between mb-10 md:mb-0 2xl:mx-60 2xl:px-10  md:grid md:grid-cols-2 md:gap-x-4 lg:flex  md:mx-10 xl:mt-40  '>
        <div className='mb-5  '>
            <div><img src="/founder.svg" alt="" /></div>
            <div className='py-4'>
                   <p className='text-2xl font-medium'>Tom Cruise</p>
                   <p className='text-sm  mb-2'>Founder & Chairman</p>
                   <div className='flex items-center w-[100px] justify-between'>
                    <div className='mr-1 sm:mr-0'><img src="/twitter.png" alt="" /></div>
                    <div className='mr-1 sm:mr-0'><img src="/instagram.png" alt="" /></div>
                    <div><img src="/linkedIn.png" alt="" /></div>
                   </div>
         </div>
        </div>
        <div className='mb-5 '>
        <div><img src="/director.svg" alt="" /></div>
        <div className='py-4'>
                   <p className='text-2xl font-medium'>Emma Watson</p>
                   <p className='text-sm  mb-2'>Managing Director</p>
                   <div className='flex items-center w-[100px]  justify-between'>
                    <div className='mr-1 sm:mr-0'><img src="/twitter.png" alt="" /></div>
                    <div className='mr-1 sm:mr-0'><img src="/instagram.png" alt="" /></div>
                    <div><img src="/linkedIn.png" alt="" /></div>
                   </div>
         </div>
        </div>
        <div>
        <div className='mb-5 '>
            <img src="/designer.svg" alt="" />
        </div>
        <div className='py-4'>
                   <p className='text-2xl font-medium'>Will Smith</p>
                   <p className='text-sm  mb-2'>Product Designer</p>
                   <div className='flex items-center w-[100px]  justify-between'>
                    <div className='mr-1 sm:mr-0'><img src="/twitter.png" alt="" /></div>
                    <div className='mr-1 sm:mr-0'><img src="/instagram.png" alt="" /></div>
                    <div><img src="/linkedIn.png" alt="" /></div>
                   </div>
         </div>
        </div>
    </div>

    <div className='flex justify-center  mb-10 md:my-20'>
        <img src="/dots_2.svg" alt="" />
    </div>
    </div>

   
  )
}

export default Staff