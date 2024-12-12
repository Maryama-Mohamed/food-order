import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
import Contect from "./pages/contect";
import Cart from "./pages/cart";
import { useState } from "react";
import { Toaster } from 'react-hot-toast';

const App = () => {
    
  const [cart, setCart] = useState(5);

    return(
        <div className="container">
            <Toaster/>
            <Header cart={cart} setCart={setCart}/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contect" element={<Contect/>}/>
            <Route path="/cart" element={<Cart setCart={setCart}/>}/>
            
               
            </Routes>
        </div>
    )
}

export default App;