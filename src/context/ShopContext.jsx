import { createContext } from "react";
import { products } from "../assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

    const currency = 'LKR'
    const deliveryCharge = 200

    const value = {
        products, currency, deliveryCharge
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider