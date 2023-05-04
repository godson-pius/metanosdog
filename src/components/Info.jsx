import React from 'react'
import { FiDollarSign, FiHelpCircle, FiTruck } from 'react-icons/fi'

const Info = () => {
  return (
    <>
        <div className="w-full px-24 hidden md:block pt-9">
            <div className="w-full flex ring-2 ring-gray-300 px-32 gap-10 items-center justify-between">
                <div className="first flex items-center gap-3 py-6">
                    <FiTruck size={26} />
                    <div>
                        <h1 className='text-sm text-black font-extrabold'>FREE SHIPPING & RETURN</h1>
                        <p className='text-gray-600 text-xs'>Free Shipping On All Orders Over NGN5000</p>
                    </div>
                </div>

                <div className="second flex items-center gap-3 py-6">
                    <FiDollarSign size={26} />
                    <div>
                        <h1 className='text-sm text-black font-extrabold'>MONEY BACK GUARANTEE</h1>
                        <p className='text-gray-600 text-xs'>100% Money Back Guarantee</p>
                    </div>
                </div>
                
                <div className="second flex items-center gap-3 py-6">
                    <FiHelpCircle size={26} />
                    <div>
                        <h1 className='text-sm text-black font-extrabold'>ONLINE SUPPORT 24/7</h1>
                        <p className='text-gray-600 text-xs'>24/7 Customer Support</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Info