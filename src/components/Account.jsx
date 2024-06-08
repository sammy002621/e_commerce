import React ,{useContext} from 'react'
import Header from './Header'
import HeaderHome from './HeaderHome'
import Footer from './Footer'
import { UserContext } from '../context/userContext'

function Account() {
    const {user}=useContext(UserContext);
  return (
    <div>
        <Header/>
        <HeaderHome/>
        <div className='flex lg:mt-20 mt-10 mb-10 justify-between mx-5 sm:mx-10 md:mx-5 xl:mx-10  2xl:mx-60  '>
          <div className='flex   justify-around '>
          <div className='text-gray-600'>Home</div>
          <div className='mx-2'>/</div>
          <div><span className='hidden sm:inline'>My</span> Account</div>
          </div>
          <div className='ml-4'><span className=' sm:inline'>Welcome!</span><span className='pl-1 text-happy'>{user.name}</span></div>
        </div>

        <div className='xl:flex xl:mb-40  2xl:mx-60'>
        <div className=' mx-5 xl:mx-10 2xl:mx-0 2xl:mr-20 2xl:mt-10 mb-10'>
            <div>
            <p className='text-happy text-xl font-medium mb-4'>Edit Your Profile</p>
                <div>
                   <div className='md:flex'>
                    <div className='mb-4 flex-1 sm:mr-2 '>
                        <p className='mb-2'>First Name</p>
                        <input type="text" placeholder={`${user?.name}`} className='px-5 py-3 rounded-sm bg-happy w-full' />
                    </div>
                    <div className='mb-4 flex-1'><p className='mb-2'>Last Name</p>
                    <input type="text" placeholder={`${user?.name}`} className='px-5 py-3 rounded-sm bg-happy w-full' />
                    </div>
                   </div>
                   <div className='md:flex'>
   <div className='mb-4 flex-1 md:mr-2'>
    <p className='mb-2'>Email</p>
    <input type="text" placeholder={`${user?.email}`} className='px-5 py-3 rounded-sm bg-happy w-full' />
   </div>
   <div className='mb-4 flex-1'>
    <p className='mb-2'>Address</p>
    <input type="text" placeholder='Kingston, 5236, United State'  className='px-5 py-3 rounded-sm bg-happy w-full'/>
   </div>
                   </div>
                </div>

                <div className=''>
                    <p className='mb-2'>Password Changes</p>
                    <input type="password" placeholder='Current Password' className='px-5 py-3 rounded-sm bg-happy mb-4 w-full' />
                    <input type="password" placeholder='New Passoword' className='px-5 py-3 rounded-sm bg-happy mb-4 w-full' />
                    <input type="password" placeholder='Confirm New Password' className='px-5 py-3 rounded-sm bg-happy mb-4 w-full' />
                </div>

                <div className='flex items-center  justify-end mt-2   '>
                    <p>Cancel</p>
                    <button className='bg-sammy text-white px-5 py-2 ml-5'>Save changes</button>
                </div>
            </div>
            
        </div>








        

        <div className='flex justify-center  '>
        <div className=' xl:mt-20 2xl:mt-40 md:flex md:items-baseline md:justify-around  md:w-full xl:flex-col xl:ml-20'>
            {/* my account */}
            <div>
                <h1 className='text-xl font-medium mb-5'>Manage My Account</h1>
                <p className='ml-10 text-lg'>My Profile</p>
                <p className='ml-10 text-lg'>My Payment Options</p>
            </div>
            {/* my orders */}
            <div className='mt-5 mb-3 '>
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