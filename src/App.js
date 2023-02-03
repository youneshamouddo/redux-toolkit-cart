import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/aboutSection';
import Cart from './components/cart';
import Contacts from './components/contacts';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Aos from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css"
import ProductPage from './components/productPage';

// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  useEffect(() => {
    Aos.init({duration:1000});
}, []);
  return (
    <div className="App">
      <Header/>
      <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='contacts' element={<Contacts/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="product" element={<ProductPage/>}/>
      </Routes>
      </AnimatePresence>
      <Footer/>
   
    </div>
  );
}

export default App;
