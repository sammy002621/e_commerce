import React from 'react'

function Pricing() {
  return (
    <div className='mx-5  2xl:mx-60 2xl:pr-10 2xl:pl-12  flex flex-col lg:flex-row lg:justify-between  lg:items-baseline text-center mt-20 mb-20 lg:flex md:grid md:grid-cols-2 md:gap-x-10  md:mx-10  '>
                    <div className=' mb-10  border border-gray-300 rounded-md py-4 md:px-5 lg:px-8 2xl:px-16 xl:px-12'>
                        <div className='flex justify-center mb-6'>                           
                         <img src="/services_pricing_1.svg" alt="" />

</div>
                        <div className='flex justify-center font-medium text-3xl mb-1'>10.5k </div>
                        <div className='flex justify-center text-lg'>Sallers active our site</div>
                    </div>
                    <div className=' mb-10 py-4   rounded-md bg-sammy border border-happy text-white md:px-5 2xl:px-16 lg:px-8 xl:px-12' >
                        <div className='flex justify-center mb-5'>
                        <img src="/services_pricing_2.svg" alt="" />
                        </div>
                        <div className='flex justify-center font-medium text-3xl mb-2 '>
                        33k
                        </div>

                        <div className='flex justify-center text-lg'>
                        Monthly Product Sale
                        </div>

                        </div>
                    <div className=' mb-10 py-4 border border-gray-300 rounded-md md:px-5 2xl:px-10 lg:px-8'>
                        <div className='flex justify-center mb-5'>
                        <img src="/services_pricing_3.svg" alt="" />

                        </div>
                        <div className='flex justify-center mb-2 font-medium text-3xl'>45.5k</div>
                        <div className='flex justify-center text-lg'>Customer active in our site</div>
                    </div>


                    <div className=' mb-10 py-4 border border-gray-300 rounded-md px-5 2xl:px-10  lg:px-8' >
                        <div className='flex justify-center mb-5'>
                        <img src="/services_pricing_4.svg" alt="" />
                        </div>
                        <div className='flex justify-center  font-medium text-3xl '>
                        25k
                        </div>

                        <div className='flex justify-center text-lg pb-2'>
                        Anual gross sale in our site
                        </div>

                        </div>
                  </div>
  )
}

export default Pricing