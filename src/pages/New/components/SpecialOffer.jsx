import React from 'react'
import offer1 from '../../../assets/images/offer1.png'
import offer2 from '../../../assets/images/offer2.png'
import { motion, AnimatePresence } from 'framer-motion'

const SpecialOffer = () => {
    return (
        <>
            <div className="trending w-full md:px-8 lg:px-20 my-12 flex flex-col items-center">
                <h1 className='text-[#555555] text-3xl uppercase'>Special Offer</h1>

                <section className="offers flex flex-col md:flex-row gap-3 justify-between items-center md:gap-4 lg:gap-5 mt-7 md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.9, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 10, stiffness: 100, restDelta: 0.001 } }}
                        viewport={{ once: true }}
                        className='w-full lg:w-[600px] h-[300px] p-10' style={{ backgroundImage: `url(${offer1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h1 className='capitalize font-bold text-[#555555] text-2xl'>14 plots Land</h1>
                        <p className='text-xs text-gray-400 w-56 mt-2'>Looking for 14 plots. Are you ready for growth? Shop with us 40% discount!</p>

                        <div className="flex gap-3 mt-10 text-2xl items-center">
                            <p className="price text-[#7AC751] ml-3">$678</p>
                            <del className='text-gray-400 text-sm'>$100</del>

                            <button className='bg-[#7AC751] text-sm text-white p-2 rounded'>Shop Now</button>
                        </div>

                        <div className="time flex mt-8 gap-2">
                            <div className='flex flex-col uppercase font-bold bg-[#7AC751] text-white items-center justify-center text-sm rounded-full w-14 h-14'>
                                <h3 className='text-lg'>10</h3>
                                <p className='text-xs'>Days</p>
                            </div>
                            <div className='flex flex-col uppercase font-bold bg-[#7AC751] text-white items-center justify-center text-sm rounded-full w-14 h-14'>
                                <h3 className='text-lg'>15</h3>
                                <p className='text-xs'>hrs</p>
                            </div>
                            <div className='flex flex-col uppercase font-bold bg-[#7AC751] text-white items-center justify-center text-sm rounded-full w-14 h-14'>
                                <h3 className='text-lg'>30</h3>
                                <p className='text-xs'>Min</p>
                            </div>
                            <div className='flex flex-col uppercase font-bold bg-[#7AC751] text-white items-center justify-center text-sm rounded-full w-14 h-14'>
                                <h3 className='text-lg'>22</h3>
                                <p className='text-xs'>Secs</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.9, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 10, stiffness: 100, restDelta: 0.001 } }}
                    viewport={{ once: true }}
                    className='w-full lg:w-[600px] h-[300px] p-10' style={{ backgroundImage: `url(${offer2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h1 className='capitalize font-bold text-[#555555] text-2xl'>14 plots Land</h1>
                        <p className='text-xs text-gray-400 w-56 mt-2'>Looking for 14 plots. Are you ready for growth? Shop with us 40% discount!</p>

                        <div className="flex gap-3 mt-10 text-2xl items-center">
                            <p className="price text-[#7AC751] ml-3">$678</p>
                            <del className='text-gray-400 text-sm'>$100</del>

                            <button className='bg-[#7AC751] text-sm text-white p-2 rounded'>Shop Now</button>
                        </div>

                        <div className="time flex mt-8 gap-2">
                            <div className='flex flex-col uppercase font-bold bg-[#7AC751] text-white items-center justify-center text-sm rounded-full w-14 h-14'>
                                <h3 className='text-lg'>10</h3>
                                <p className='text-xs'>Days</p>
                            </div>
                            <div className='flex flex-col uppercase font-bold bg-[#7AC751] text-white items-center justify-center text-sm rounded-full w-14 h-14'>
                                <h3 className='text-lg'>15</h3>
                                <p className='text-xs'>hrs</p>
                            </div>
                            <div className='flex flex-col uppercase font-bold bg-[#7AC751] text-white items-center justify-center text-sm rounded-full w-14 h-14'>
                                <h3 className='text-lg'>30</h3>
                                <p className='text-xs'>Min</p>
                            </div>
                            <div className='flex flex-col uppercase font-bold bg-[#7AC751] text-white items-center justify-center text-sm rounded-full w-14 h-14'>
                                <h3 className='text-lg'>22</h3>
                                <p className='text-xs'>Secs</p>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </>
    )
}

export default SpecialOffer