import React from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import Footer from './Footer'

function Contacts() {
  return (
    <div>
        <Header/>
        <HeaderHome/>

        <div className='flex mx-5 lg:mx-20 lg:mt-20 mt-10 mb-10 '>
          <div className='flex   w-1/4 sm:w-1/12 justify-around '>
          <div className='text-gray-600'>Home</div>
          <div className='mx-2'>/</div>
          <div>Contacts</div>
          </div>
        </div>

        <div className='mx-5 shadow-sm'>
            <div></div>
            <div>
                <form action="">
                    <div className='md:grid md:grid-cols-3'>
                         <div><input type="text" placeholder='Your Name *' className='pl-4 py-2 rounded-sm mb-4 md:w-11/12' /></div>
                         <div><input type="text" placeholder='Your Email *'  className='pl-4  py-2 rounded-sm mb-4 md:w-11/12 '/></div>
                         <div><input type="text" placeholder='Your Phone *'  className='pl-4 py-2 rounded-sm mb-4 md:w-11/12  '/></div>
                         <div>
                            
                         </div>
                    </div>
                    <div >
                    <div><input type="text" placeholder='Your Message *'  className='pl-4 py-2 rounded-sm mb-4 md:w-full pb-60 '/></div>

                    </div>
                <div className='flex justify-end mx-5'>
                <button className='bg-sammy px-8 py-2 text-white rounded-sm text-lg font-medium'>Send Message</button>

                </div>

                </form>
            </div>
        </div>


        <div className='mx-5 my-20 ms:my-0'>
            <div>
                <div className=' flex items-center w-2/5 md:w-1/5 justify-between mb-4'>
                    <div><img src="/contact_phone.svg" alt="" /></div>
                    <div>Call To Us</div>
                </div>
                <p className='pb-2'>We are available 24/7, 7 days a week.</p>
                <p className='pb-2'>Phone: +8801611112222</p>
            </div>
            <div className='border-b-2 border-gray-300 mx-5 my-10 sm:my-0'></div>
            <div className=''>
                <div className='flex items-center'>
                    <div className='mr-3'><img src="/contacts_email.svg" alt="" /></div>
                    <div>Write To Us</div>
                </div>
                <p className='py-4'>Fill out our form and we will contact you within 24 hours.</p>
                <p className='py-2'>Emails: customer@exclusive.com</p>
                <p className='py-2'>Emails: support@exclusive.com</p>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Contacts