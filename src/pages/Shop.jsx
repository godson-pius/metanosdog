import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { FiDollarSign, FiHexagon, FiLink, FiRefreshCw, FiSend, FiStar } from 'react-icons/fi'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { handleCreateCart } from "../api";
import { addCart } from "../store/slice/cartSlice";

const Shop = () => {
  //const [items, setItems] = useState([]);
  
  /*const [currentItems, setCurrentItems] = useState(1)
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 3;
  
  useEffect(() =>{
    const endOffset = itemOffset + itemsPerPage;
     setCurrentItems(products.slice(itemOffset, endOffset));
     setPageCount(Math.ceil(products.length / itemPerPage));
  }, [itemOffset, itemPerPage,products]);

  const handlePageClick = (data) => {
    const newOffset = (data.selected * itemPerPage) % products.length;
    setItemOffset(newOffset);
  };*/

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
    {/*// Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };*/}

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

              <Link className="flex items-center gap-2 text-gray-400 hover:text-gray-600 hover:bg-green-300 duration-700">
                <FiLink size={14} />
                <span className="text-sm">Fashion</span>
              </Link>

              <Link className="flex items-center gap-2 text-gray-400 hover:text-gray-600 hover:bg-green-300 duration-700">
                <FiLink size={14} />
                <span className="text-sm">Instruments</span>
              </Link>

              <Link className="flex items-center gap-2 text-gray-400 hover:text-gray-600 hover:bg-green-300 duration-700">
                <FiLink size={14} />
                <span className="text-sm">Gaming</span>
              </Link>
              
              <Link className="flex items-center gap-2 text-gray-400 hover:text-gray-600 hover:bg-green-300 duration-700">
                <FiLink size={14} />
                <span className="text-sm">Electronics</span>
              </Link>
              
              <Link className="flex items-center gap-2 text-gray-400 hover:text-gray-600 hover:bg-green-300 duration-700">
                <FiLink size={14} />
                <span className="text-sm">Baby Products</span>
              </Link>
              
              <Link className="flex items-center gap-2 text-gray-400 hover:text-gray-600 hover:bg-green-300 duration-700">
                <FiLink size={14} />
                <span className="text-sm">Home & Office</span>
              </Link>

              {/* Ads */}
              <h3 className="font-bold text-lg mt-3">Meta Nosdog</h3>
              <Link className="flex items-center gap-1 text-gray-400 hover:text-gray-600 hover:bg-green-300 duration-700">
                <FiDollarSign size={14} />
                <span className="text-sm">Buy nosdog</span>
              </Link>
              
              <Link className="flex items-center gap-1 text-gray-400 hover:text-gray-600 hover:bg-green-300 duration-700">
                <FiSend size={14} />
                <span className="text-sm">Send nosdog</span>
              </Link>
              
              <Link className="flex items-center gap-1 text-gray-400 hover:text-gray-600 hover:bg-green-300 duration-700">
                <FiRefreshCw size={14} />
                <span className="text-sm">Exchange nosdog</span>
              </Link>

              <h3 className="font-bold text-lg mt-3">Payment</h3>
              <Link className="flex items-center gap-1 text-gray-400 hover:text-gray-600 hover:bg-green-300 duration-700">
                <FiHexagon size={14} />
                <span className="text-sm">Pay via nosdog</span>
              </Link>
              
              <Link className="flex items-center gap-1 text-gray-400 hover:text-gray-600 hover:bg-green-300 duration-700">
                <FiHexagon size={14} />
                <span className="text-sm">Pay via card</span>
              </Link>

            </div> {/* End of sidebar */}

            {/* Products */}
            <div className="products w-full grid md:grid-cols-2 lg:grid-cols-3 px-5 items-center gap-3">

            { products.map((product, index) => {
              return (
              <div key={index} className="product w-full bg-slate-800 rounded-xl hover:shadow-xl hover:scale-105 duration-700">
                <div style={{ backgroundImage: `url(${product?.productImage})` }} className="product__image bg-[#7AC751] w-full h-40 rounded-t-xl bg-cover bg-center">
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
                    <button onClick={() => addToCart(product.productName, product.productPrice)} className="bg-[#7AC751] p-1 rounded text-white hover:bg-green-500 duration-700">Cart</button>
                  </div>
                </div>
              </div>
              )
            }) }

             <div className="pagination mt-4 ml-[100%]">
              {/*{currentItems.map((product, index) => {
                return(
                  <div></div>
                );
              })}*/}
              <ReactPaginate 
                breakLabel="..."
                nextLabel="next"
              //onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPageDisplayed={2}
                pageCount={20}
                previousLabel="previous"
              //renderOnZeroPageCount={null}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName = {'page-item'}
                nextLinkClassName = {'page-link'}
                breakClassName = {'page-item'}
                breakLinkClassName = {'page-link'}
                activeClassName = {'active'}
              />
              </div>
               
            </div>
            {/* End of products */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
