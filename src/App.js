import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar/>
      <ToastContainer />
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="Cart" element={<Cart/>} />      
        <Route path="/login" element={<Login/>} />
        <Route path="/place-order" element={<PlaceOrder/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
