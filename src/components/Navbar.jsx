import React, { useState } from "react";
import {
  FiExternalLink,
  FiTruck,
  FiDownloadCloud,
  FiFacebook,
  FiInstagram,  
  FiTwitter,
  FiLinkedin,
  FiLogIn,
  FiUserPlus,
  FiUser,
  FiShoppingCart,
  FiActivity,
} from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import globalLogo from "../assets/images/globalLogo.png";
import dollarLogo from "../assets/images/dollarLogo.png";
import globalImg from "../assets/images/globalImg.png";
import globalshopping from "../assets/images/globalshopping.png";



const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const carts = useSelector((state) => state.carts.carts)

  return (
    <>
      <div className={`w-full flex flex-col gap-8 ${window.location.pathname == '/vendor-dashboard' || window.location.pathname == '/vendor-products' || window.location.pathname == '/vendor-inbox' || window.location.pathname == '/vendor-ticket' || window.location.pathname == '/vendor-settings' ? 'hidden' : null}`}>
        <div className="w-full hidden md:flex justify-between bg-orange-400 py-3 px-12">
          {/* First one */}
          <div className="flex gap-1 lg:gap-5">
            <div className="flex gap-2 items-center text-white font-black hover:text-orange-900">
              <FiExternalLink size={16} />
              <Link className=" text-xs lg:text-sm hover:text-bold duration-500" to="/vendor">
                Sell on Global Market
              </Link>
            </div>{" "}
            <span className="text-white">|</span>
            <div className="flex gap-2 items-center text-white font-black hover:text-orange-900">
              <FiTruck size={16} />
              <Link className=" text-xs lg:text-sm hover:text-bold duration-500" to="/">
                Track order
              </Link>
            </div>{" "}
            <span className="text-white">|</span>
            <div className="flex gap-2 items-center text-white font-black hover:text-orange-900">
              <FiDownloadCloud size={16} />
              <Link className=" text-xs lg:text-sm hover:text-bold duration-500" to="/">
                Download App
              </Link>
            </div>{" "}
            <span className="text-white">|</span>
            <div className="flex gap-2 items-center text-white font-black">
              <Link to="/" className="duration-300 hover:text-orange-900">
                <FiFacebook size={13} className="font-bold" />
              </Link>
              <Link to="/" className="duration-300 hover:text-orange-900">
                <FiInstagram size={13} className="font-bold" />
              </Link>
              <Link to="/" className="duration-300 hover:text-orange-900">
                <FiTwitter size={13} className="font-bold" />
              </Link>
              <Link to="/" className="duration-300 hover:text-orange-900">
                <FiLinkedin size={13} className="font-bold" />
              </Link>
            </div>
          </div>

          {/* Second one */}
          <div className="flex gap-5">
            <div className="flex gap-2 items-center text-white font-black hover:text-orange-900">
              <FiUserPlus size={16} />
              <Link className="text-xs lg:text-sm hover:text-bold duration-500" to="/vendor-signup">
                Sign Up
              </Link>
            </div>{" "}
            <span className="text-white">|</span>
            <div className="flex gap-2 items-center text-white font-black hover:text-orange-900">
              <FiLogIn size={16} />
              <Link className="text-xs lg:text-sm hover:text-bold duration-500" to="/vendor-signin">
                Sign In
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full md:px-12 px-7 py-5 md:py-0 items-center gap-2">
          <div className="first">
            <Link to="/">
              <img src={dollarLogo} alt="" className="h-[140px] w-[180px] absolute top-9" />
            </Link>
          </div>

          <div className="second">
            <div className="flex">
              <input
                className="rounded-l-full w-96 lg:w-[48rem] text-orange-800 p-1 bg-gray-100 text-sm px-5 outline-none duration-300 focus:ring-1 focus:ring-orange-400"
                type="text"
                name="query"
                id="query"
                placeholder="What are you looking for..."
              />
              <button className="bg-orange-400 hover:bg-orange-600 duration-500 text-xs rounded-r-full p-2 text-white">
                Search
              </button>
            </div>
          </div>

          <div className="third flex gap-2 md:gap-5">
            <div className="flex gap-2 items-center text-slate-700 font-black hover:text-orange-400">
              <Link to='/sign-in'>
                <FiUser className="" size={16} />
              </Link>
              { localStorage.getItem('user') != null ? (
                <Link
                className="hidden md:block text-sm hover:text-bold duration-500 hover:font-extrabold"
                to="/user-dashboard"
             >
                { user ? (`${user.firstname} ${user.lastname}`) : null }
              </Link>
              ) : (
                <Link
                className="hidden md:block text-sm hover:text-bold duration-500 hover:font-extrabold"
                to="/sign-in"
             >
                Account
              </Link>
              ) }
            </div>{" "}
            <span className="hidden md:block text-slate-700">|</span>
            <div className="flex md:gap-5 items-center text-slate-700 font-black">
              <div className="flex gap-1">
              <Link to="/cart" className="duration-300 hover:text-orange-900">
                <FiShoppingCart size={16} className="font-bold hover:text-orange-900 duration-500" />
              </Link>
              <span className="text-xs mt-[-2px] font-extrabold text-orange-600">{carts.length}</span>
              </div>
              <Link
                to="/"
                className="hidden md:block duration-300 hover:text-orange-900"
              >
                <FiActivity size={16} className="font-bold hover:text-orange-900 duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
