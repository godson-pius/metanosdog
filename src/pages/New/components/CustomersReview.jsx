import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import user from '../../../assets/images/user.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Pagination, Autoplay } from 'swiper'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.min.css'

const CustomersReview = () => {
    return (
        <>
            <div className="trending w-full md:px-8 lg:px-20 my-20 flex flex-col items-center">
                <h1 className='text-[#555555] text-3xl uppercase'>What customers say</h1>

                <Swiper
                spaceBetween={20}
                modules={[A11y, Pagination, Autoplay]}
                pagination={{ clickable: true }}
                className='w-full p-10 mt-2'>
                    <SwiperSlide>
                        <div className="container bg-[#F8FAFB] flex flex-col items-center gap-4 p-5 rounded">
                            <img src={user} alt="User Profile" className='w-16 h-16 -mt-10' />

                            <p className='text-center text-[#555555] md:w-[100%] md:px-4 lg:w-[56rem]'>I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.</p>

                            <div className="user__info flex flex-col items-center">
                                <h2 className='font-bold text-lg capitalize'>Angelina Joly</h2>
                                <p className='text-sm text-gray-400'>Customer</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="container bg-[#F8FAFB] flex flex-col items-center gap-4 p-5 rounded">
                            <img src={user} alt="User Profile" className='w-16 h-16 -mt-10' />

                            <p className='text-center text-[#555555] w-[56rem]'>I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.</p>

                            <div className="user__info flex flex-col items-center">
                                <h2 className='font-bold text-lg capitalize'>Victor Smith</h2>
                                <p className='text-sm text-gray-400'>Customer</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="container bg-[#F8FAFB] flex flex-col items-center gap-4 p-5 rounded">
                            <img src={user} alt="User Profile" className='w-16 h-16 -mt-10' />

                            <p className='text-center text-[#555555] w-[56rem]'>I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.</p>

                            <div className="user__info flex flex-col items-center">
                                <h2 className='font-bold text-lg capitalize'>Esther Walls</h2>
                                <p className='text-sm text-gray-400'>Customer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default CustomersReview