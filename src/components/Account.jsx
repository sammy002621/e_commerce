import React from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import Footer from './Footer'

function Account() {
  return (
    <div>
        <Header/>
        <HeaderHome/>
        <div className='flex lg:mt-20 mt-10 mb-10 justify-between mx-5  2xl:mx-60  '>
          <div className='flex   justify-around '>
          <div className='text-gray-600'>Home</div>
          <div className='mx-2'>/</div>
          <div><span className='hidden sm:inline'>My</span> Account</div>
          </div>
          <div className='ml-4'>Welcome!<span className='pl-1 text-happy'>Md Rimel</span></div>
        </div>

        <div className='xl:flex xl:mb-40 2xl:justify-between 2xl:mx-80'>
        <div className='mx-5 '>
            <div>
            <p className='text-happy text-xl font-medium mb-4'>Edit Your Profile</p>
                <div>
                   <div className='md:flex'>
                    <div className='mb-4 md:max-w-[750px] md:mr-10'>
                        <p className='mb-2'>First Name</p>
                        <input type="text" placeholder='Md' className='px-5 py-3 rounded-sm bg-happy w-full' />
                    </div>
                    <div className='mb-4 md:max-w-[750px]'><p className='mb-2'>Last Name</p>
                    <input type="text" placeholder='Rimel' className='px-5 py-3 rounded-sm bg-happy w-full' />
                    </div>
                   </div>
                   <div className='md:flex'>
   <div className='mb-4 md:max-w-[750px] md:mr-10'>
    <p className='mb-2'>Email</p>
    <input type="text" placeholder='rimel1111@gmail.com' className='px-5 py-3 rounded-sm bg-happy w-full' />
   </div>
   <div className='mb-4 md:max-w-[750px]'>
    <p className='mb-2'>Address</p>
    <input type="text" placeholder='Kingston, 5236, United State'  className='px-5 py-3 rounded-sm bg-happy w-full'/>
   </div>
                   </div>
                </div>

                <div className='md:max-w-[750px]'>
                    <p className='mb-2'>Password Changes</p>
                    <input type="password" placeholder='Current Password' className='px-5 py-3 rounded-sm bg-happy mb-4 w-full' />
                    <input type="password" placeholder='New Passoword' className='px-5 py-3 rounded-sm bg-happy mb-4 w-full' />
                    <input type="password" placeholder='Confirm New Password' className='px-5 py-3 rounded-sm bg-happy mb-4 w-full' />
                </div>

                <div className='flex items-center  justify-end mt-2 md:max-w-[750px]  '>
                    <p>Cancel</p>
                    <button className='bg-sammy text-white px-5 py-2 ml-5'>Save changes</button>
                </div>
            </div>
            
        </div>








        

        <div className='flex justify-center  '>
        <div className='mt-20 md:flex md:items-baseline md:justify-around  md:w-full xl:flex-col xl:ml-20'>
            {/* my account */}
            <div>
                <h1 className='text-xl font-medium mb-5'>Manage My Account</h1>
                <p className='ml-10 text-lg'>My Profile</p>
                <p className='ml-10 text-lg'>My Payment Options</p>
            </div>
            {/* my orders */}
            <div className='mt-5 mb-5 '>
                <h1 className='text-xl font-medium'>My Orders</h1>
                <p className='ml-10 text-lg mt-5'>My Returns</p>
                <p className='ml-10 text-lg'>My cancellations</p>
            </div>
            {/* my wishlist */}
            <div><h1 className='text-xl font-medium'>My WishList</h1></div>
        </div>
        </div>
        </div>

        <Footer/>
        
    </div>
  )
}

export default Account