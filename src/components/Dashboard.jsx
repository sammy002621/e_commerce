
import React,{useEffect,useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChartsOverviewDemo from './ChartsOverviewDemo';
import { PieChart } from './PieChart';
import { orderedData } from '../constants/ordered';
import OrderedFood from './OrderedFood';
import LineGraph from './LineChart'
import { BarLoader, BeatLoader } from 'react-spinners';





function Dashboard() {



  return (
    <div className='h-[100vh] flex justify-center items-center'>
    <main className='bg-white  h-[145vh] font-roboto overflow-auto'>
      {/* header */}
      <header className='flex border-b-2 fixed top-0 right-0 left-0 z-[999px] bg-white shadow-md'>
        <div className='w-[20%] bg-sidebar py-8 pl-14'>
          <img src="/foodLogo.svg" alt="" className='w-[40%]' />
        </div>
        <div className='w-[55%]'>
          <div className='flex bg-sidebar w-[80%] ml-16  mt-4 items-center rounded-lg'>
            <div className='w-[95%]'>
              <input type="text" placeholder='Search' className='w-full px-6 py-2 rounded-lg bg-transparent font-poppins text-lg font-medium text-black outline-0' />
            </div>
            <div className='cursor-pointer'>
              <SearchIcon/>
            </div>
          </div>
        </div>
        <div className='w-[25%] flex mx-10 mt-4'>
          <div className='w-[20%] flex justify-end'>
            <div className=' bg-burger w-[40px] ml-4 h-[40px] object-cover rounded-full pl-3 text-xl pt-[5px] relative'>
              {/* <img src="/burger.jpeg" alt="" className='w-full absolute top-1 right-1' /> */}
              B
            </div>
          </div>
          <div className='w-[40%] pl-4'>
            <select name="" id="" className=' bg-transparent text-lg '>
              <option value="Burger" className=''>Delicious Burger</option>
              <option value="Pizza">Pizza</option>
              <option value="Omlet">Omlet</option>
              <option value="Cheese">Cheese</option>
            </select>
          </div>
          <div className='relative pt-1'>
            <img src="notification_icon.svg" alt="" className='w-[20px]' />
            <img src="notify_dot.svg" alt="" className='absolute top-0 right-0 h-[10px]' />
          </div>
        </div>
      </header>

      <div className='flex'>
        {/* sidebar */}
        <section className='w-[19.3%] bg-sidebar h-[90dvh] pt-14 fixed left-0 top-[95px] z-[40px]'>
          {/* main */}
          <div className='mb-4'>
            <div className='mx-14 text-xl mb-4 font-medium'>MENU</div>
            <div className='bg-gray-700 mx-5 flex gap-x-4 items-center w-[75%] py-4 px-7 rounded-md mb-2 hover:cursor-pointer '>
              <img src="/chart.svg" alt="" className='w-[30px]' />
              <p className='text-lg'>DashBoard</p>
            </div>
            <div className=' mx-5 flex gap-x-4 items-center w-[75%] py-4 px-7 rounded-md mb-2 hover:cursor-pointer hover:bg-gray-300'>
              <img src="/dashboard_cart.svg" alt="" className='w-[30px]' />
              <p className='text-lg'>Food Order</p>
            </div>
            <div className=' mx-5 flex gap-x-4 items-center w-[75%] py-4 px-7 rounded-md mb-2 hover:cursor-pointer hover:bg-gray-300'>
              <img src="/document.svg" alt="" className='w-[30px]' />
              <p className='text-lg'>Manage Menu</p>
            </div>
            <div className=' mx-5 flex gap-x-4 items-center w-[75%] py-4 px-7 rounded-md mb-2 hover:cursor-pointer hover:bg-gray-300'>
              <img src="/chat.svg" alt="" className='w-[30px]' />
              <p className='text-lg'>Customer Review</p>
            </div>
          </div>
          {/* others */}
          <div>
            <div className='mb-2 mx-14 text-xl'>OTHERS</div>
            <div className=' mx-5 flex gap-x-4 items-center w-[75%] py-4 px-7 rounded-md mb-2 hover:cursor-pointer hover:bg-gray-300'>
              <img src="/settings.svg" alt="" className='w-[30px]' />
              <p className='text-xl'>Settings</p>
            </div>
            <div className='mx-5 flex gap-x-4 items-center w-[75%] py-4 px-7 rounded-md mb-2 hover:cursor-pointer hover:bg-gray-300'>
              <img src="/wallet.svg" alt="" className='w-[30px]' />
              <p className='text-xl'>Payment</p>
            </div>
            <div className='mx-5 flex gap-x-4 items-center w-[75%] py-4 px-7 rounded-md mb-2 hover:cursor-pointer hover:bg-gray-300'>
              <img src="/profile.svg" alt="" className='w-[30px]' />
              <p className='text-xl'>Accounts</p>
            </div>
            <div className='mx-5 flex gap-x-4 items-center w-[75%] py-4 px-7 rounded-md mb-2 hover:cursor-pointer hover:bg-gray-300'>
              <img src="/information.svg" alt="" className='w-[30px]' />
              <p className='text-xl'>Help</p>
            </div>
          </div>
        </section>

        {/* main */}
        <section className='mt-20 w-[80.7%] px-20 right-0 top-[95px] z-[10px] left-[350px] absolute'>
          <p className='text-dashboard text-2xl font-medium'>Dashboard</p>

          <div className='flex w-full mt-10'>
            {/* revenue */}
            <div className=' w-[65%] border-b-2 border-r-2 pb-3 pr-4'>
              <div className='flex justify-between items-start'>
                <p className='text-xl text-black'>Revenue</p>
                <button className='border-button2 border-2 py-2 px-5 rounded-lg text-xl text-button_color font-medium hover:cursor-pointer mr-6'>View Report</button>
              </div>
              <p className='font-medium text-2xl text-black'>IDR 7.852.000</p>
              {/* icon */}
              <div className='flex items-center gap-x-2 mt-3'>
                <ArrowUpwardIcon style={{ color: "green" }} />
                {/* text */}
                <p className='text-lg'><span className='text-green-700'>2.1%</span> vs last week</p>
              </div>
              <p className='mt-5 text-xl mb-10'>Sales from 1-12 Dec, 2020</p>
              <ChartsOverviewDemo />
              <div className='flex items-start gap-x-6 mt-3 mb-2'>
                <div className='flex gap-x-2'>
                  <img src="/last_6_days.svg" alt="" />
                  <p>Last 6 days</p>
                </div>
                <div className='flex gap-x-2'>
                  <img src="/last_week.svg" alt="" />
                  <p>Last Week</p>
                </div>
              </div>
            </div>
            {/* order time */}
            <div className=' w-[35%] border-b-2 pl-10 pb-3'>
              <div className='flex justify-between items-start'>
                <p className='text-xl text-black'>Order Time</p>
                <button className='border-button2 border-2 py-2 px-5 rounded-lg text-xl text-button_color font-medium hover:cursor-pointer '>View Report</button>

              </div>
              <p className='mt-5 text-xl mb-10'> From 1-6 Dec, 2020</p>
              <PieChart />
            </div>
          </div>

          <div className='flex'>
            <div className=' w-[35%] pt-10 pl-10 pr-3'>
              <p className='text-xl text-black mb-3'>Your Rating</p>
              <p className='text-lg'>Lorem ipsum dolor sit amet connecteur</p>
              <div className='relative'>
                <div className='bg-hygiene h-[180px] w-[180px] rounded-full text-white flex items-center justify-center mb-1 absolute top-[50px] right-[200px]'>
                  <div>
                    <p className='text-center'>85%</p>
                    <p>Hygiene</p>
                  </div>
                </div>

                <div className=' bg-packaging h-[200px] w-[200px] rounded-full text-white flex items-center justify-center mb-1  absolute top-[170px] right-[200px]'>
                  <div className=''>
                    <p className='text-center'>85%</p>
                    <p>Food Taste</p>
                  </div>
                </div>
                <div className='bg-food_taste h-[250px] w-[250px] rounded-full text-white flex items-center justify-center absolute right-0 top-10'>
                  <div>
                    <p className='text-center'>92%</p>
                    <p>Packaging</p>
                  </div>
                </div>
                <div></div>
                {/* <img src="/hygiene_bar.svg" alt="" />
                <img src="/packaging_circle.svg" alt="" />
                <img src="/food_taste_circle.svg" alt="" className='absolute top-[197px] right-[230px] h-[220px]' /> */}
              </div>
            </div>

            {/* most ordered food */}
            <div className=' w-[30%]  pt-10 pl-5 pr-3 border-l-2 border-r-2'> 
            <p className='text-xl text-black mb-3'>Most Ordered Food</p>
            <p className='mt-5 text-lg mb-10'>Adipiscing elit, sed do eiusmod tempor</p>
            {
                orderedData.map((data)=>{
            return <OrderedFood id={data.id} name={data.name} image={data.image} price={data.price}/>
                }
                    
                )
            }
            
            </div>
            <div className=' w-[35%] mt-10 pl-7'>
            <div className='flex justify-between items-start'>
                <p className='text-xl text-black'>Order Time</p>
                <button className='border-button2 border-2 py-2 px-5 rounded-lg text-xl text-button_color font-medium hover:cursor-pointer'>View Report</button>
              </div>

              <p className='font-medium text-2xl text-black'>2.568</p>
              <div className='flex items-center gap-x-2 mt-3'>
                <ArrowDownwardIcon style={{ color: "red" }} />
                {/* text */}
                <p className='text-lg'><span className='text-red-700'>2.1%</span> vs last week</p>
                
              </div>
              <p className='mt-5 text-xl mb-10'>Sales from 1-12 Dec, 2020</p>
              <LineGraph/>
              <div className='flex items-start gap-x-6 mt-3 mb-2 ml-2'>
                <div className='flex gap-x-2'>
                  <img src="/last_6_days.svg" alt="" />
                  <p>Last 6 days</p>
                </div>
                <div className='flex gap-x-2'>
                  <img src="/last_week.svg" alt="" />
                  <p>Last Week</p>
                </div>
              </div>
            </div>
          </div>
          {/* rating */}
          {/* order */}
          <div></div>
        </section>
      </div>
    </main>
    </div>
    
  )
}

export default Dashboard;