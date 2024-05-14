import React from 'react'

function Pricing() {
  return (
    <div className='mx-5 flex flex-col lg:flex-row lg:justify-between xl:mx-40 lg:items-center tex-center mt-10'>
                    <div className=' mb-10  border border-gray-300 rounded-md py-4'>
                        <div className='flex justify-center mb-6'>                           
                         <img src="/services_pricing_1.svg" alt="" />

</div>
                        <div className='flex justify-center font-medium text-3xl mb-1'>10.5k </div>
                        <div className='flex justify-center text-lg'>Sallers active our site</div>
                    </div>
                    <div className=' mb-10 py-4   rounded-md bg-sammy text-white' >
                        <div className='flex justify-center mb-5'>
                        <img src="/services_pricing_2.svg" alt="" />
                        </div>
                        <div className='flex justify-center font-medium text-3xl mb-2 '>
                        33k
                        </div>

                        <div className='flex justify-center text-lg'>
                        Monthly Produduct Sale
                        </div>

                        </div>
                    <div className=' mb-10 py-4 border border-gray-300 rounded-md'>
                        <div className='flex justify-center mb-5'>
                        <img src="/services_pricing_3.svg" alt="" />

                        </div>
                        <div className='flex justify-center mb-2 font-medium text-3xl'>45.5k</div>
                        <div className='flex justify-center text-lg'>Customer active in our site</div>
                    </div>


                    <div className=' mb-10 py-4 border border-gray-300 rounded-md' >
                        <div className='flex justify-center mb-5'>
                        <img src="/services_pricing_4.svg" alt="" />
                        </div>
                        <div className='flex justify-center  font-medium text-3xl '>
                        25k
                        </div>

                        <div className='flex justify-center text-lg'>
                        Anual gross sale in our site
                        </div>

                        </div>
                  </div>
  )
}

export default Pricing