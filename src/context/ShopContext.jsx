import { createContext, useEffect, useState } from "react";
import { products } from "../assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

    const currency = 'LKR'
    const deliveryCharge = 200
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})

    const addToCart = async(productId, size) => {
        let cartData = structuredClone(cartItems)

        if(!size){
            toast.error('Please select a size')
            return
        }

        if(cartItems[productId]){
            if(cartItems[productId][size]){
                cartData[productId][size]++
            }else{
                cartData[productId][size] = 1
            }
        } else {
            cartData[productId] = {}
            cartData[productId][size] = 1
        }
        setCartItems(cartData)
    }   

    const cartCount = () => {
        let count = 0
        for(let product in cartItems){
            for(let size in cartItems[product]){
                try{
                    if(cartItems[product][size] > 0){
                        count += cartItems[product][size]
                    }
                } catch (error){
                    toast.error('An error occured while calculating cart count')
                }                
            }
        }
        return count
    }

    useEffect(() => {

    }, [cartItems])

    const value = {
        products, currency, deliveryCharge, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, cartCount
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider