import React from "react";
import { assets } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-10 font-[sans-serif] tracking-wide mt-24 text-center lg:text">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex justify-center lg:block lg:items-center">
          <img src={assets.logo} alt="logo" className="w-52" />
        </div>

        <div className="mt-10">
          <ul className="flex space-x-5 justify-center ">
            <li className="text-gray-300 hover:text-white text-sm">
              <FontAwesomeIcon icon={faFacebook} color="blue" size="2x" />
            </li>
            <li className="text-gray-300 hover:text-white text-sm">
              <FontAwesomeIcon icon={faInstagram} color="red" size="2x" />
            </li>
            <li className="text-gray-300 hover:text-white text-sm">
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">CONTACT US </h4>
          <ul className="space-y-4">
            <li className="text-gray-300 hover:text-white text-sm">eshop@gmail.com</li>
            <li className="text-gray-300 hover:text-white text-sm">+94 071 123 4567</li>
            <li className="text-gray-300 hover:text-white text-sm">Colombo, Sri Lanka.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">INFORMATION</h4>
          <ul className="space-y-4">
            <li className="text-gray-300 hover:text-white text-sm">About Us</li>
            <li className="text-gray-300 hover:text-white text-sm">Terms &amp; Conditions</li>
            <li className="text-gray-300 hover:text-white text-sm">Privacy Policy</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-300 text-sm mt-10">© E-SHOP. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
