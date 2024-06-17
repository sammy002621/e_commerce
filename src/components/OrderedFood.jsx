import React from 'react'
import { orderedData } from '../constants/ordered'
const borderClass = "border-b-2 border-gray-300 mx-2 mb-2 mt-7"
const nonBorderClass = "mx-2 mb-2 mt-7"
const orderedDataSize = orderedData.length;
console.log("the size :",orderedDataSize);

function OrderedFood({id,name,image,price}) {
  return (
    <div className={id===orderedDataSize ? nonBorderClass : borderClass}>
      <div key={id} className='flex justify-around relative pb-10 items-start  gap-y-10'>
<div>
<img src={image} alt={name} className='absolute  left-0 w-[40px] h-[40px] rounded-full top-0 object-cover shadow-md ' />
</div>
<p className='mt-1'>{name}</p>
<p className='mt-1'>{price}</p>

    </div>
    </div>
  )
}

export default OrderedFood