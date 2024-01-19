import React from "react";
import { Link } from "react-router-dom";
import '../myStyle.css';


const navdata = [
  { title: "Home", linkto: "" },
  { title: "About Us", linkto: "/about" },
  { title: "Products", linkto: "/products" },
  { title: "Blog", linkto: "/blog" },
  // { title: "Track Order", linkto: "https://www.professionalcourier.in/courier-tracking" },
];

const Header = () => {
  return (
    <header className="w-full">

     
      <div className="w-full     text-white text-xl font-serif   bg-[#4b6584] sm:flex sm:justify-around sm:w-full ">
      
        <div className=" w-full m-auto flex sm:justify-start sm:w-2/12 sm:mt-9">
          <img
            className=" m-auto w-[200px] h-[200px] sm:w-[100px] sm:h-[100px] "
            src="src/assets/images/pngtree-abstract-simple-ice-crame-logo-with-stars-png-image_7691359.png"
            alt="CreamnJoy Logo"
          />
        </div>

        <div className="w-full flex justify-center sm:w-5/12 sm:mb-14">
          <form className="d-flex mt-20" role="search">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              id="search"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success text-white bg-green-800" type="submit">
              Search
            </button>
          </form>
        </div>

        <nav className="w-full flex justify-center sm:justify-end sm:align-top sm:w-9/12">
          <ul className=" text-sm flex mt-20 gap-7 px-3 py-2 font-Teko sm:text-xl">
          <li  className="scale  hover:text-yellow-400 transition-all duration-1000">
   <Link to={""}>Home</Link>
  </li>

  <li  className="scale  hover:text-yellow-400 transition-all duration-1000">
   <Link to={"/about"}>About US</Link>
  </li>


  
  <li className="scale products hover-scalen  hover:text-yellow-400 transition-all duration-1000">
  <Link to={"/products"}>Products</Link>
  
 

  
</li>


  

  
  <li  className="scale  hover:text-yellow-400 transition-all duration-1000">
   <Link to={"/blog"}>Blog</Link>
  </li>

            <li>
              <div >
                <a
                  href="https://www.professionalcourier.in/courier-tracking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="animate-opacity  text-black hover:text-red-900 transition-all duration-1000 border-b-2 border-black border-dashed   ">Track Order</div>
                </a>
              </div>
            </li>
          </ul>
        </nav>
        
      </div>
      
    </header>
  );
};

export default Header;


// {navdata.map((item, index) => (
//   <li key={index} className="scale  hover:text-yellow-400 transition-all duration-1000">
//     <Link to={item.linkto}>{item.title}</Link>
//   </li>
// ))}