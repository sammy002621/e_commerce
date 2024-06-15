import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function Dashboard() {
  return (
    <main className='bg-white h-[100vh] font-poppins'>
{/* header */}
<header className='flex border-b-2'>
<div className='w-[20%] bg-sidebar py-8 pl-14'>
    <img src="/foodLogo.svg" alt="" className='w-[40%]' />
</div>
<div className='w-[55%] '>
    <div className='flex bg-sidebar w-[80%] ml-16  mt-4 items-center rounded-lg'>
        <div className='w-[95%]'>
        <input type="text" placeholder='Search' className='w-full px-6 py-2 rounded-lg bg-transparent font-poppins text-lg font-medium text-gray-200' />
        </div>
        <div className='cursor-pointer'>
            <SearchIcon/>
        </div>
    </div>
</div>
<div className='w-[25%]  flex mx-10 mt-4'>
    <div className='w-[20%] flex justify-end  '>
        <div className=' bg-burger w-[30px]  ml-4 h-[30px] object-cover rounded-full px-2  text-lg pb-1 mt-1'>
            {/* <img src="/burger.jpg" alt="" className='object-contain bg-transparent' /> */}
            B
        </div>
    </div>
    <div className='w-[60%] pl-4  '>
       <select name="" id="" className=' bg-transparent text-lg '>
        <option value="Burger" className=''>Delicious Burger</option>
        <option value="Pizza">Pizza</option>
        <option value="Omlet">Omlet</option>
        <option value="Cheese">Cheese</option>
        
       </select>
    </div>
    <div className='relative pt-1'>
        <img src="notification_icon.svg" alt="" className='w-[20px]' />
        <img src="notify_dot.svg" alt="" className='absolute top-0 right-0 h-[10px] ' />
    </div>
</div>
</header>

<div className='flex'>
    {/* sidebar */}
    <section className='w-[19.3%] bg-sidebar h-[90dvh] pt-14'>
        {/* main */}
     <div>
<div>MENU</div>
<div className='bg-gray-700 mx-5 flex gap-x-4 items-center w-[75%] py-3 px-7 rounded-md'>
    <img src="/chart.svg" alt="" className='w-[30px]' />
    <p>DashBoard</p>
   </div>
   <div className=' mx-5 flex gap-x-4 items-center w-[75%] py-3 px-7 rounded-md'>
    <img src="/dashboard_cart.svg" alt="" className='w-[30px]' />
    <p>Food Order</p>
   </div>
   <div className=' mx-5 flex gap-x-4 items-center w-[75%] py-3 px-7 rounded-md'>
    <img src="/document.svg" alt="" className='w-[30px]' />
    <p>Manage Menu</p>
   </div>
   <div className=' mx-5 flex gap-x-4 items-center w-[75%] py-3 px-7 rounded-md'>
    <img src="/chat.svg" alt="" className='w-[30px]' />
    <p>Customer Review</p>
   </div>
     </div>
     {/* others */}
     <div>
<div>OTHERS</div>
<div className=' mx-12'>Settings</div>
<div className='mx-12'>Payment</div>
<div className='mx-12'>Accounts</div>
<div className='mx-12'>Help</div>
     </div>
    </section>

    {/* main */}
    <section>
body
    </section>
</div>
    </main>
  )
}

export default Dashboard