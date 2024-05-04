import React from 'react'

function Header() {
  return (
    <div className='bg-black text-white flex pl-80 items-center py-3'>
            <div>
                <p className='ml-80'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
 <a href='google.com' className='font-bold underline ml-3'>ShopNow</a></p>
            </div>
            <div className='ml-80'>
            
                <select name="" id=""  className='bg-transparent outline-none'>
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