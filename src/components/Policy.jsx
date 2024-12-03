import React from 'react'
import { assets } from '../assets'

const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo cupiditate eveniet deserunt a fugiat, adipisci animi! Molestiae suscipit, nisi eum, omnis, nostrum odio recusandae totam asperiores dolores veniam sed.</p>
        </div>

        <div>
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi esse, impedit recusandae libero, optio quis architecto alias corporis iste totam atque exercitationem consectetur facilis, fugiat numquam est nesciunt deserunt sapiente?</p>
        </div>

        <div>
            <img src={assets.support_img} alt="" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, quia! Deserunt dolorem, quibusdam repellat exercitationem quas in nam enim. Repudiandae eos quaerat corrupti? Minima adipisci dicta numquam optio veritatis aspernatur.</p>
        </div>
    </div>
  )
}

export default Policy