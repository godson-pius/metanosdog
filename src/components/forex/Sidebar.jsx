import React, { useEffect, useState } from 'react'
import { FiActivity, FiCommand, FiHome, FiMenu, FiPocket, FiRefreshCw, FiUpload, FiUsers } from 'react-icons/fi'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const setActiveLink = (path) => {
        return window.location.pathname.includes(path) ? "bg-green-500 transition duration-500 glass" : null;
    }

    useEffect(() => {
        window.addEventListener('scroll', function () {
            // Get the current scroll position
            var scrollPosition = window.scrollY || window.pageYOffset;

            // Get the height of the viewport
            var viewportHeight = window.innerHeight;

            // Calculate the middle of the page
            var middleOfPage = viewportHeight / 2;

            // Check if the scroll position has reached the middle of the page
            if (scrollPosition >= middleOfPage) {
                // Call the function to hide the element
                setShowSidebar(false)
            }
        });
    }, [])

    return (
        <>
            <main className={`w-72 fixed lg:block bg-black h-screen rounded-r-3xl pl-3 pt-4 z-50 lg:relative ${!showSidebar ? 'hidden' : null}`}>
                <Link to={'/'} className='flex flex-col text-white'>
                    <span className='font-bold text-lg'>METANOSDOG</span>
                    <span className='text-green-500'>Forex</span>
                </Link>

                <p className='text-gray-600 mt-4 text-xs'>Main Menu</p>

                <ul className='text-white mt-2 flex flex-col gap-3'>
                    <li className={`text-md p-2 rounded-r-md w-48 flex justify-between ${setActiveLink("home")}`}>
                        <div className={`flex items-center gap-2`}>
                            <FiCommand size={20} />
                            <Link to={'/forex-home'}>Dashboard</Link>
                        </div>
                        <span className={`w-0.5 h-6 bg-white ${setActiveLink('home') == null ? 'hidden' : null}`}></span>
                    </li>

                    <li className={`text-md p-2 rounded-r-md w-48 flex justify-between ${setActiveLink("txn")}`}>
                        <div className='flex items-center gap-2'>
                            <FiActivity size={20} />
                            <Link to={'/forex-txn'}>Transactions</Link>
                        </div>
                        <span className={`w-0.5 h-6 bg-white ${setActiveLink('txn') == null ? 'hidden' : null}`}></span>
                    </li>

                    <li className={`text-md p-2 rounded-r-md w-48 flex justify-between ${setActiveLink("swap")}`}>
                        <div className='flex items-center gap-2'>
                            <FiRefreshCw size={20} />
                            <Link to={'/forex-swap'}>Swap</Link>
                        </div>
                        <span className={`w-0.5 h-6 bg-white ${setActiveLink('swap') == null ? 'hidden' : null}`}></span>
                    </li>

                    <li className={`text-md p-2 rounded-r-md w-48 flex justify-between ${setActiveLink("account")}`}>
                        <div className='flex items-center gap-2'>
                            <FiPocket size={20} />
                            <Link to={'/forex-home'}>Accounts</Link>
                        </div>
                        <span className={`w-0.5 h-6 bg-white ${setActiveLink('account') == null ? 'hidden' : null}`}></span>
                    </li>

                    <hr className='mt-4' />
                    <p className='text-gray-600 text-xs'>System</p>

                    <li className={`text-md p-2 rounded-r-md w-48 flex justify-between ${setActiveLink("ref")}`}>
                        <div className='flex items-center gap-2'>
                            <FiUsers size={20} />
                            <Link to={'/forex-home'}>Referrals</Link>
                        </div>
                        <span className={`w-0.5 h-6 bg-white ${setActiveLink('ref') == null ? 'hidden' : null}`}></span>
                    </li>

                    <li className={`text-md p-2 rounded-r-md w-48 flex justify-between ${setActiveLink("withdraw")}`}>
                        <div className='flex items-center gap-2'>
                            <FiUpload size={20} />
                            <Link to={'/forex-withdraw'}>Withdraw</Link>
                        </div>
                        <span className={`w-0.5 h-6 bg-white ${setActiveLink('withdraw') == null ? 'hidden' : null}`}></span>
                    </li>

                    <li className={`text-md p-2 rounded-r-md w-48 flex justify-between ${setActiveLink("setting")}`}>
                        <div className='flex items-center gap-2'>
                            <FiSettings size={20} />
                            <Link to={'/forex-home'}>Setting</Link>
                        </div>
                        <span className={`w-0.5 h-6 bg-white ${setActiveLink('setting') == null ? 'hidden' : null}`}></span>
                    </li>
                </ul>
            </main>

            {/* Mobile */}
            {showSidebar ? null : (
                <div className={`p-2 absolute bg-white rounded-full flex justify-center items-center shadow-lg ml-3 mt-2 border-2 lg:hidden`} onClick={() => setShowSidebar(true)}>
                    <CgMenuLeft size={25} />
                </div>
            )}
        </>
    )
}

export default Sidebar