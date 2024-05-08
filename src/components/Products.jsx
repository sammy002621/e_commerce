import React from 'react'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Products() {
    let [product1,setProduct1]=useState(1);
    let [product2,setProduct2]=useState(2);

    const increment1 = ()=>{

            setProduct1(prevState=>prevState+1);
        
    }
    const decrement1 = ()=>{
        if(product1<=0){

        }else{
            setProduct1(prevState=>prevState-1);
        }
        
    }


    const increment2 = ()=>{

        setProduct2(prevState=>prevState+1);
    
}
const decrement2 = ()=>{
    if(product2<=0){

    }else{
        setProduct2(prevState=>prevState-1);
    }
    
}

    

  return (
    <div className='lg:mx-40 mt-10 lg:mt-20 mx-4'>
        {/* the first row */}
        
        <div className='w-full flex justify-between  px-2 sm:px-12 py-10 text-lg font-baseline mb-10 items-center  shadow-md'>
          <div className='flex-1  sm:flex sm:justify-start '>Product</div>
          <div className='flex-1 '>Price</div>
          <div className='flex-1 '>Quantity</div>
          <div className=' w-[80px] pl-2 pr-1 '>SubTotal</div>
        </div>

        {/* the second row */}
        <div className='w-full flex justify-between  px-2 sm:px-12 py-10 text-lg font-baseline mb-10 items-center  shadow-md'>
          <div className='flex items-center  flex-1 '>
            <div className='
            pr-2 hidden sm:inline
            '>
                <img src="monitor_cart.svg" alt="" />
            </div>
            <div className='w-1/2 md:w-2/3'>
                LCD Monitor
            </div>
          </div>
          <div className=' flex-1'>
          $650
          </div>
          <div className='flex-1 '>
            <div className=' w-1/2 lg:w-1/4 flex items-center justify-center  border-2 border-gray-400 rounded-md h-1/4'>
                <div className=' mr-1 md:mr-5'>{product1}</div>
                <div className='flex flex-col juistify-center'>
                    <div onClick={increment1}  className=' flex justify-center'><button><KeyboardArrowUpIcon/></button></div>
                    <div onClick={decrement1} className=''><button><KeyboardArrowDownIcon/></button></div>
                </div>
            </div>
          </div>
          <div className=' pl-2  w-[70px]'>$650</div>
        </div>


        {/* the third row */}
        <div className='w-full flex justify-between   px-2 sm:px-12 py-10 text-lg font-baseline mb-10 items-center shadow-md'>
          <div className='flex items-center flex-1   '>
            <div className=' pr-2 hidden sm:inline
            '>
                <img src="gamer_cart.svg" alt="" />
            </div>
            <div className='w-1/2 md:w-2/3 mr-1'>
            H1 Gamepad
            </div>
          </div>
          <div className='flex-1  '>
          $550
          </div>
          <div className='flex-1 '><div className=' w-1/2 lg:w-1/4 flex items-center justify-center  border-2 border-gray-400 rounded-md '>
                <div className='pl-1 mr-1 md:mr-5 '>{product2}</div>
                <div className='flex flex-col juistify-center'>
                    <div onClick={increment2}  className=' flex justify-center'><button><KeyboardArrowUpIcon/></button></div>
                    <div onClick={decrement2} className=''><button><KeyboardArrowDownIcon/></button></div>
                </div>
            </div></div>
          <div className=' w-[70px]'>$1100</div>
        </div>
        
    </div>
  )
}

export default Products