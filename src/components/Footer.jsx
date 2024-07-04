import React from 'react'
import { Link } from 'react-router-dom'
import { FiCheckCircle } from 'react-icons/fi'

const Footer = () => {
  return (
    <>
        <div className={`w-full bg-slate-800 ${window.location.pathname == '/vendor-dashboard' || window.location.pathname == '/vendor-products' || window.location.pathname == '/vendor-inbox' || window.location.pathname == '/vendor-ticket' || window.location.pathname == '/vendor-settings'  ? 'hidden' : null}`}>
            <div className="w-full hidden md:flex py-10 px-14 text-white justify-between items-start">
                <div className="flex flex-col gap-3">
                    <h1 className='text-lg font-bold'>ABOUT Trade Point Network</h1> <hr className='mb-4' />
                    <Link to='/' className='text-sm text-gray-300'>About Us</Link>
                    <Link to='/' className='text-sm text-gray-300'>Seller Centres</Link>
                    <Link to='/' className='text-sm text-gray-300'>Our Policies</Link>
                    <Link to='/' className='text-sm text-gray-300'>Our Coin</Link>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className='text-lg font-bold'>CUSTOMER SERVICE</h1> <hr className='mb-4' />
                    <a href='mailto:support@ametanosdog.com' target='_blank' className='text-sm text-gray-300'>Contact Us</a>
                    <Link to='/' className='text-sm text-gray-300'>Site Map</Link>
                    <Link to='/' className='text-sm text-gray-300'>Help Center</Link>
                    <Link to='/' className='text-sm text-gray-300'>Payment Methods</Link>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className='text-lg font-bold'>FOLLOW US</h1> <hr className='mb-4' />
                    <Link to='/' className='text-sm text-gray-300'>Facebook</Link>
                    <Link to='/' className='text-sm text-gray-300'>Instagram</Link>
                    <Link to='/' className='text-sm text-gray-300'>Twitter</Link>
                    <Link to='/' className='text-sm text-gray-300'>LinkedIn</Link>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className='text-lg font-bold'>DOWNLOAD APP</h1> <hr className='mb-4' />
                    <Link to='/' className='text-sm text-gray-300'>Click Here</Link>
                </div>
            </div>  <hr />
            <div className='flex items-center justify-between py-4 px-14 text-gray-300 text-xs'>
                <p>&copy; 2022 Mn. All Rights Reserved</p>
                <div className="flex items-center gap-2">
                    <FiCheckCircle size={13} />
                    <p>Security Guaranteed</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer