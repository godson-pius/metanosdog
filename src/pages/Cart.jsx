import React, { useEffect, useRef, useState } from "react";
import { FiFileText, FiMoreHorizontal, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeItemFromCart } from '../api/index'
import { removeCart } from "../store/slice/cartSlice";

const Cart = () => {
  const carts = useSelector(state => state.carts.carts)
  const dispatch = useDispatch()
  const [priceState, setPriceState] = useState(0)
  const [total, setTotal] = useState(0)
  const [qty, setQty] = useState(0)
  const product = useRef()

  const handleChoice = async (choice, id, e, index) => {
    if (choice === true && id !== undefined) {
      const res = await removeItemFromCart(id)
      if (res.status === 'success') {
        toast.success('Item removed from cart')
        dispatch(removeCart(index))
        handleTotal()
        e.target.parentNode.parentNode.remove()
      } else {
        toast.error("Failed! Please try again");
      }
    }
  }

  const handleRemoveProduct = async (_productName, _productId, _element, index) => {
    toast.info(<RemoveOption pname={_productName} pId={_productId} element={_element} indexNum={index} />, { autoClose: false });
  }

  const RemoveOption = ({ p_name, pId, e, indexNum }) => {
    return (
      <>
        <h1>Are you sure you want to remove product <i>{p_name}</i>?</h1>
        <div className="flex gap-2">
          <button
            className="bg-red-500 w-full text-white p-1 rounded mt-2"
            onClick={() => handleChoice(true, pId, e, indexNum)}
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

  const handleTotal = (value, price) => {
    const InCart = carts
    let getTotal = 0;
    InCart.forEach(cart => {
      getTotal += +cart.productPrice
    })
    setPriceState(price + 1)
    setTotal(getTotal)

    console.log(getTotal);
  }

  // const tmpTotal = (price =  0) => {
  //   console.log('dd');
  //   return price 
  // }

  useEffect(() => {
    handleTotal()
  }, [priceState])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <div className="w-full" data-aos="fade-in" data-aos-duration="2000">
        <div className="w-full py-10 px-10">
          <h1 className="text-3xl font-bold md:mx-12 mx-10">Your Cart</h1>

          {/* Order summary */}
          <div className="w-full px-2 md:px-12 py-5 grid grid-cols-1 md:flex gap-3">
            <div className="recent__order__content w-full flex flex-col gap-4">

              {carts.map((cart, index) => {
                return (
                  <div key={index} className="each w-full bg-white hover:drop-shadow-sm border-2 p-3 rounded-full flex justify-between items-center duration-500 hover:translate-y-[-3px]">
                    <div className="each__content w-96 ml-2">
                      <h1 className="font-bold text-sm lg:text-md">{cart?.productName}</h1>
                      <p className="text-gray-400 text-xs">Product</p>
                    </div>

                    <div className="each__content w-20">
                      <h1 className="font-extrabold text-sm lg:text-lg">${Intl.NumberFormat().format(cart?.productPrice)}</h1>
                      <p className="text-gray-400 text-xs">Price</p>
                    </div>
                    
                    <div className="each__content">
                      <h1 className="font-extrabold text-sm lg:text-lg">${Intl.NumberFormat().format(cart?.productPrice)}</h1>
                      <p className="text-gray-400 text-xs">Total</p>
                    </div>

                    {/* <div className="each__content w-20">
                      <input
                        type="number"
                        onChange={(e) => handleTotal(e.target.value, cart?.productPrice)}
                        className="rounded-full p-1 bg-transparent ring-2 ring-green-300 w-16 text-sm text-center"
                      />
                      <p className="text-gray-400 text-xs">Quantity</p>
                    </div> */}

                      {/* <p className="font-bold text-black text-lg ml-2">${Intl.NumberFormat().format(cart?.productPrice)}</p> */}

                    <div className="each__content">
                      <FiX
                        onClick={(e) => handleRemoveProduct(cart?.productName, cart?._id, e, index)}
                        size={20}
                        className="font-bold cursor-pointer ring-2 ring-green-300 hover:bg-green-200 rounded-full p-1"
                      />
                    </div>
                  </div>
                )
              })}


            </div>

            <div className="cart bg-green-300 w-96 p-4 rounded">
              <h1 className="font-bold mb-3">Order summary</h1>
              <hr />

              <div className="subtotal flex justify-between text-sm p-3 mt-2">
                <p>Subtotal</p>
                <p>${Intl.NumberFormat().format(total)}</p>
              </div>

              <div className="subtotal flex justify-between text-sm p-3">
                <p>Shipping</p>
                <p>$0</p>
              </div>

              <div className="subtotal flex justify-between rounded-full text-sm bg-green-200 p-3 mt-4">
                <p>Total</p>
                <p className="font-bold">${Intl.NumberFormat().format(total)}</p>
              </div>

              <div className="flex gap-2">
                <button className="w-full text-xs bg-green-600 rounded text-white p-2 font-bold hover:shadow-lg duration-700 mt-4 hover:text-green-100">
                  PAY THROUGH US
                </button>

                <button className="w-full text-xs bg-green-400 rounded text-white p-2 font-bold hover:shadow-lg duration-700 mt-4 hover:text-green-100">
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
              className="w-full p-3 ring-2 ring-green-400 mt-3 outline-none duration-500 px-3 text-sm font-medium focus:bg-green-50 mb-3 placeholder:italic rounded-full"
              placeholder="Billing address"
            />

            <div className="flex gap-2">
              <button className="w-full text-sm bg-green-600 rounded text-white p-3 font-bold hover:shadow-lg duration-700 mt-2 hover:text-green-100 hover:translate-y-1">
                PAY THROUGH US
              </button>
              <button className="w-full text-sm bg-green-300 rounded text-white p-3 font-bold hover:shadow-lg duration-700 mt-2 hover:text-green-100 hover:translate-y-1">
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
