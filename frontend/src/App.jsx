import Home from './pages/home'
import Contact from  './pages/Contact'
import Collection from  './pages/Collection'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px[-7vw] lg:px[9vw]'>
      <ToastContainer/>
          <Navbar/>
          <SearchBar/>
        <Routes>
            <Route path="/" element = {<Home/>}></Route>
            <Route path="/collection" element = {<Collection/>}></Route>
            <Route path="/contact" element = {<Contact/>}></Route>
            <Route path="/about" element = {<About/>}></Route>
            <Route path="/product/:productId" element = {<Product/>}></Route>
            <Route path="/cart" element = {<Cart/>}></Route>
            <Route path="/login" element = {<Login/>}></Route>
            <Route path="/place-order" element = {<PlaceOrder/>}></Route>
            <Route path="/orders" element = {<Orders/>}></Route>




        </Routes>
        <Footer/>
 
    </div>
  )
}

export default App
