import React from 'react'
import { formatNum } from '../../utils/format';

const Statistics = () => {
    return (
        <main className='pt-10'>
            <div className='flex items-center mb-4 gap-3'>
                <h1 className='text-xl font-semibold ml-10 uppercase italic'>Statistics</h1>
                <span className='w-full h-[0.12rem] bg-gray-300 mr-10'></span>
            </div>

            <section className='w-full flex flex-col lg:flex-row items-center justify-between px-10'>
                <div className='items-center flex flex-col'>
                    <h1 className='text-6xl font-bold text-sky-600'>{formatNum(8109)}</h1>
                    <p className='font-normal'>Total Number of Users</p>
                </div>

                <div className='items-center flex flex-col'>
                    <h1 className='text-6xl font-bold text-sky-600'>{formatNum(400)}</h1>
                    <p className='font-normal'>Total Number of Products</p>
                </div>

                <div className='items-center flex flex-col'>
                    <h1 className='text-6xl font-bold text-sky-600'>{formatNum(200)}</h1>
                    <p className='font-normal'>Total Number of Vendors</p>
                </div>

                <div className='items-center flex flex-col'>
                    <h1 className='text-6xl font-bold text-sky-600'><span className='text-2xl'>$</span>{formatNum(200000)}</h1>
                    <p className='font-normal'>Total Deposits</p>
                </div>

                <div className='items-center flex flex-col'>
                    <h1 className='text-6xl font-bold text-sky-600'><span className='text-2xl'>$</span>{formatNum(800)}</h1>
                    <p className='font-normal'>Total Withdrawals</p>
                </div>
            </section>
        </main>
    )
}

export default Statistics