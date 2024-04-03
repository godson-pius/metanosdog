import React from 'react'
import { motion } from 'framer-motion'
import freedelivery from '../../../assets/icons/freedelivery.png'
import gift from '../../../assets/icons/gift.png'
import wallet from '../../../assets/icons/wallet.png'
import support from '../../../assets/icons/support.png'


const Features = () => {
  return (
    <>
        <div className="features w-full flex items-center md:text-center lg:px-20 px-16 my-10 justify-between md:gap-2">
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.5, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }} 
            className="shipping">
                <div className="inner flex items-center sm:gap-2 lg:gap-3 lg:flex-row sm:flex-col">
                    <img src={freedelivery} alt="Shipping image" className='w-12 h-12' />
                    <div className="text">
                        <h4 className='md:text-sm text-xl font-extrabold'>Free Shipping</h4>
                        <p className='text-sm text-[#555555]'>Orders over $100</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 1, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }}
            className="gifting">
                <div className="inner flex items-center sm:gap-2 lg:gap-3 lg:flex-row sm:flex-col">
                    <img src={gift} alt="gifting image" className='w-12 h-12' />
                    <div className="text">
                        <h4 className='md:text-sm text-xl font-extrabold'>Smart Gift Card</h4>
                        <p className='text-sm text-[#555555]'>Buy $1000 to get card</p>
                    </div>
                </div>
            </motion.div>
            
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 1.5, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }}
            className="payment">
                <div className="inner flex items-center sm:gap-2 lg:gap-3 lg:flex-row sm:flex-col">
                    <img src={wallet} alt="payment image" className='w-12 h-12' />
                    <div className="text">
                        <h4 className='md:text-sm text-xl font-extrabold'>Quick Payment</h4>
                        <p className='text-sm text-[#555555]'>100% secure payment</p>
                    </div>
                </div>
            </motion.div>
            
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 2, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }}
            className="support">
                <div className="inner flex items-center sm:gap-2 lg:gap-3 lg:flex-row sm:flex-col">
                    <img src={support} alt="support image" className='w-12 h-12' />
                    <div className="text">
                        <h4 className='md:text-sm text-xl font-extrabold'>24/7 Support</h4>
                        <p className='text-sm text-[#555555]'>Quick support</p>
                    </div>
                </div>
            </motion.div>

        </div>
    </>
  )
}

export default Features