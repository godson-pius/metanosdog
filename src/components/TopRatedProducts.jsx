import React from "react";
import { Link } from 'react-router-dom'
import headphones_a_1 from "../assets/images/earphones_a_1.webp";
import headphones_a_2 from "../assets/images/earphones_a_2.webp";
import headphones_a_3 from "../assets/images/earphones_a_3.webp";
import headphones_a_4 from "../assets/images/earphones_a_4.webp";

const TopRatedProducts = () => {
  return (
    <>
      <div className="w-full featured md:flex flex-col hidden">
        <h1 className="text-lg mb-1">Top Rated Products</h1> <hr />
        <div className="flex items-center mt-4 gap-2">
          <img src={headphones_a_1} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Original Sony Ear blasters</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦2,500
            </span>
          </div>
        </div>  
        <div className="flex items-center mt-4 gap-2">
          <img src={headphones_a_2} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Samsung Ear piece</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦2,100
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={headphones_a_3} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Oraimo Ear piece</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦1,990
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={headphones_a_4} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500"> wireless Ear piece</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦4,700
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRatedProducts;
