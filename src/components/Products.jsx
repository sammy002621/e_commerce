import React from 'react'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Footer from './Footer';

function Products() {
    let [product1,setProduct1]=useState(1);
    let [product2,setProduct2]=useState(2);
    let [product1_price,setProduct1Price]=useState(650);
    let [product2_price,setProduct2Price]=useState(1100);

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
    <div>
      <div className='lg:mx-40 mt-10 lg:mt-20 mx-4'>
        {/* the first row */}
        
        <div className='w-full flex justify-between  px-2 sm:px-12 py-10 sm:text-lg font-baseline mb-10 items-center  shadow-md'>
          <div className='flex-1  sm:flex sm:justify-start mr-2 sm:mr-0 '>Product</div>
          <div className='flex-1 '>Price</div>
          <div className='flex-1 '>Quantity</div>
          <div className=' w-[80px] pl-2 pr-1 '>SubTotal</div>
        </div>

        {/* the second row */}
        <div className='w-full flex justify-between  px-2 sm:px-12 py-10 text-lg font-baseline mb-10 items-center  shadow-md'>
          <div className='flex items-center  flex-1 '>
            <div className='
            pr-2 
            '>
                <img src="monitor_cart.svg" alt="" className='w-full' />
            </div>
            <div className='w-1/2 md:w-2/3 hidden sm:flex'>
                LCD Monitor
            </div>
          </div>
          <div className=' flex-1'>
          $650
          </div>
          <div className='flex-1 '>
            <div className=' w-4/5 sm:w-1/2 flex items-center justify-center  border-2 border-gray-400 rounded-md h-1/4'>
                <div className=' pl-1 mr-1 md:mr-5 '>{product1}</div>
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
            <div className=' pr-2 
            '>
                <img src="gamer_cart.svg" alt="" />
            </div>
            <div className='w-1/2 md:w-2/3 hidden sm:flex'>
            H1 Gamepad
            </div>
          </div>
          <div className='flex-1  '>
          $550
          </div>
          <div className='flex-1 '><div className=' w-4/5 sm:w-1/2 flex items-center justify-center  border-2 border-gray-400 rounded-md '>
                <div className='pl-1 mr-1 md:mr-5 '>{product2}</div>
                <div className='flex flex-col juistify-center'>
                    <div onClick={increment2}  className=' flex justify-center'><button><KeyboardArrowUpIcon/></button></div>
                    <div onClick={decrement2} className=''><button><KeyboardArrowDownIcon/></button></div>
                </div>
            </div></div>
          <div className=' w-[70px]'>$1100</div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='border border-gray-600 sm:px-5  px-2 py-2 mb-2 rounded-md'>
          
          <button className='sm:text-md font-semibold'>Return To shop</button>
          </div>
          <div className='border-gray-600 border px-5 py-2 mb-2 rounded-md lg:px-10'><button className='text-md font-semibold'>Update Cart</button></div>
          
          
          </div>

           <div className='flex flex-col lg:flex-row  lg:items-baseline lg:justify-between mt-20'>
           <div className='flex flex-col  lg:flex-row lg:justify-between  lg:my-0 my-4 '>
            <div className='flex xl:flex-1  justify-center'><input type="text" placeholder='Coupon Code' className='border-2 border-gray-300 text-center lg:py-4 lg:mr-2 py-4 outline-none  rounded-md  w-11/12 2xl:w-[400px] xl:px-6 xl:w-[320px]' /></div>
            <div className='flex justify-center '><button className='bg-sammy text-white px-4 rounded-md  lg:px-6 w-11/12 py-4 mt-4 lg:mt-0  xl:w-auto xl:px-6 '>Apply Coupon</button></div>
           </div>

           <div className='border-2 border-gray-400 py-2 px-4 my-4 rounded-md xl:w-2/5  '>
            <h1 className='text-lg font-semibold mb-4 pt-2'>Cart Total</h1>
            <div className='flex border-b-2 border-gray-400 text-base justify-between pb-2 mb-3'>
              <div>Subtotal:</div>
              <div>${product1_price+product2_price}</div>
            </div>
            <div className='flex border-b-2 border-gray-400 text-base justify-between pb-2 mb-3'>
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <div className='flex justify-between font-sm mb-3 text-base' >
              <div>Total:</div>
              <div>${product2_price}</div>
            </div>
            <div className='flex justify-center'>
              <button className='bg-sammy text-white px-5 py-3 my-1 rounded-md text-base'>Process to checkout</button>
            </div>
           </div>
           </div>

           
        
    </div>

    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Products