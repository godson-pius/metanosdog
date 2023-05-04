import React, { useEffect, useState } from "react";
import { FiDollarSign, FiHexagon, FiLink, FiRefreshCw, FiSend, FiStar } from 'react-icons/fi'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { handleCreateCart } from "../api";
import { addCart } from "../store/slice/cartSlice";

const Shop = () => {
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch()
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')))

  const addToCart = async(productName, productPrice) => {
    const data = {
      user: currentUser._id,
      productName,
      productPrice
    }

    const res = await handleCreateCart(data);
    if (res.status === "success") {
      dispatch(addCart(res.cart))
      toast.success(`${productName} has been added to cart`)
    } else if(res.response.data.error.code === 11000) {
      toast.info(`${productName} already exists in cart`)
    } else {
      toast.error(`${productName} could not be added to cart`)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <div className="w-full" data-aos="fade-in" data-aos-duration="2000">
        <div className="w-full py-10">
          {/* <h1 className="text-3xl font-bold md:mx-12 mx-2">Meta Nosdog Shop</h1> */}

          <div className="w-full flex px-12 mt-4 divide-x items-start">
            {/* Side bar */}
            <div className="side__bar flex flex-col gap-3 w-44">
              <h3 className="font-bold text-lg">Category</h3>

              <Link className="flex items-center gap-2 text-gray-400 hover:text-gray-600 duration-700">
                <FiLink size={14} />
                <span className="text-sm">Fashion</span>
              </Link>

              <Link className="flex items-center gap-2 text-gray-400 hover:text-gray-600 duration-700">
                <FiLink size={14} />
                <span className="text-sm">Instruments</span>
              </Link>

              <Link className="flex items-center gap-2 text-gray-400 hover:text-gray-600 duration-700">
                <FiLink size={14} />
                <span className="text-sm">Gaming</span>
              </Link>
              
              <Link className="flex items-center gap-2 text-gray-400 hover:text-gray-600 duration-700">
                <FiLink size={14} />
                <span className="text-sm">Electronics</span>
              </Link>
              
              <Link className="flex items-center gap-2 text-gray-400 hover:text-gray-600 duration-700">
                <FiLink size={14} />
                <span className="text-sm">Baby Products</span>
              </Link>
              
              <Link className="flex items-center gap-2 text-gray-400 hover:text-gray-600 duration-700">
                <FiLink size={14} />
                <span className="text-sm">Home & Office</span>
              </Link>

              {/* Ads */}
              <h3 className="font-bold text-lg mt-3">Meta Nosdog</h3>
              <Link className="flex items-center gap-1 text-gray-400 hover:text-gray-600 duration-700">
                <FiDollarSign size={14} />
                <span className="text-sm">Buy nosdog</span>
              </Link>
              
              <Link className="flex items-center gap-1 text-gray-400 hover:text-gray-600 duration-700">
                <FiSend size={14} />
                <span className="text-sm">Send nosdog</span>
              </Link>
              
              <Link className="flex items-center gap-1 text-gray-400 hover:text-gray-600 duration-700">
                <FiRefreshCw size={14} />
                <span className="text-sm">Exchange nosdog</span>
              </Link>

              <h3 className="font-bold text-lg mt-3">Payment</h3>
              <Link className="flex items-center gap-1 text-gray-400 hover:text-gray-600 duration-700">
                <FiHexagon size={14} />
                <span className="text-sm">Pay via nosdog</span>
              </Link>
              
              <Link className="flex items-center gap-1 text-gray-400 hover:text-gray-600 duration-700">
                <FiHexagon size={14} />
                <span className="text-sm">Pay via card</span>
              </Link>

            </div> {/* End of sidebar */}

            {/* Products */}
            <div className="products w-full grid md:grid-cols-2 lg:grid-cols-3 px-5 items-center gap-3">

            { products.map((product, index) => {
              return (
              <div key={index} className="product w-full bg-slate-800 rounded-xl hover:shadow-xl hover:scale-105 duration-700">
                <div style={{ backgroundImage: "url('https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/109817/1.jpg?8356')" }} className="product__image bg-orange-100 w-full h-40 rounded-t-xl bg-cover bg-center">
                  <div className="flex text-xs items-center bg-black p-1 rounded-md text-white absolute m-3 justify-center gap-1 font-bold">
                    <FiStar size={13} className='' />
                    <span>4.9</span>
                  </div>
                </div>

                <div className="product__content px-4 mt-2">
                  <div className="flex w-full items-center justify-between">
                    <h1 className="font-bold text-white">{ product?.productName }</h1>
                    <span className="text-white font-extrabold text-md">${ Intl.NumberFormat().format(product?.productPrice) }</span>
                  </div>

                  <div className="flex w-full items-center text-sm justify-between py-2">
                    <p className="text-gray-400 text-xs">{product.productDesc.length <= 80
                              ? product.productDesc.substr(0, 80)
                              : `${product.productDesc.substr(0, 80)}.....`}</p>
                    <button onClick={() => addToCart(product.productName, product.productPrice)} className="bg-orange-400 p-1 rounded text-white hover:bg-orange-500 duration-700">Cart</button>
                  </div>
                </div>
              </div>
              )
            }) }

              
              
             
            </div>
            {/* End of products */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
