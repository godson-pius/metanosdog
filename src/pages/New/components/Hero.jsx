import React from 'react'
import { Link } from 'react-router-dom'
import furniture from '../../../assets/images/furniture.png'
import chair1 from '../../../assets/images/chair1.png'
import chair2 from '../../../assets/images/chair2.png'
import chair3 from '../../../assets/images/chair3.png'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Navigation } from 'swiper'


const Hero = () => {
    return (
        <>
            <section className='px-20 flex items-start'>
                <div className="categories bg-[#F7F8FA] flex flex-col divide-y w-56 p-5 text-[#555555] text-sm">
                    <Link className='p-2 hover:scale-105 hover:shadow-lg hover:bg-[#7AC751] hover:text-white hover:rounded-lg duration-1000'>All</Link>
                    <Link className='p-2 hover:scale-105 hover:shadow-lg hover:bg-[#7AC751] hover:text-white hover:rounded-lg duration-1000'>New Arrivals</Link>
                    <Link className='p-2 hover:scale-105 hover:shadow-lg hover:bg-[#7AC751] hover:text-white hover:rounded-lg duration-1000'>Real Estate</Link>
                    <Link className='p-2 hover:scale-105 hover:shadow-lg hover:bg-[#7AC751] hover:text-white hover:rounded-lg duration-1000'>Hot Sales</Link>
                    <Link className='p-2 hover:scale-105 hover:shadow-lg hover:bg-[#7AC751] hover:text-white hover:rounded-lg duration-1000'>Furniture</Link>
                    <Link className='p-2 hover:scale-105 hover:shadow-lg hover:bg-[#7AC751] hover:text-white hover:rounded-lg duration-1000'>Electronics</Link>
                    <Link className='p-2 hover:scale-105 hover:shadow-lg hover:bg-[#7AC751] hover:text-white hover:rounded-lg duration-1000'>Gaming</Link>
                    <Link className='p-2 hover:scale-105 hover:shadow-lg hover:bg-[#7AC751] hover:text-white hover:rounded-lg duration-1000'>Kitchen</Link>
                    <Link className='p-2 hover:scale-105 hover:shadow-lg hover:bg-[#7AC751] hover:text-white hover:rounded-lg duration-1000'>Clothing</Link>
                </div>

                <section className="banner bg-[#F1FAFF] m-3 p-5 flex items-center px-10 gap-32">
                    <div className="left_side">
                        <h4 className='text-[#7AC751] uppercase text-xl'>Top Collections 2023</h4>
                        <h2 className='text-5xl font-bold mt-2'>We Serve Your <br /> Dream <span className='border-b-4 border-[#7AC751]'>Furniture</span></h2>

                        <p className='text-[#555555] my-6 text-2xl font-thin'>Get 50% of all products</p>
                        <button className='uppercase bg-[#7AC751] text-white p-2 rounded text-sm'>Shop Now</button>
                    </div>

                    <img src={furniture} alt="Banner Image" className='w-80 h-80' />
                </section>

                <section className="single m-3 grid grid-cols-2 gap-3">
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }} 
                    className="each bg-[#F1FAFF] w-full p-5 flex flex-col items-center gap-1 rounded duration-500 hover:scale-125 hover:shadow-lg">
                        <img src={chair1} alt="Banner Image" className='w-20 h-20' />
                        <h3 className='font-extrabold text-[#7AC751]'>$120</h3>
                        <p className='text-sm text-[#555555]'>Office Chair Desk</p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ delay: 1, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }} 
                     className="each bg-[#F1FAFF] w-full p-5 flex flex-col items-center gap-1 rounded duration-500 hover:scale-125 hover:shadow-lg">
                        <img src={chair2} alt="Banner Image" className='w-20 h-20' />
                        <h3 className='font-extrabold text-[#7AC751]'>$120</h3>
                        <p className='text-sm text-[#555555]'>Home Alisa Sofa</p>
                    </motion.div>
                    
                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ delay: 2, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }} 
                    className="each bg-[#F1FAFF] w-full p-5 flex flex-col items-center gap-1 rounded duration-500 hover:scale-125 hover:shadow-lg">
                        <img src={chair3} alt="Banner Image" className='w-20 h-20' />
                        <h3 className='font-extrabold text-[#7AC751]'>$120</h3>
                        <p className='text-sm text-[#555555]'>Golden Chair Desk</p>
                    </motion.div>
                    
                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ delay: 3, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }} 
                    className="each bg-[#F1FAFF] w-full p-5 flex flex-col items-center gap-1 rounded duration-500 hover:scale-125 hover:shadow-lg">
                        <img src={chair1} alt="Banner Image" className='w-20 h-20' />
                        <h3 className='font-extrabold text-[#7AC751]'>$120</h3>
                        <p className='text-sm text-[#555555]'>Modern Chair</p>
                    </motion.div>
                </section>
            </section>
        </>
    )
}

export default Hero