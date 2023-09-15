import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import speaker3 from "../assets/images/speaker3.webp"
import headphones_c_3 from "../assets/images/headphones_c_3.webp"
import nivea_lotion from "../assets/images/nivea_lotion.jpg"
import shoe2 from "../assets/images/shoe2.jpg"

const Recommended = () => {
  return (
    <>
        <div className="w-full bg-gray-100 p-5 flex flex-col gap-7">
            <div className="w-full flex flex-col bg-white p-10 rounded shadow-2xl">
                <div className='flex gap-4 items-center justify-between'>
                    <h1 className='text-2xl text-teal-500 font-thin'>Recommendation For You</h1>
                    <Link to='/shop' className='text-sm text-orange-400 items-center flex gap-1 hover:text-orange-700 duration-500'>
                        View all
                        <FiArrowRight />
                    </Link>
                </div>

                <div className='w-full flex mt-3 justify-between'>
                   
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className='p-2'>
                        <div className='ring-2 ring-orange-300 p-7 flex flex-col items-center rounded hover:translate-y-1 duration-500 hover:shadow-lg'>
                            <img className='mb-4' src={ speaker3 } alt="" />
                            <Link to="/" className='text-lg text-md font-extrabold hover:text-orange-400 duration-500'>Jbl Xtreme 3 waterproof Portable</Link>
                            <span>⭐️⭐️⭐️⭐️</span>
                            <span className='font-extrabold text-md text-orange-500'>₦510,000</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='p-2'>
                        <div className='ring-2 ring-orange-300 p-7 flex flex-col items-center rounded hover:translate-y-1 duration-500 hover:shadow-lg'>
                            <img className='mb-4' src={ headphones_c_3 } alt="" />
                            <Link to="/" className='text-lg text-md font-extrabold hover:text-orange-400 duration-500'>Bang and Olufsen Beoplay H95 head..</Link>
                            <span>⭐️⭐️⭐️⭐️</span>
                            <span className='font-extrabold text-md text-orange-500'>₦520,000</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='p-2'>
                        <div className='ring-2 ring-orange-300 p-7 flex flex-col items-center rounded hover:translate-y-1 duration-500 hover:shadow-lg'>
                            <img className='mb-4' src={ nivea_lotion } alt="" />
                            <Link to="/" className='text-lg text-md font-extrabold hover:text-orange-400 duration-500'>Nivea Body Lotion</Link>
                            <span>⭐️⭐️⭐️⭐️</span>
                            <span className='font-extrabold text-md text-orange-500'>₦150,000</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='p-2'>
                        <div className='ring-2 ring-orange-300 p-7 flex flex-col items-center rounded hover:translate-y-1 duration-500 hover:shadow-lg'>
                            <img className='mb-4' src={ shoe2 } alt="" />
                            <Link to="/" className='text-lg text-md font-extrabold hover:text-orange-400 duration-500'>Designer sneakers</Link>
                            <span>⭐️⭐️⭐️⭐️</span>
                            <span className='font-extrabold text-md text-orange-500'>₦70,000</span>
                        </div>
                    </SwiperSlide>
                </Swiper>

                </div>
            </div>
        </div>
    </>
  )
}

export default Recommended