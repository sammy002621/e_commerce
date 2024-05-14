import React from 'react'

function Staff() {
  return (
    <div className='flex flex-col mx-5 lg:flex-row  lg:justify-between'>
        <div className='mb-5 '>
            <div><img src="/founder.svg" alt="" /></div>
            <div className='py-4'>
                   <p className='text-2xl font-medium'>Tom Cruise</p>
                   <p className='text-sm '>Founder & Chairman</p>
                   <div className='flex'>
                    <div>instagram</div>
                    <div>facebook</div>
                    <div>linkedin</div>
                   </div>
         </div>
        </div>
        <div className='mb-5'>
        <div><img src="/director.svg" alt="" /></div>
        <div>
                   <p>Tom Cruise</p>
                   <p>Founder & Chairman</p>
                   <div className='flex'>
                    <div>instagram</div>
                    <div>facebook</div>
                    <div>linkedin</div>
                   </div>
         </div>
        </div>
        <div>
        <div className='mb-5 '>
            <img src="/designer.svg" alt="" />
        </div>
         <div>
                   <p>Tom Cruise</p>
                   <p>Founder & Chairman</p>
                   <div className='flex'>
                    <div>instagram</div>
                    <div>facebook</div>
                    <div>linkedin</div>
                   </div>
         </div>
        </div>
    </div>
  )
}

export default Staff