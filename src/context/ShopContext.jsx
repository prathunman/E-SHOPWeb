import { createContext, useEffect, useState } from "react";
import { products } from "../assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "LKR";
  const deliveryCharge = 200;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (productId, color) => {
    let cartData = structuredClone(cartItems);

    if (!color) {
      toast.error("Please select a color");
      return;
    }

    if (cartItems[productId]) {
      if (cartItems[productId][color]) {
        cartData[productId][color]++;
      } else {
        cartData[productId][color] = 1;
      }
    } else {
      cartData[productId] = {};
      cartData[productId][color] = 1;
    }
    setCartItems(cartData);
  };

  const cartCount = () => {
    let count = 0;
    for (let product in cartItems) {
      for (let color in cartItems[product]) {
        try {
          if (cartItems[product][color] > 0) {
            count += cartItems[product][color];
          }
        } catch (error) {
          toast.error("An error occured while calculating cart count");
        }
      }
    }
    return count;
  };

  const cartTotalAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (err) {}
      }
    }
    return totalAmount;
  };

  const updateQuantity = async (productId, color, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[productId][color] = quantity;
    setCartItems(cartData);
  };

  useEffect(() => {}, [cartItems]);

  const value = {
    products,
    currency,
    deliveryCharge,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    cartCount,
    updateQuantity,
    cartTotalAmount,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;