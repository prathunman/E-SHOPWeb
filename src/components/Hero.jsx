import React from 'react'
import { assets } from '../assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-[#d7d7d9]'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md;text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='text-3xl sm:py-3 lg:text-6xl leading-relaxed text-[#183d56] font-serif font-medium'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <Link to={'/collection'} className='font-semibold text-sm md;text-base hover:bg-gray-400 p-3 hover:rounded-full'>SHOP NOW</Link>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    <img src={assets.dropdown_icon} alt="dropdown" />
                </div>
            </div>
        </div>
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt='hero' />
    </div>
  )
}

export default Hero