import p1 from './images/p1.jpg'
import p11 from './images/p11.jpg'
import p12 from './images/p12.jpg'
import p2 from './images/p2.jpg'
import p21 from './images/p21.jpg'
import p22 from './images/p22.jpg'  
import p3 from './images/p3.jpg'
import p31 from './images/p31.jpg'
import p4 from './images/p4.jpg'
import p41 from './images/p41.jpg'
import p42 from './images/p42.jpg'
import p43 from './images/p43.jpg'
import p5 from './images/p5.jpg'
import p51 from './images/p51.jpg'
import p52 from './images/p52.jpg'
import p61 from './images/p61.jpg'
import p6 from './images/P6.jpg'
import p7 from './images/p7.jpg'
import p71 from './images/p71.jpg'
import p72 from './images/p72.jpg'
import p8 from './images/p8.jpg'
import p81 from './images/p81.jpg'
import p82 from './images/p82.jpg'
import p9 from './images/p9.jpg'
import p91 from './images/p91.jpg'
import p92 from './images/p92.jpg'
import p10 from './images/p10.jpg'
import p101 from './images/p101.jpg'
import p102 from './images/p102.jpg'


import logo from './icons/logo.jpg'
import hero_img from './images/hero.jpg'
import cart_icon from './icons/cart_icon.png'
import bin_icon from './icons/bin_icon.png'
import dropdown_icon from './icons/dropdown_icon.png'
import exchange_icon from './icons/exchange_icon.png'
import profile_icon from './icons/profile_icon.png'
import quality_icon from './icons/quality_icon.png'
import search_icon from './icons/search_icon.png'
import star_dull_icon from './icons/star_dull_icon.png'
import star_icon from './icons/star_icon.png'
import support_img from './icons/support_img.png'
import menu_icon from './icons/menu_icon.png'
import razorpay_logo from './icons/razorpay_logo.png'
import cross_icon from './icons/cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    razorpay_logo,
    cross_icon
}

