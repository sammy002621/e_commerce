import React from 'react'

function OrderedFood({id,name,image,price}) {
  return (
    <div className='border-b-2 mx-2 mb-2'>
      <div key={id} className='flex justify-around relative pb-8 items-start  gap-y-10'>
<div>
<img src={image} alt={name} className='absolute  left-0 w-[40px] h-[40px] rounded-full top-0 ' />
</div>
<p>{name}</p>
<p>{price}</p>

    </div>
    </div>
  )
}

export default OrderedFood