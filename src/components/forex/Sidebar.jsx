import React from 'react'
import { FiActivity, FiCommand, FiHome, FiPocket, FiRefreshCw, FiUpload, FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <main className='w-64 bg-black h-screen rounded-r-3xl pl-3 pt-4'>
            <Link to={'#'} className='flex flex-col text-white'>
                <span className='font-bold text-lg'>METANOSDOG</span>
                <span className='text-green-500'>Forex</span>
            </Link>

            <p className='text-gray-600 mt-4 text-xs'>Main Menu</p>

            <ul className='text-white mt-2 flex flex-col gap-3'>
                <li className='text-md bg-green-500 p-2 rounded-r-md w-48 flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <FiCommand size={20} />
                        <Link to={''}>Dashboard</Link>
                    </div>
                    <span className='w-0.5 h-6 bg-white'></span>
                </li>
                
                <li className='text-md p-2 rounded-r-md w-48 flex justify-between hover:scale-105 transition duration-500'>
                    <div className='flex items-center gap-2'>
                        <FiActivity size={20} />
                        <Link to={''}>Transactions</Link>
                    </div>
                    <span className='w-0.5 h-6 bg-white hidden'></span>
                </li>

                <li className='text-md p-2 rounded-r-md w-48 flex justify-between hover:scale-105 transition duration-500'>
                    <div className='flex items-center gap-2'>
                        <FiRefreshCw size={20} />
                        <Link to={''}>Swap</Link>
                    </div>
                    <span className='w-0.5 h-6 bg-white hidden'></span>
                </li>
                
                <li className='text-md p-2 rounded-r-md w-48 flex justify-between hover:scale-105 transition duration-500'>
                    <div className='flex items-center gap-2'>
                        <FiPocket size={20} />
                        <Link to={''}>Accounts</Link>
                    </div>
                    <span className='w-0.5 h-6 bg-white hidden'></span>
                </li>

                <hr className='mt-4' />
                <p className='text-gray-600 text-xs'>System</p>
                
                <li className='text-md p-2 rounded-r-md w-48 flex justify-between hover:scale-105 transition duration-500'>
                    <div className='flex items-center gap-2'>
                        <FiUsers size={20} />
                        <Link to={''}>Referrals</Link>
                    </div>
                    <span className='w-0.5 h-6 bg-white hidden'></span>
                </li>
                
                <li className='text-md p-2 rounded-r-md w-48 flex justify-between hover:scale-105 transition duration-500'>
                    <div className='flex items-center gap-2'>
                        <FiUpload size={20} />
                        <Link to={''}>Withdraw</Link>
                    </div>
                    <span className='w-0.5 h-6 bg-white hidden'></span>
                </li>
                
                <li className='text-md p-2 rounded-r-md w-48 flex justify-between hover:scale-105 transition duration-500'>
                    <div className='flex items-center gap-2'>
                        <FiSettings size={20} />
                        <Link to={''}>Setting</Link>
                    </div>
                    <span className='w-0.5 h-6 bg-white hidden'></span>
                </li>
            </ul>
        </main>
    )
}

export default Sidebar