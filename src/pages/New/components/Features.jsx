import React from 'react'
import { motion } from 'framer-motion'
import freedelivery from '../../../assets/icons/freedelivery.png'
import gift from '../../../assets/icons/gift.png'
import wallet from '../../../assets/icons/wallet.png'
import support from '../../../assets/icons/support.png'


const Features = () => {
  return (
    <>
        <div className="features w-full overflow-clip hover:overflow-x-auto md:gap-0 flex items-center px-4 md:px-96 my-10 justify-between">
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.5, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }} 
            className="shipping">
                <div className="inner flex items-center gap-3">
                    <img src={freedelivery} alt="Shipping image" className='w-12 h-12' />
                    <div className="text w-52 md:w-96">
                        <h4 className='text-xl font-extrabold'>Free Shipping</h4>
                        <p className='text-sm text-[#555555]'>Orders over $100</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 1, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }}
            className="gifting">
                <div className="inner flex items-center gap-3">
                    <img src={gift} alt="gifting image" className='w-12 h-12' />
                    <div className="text w-52 md:w-96">
                        <h4 className='text-xl font-extrabold'>Smart Gift Card</h4>
                        <p className='text-sm text-[#555555]'>Buy $1000 to get card</p>
                    </div>
                </div>
            </motion.div>
            
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 1.5, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }}
            className="payment">
                <div className="inner flex items-center gap-3">
                    <img src={wallet} alt="payment image" className='w-12 h-12' />
                    <div className="text w-52 md:w-96">
                        <h4 className='text-xl font-extrabold'>Quick Payment</h4>
                        <p className='text-sm text-[#555555]'>100% secure payment</p>
                    </div>
                </div>
            </motion.div>
            
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 2, duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 } }}
            className="support">
                <div className="inner flex items-center gap-3">
                    <img src={support} alt="support image" className='w-12 h-12' />
                    <div className="text w-52 md:w-96">
                        <h4 className='text-xl font-extrabold'>24/7 Support</h4>
                        <p className='text-sm text-[#555555]'>Quick support</p>
                    </div>
                </div>
            </motion.div>

        </div>
    </>
  )
}

export default Features