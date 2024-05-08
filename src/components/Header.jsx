import React from 'react'

function Header() {
  return (
    <div className='bg-green-600 text-white flex  lg:justify-center lg:items-center py-3 w-full overflow-hidden'>
            <div className='md:w-11/12 xl:pl-80 ml-2 xl:ml-20 '>
                <p className='w-2/3 md:w-full md:pl-5'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
 <a href='google.com' className='font-bold underline ml-3'>ShopNow</a></p>
            </div>
            <div className=' w-4/6 sm:w-2/16 md:w-4/12'>
            
            <select name="" id=""  className='bg-transparent outline-none  w-9/12 sm:w-9/12 sm:ml-12 lg:w-1/3 lg:ml-20 xl:ml-40 xl:w-1/5'>
                    <option value="English" >English</option>
                    <option value="French" >French</option>
                    <option value="Spanish" >Spanish</option>
                    <option value="Portugeuse" >Portugeuse</option>
                </select>
            </div>
        </div>
  )
}

export default Header