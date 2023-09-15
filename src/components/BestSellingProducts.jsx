import React from "react";
import { Link } from 'react-router-dom'
import speaker1 from "../assets/images/speaker1.webp"
import speaker2 from "../assets/images/speaker2.webp"
import headphones_b_3 from "../assets/images/headphones_b_3.webp"
import headphones_a_4 from "../assets/images/headphones_a_4.webp"

const BestSelling = () => {
  return (
    <>
      <div className="featured flex flex-col w-full">
        <h1 className="text-lg mb-1">Best Selling</h1> <hr />
        <div className="flex items-center mt-4 gap-2">
          <img src={headphones_a_4} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Oracle sound Cannon</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦61,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={speaker1} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Harmon Kardon</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦133,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={speaker2} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Onyx Blasters</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦87,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={headphones_b_3} alt="" className="h-[50px] w-[50px]"/>
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Fever</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦50,000
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSelling;
