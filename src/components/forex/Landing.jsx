import React, { useState } from 'react'

const Landing = () => {
    const active = "font-extrabold border-b-2 border-black w-full transition duration-700";
    const [toggleBal, setToggleBal] = useState(true)
    return (
        <main className='w-full flex pt-3 gap-3'>
            <section className='w-full'>
                <div className="bg-white shadow-lg w-full h-max rounded-lg p-4">
                    <h2 className='font-bold'>My Account</h2>
                    <div className='flex text-sm gap-20 border-b-2 mt-4'>
                        <span className={`${toggleBal ? active : null} cursor-pointer`} onClick={() => setToggleBal(true)}>Fiat</span>
                        <span className={`${!toggleBal ? active : null} cursor-pointer`} onClick={() => setToggleBal(false)}>Nosdog</span>
                    </div>

                    <h1 className={`font-black text-4xl mt-4 ${toggleBal ? null : 'hidden'}`}>₦ 212,376,000</h1>
                    <h1 className={`font-black text-4xl mt-4 ${toggleBal ? 'hidden' : null}`}>〽️ 100,912,376,000</h1>

                    <div className='w-full flex gap-2 items-center mt-4'>
                        <button className='bg-black px-4 py-1 text-white rounded hover:scale-105 transition duration-700 hover:shadow'>Deposit</button>
                        <button className='bg-gray-200 px-4 py-1 text-black rounded hover:scale-105 transition duration-700 hover:shadow'>Withdraw</button>
                    </div>
                </div>
            </section>


            {/* Second */}
            <section className='w-full bg-red-400'></section>
        </main>
    )
}

export default Landing