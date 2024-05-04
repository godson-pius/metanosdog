import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import { FiCalendar, FiEdit3, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../store/slice/cartSlice";
import { handleCreateCart, addReview, getProductReviews } from "../api";
import { toast } from "react-toastify";
import moment from "moment";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [isDescription, setIsDescription] = useState(true);
  const [isReview, setIsReview] = useState(false);
  const products = useSelector((state) => state.products.products)
  const params = useParams()
  const [product, setProduct] = useState([])
  const dispatch = useDispatch()
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [reviews, setReviews] = useState([])

  // Adding review to db
  const [rate, setRate] = useState("")
  const [review, setReview] = useState("")

  const showDescription = () => {
    setIsDescription(true);
    setIsReview(false);
  };

  const showReview = () => {
    setIsReview(true);
    setIsDescription(false);
  };

  const getProductDetails = () => {
    const { name } = params
    const product = products.filter((product) => product.productSlug === name)
    setProduct(product)
  }

  // Functions to add product to cart
  const addToCart = async(productName, productPrice) => {
    if (currentUser) {
      const data = {
        user: currentUser._id,
        productName,
        productPrice
      }

      const res = await handleCreateCart(data);
      if (res.status === "success") {
        dispatch(addCart(res.cart))
        toast.success(`${productName} has been added to cart`)
      } else if(res.status === "exists") {
        toast.info(`${productName} already exists in cart`)
      } else {
        toast.error(`${productName} could not be added to cart`)
      }
    } else {
      toast.error(`Unauthenticated! Please log in and try again`)
    }
  }

  const handleAddReview = async(e) => {
    e.preventDefault()

    const data = {
      productId: products[0]._id,
      user: `${currentUser.firstname} ${currentUser.lastname}`,
      review,
      rate
    }

    const res = await addReview(data)
    if (res.status === "success") {
      toast.success('Thank you for the review!')
        fetchProductReviews()
    } else {
      toast.error('Failed to add! Please try again')
    }

  }

  const fetchProductReviews = async() => {
    const res = await getProductReviews(products[0]._id)
    setReviews(res.reviews)
  }

  useEffect(() => {
    getProductDetails()
    fetchProductReviews()
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    if(!product.length) getProductDetails()
  }, [product])

  return (
    <>
      <div className="w-full" data-aos="fade-in" data-aos-duration="2000">
        <div className="w-full mt-16 gap-5 justify-center lg:flex px-10 items-center">
          {/* Product Images */}
          <div className="md:w-[40rem] lg:w-[45rem]">
            <Carousel>
              <div>
                <img
                  src={product[0]?.productImage}
                  alt="Product Image"
                  className="w-10"
                />
              </div>

              <div>
                <img
                  src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/109817/2.jpg?8356"
                  alt="Product Image"
                  className="w-10"
                />
              </div>

              <div>
                <img
                  src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/109817/3.jpg?8356"
                  alt="Product Image"
                  className="w-10"
                />
              </div>

              <div>
                <img
                  src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/109817/4.jpg?8356"
                  alt="Product Image"
                  className="w-10"
                />
              </div>
            </Carousel>
          </div>

          {/* Product Details */}
          <div className="w-full flex flex-col details">
            <h1 className="text-xl">
              { (product.length > 0) ? product[0]?.productName : null}
            </h1>

            {/* Ratings */}
            <div className="rating flex items-end gap-2">
              <div className="stars flex">
                <span className="text-green-300 text-xl">
                  <HiStar />
                </span>
                <span className="text-green-300 text-xl">
                  <HiStar />
                </span>
                <span className="text-green-300 text-xl">
                  <HiStar />
                </span>
                <span className="text-green-300 text-xl">
                  <HiOutlineStar />
                </span>
                <span className="text-green-300 text-xl">
                  <HiOutlineStar />
                </span>
              </div>

              <h5 className="text-xs">Satisfied</h5>
            </div>

            {/* Price */}
            <h1 className="font-bold text-xl mt-2 text-green-600">${ (product.length > 0) ? Intl.NumberFormat().format(product[0]?.productPrice) : null}</h1>

            {/* Description */}
            <p className="text-sm mt-5 text-gray-600">
            { (product.length > 0) ? product[0]?.productDesc : null}
            </p>

            {/* Add to cart */}
            <div className="flex gap-3 mt-8 items-center">
              <input
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                className="ring-2 ring-green-300 w-20 outline-none duration-500 focus:translate-x-1 focus:shadow-lg text-center p-2 font-bold rounded"
              />

              <button onClick={() => addToCart(product[0]?.productName, product[0]?.productPrice)}  className="bg-green-400 text-white p-[0.7rem] rounded text-sm duration-500 hover:translate-x-[-2px] hover:shadow-lg">
                Add to cart
              </button>
            </div>

            {/* Category and Share */}
            <div className="share">
              <p className="mt-3 text-sm text-gray-700">
                Category: <span className="text-gray-600">{ (product.length > 0) ? product[0]?.productCat : null}</span>
              </p>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm text-gray-700">Share this product: </p>
                <FacebookShareButton
                  hashtag={"#metanosdog..."}
                  url="https://www.worldbraintechnology.com/academy/"
                  quote={"I saw this awesome product on Meta Nosdog"}
                >
                  <FiFacebook
                    size={15}
                    round={true}
                    className="hover:translate-y-1 hover:shadow-lg duration-500 text-gray-400"
                  />
                </FacebookShareButton>

                <TwitterShareButton
                  title={"Bolt from Meta Nosdog"}
                  hashtags={"#metanosdog..."}
                  via=""
                >
                  <FiTwitter
                    size={15}
                    round={true}
                    className="hover:translate-y-1 hover:shadow-lg duration-500 text-gray-400"
                  />
                </TwitterShareButton>

                <WhatsappShareButton
                  title={"Bolt from Meta Nosdog"}
                  separator={"https://www.worldbraintechnology.com/"}
                >
                  <AiOutlineWhatsApp
                    size={17}
                    round={true}
                    className="hover:translate-y-1 hover:shadow-lg duration-500 text-gray-400"
                  />
                </WhatsappShareButton>

                <LinkedinShareButton
                  title="Bolt from Meta Nosdog"
                  source="https://www.worldbraintechnology.com/"
                  summary="Enjoy"
                >
                  <FiLinkedin
                    size={15}
                    round={true}
                    className="hover:translate-y-1 hover:shadow-lg duration-500 text-gray-400"
                  />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="mx-20"/> */}

        {/* Description and Review */}
        <div className="w-full py-10">
          <div className="w-full flex mb-7 justify-center gap-7 items-center">
            <p
              onClick={showDescription}
              className={`text-gray-600 text-sm hover:text-green-300 cursor-pointer duration-500 ${
                isDescription ? "font-bold text-green-400" : null
              }`}
            >
              Description
            </p>
            <p
              onClick={showReview}
              className={`text-gray-600 text-sm hover:text-green-300 cursor-pointer duration-500 ${
                isReview ? "font-bold text-green-400" : null
              }`}
            >
              Review
            </p>
          </div>

          <div className="w-full justify-center text-sm text-gray-600 px-4 md:px-20 content">
            {isDescription ? (
              <p data-aos="flip-right">
              { (product.length > 0) ? product[0]?.productDesc : null}
              </p>
            ) : null}

            {isReview ? (
              <div className="w-full" data-aos="flip-left">
                <div className="reviews grid md:grid-cols-2 gap-4 py-5">

                  { reviews.length > 0 ? (
                      reviews.map((e, index) => (

                            <div key={e._id} className="single w-full p-5 bg-gray-100 rounded hover:shadow-lg duration-500">
                              <div className="flex justify-between">
                                <h1 className="font-bold">{e.user}</h1>
                                <div className="stars flex">
                                <span className="text-green-300 text-xl">
                                  <HiStar />
                                </span>
                                          <span className="text-green-300 text-xl">
                                  <HiStar />
                                </span>
                                          <span className="text-green-300 text-xl">
                                  <HiStar />
                                </span>
                                          <span className="text-green-300 text-xl">
                                  <HiOutlineStar />
                                </span>
                                          <span className="text-green-300 text-xl">
                                  <HiOutlineStar />
                                </span>
                                </div>
                              </div> <hr className="my-3" />

                              {/* desc */}
                              <p>{e.review}</p>

                              {/* Date */}
                              <div className="flex items-center mt-3 gap-2">
                                <FiCalendar className="text-green-400" />
                                <p className="text-xs text-green-400">{moment(`${e.updatedAt}`, "YYYYMMDD").fromNow()}</p>
                              </div>
                            </div>
                        )
                      )
                  ) : "No review" }



                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 py-3">
                <FiEdit3 />
                <h1>Add review</h1>
                </div>

                <div
                  className="w-full flex flex-col bg-gray-200 p-5 rounded"
                >
                  <form onSubmit={handleAddReview}>
                    <input
                      type="text"
                      readOnly
                      className="w-full p-1 ring-2 ring-gray-400 outline-none duration-500 px-3 text-sm font-medium focus:bg-gray-300 mb-3 placeholder:italic bg-gray-200"
                      value={`${currentUser?.firstname} ${currentUser?.lastname}`}
                    />

                    <select className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-green-200 mb-3" onChange={(e) => setRate(e.target.value)}>
                      <option value="null" disabled selected>
                        Rate product
                      </option>
                      <option value="1">Not satisfactory (1)</option>
                      <option value="2">Almost satisfactory (2)</option>
                      <option value="3">satisfactory (3)</option>
                      <option value="4">Very satisfactory (4)</option>
                      <option value="5">Excellent (5)</option>
                    </select>

                    <textarea className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-green-200" onChange={(e) => setReview(e.target.value)}></textarea>

                    <button type="submit" className='w-full bg-green-300 p-2 text-black font-bold hover:shadow-lg duration-700 mt-4 hover:text-white'>Post review</button>
                  </form>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
