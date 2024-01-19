import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Trackorder from "./pages/Trackorder";


function App() {
  

  return (
    <div >
      <Header />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        
      </Routes>

     
        
        <Footer />
      </div>
    
  );
}

export default App;
