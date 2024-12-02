import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets'

const Product = () => {

    const { productId } = useParams()
    const { products, currency, addToCart } = useContext(ShopContext)
    const [productData, setProductData] = useState(false)
    const [image, setImage] = useState('')
    const [color, setColor] = useState('')

    const fetchProduct = async () => {
        products.map(product => {   
            if (product._id === productId) {
                setProductData(product)
                setImage(product.image[0])
                return null
            }
        })
    }

    useEffect(() => {
        fetchProduct()
    }, [productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-2'>
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.image.map((image,index) => (
                                <img onClick={() => setImage(image)} src={image} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0'/>
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full' src={image} alt='image'/>
                    </div>
                </div>
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>
                        { productData.title }
                    </h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt="" className='w-3.5'/>
                        <img src={assets.star_icon} alt="" className='w-3.5'/>
                        <img src={assets.star_icon} alt="" className='w-3.5'/>
                        <img src={assets.star_icon} alt="" className='w-3.5'/>
                        <img src={assets.star_dull_icon} alt="" className='w-3.5'/>
                        <p className='pl-2'>(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{ currency }{ productData.price }</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{ productData.description }</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Color</p>
                        <div className='flex gap-2'>
                            {
                                productData.colors.map((value,index) => (
                                    <button onClick={() => setColor(value)} key={index} className={`border p-4  ${value === color ? '-mt-2' : ''}`} style={{background: value}}></button>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={() => addToCart(productData._id, color)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
                        ADD TO CART
                    </button>
                    <hr className='mt-8 sm:w-4/5'/>
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original product</p>
                        <p>Free Delivery on order above Rs. 799</p>
                        <p>Pay on delivery might be available</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-20'>
                <div className='flex'>
                    <b className='border px-5 py-3 text-sm'>Description</b>
                    <p className='border px-5 py-3 text-sm'>Reviews (121)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis harum fugiat reiciendis laudantium assumenda dicta voluptatum ab error nisi vero tempora neque suscipit officia ullam expedita, recusandae pariatur placeat obcaecati!</p>
                </div>
            </div>
    </div>
    
  ) : <div className='opacity-0'></div>
}

export default Product