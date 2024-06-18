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
import { FiX } from 'react-icons/fi'


const Hero = ({ catActive, setCatActive }) => {
    return (
        <>
            <section className='px-4 lg:px-20 flex sm:flex-wrap lg:flex-nowrap items-start'>
                <div className={`${catActive ? 'flex' : 'hidden'} lg:flex categories gap-4 sm:text-center lg:gap-0 bg-[#f6f7f9] lg:bg-transparent flex flex-col z-50 lg:static absolute top-0 left-0 w-[60vw] lg:w-56 p-3 lg:p-5 h-[100vh] lg:h-[28rem] overflow-clip hover:overflow-y-auto lg:text-left text-[#555555] text-sm duration-700`}>
                    <div className="flex items-center justify-between">
                        <h2 className='text-[1rem] font-bold text-black lg:hidden'>Trade Point Network</h2>
                        <FiX className='lg:hidden' size={20} color='red' onClick={() => setCatActive(!catActive)}/>
                    </div>
                    <hr className='lg:hidden' />

                    <Link className='p-2 text-slate-100 hover:scale-105 hover:shadow-lg bg-green-500 glass hover:bg-[#7AC751] hover:text-white rounded-lg duration-1000'>All</Link>
                    <Link className='p-2 text-slate-100 hover:scale-105 hover:shadow-lg bg-green-500 glass hover:bg-[#7AC751] hover:text-white rounded-lg duration-1000'>New Arrivals</Link>
                    <Link className='p-2 text-slate-100 hover:scale-105 hover:shadow-lg bg-green-500 glass hover:bg-[#7AC751] hover:text-white rounded-lg duration-1000'>Real Estate</Link>
                    <Link className='p-2 text-slate-100 hover:scale-105 hover:shadow-lg bg-green-500 glass hover:bg-[#7AC751] hover:text-white rounded-lg duration-1000'>Hot Sales</Link>
                    <Link className='p-2 text-slate-100 hover:scale-105 hover:shadow-lg bg-green-500 glass hover:bg-[#7AC751] hover:text-white rounded-lg duration-1000'>Furniture</Link>
                    <Link className='p-2 text-slate-100 hover:scale-105 hover:shadow-lg bg-green-500 glass hover:bg-[#7AC751] hover:text-white rounded-lg duration-1000'>Electronics</Link>
                    <Link className='p-2 text-slate-100 hover:scale-105 hover:shadow-lg bg-green-500 glass hover:bg-[#7AC751] hover:text-white rounded-lg duration-1000'>Gaming</Link>
                    <Link className='p-2 text-slate-100 hover:scale-105 hover:shadow-lg bg-green-500 glass hover:bg-[#7AC751] hover:text-white rounded-lg duration-1000'>Kitchen</Link>
                    <Link className='p-2 text-slate-100 hover:scale-105 hover:shadow-lg bg-green-500 glass hover:bg-[#7AC751] hover:text-white rounded-lg duration-1000'>Clothing</Link>

                </div>

                <div className="flex flex-col lg:flex-row">
                    <section className="banner bg-[#F1FAFF] m-3 p-5 flex items-center px-10 gap-32 xl:h-[445px]">
                        <div className="left_side ">
                            <h4 className='text-[#7AC751] uppercase text-xl '>Trade Point Network</h4>
                            <h2 className='text-5xl font-bold mt-2 '>Become a <br /> <span className='border-b-4 border-[#7AC751]'>Vendor</span></h2>

                            <p className='text-[#555555] my-6 text-2xl font-thin '>Get 50% of all products on TPN</p>
                            <Link to={'/vendor'} className='uppercase bg-[#7AC751] text-white p-2 rounded text-sm '>Be   a vendor</Link>
                        </div>

                        <img src={furniture} alt="Banner Image" className='w-80 h-80 hidden lg:block' />
                    </section>

                    <section className="single m-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3 md:h-[auto] lg:h-[445px] xl:h-[445px] lg:mr-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }}
                            className="each bg-[#F1FAFF] w-full p-5 flex flex-col items-center gap-1 rounded duration-500 hover:scale-125 hover:shadow-lg">
                            <img src={chair1} alt="Banner Image" className='lg:w-20 lg:h-20' />
                            <h3 className='font-extrabold text-[#7AC751]'>$120</h3>
                            <p className='text-sm text-[#555555]'>Office Chair Desk</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }}
                            className="each bg-[#F1FAFF] w-full p-5 flex flex-col items-center gap-1 rounded duration-500 hover:scale-125 hover:shadow-lg">
                            <img src={chair2} alt="Banner Image" className='lg:w-20 lg:h-20' />
                            <h3 className='font-extrabold text-[#7AC751]'>$120</h3>
                            <p className='text-sm text-[#555555]'>Home Alisa Sofa</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }}
                            className="each bg-[#F1FAFF] w-full h-52 p-5 flex flex-col items-center gap-1 rounded duration-500 hover:scale-125 hover:shadow-lg">
                            <img src={chair3} alt="Banner Image" className='w-20 h-20' />
                            <h3 className='font-extrabold text-[#7AC751]'>$120</h3>
                            <p className='text-sm text-[#555555]'>Golden Chair Desk</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 3, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }}
                            className="each bg-[#F1FAFF] w-full h-52 p-5 flex flex-col items-center gap-1 rounded duration-500 hover:scale-125 hover:shadow-lg">
                            <img src={chair1} alt="Banner Image" className='w-20 h-20' />
                            <h3 className='font-extrabold text-[#7AC751]'>$120</h3>
                            <p className='text-sm text-[#555555]'>Modern Chair</p>
                        </motion.div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Hero