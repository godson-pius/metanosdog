import React from 'react'
import product1 from '../../../assets/images/product1.jpeg'
import product2 from '../../../assets/images/product2.png'
import product3 from '../../../assets/images/product3.png'
import product4 from '../../../assets/images/product4.png'
import { motion, AnimatePresence } from 'framer-motion'

const BestProducts = () => {
  return (
    <>
            <AnimatePresence mode='wait'>
                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.9, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 10, stiffness: 100, restDelta: 0.001 } }}
                viewport={{ once: true }}
                className="top__products w-full grid grid-cols-1 lg:grid-cols-4 items-center my-5 px-2 lg:px-10">
                    <div className="product flex flex-col">
                        <img src={product4} alt="Meta Nosdog Product Image" width={300} />
                        <p className="category uppercase text-gray-400 text-xs mt-3">Chair</p>
                        <h2 className='mt-1 font-bold text-lg'>Minimal LCD chair</h2>
                        <div className="flex gap-3 items-center">
                        <p className="price text-[#7AC751]">$178</p> 
                        <del className='text-gray-400 text-sm'>$100</del>
                        </div>
                    </div>

                    <div className="product flex flex-col">
                        <img src={product1} alt="Meta Nosdog Product Image" width={300} />
                        <p className="category uppercase text-gray-400 text-xs mt-3">Chair</p>
                        <h2 className='mt-1 font-bold text-lg'>Minimal LCD chair</h2>
                        <div className="flex gap-3 items-center">
                        <p className="price text-[#7AC751]">$178</p> 
                        <del className='text-gray-400 text-sm'>$100</del>
                        </div>
                    </div>

                    <div className="product flex flex-col">
                        <img src={product3} alt="Meta Nosdog Product Image" width={300} />
                        <p className="category uppercase text-gray-400 text-xs mt-3">Chair</p>
                        <h2 className='mt-1 font-bold text-lg'>Minimal LCD chair</h2>
                        <div className="flex gap-3 items-center">
                        <p className="price text-[#7AC751]">$178</p> 
                        <del className='text-gray-400 text-sm'>$100</del>
                        </div>
                    </div>

                    <div className="product flex flex-col">
                        <img src={product4} alt="Meta Nosdog Product Image" width={300} />
                        <p className="category uppercase text-gray-400 text-xs mt-3">Chair</p>
                        <h2 className='mt-1 font-bold text-lg'>Minimal LCD chair</h2>
                        <div className="flex gap-3 items-center">
                        <p className="price text-[#7AC751]">$178</p> 
                        <del className='text-gray-400 text-sm'>$100</del>
                        </div>
                    </div>
                    
                </motion.div>
            </AnimatePresence>
        </>
  )
}

export default BestProducts