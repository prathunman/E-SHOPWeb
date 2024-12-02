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

    const cartTotalAmount = () => {
        let totalAmount = 0
        for(const items in cartItems){
            let itemInfo = products.find(product => product._id === items)
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch(err) {
                    
                }
            }
        }
        return totalAmount
    }

    const updateQuantity = async(productId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[productId][size] = quantity
        setCartItems(cartData)
    }

    useEffect(() => {

    }, [cartItems])

    const value = {
        products, currency, deliveryCharge, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, cartCount, updateQuantity, cartTotalAmount
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider