import React, { useState } from 'react'
import Balance from './Balance';
import TickerTapeWidget from './TickerTapeWidget';
import ForexChart from './ForexChart';
import Plans from './Plans';

const Landing = () => {
    return (
        <main className='w-full flex pt-3 gap-3 px-2 lg:pr-5 h-screen overflow-auto bg-[#f5f9f6]'>
            <section className='w-full flex flex-col gap-10'>
                <Balance />

                <Plans />

                    
                <TickerTapeWidget />

                {/* Recent transactions */}
                <div className="bg-white shadow-lg w-full h-max rounded-lg p-4">
                    <h2 className='font-bold'>Recent Transactions</h2>
                    
                    <div className="w-full overflow-x-auto mb-5">
                        <table className='w-full mt-4'>
                            <thead className='bg-gray-100 p-3 w-full flex justify-between rounded text-gray-600 text-sm items-center'>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </thead>
                            {/* <hr className='my-2' /> */}

                            <tbody>
                                <tr className='w-full flex justify-between items-center text-sm text-gray-700 p-3 border-b-2'>
                                    <td>Deposit</td>
                                    <td>3000</td>
                                    <td>23-04-2024</td>
                                    <td className='text-green-500'>Completed</td>
                                </tr>
                                <tr className='w-full flex justify-between items-center text-sm text-gray-700 p-3 border-b-2'>
                                    <td>Deposit</td>
                                    <td>3000</td>
                                    <td>23-04-2024</td>
                                    <td className='text-green-500'>Completed</td>
                                </tr>
                                <tr className='w-full flex justify-between items-center text-sm text-gray-700 p-3 border-b-2'>
                                    <td>Deposit</td>
                                    <td>3000</td>
                                    <td>23-04-2024</td>
                                    <td className='text-red-500'>Failed</td>
                                </tr>
                                <tr className='w-full flex justify-between items-center text-sm text-gray-700 p-3 border-b-2'>
                                    <td>Deposit</td>
                                    <td>3000</td>
                                    <td>23-04-2024</td>
                                    <td className='text-green-500'>Completed</td>
                                </tr>
                                <tr className='w-full flex justify-between items-center text-sm text-gray-700 p-3 border-b-2'>
                                    <td>Deposit</td>
                                    <td>3000</td>
                                    <td>23-04-2024</td>
                                    <td className='text-green-500'>Completed</td>
                                </tr>
                                <tr className='w-full flex justify-between items-center text-sm text-gray-700 p-3 border-b-2'>
                                    <td>Deposit</td>
                                    <td>3000</td>
                                    <td>23-04-2024</td>
                                    <td className='text-green-500'>Completed</td>
                                </tr>
                                <tr className='w-full flex justify-between items-center text-sm text-gray-700 p-3 border-b-2'>
                                    <td>Deposit</td>
                                    <td>3000</td>
                                    <td>23-04-2024</td>
                                    <td className='text-green-500'>Completed</td>
                                </tr>
                                <tr className='w-full flex justify-between items-center text-sm text-gray-700 p-3 border-b-2'>
                                    <td>Deposit</td>
                                    <td>3000</td>
                                    <td>23-04-2024</td>
                                    <td className='text-green-500'>Completed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr className='my-5' />

                    <ForexChart />
                </div>
            </section>


            {/* Second */}
            {/* <section className='w-full bg-red-400'></section> */}
        </main>
    )
}

export default Landing