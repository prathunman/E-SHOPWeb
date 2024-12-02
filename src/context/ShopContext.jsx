import { createContext, useState } from "react";
import { products } from "../assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

    const currency = 'LKR'
    const deliveryCharge = 200
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)

    const value = {
        products, currency, deliveryCharge, search, setSearch, showSearch, setShowSearch
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider