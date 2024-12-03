import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const { cartTotalAmount, deliveryCharge, currency } = useContext(ShopContext)
  return (
    <div className='w-full px-4'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTALs'} />
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency}{cartTotalAmount()}.00</p>
            </div>
            <hr/>

            <div className='flex justify-between'>
                <p>Delivery charge</p>
                <p>{currency}{deliveryCharge}.00</p>
            </div>
            <hr/>

            <div className='flex justify-between'>
                <p>Total</p>
                <p>{currency}{cartTotalAmount() === 0 ? 0 : cartTotalAmount() + deliveryCharge}.00</p>
            </div>
        </div>
    </div>
  )
}

export default CartTotal