export const products = [
    {
      "_id": "p1",
      "name": "Samsung Galaxy Tab S8",
      "description": "A premium tablet with powerful performance and S Pen support.",
      "price": 289000,
      "image": [p1,p11,p12],
      "category": "Samsung",
      "subCategory": "Tablet",
      "specifications": {
        "RAM": "8 GB",
        "Storage": "256 GB",
        "Camera": "13 MP + 6 MP",
        "Display": "11-inch AMOLED"
      },
      "colors": ["#000000", "#FFFFFF", "#FFD700"],
      "date": 1716634345456,
      "bestseller": true
    },
    {
      "_id": "p2",
      "name": "Redmi Note 12 Pro",
      "description": "A mid-range smartphone with a stunning AMOLED display and fast charging.",
      "price": 119000,
      "image": [p2,p21,p22],
      "category": "Redmi",
      "subCategory": "Smartphone",
      "specifications": {
        "RAM": "8 GB",
        "Storage": "128 GB",
        "Camera": "108 MP + 8 MP + 2 MP",
        "Display": "6.67-inch AMOLED"
      },
      "colors": ["#008080", "#800080", "#FF4500"],
      "date": 1716634345457,
      "bestseller": false
    },
    {
      "_id": "p3",
      "name": "Apple Watch Series 9",
      "description": "An advanced smartwatch with fitness tracking and health monitoring.",
      "price": 249000,
      "image": [p3,p31],
      "category": "iPhone",
      "subCategory": "Smartwatch",
      "specifications": {
        "RAM": "2 GB",
        "Storage": "32 GB",
        "Camera": "N/A",
        "Display": "1.9-inch Retina LTPO OLED"
      },
      "colors": ["#1C1C1C", "#F5F5F5", "#DC143C"],
      "date": 1716634345458,
      "bestseller": true
    },
    {
      "_id": "p4",
      "name": "Samsung Galaxy Buds 2 Pro",
      "description": "Noise-canceling earbuds with high-fidelity sound.",
      "price": 59900,
      "image": [p4,p41,p42,p43],
      "category": "Samsung",
      "subCategory": "Accessories",
      "specifications": {
        "BatteryLife": "29 hours",
        "NoiseCancellation": "Yes",
        "WaterResistance": "IPX7"
      },
      "colors": ["#696969", "#8B0000", "#4682B4"],
      "date": 1716634345459,
      "bestseller": true
    },
    {
      "_id": "p5",
      "name": "Redmi Pad",
      "description": "An affordable tablet for entertainment and productivity.",
      "price": 79900,
      "image": [p5,p51,p52],
      "category": "Redmi",
      "subCategory": "Tablet",
      "specifications": {
        "RAM": "4 GB",
        "Storage": "128 GB",
        "Camera": "8 MP + 8 MP",
        "Display": "10.61-inch LCD"
      },
      "colors": ["#708090", "#2E8B57", "#FF69B4"],
      "date": 1716634345460,
      "bestseller": false
    },
    {
      "_id": "p6",
      "name": "iPhone 14 Pro",
      "description": "A cutting-edge smartphone with ProMotion technology and Dynamic Island.",
      "price": 449000,
      "image": [p6,p61],
      "category": "iPhone",
      "subCategory": "Smartphone",
      "specifications": {
        "RAM": "6 GB",
        "Storage": "256 GB",
        "Camera": "48 MP + 12 MP + 12 MP",
        "Display": "6.1-inch Super Retina XDR"
      },
      "colors": ["#B0C4DE", "#8A2BE2", "#FFDAB9"],
      "date": 1716634345461,
      "bestseller": true
    },
    {
      "_id": "p7",
      "name": "Samsung Galaxy Watch 4",
      "description": "A feature-packed smartwatch with advanced health tracking.",
      "price": 99900,
      "image": [p7,p71,p72],
      "category": "Samsung",
      "subCategory": "Smartwatch",
      "specifications": {
        "RAM": "1.5 GB",
        "Storage": "16 GB",
        "Camera": "N/A",
        "Display": "1.4-inch AMOLED"
      },
      "colors": ["#00008B", "#FF1493", "#2F4F4F"],
      "date": 1716634345462,
      "bestseller": false
    },
    {
      "_id": "p8",
      "name": "Redmi Airdots 3",
      "description": "True wireless earbuds with excellent sound and battery life.",
      "price": 12900,
      "image": [p8,p81,p82],
      "category": "Redmi",
      "subCategory": "Accessories",
      "specifications": {
        "BatteryLife": "24 hours",
        "NoiseCancellation": "Passive",
        "WaterResistance": "IPX4"
      },
      "colors": ["#696969", "#6A5ACD", "#FF8C00"],
      "date": 1716634345463,
      "bestseller": false
    },
    {
      "_id": "p9",
      "name": "iPad Pro 11-inch (M2)",
      "description": "A powerful tablet with desktop-like performance and Apple Pencil support.",
      "price": 569000,
      "image": [p9,p91,p92],
      "category": "iPhone",
      "subCategory": "Tablet",
      "specifications": {
        "RAM": "16 GB",
        "Storage": "1 TB",
        "Camera": "12 MP + 10 MP",
        "Display": "11-inch Liquid Retina XDR"
      },
      "colors": ["#808080", "#FF6347", "#4682B4"],
      "date": 1716634345464,
      "bestseller": true
    },
    {
      "_id": "p10",
      "name": "Samsung Galaxy Z Flip 5",
      "description": "A compact and stylish foldable phone with top-notch features.",
      "price": 429000,
      "image": [p10,p101,p102],
      "category": "Samsung",
      "subCategory": "Smartphone",
      "specifications": {
        "RAM": "8 GB",
        "Storage": "256 GB",
        "Camera": "12 MP + 12 MP",
        "Display": "6.7-inch Dynamic AMOLED 2X"
      },
      "colors": ["#FFFFE0", "#FF4500", "#9400D3"],
      "date": 1716634345465,
      "bestseller": true
    }
  ];
  