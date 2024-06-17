import React from 'react'

function OrderedFood({id,name,image,price}) {
  return (
    <div key={id} className='flex justify-around relative mb-10 items-start'>
<div>
<img src={image} alt={name} className='absolute left-0 ' />
</div>
<p>{name}</p>
<p>{price}</p>

    </div>
  )
}

export default OrderedFood