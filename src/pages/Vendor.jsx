import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import goods from "../assets/images/goods.jpg";

const Vendor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-center bg-white py-10 px-12">
          <h1 className="text-4xl font-bold">Sell on Global Market</h1>
        </div>

        <div className="w-full px-12 py-10 text-center md:text-left lg:gap-48 grid md:grid-cols-2 items-center bg-gray-100">
          <div className="w-full">
            <h1 className="text-6xl font-bold">
              Become a Global Market seller
            </h1>
            <p className="text-md text-gray-500 mt-2 mb-4">
              The fast-growing and preferred acquisition <br /> channel for
              multichannel sellers
            </p>
            <Link
              to="/vendor-signup"
              className="bg-orange-400 shadow-lg p-2 rounded text-white hover:bg-white hover:text-orange-400 duration-500"
            >
              Sign up
            </Link>
            <p className="mt-3 text-sm mb-10">$9 / month + selling fees</p>
          </div>

          <img
            src={goods}
            alt="Goods"
            width={450}
            className="rounded-lg shadow-lg lg:w-full"
          />
        </div>

        <div className="w-full py-10 px-12 intro">
          <h1 className="text-center text-2xl md:text-3xl mb-10 font-bold">
            Introduction to Ecommerce selling
          </h1>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="w-full bg-orange-100 shadow-md p-3 rounded-xl">
              <h1 className="text-2xl mb-2">What is Ecommerce</h1> <hr />
              <p className="text-gray-600 mt-5">
                Electronic commerce (ecommerce) is the trading of goods and
                services on the internet. Learn about the advantages and
                disadvantages of this selling channel.
              </p>
            </div>

            <div className="w-full bg-orange-100 shadow-md p-3 rounded-xl">
              <h1 className="text-2xl mb-2">Build a business</h1> <hr />
              <p className="text-gray-600 mt-5">
                For entrepreneurs and growing businesses, ecommerce can be a
                profitable model to adapt either as the sole focus of your
                business, or as an additional selling channel.
              </p>
            </div>

            <div className="w-full bg-orange-100 shadow-md p-3 rounded-xl">
              <h1 className="text-2xl mb-2">Ecommerce fulfillment</h1> <hr />
              <p className="text-gray-600 mt-5">
                Ecommerce fulfillment is a vital ingredient to growing a
                successful online retail channel. Here’s what to consider when
                looking for an order fulfillment service.
              </p>
            </div>

            <div className="w-full bg-orange-100 shadow-md p-3 rounded-xl">
              <h1 className="text-2xl mb-2">Inventory management</h1> <hr />
              <p className="text-gray-600 mt-5">
                Maintaining the right amount of inventory to meet demand can
                help keep your business humming. Get effective inventory
                management tips for ecommerce business owners.
              </p>
            </div>

            <div className="w-full bg-orange-100 shadow-md p-3 rounded-xl">
              <h1 className="text-2xl mb-2">What is dropshipping?</h1> <hr />
              <p className="text-gray-600 mt-5">
                This guide covers the definition of dropshipping, how it works,
                pros and cons, related block shop policies, and alternatives to
                consider for ecommerce businesses.
              </p>
            </div>

            <div className="w-full bg-orange-100 shadow-md p-3 rounded-xl">
              <h1 className="text-2xl mb-2">Create an block shop storefront</h1>{" "}
              <hr />
              <p className="text-gray-600 mt-5">
                Learn how to tell your brand story using block shop tools. Build
                immersivei storefronts and customize product detail pages with
                rich media and content.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-12 py-10">
          <div className="bg-slate-800 rounded-3xl px-5 md:px-20 py-12 flex items-center justify-center gap-32 shadow-lg">
            <div className="">
              <h1 className="font-extrabold text-2xl lg:text-6xl text-white">
                Start selling today
              </h1>
              <p className="text-white mb-10 mt-1">
                Put your products in front of the millions of customers who{" "}
                <br /> search block shop every day.
              </p>
              <Link
                to="/vendor-signup"
                className="bg-orange-400 shadow-lg p-2 rounded text-white hover:bg-white hover:text-orange-400 duration-500"
              >
                Sign up
              </Link>
              <p className="mt-3 text-sm text-white">
                $9 / month + selling fees
              </p>
              <p className="text-slate-300">
                Buy <span className="text-orange-400 font-bold">NOSDOG</span>{" "}
                token for your transactions
              </p>
            </div>

            <img
              src={goods}
              alt="Goods"
              width={200}
              className="hidden md:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vendor;
