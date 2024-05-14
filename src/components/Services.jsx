import React from 'react'

function Services() {
  return (
    <div className='mx-5 flex flex-col lg:flex-row lg:justify-between xl:mx-40 lg:items-center tex-center'>
                    <div className=' mb-10 py-2'>
                        <div className='flex justify-center mb-6'>                           
                         <img src="/services.svg" alt="" />

</div>
                        <div className='flex justify-center font-bold text-lg mb-1'>FREE AND FAST DELIVERY</div>
                        <div className='flex justify-center text-lg'>Free delivery for all orders over $140</div>
                    </div>
                    <div className=' mb-10 py-2'>
                        <div className='flex justify-center mb-5'>
                            <img src="/services_1.svg" alt="" />
                        </div>
                        <div className='flex justify-center text-lg font-bold mb-2 '>
                        24/7 CUSTOMER SERVICE
                        </div>

                        <div className='flex justify-center text-lg'>
                        Friendly 24/7 customer support
                        </div>

                        </div>
                    <div className=' mb-10 py-2'>
                        <div className='flex justify-center mb-5'>
                        <img src="/services_2.svg" alt="" />

                        </div>
                        <div className='flex justify-center mb-2 font-bold text-lg'>MONEY BACK GUARANTEE</div>
                        <div className='flex justify-center text-lg'>We reurn money within 30 days</div>
                    </div>
                  </div>
  )
}

export default Services