import React, { useContext, useState } from "react";
import { assets } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { showSearch, setShowSearch, cartCount } = useContext(ShopContext);
  const { isLogin, setIsLogin } = useContext(AuthContext);

  const handleLogout = () => {
    setIsLogin(false);
  }

  return (
    <div className="flex items-center justify-center justify-between py-2 px-4 font-medium">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="w-20" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-full border-none h-[1.5px] bg-black hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-full border-none h-[1.5px] bg-black hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-full border-none h-[1.5px] bg-black hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-full border-none h-[1.5px] bg-black hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(!showSearch)} src={assets.search_icon} alt="search" className="w-5" />

        {
        isLogin ? (
          <>
            <Link to="/cart" className="relative">
              <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
              <div className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{cartCount()}</div>
            </Link>
            <div className="group relative">
              <img src={assets.profile_icon} alt="profile" className="w-5 cursor-pointer" />
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate bg-gray-300">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p className="cursor-pointer hover:text-black">Order</p>
                  <p className="cursor-pointer hover:text-black" onClick={handleLogout}>Logout</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <NavLink to={"/login"} className="bg-black text-white px-4 py-1 rounded">
            Login
          </NavLink>
        )}
        <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu" className="w-5 cursor-pointer sm:hidden" />
      </div>

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center  gap-4 p-3 cursor-pointer">
            <img src={assets.dropdown_icon} alt="back" className="w-4" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to="/" className="py-2 pl-6 border">
            <p>Home</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/collection" className="py-2 pl-6 border">
            <p>Collection</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/about" className="py-2 pl-6 border">
            <p>About</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/contact" className="py-2 pl-6 border">
            <p>Contact</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
