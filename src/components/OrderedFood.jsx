import React from 'react'

function OrderedFood({id,name,image,price}) {
  return (
    <div key={id} className='relative'>
<div>
<img src={image} alt={name} className='absolute ' />
</div>
<p>{name}</p>
<p>{price}</p>

    </div>
  )
}

export default OrderedFood