import React, {useEffect, useRef, useState} from "react";
import { FiFileText, FiMoreHorizontal, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {deleteProduct, removeItemFromCart} from '../api/index'

const Cart = () => {
  const carts = useSelector(state => state.carts.carts)
  const [total, setTotal] = useState(0)
  const [qty, setQty] = useState(0)
  const product = useRef()

  const handleTotal = (e) => {
    setQty(e.target.value)
    setTotal(parseInt(qty) + 1)
    console.log(total)
  }

  const handleChoice = async(choice, id, e) => {
    if (choice === true && id !== undefined) {
      const res = removeItemFromCart(id)
      if (res.status === 'success') {
        toast.success('Item removed from cart')
        e.target.parentNode.parentNode.remove()
      } else {
        toast.error("Failed! Please try again");
      }
    }
  }

  const handleRemoveProduct = async(_productName, _productId, _element) => {
    toast.info(<RemoveOption pname={_productName} pId={_productId} element={_element} />, { autoClose: false });
  }

  const RemoveOption = ({p_name, pId, e}) => {
    return (
        <>
          <h1>Are you sure you want to remove product <i>{p_name}</i>?</h1>
          <div className="flex gap-2">
            <button
                className="bg-red-500 w-full text-white p-1 rounded mt-2"
                onClick={() => handleChoice(true, pId, e)}
            >
              Yes, remove
            </button>

            <button
                className="bg-sky-500 w-full text-white p-1 rounded mt-2 shadow-lg"
                onClick={() => handleChoice(false)}
            >
              Cancel
            </button>
          </div>
        </>
    );
  };

  // const handleRemoveItem = (id, index, product) => {
  //   product.target.parentNode.parentNode.remove()
  // }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <div className="w-full bg-green-100" data-aos="fade-in" data-aos-duration="2000">
        <div className="w-full py-10">
          <h1 className="text-3xl font-bold md:mx-12 mx-2">Your Cart</h1>

          {/* Order summary */}
          <div className="w-full px-2 md:px-12 py-5 grid grid-cols-1 md:flex gap-3">
            <div className="recent__order__content w-full flex flex-col gap-4">

              { carts.map((cart, index) => {
                return (
                  <div key={index} className="each w-full bg-green-100 p-5 rounded flex justify-between items-center duration-500 hover:translate-y-[-3px]">
                <div className="each__content">
                  <h1 className="font-bold text-sm">{cart?.productName}</h1>
                  <p className="text-gray-400 text-xs">Product</p>
                </div>

                <div className="each__content">
                  <h1 className="font-bold text-sm">${Intl.NumberFormat().format(cart?.productPrice)}</h1>
                  <p className="text-gray-400 text-xs">Price</p>
                </div>

                <div className="each__content">
                  <input
                    type="number"
                    onChange={(e) => handleTotal(e)}
                    className="rounded-full p-1 bg-transparent ring-2 ring-green-300 w-16 text-sm text-center"
                  />
                  {/* <p className="text-gray-400 text-xs">Quantity</p> */}
                </div>

                <div className="each__content flex items-center gap-1 ring-2 ring-green-300 p-2 w-28 rounded-full justify-center hover:text-white hover:bg-orange-200 cursor-pointer duration-500">
                  <p className="text-black text-sm">${Intl.NumberFormat().format(total)}</p>
                </div>

                <div className="each__content">
                  <FiX
                    onClick={(e) => handleRemoveProduct(cart?.productName, cart?._id, e)}
                    size={20}
                    className="font-bold cursor-pointer ring-2 ring-green-300 hover:bg-green-200 rounded-full p-1"
                  />
                </div>
               </div>
                )
              }) }
              

            </div>

            <div className="cart bg-green-300 w-96 p-4 rounded">
              <h1 className="font-bold mb-3">Order summary</h1>
              <hr />

              <div className="subtotal flex justify-between text-sm p-3 mt-2">
                <p>Subtotal</p>
                <p>$635</p>
              </div>

              <div className="subtotal flex justify-between text-sm p-3">
                <p>Shipping</p>
                <p>$0</p>
              </div>

              <div className="subtotal flex justify-between rounded-full text-sm bg-green-200 p-3 mt-4">
                <p>Total</p>
                <p className="font-bold">$635</p>
              </div>

              <div className="flex gap-2">
                <button className="w-full text-xs bg-green-600 rounded text-white p-2 font-bold hover:shadow-lg duration-700 mt-4 hover:text-orange-100">
                  PAY THROUGH US
                </button>

                <button className="w-full text-xs bg-green-400 rounded text-white p-2 font-bold hover:shadow-lg duration-700 mt-4 hover:text-orange-100">
                  PAY DIRECT
                </button>
              </div>
            </div>
          </div>
          {/* <hr className="" /> */}

          <div className="info md:px-12 p-2">
            <h1 className="text-xl">Add billing address</h1>
            <span className="text-sm text-gray-400 font-bold">
              If left empty, account default address will be used
            </span>

            <input
              type="text"
              className="w-full p-1 ring-2 ring-green-400 mt-3 outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic rounded"
              placeholder="Billing address"
            />

            <div className="flex gap-2">
              <button className="w-full text-sm bg-green-600 rounded text-white p-3 font-bold hover:shadow-lg duration-700 mt-2 hover:text-orange-100 hover:translate-y-1">
                PAY THROUGH US
              </button>
              <button className="w-full text-sm bg-green-300 rounded text-white p-3 font-bold hover:shadow-lg duration-700 mt-2 hover:text-orange-100 hover:translate-y-1">
                PAY DIRECT
              </button>
            </div>
          </div>
        </div>{" "}
        {/* coNTAINER */}
      </div>
    </>
  );
};

export default Cart;
