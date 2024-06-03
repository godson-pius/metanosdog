import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { checkIsDepositOpen } from '../../api'

const Navbar = () => {

    const [isDepositOpen, setIsDepositOpen] = useState(true)

    // Function to see if deposit has reached max amount
    const isDepositFundingOpen = async () => {
        const res = await checkIsDepositOpen();
        if (res.message == "true") {
            setIsDepositOpen(true);
        } else {
            setIsDepositOpen(false);
        }
    }

    useEffect(() => {
        isDepositFundingOpen()
    }, [])

    return (
        <main className='w-full'>
            <nav className='w-full flex justify-between px-5 py-4 border-b-2 bg-base-200'>
                <Link className='font-extrabold text-2xl'>TradePoint</Link>
                <div className='flex gap-3'>
                    <Link className='text-sky-600 font-bold border-b-2 border-gray-300' to={'/admin'}>Dashboard</Link>
                    <Link className='text-sky-600'>Transactions</Link>
                    <Link className='text-sky-600' to={'/admin-orders'}>Orders</Link>
                    <Link className='text-sky-600' to={'/admin-withdrawals'}>Withdrawals</Link>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{isDepositOpen ? 'Deposit Open' : 'Deposit Closed'}</p>
                    <input type="checkbox" checked={isDepositOpen ? true : false} onChange={(e) => console.log(e.target.checked)} className='toggle toggle-lg' name="toggleDep" id="toggleDep" />
                </div>
            </nav>
        </main>
    )
}

export default Navbar