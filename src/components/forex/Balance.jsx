import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Modal from '../Modal';
import { FcBullish } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { currentUser } from '../../utils/getUser';
import { formatNum } from '../../utils/format';
import { checkDepositMax, checkIsDepositOpen } from '../../api';

const Balance = ({ state }) => {
    const navigate = useNavigate()
    const active = "font-extrabold border-b-2 border-black transition duration-700";
    const [toggleBal, setToggleBal] = useState(true)
    const [wdrmodal, setWdrmodal] = useState(false)
    const [isDepositOpen, setIsDepositOpen] = useState(true)

    const user = currentUser;

    const handlewithdrawal = (e) => {
        e.preventDefault();
        toast.success('Withdrawal successful');

        // Close the modal
        setWdrmodal(false);
    }

        // Function to see if deposit has reached max amount
        const isDepositFundingOpen = async() => {
            const res = await checkIsDepositOpen();
            if (res.message == "true") {
                setIsDepositOpen(true);
            } else {
                setIsDepositOpen(false);
            }
        }

        useEffect(() => {
            localStorage.getItem('user') === null ? navigate('/sign-in') : null
            isDepositFundingOpen()
        }, [])

    return (
        <main className='flex flex-col gap-3 pr-0 lg:pr-5 px-2 lg:px-0'>
            <Modal modal={wdrmodal} setModal={setWdrmodal} title={'Withdraw'}>
                <section className='flex items-center gap-2'>
                    <FcBullish size={30} />
                    <div>
                        <p className='text-sm'>Account balance</p>
                        <h2 className='font-bold'>6723.727272</h2>
                    </div>
                </section>

                <form className='mt-4 flex flex-col gap-3' onSubmit={handlewithdrawal}>
                    <div className="form-group flex flex-col gap-1">
                        <label className='text-xs' htmlFor='amount'>Withdrawal amount</label>
                        <input className='text-sm bg-base-200 p-2 rounded-xl' type="text" name="amount" id="amount" placeholder='Enter withdrawal amount' />
                    </div>

                    <div className="form-group flex flex-col gap-1">
                        <label className='text-xs' htmlFor='amount'>USDT Wallet Address</label>
                        <input className='text-sm bg-base-200 p-2 rounded-xl' type="text" name="amount" id="amount" placeholder='Enter wallet address' />
                    </div>

                    <button type="submit" className='bg-green-500 text-white p-2 rounded-full'>Withdraw</button>
                    <p className='text-center text-xs text-slate-400'>Secured by metanosdog</p>
                </form>
            </Modal>

            <div className="bg-[url('https://img.freepik.com/free-photo/panoramic-view-dubai-city-illuminated-neon-spectrum_23-2151305340.jpg?t=st=1712968327~exp=1712971927~hmac=6edb90ac250f5e2d2b6977464bf6395618adfbb50869556e0c203a1099cc446a&w=2000')] bg-cover bg-center border-2 w-full h-max rounded-2xl p-4 text-white">
                <h2 className='font-bold'>My Account</h2>
                <div className='flex text-sm gap-20 border-b-2 mt-4 w-full justify-between'>
                    <span className={`${toggleBal ? active : null} cursor-pointer`} onClick={() => setToggleBal(true)}>Fiat</span>
                    <span className={`${!toggleBal ? active : null} cursor-pointer`} onClick={() => setToggleBal(false)}>Nosdog</span>
                </div>

                <div className="md:flex w-full justify-between items-center my-2 hidden">
                    <h1 className={`font-black text-4xl mt-4 `}>$ { user?.role != 'vendor' ? formatNum(user?.balance[0]?.forex) : formatNum(user?.forexBalance[0]?.forex) }</h1>
                    <h1 className={`font-black text-4xl mt-4 `}>〽️ { user?.role != 'vendor' ? formatNum(user?.balance[0]?.metanosdog) : user?.forexBalance[0]?.metanosdog}</h1>
                </div>

                {/* Mobile */}
                <div className="flex w-full justify-between items-center my-2 md:hidden">
                    <h1 className={`font-black text-4xl mt-4 ${!toggleBal ? 'hidden' : null}`}>$ {user?.role != 'vendor' ? formatNum(user?.balance[0]?.forex) : user?.forexBalance[0]?.forex}</h1>
                    <h1 className={`font-black text-4xl mt-4 ${toggleBal ? 'hidden' : null}`}>〽️ { user?.role != 'vendor' ? formatNum(user?.balance[0]?.metanosdog) : user?.forexBalance[0]?.metanosdog}</h1>
                </div>

                <div className='w-full flex gap-2 items-center mt-4'>
                    <Link to={isDepositOpen ? '/forex-deposit' : '/forex-home'} className={`${isDepositOpen ? 'bg-sky-500' : 'bg-slate-700'} px-4 py-2 text-white rounded hover:scale-105 transition duration-700 hover:shadow`}>{ isDepositOpen ? 'Deposit' : 'Deposit closed' }</Link>
                    <button className='bg-gray-200 px-4 py-2 text-black rounded hover:scale-105 transition duration-700 hover:shadow' onClick={() => setWdrmodal(true)}>Withdraw</button>
                </div>
            </div>

            <section className={`flex flex-col lg:flex-row gap-3 items-center ${state}`}>
                <div className="bg-white border-2 w-full h-max rounded-2xl p-4">
                    <div className="flex items-center gap-2">
                        <FcBullish size={30} />
                        <h2 className='font-bold'>My ROI</h2>
                    </div>
                    <h1 className={`font-black text-4xl mt-4 text-green-500`}>$ {user?.role != 'vendor' ? formatNum(user?.balance[0]?.roi) : formatNum(user?.forexBalance[0]?.roi)}</h1>
                </div>

                <div className="bg-white border-2 w-full h-max rounded-2xl p-4">
                    <h2 className='font-bold'>My Deposits</h2>
                    <h1 className={`font-black text-4xl mt-4 text-sky-500`}>$ {user?.role != 'vendor' ? formatNum(user?.balance[0]?.deposit) : formatNum(user?.forexBalance[0]?.deposit)}</h1>
                </div>

                <div className="bg-white border-2 w-full h-max rounded-2xl p-4">
                    <h2 className='font-bold'>My Withdrawals</h2>
                    <h1 className={`font-black text-4xl mt-4 text-indigo-500`}>$ {user?.role != 'vendor' ? formatNum(user?.balance[0]?.withdrawal) : formatNum(user?.forexBalance[0]?.withdrawal)}</h1>
                </div>

                <div className="bg-white border-2 w-full h-max rounded-2xl p-4">
                    <h2 className='font-bold'>My Referral Profit</h2>
                    <h1 className={`font-black text-4xl mt-4 text-cyan-500`}>$ {user?.role != 'vendor' ? formatNum(user?.balance[0]?.refProfit) : formatNum(user?.forexBalance[0]?.refProfit)}</h1>
                </div>
            </section>
        </main>
    )
}

export default Balance