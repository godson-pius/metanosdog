import React from 'react'
import { FiActivity, FiCommand, FiHome, FiPocket, FiRefreshCw, FiUpload, FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';

const Sidebar = () => {
    const setActiveLink = (path) => {
        return window.location.pathname.includes(path) ?  "bg-green-500 transition duration-500 glass" : null;
    }

    return (
        <main className='w-72 bg-black h-screen rounded-r-3xl pl-3 pt-4'>
            <Link to={'#'} className='flex flex-col text-white'>
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
                        <Link to={'/forex-accounts'}>Accounts</Link>
                    </div>
                    <span className={`w-0.5 h-6 bg-white ${setActiveLink('account') == null ? 'hidden' : null}`}></span>
                </li>

                <hr className='mt-4' />
                <p className='text-gray-600 text-xs'>System</p>
                
                <li className={`text-md p-2 rounded-r-md w-48 flex justify-between ${setActiveLink("ref")}`}>
                    <div className='flex items-center gap-2'>
                        <FiUsers size={20} />
                        <Link to={'/forex-ref'}>Referrals</Link>
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
                        <Link to={'/forex-setting'}>Setting</Link>
                    </div>
                    <span className={`w-0.5 h-6 bg-white ${setActiveLink('setting') == null ? 'hidden' : null}`}></span>
                </li>
            </ul>
        </main>
    )
}

export default Sidebar