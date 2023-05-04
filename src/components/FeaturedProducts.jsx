import React from "react";
import { Link } from 'react-router-dom'
import skincare from "../assets/images/skin-care_nivea.png"
import headphones_b_2 from "../assets/images/headphones_b_2.webp"
import shoe from "../assets/images/shoe.jpg"
import in1 from "../assets/images/2in1.jpg"

const FeaturedProducts = () => {
  return (
    <>
      <div className="w-full featured md:flex flex-col hidden">
        <h1 className="text-lg mb-1">Featured Products</h1> <hr />
        <div className="flex items-center mt-4 gap-2">
          <img src={skincare} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Nivea cocoa butter body lotion</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦7,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={headphones_b_2} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">No Noise 2000</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦20,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={in1} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">2 in 1 Black outfit</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦30,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={shoe} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">High jordans</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦155,000
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
