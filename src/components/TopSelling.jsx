import React from 'react'
import { Link } from 'react-router-dom'
import react from '../assets/react.svg'
import { FiArrowRight } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import topElectronics from "../assets/images/topElectronics.jpg"


const TopSelling = () => {
    const products = useSelector(state => state.products.products)
    const productCount = products.length
    console.log(products);
  return (
    <>
        <div className="w-full bg-gray-100 p-5 flex flex-col gap-7">
            <div className="w-full flex flex-col bg-white p-10 rounded shadow-2xl">
                <div className='flex gap-4 items-center justify-between'>
                    <h1 className='text-2xl text-teal-500 font-thin'>New Collections</h1>
                    <Link to='/shop' className='text-sm text-orange-400 items-center flex gap-1 hover:text-orange-700 duration-500'>
                        View all
                        <FiArrowRight />
                    </Link>
                </div>
                <div className='py-0 bg-gray-200 mt-5 rounded flex justify-end px-0 '>
                    <div className='relative h-[250px] w-full'>
                    <img src={topElectronics} className='h-full w-full object-fill mix-blend-normal absolute'></img>
                    <h1 className='text-5xl text-white absolute top-[53%] right-2 font-medium'>Top Electronic</h1>
                    </div>
                </div>

                <h2 className='mt-5 text-gray-500 text-xl font-thin'>Products</h2>

                <div className='w-full flex mt-3 justify-between'>

                {products.length > 0 
                ? (
                    <Swiper
                    spaceBetween={20}
                    modules={[Navigation]}
                    navigation
                    scrollbar={{ draggable: true }}
                    slidesPerView={ productCount > 4 ? 4 : productCount }
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                { products.map((product, index) => {
                    return (
                        <SwiperSlide className='p-2' key={index}>
                            <div className='ring-2 ring-orange-300 p-7 flex flex-col items-center rounded hover:translate-y-1 duration-500 hover:shadow-lg'>
                                <img className='mb-4 w-32 h-32' src={ product?.productImage } alt="" />
                                <Link to={`/product/${product?.productSlug}`} className='text-md font-extrabold hover:text-orange-400 duration-500'>{ product?.productName }</Link>
                                <span>⭐️⭐️⭐️⭐️</span>
                                <span className='font-extrabold text-md text-orange-500'>${ product?.productPrice }</span>
                            </div>
                        </SwiperSlide>
                    )
                }) }

                </Swiper>
                ) : null
                }
                
                </div>
            </div>
        </div>
    </>
  )
}

export default TopSelling