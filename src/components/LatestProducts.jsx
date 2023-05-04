import React from "react";
import { Link } from 'react-router-dom'
import watch_1 from "../assets/images/watch_1.webp"
import watch_2 from "../assets/images/watch_2.webp"
import watch_3 from "../assets/images/watch_3.webp"
import watch_4 from "../assets/images/watch_4.webp"

const LatestProducts = () => {
  return (
    <>
      <div className="featured flex flex-col w-full">
        <h1 className="text-lg mb-1">Latest Products</h1> <hr />
        <div className="flex items-center mt-4 gap-2">
          <img src={watch_1} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Apple Smart watch</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦150,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={watch_2} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Samsung smart watch</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦110,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={watch_3} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Android Smart watch</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦70,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={watch_4} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Samsung smart 6</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦160,000
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
