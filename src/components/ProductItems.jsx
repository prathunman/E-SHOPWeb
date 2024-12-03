import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItems = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext)

  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer flex flex-col justify-end h-full'>
        <div className='overflow-hidden'>
            <img src={image[0]} alt={name} className='hover:scale-110 transition ease-in-out' />
        </div>
        <p className='pt-3 pb-1 text-sm'>{ name }</p>
        <p className='text-sm font-medium'>{ currency } { price }</p>
    </Link>
  )
}

export default ProductItems