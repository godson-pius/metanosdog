import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiMail,
  FiSettings,
  FiShoppingCart,
  FiTag,
  FiUserCheck,
} from "react-icons/fi";
import coinpot from "../../assets/images/coinpot.png";

const VendorNav = () => {
  const [currentVendor, setCurrentVendor] = useState(JSON.parse(localStorage.getItem('vendor')))

  const setActive = (pathname) => {
    return window.location.pathname == "/" + pathname
      ? "md:p-3 md:bg-[#f4dbad] text-[#000] md:text-[#9c6706]"
      : null;
  };

  const handleLogin = () => {
    localStorage.removeItem('vendor')
    window.location.href = '/vendor-signin'
  }

  const navigateToHome = () => {
    window.location.href = '/'
  }

  return (
    <>
      <div className="fixed">
        <nav className="w-12 p-4 md:w-48 h-screen py-7 md:px-5 text-white bg-[#fceacb] flex flex-col gap-6 items-center">
          <div className="w-full firm flex items-center gap-2">
            <div className="p-3 ml-[-6px] md:ml-[0px] bg-orange-300 rounded-full shadow border-2 border-white"></div>
            <h1 onClick={navigateToHome} className="text-black font-bold text-md hidden md:block cursor-pointer">
              { (currentVendor.shopName.toString().length <= 11 ? currentVendor.shopName.toString().substr(0, 11) : `${currentVendor.shopName.toString().substr(0, 11)}.....`)}
            </h1>
          </div>
          <Link
            to="/vendor-dashboard"
            className={`w-full md:flex items-center gap-2 rounded text-[#727272] text-sm duration-700 hover:text-black md:hover:bg-[#f4dbad] md:hover:p-3 ${setActive(
              "vendor-dashboard"
            )}`}
          >
            <FiHome size={17} />
            <span className="hidden md:block">Overview</span>
          </Link>

          <Link
          to="/vendor-products"
            className={`w-full md:flex items-center gap-2 rounded text-[#727272] text-sm duration-700 hover:text-black md:hover:bg-[#f4dbad] md:hover:p-3 ${setActive(
              "vendor-products"
            )}`}
          >
            <FiShoppingCart size={17} />
            <span className="hidden md:block">Products</span>
          </Link>

          <Link
            to="/vendor-inbox"
            className={`w-full md:flex items-center gap-2 rounded text-[#727272] text-sm duration-700 hover:text-black md:hover:bg-[#f4dbad] md:hover:p-3 ${setActive(
              "vendor-inbox"
            )}`}
          >
            <FiMail size={17} />
            <span className="hidden md:block">Inbox</span>
          </Link>

          <Link
          to="/vendor-ticket"
            className={`w-full md:flex items-center gap-2 rounded text-[#727272] text-sm duration-700 hover:text-black md:hover:bg-[#f4dbad] md:hover:p-3 ${setActive(
              "vendor-ticket"
            )}`}
          >
            <FiTag size={17} />
            <span className="hidden md:block">Tickets</span>
          </Link>

          <Link
            to="/vendor-settings"
            className={`w-full md:flex items-center gap-2 rounded text-[#727272] text-sm duration-700 hover:text-black md:hover:bg-[#f4dbad] md:hover:p-3 ${setActive(
              "vendor-settings"
            )}`}
          >
            <FiSettings size={17} />
            <span className="hidden md:block">Settings</span>
          </Link>

          {/* Ads */}
          <div className="ads w-full bg-white h-60 rounded-lg text-center text-black px-1 p-5 shadow-lg hidden md:block">
            <h1 className="text-sm font-bold">
              Life is easier with Meta Nosdog
            </h1>

            <img src={coinpot} alt="Coin" className="ml-4 mt-2 mb-5" />

            <Link
              to="/vendor-dashboard"
              className="bg-[#cc8605] p-2 rounded text-white hover:bg-[#d99e31] duration-500 hover:font-bold"
            >
              Buy Nosdog
            </Link>
          </div>

          {/* User */}
          <div className="w-full flex items-center gap-2">
            <div className="user p-1 ml-[-5px] md:ml-[0px] md:p-2 bg-[#49def187] rounded-full flex justify-center items-center">
              <FiUserCheck size={17} />
            </div>

            <div className="md:flex flex-col hidden">
              <h5 className="text-black text-sm">{ currentVendor.shopName }</h5>
              <span onClick={handleLogin} className="text-[#cc8605] text-xs cursor-pointer">
                Logout
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default VendorNav;
