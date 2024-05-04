import React, { useState } from 'react'
import Sidebar from '../../components/forex/Sidebar'
import Balance from '../../components/forex/Balance'
import ForexChart from '../../components/forex/ForexChart'
import TickerTapeWidget from '../../components/forex/TickerTapeWidget'
import { RiSecurePaymentFill } from 'react-icons/ri'
import Modal from '../../components/Modal'
import { FcBullish } from 'react-icons/fc'
import { toast } from 'react-toastify'
import { address } from '../../utils/address'
import { useLocation } from 'react-router-dom'

const ForexDeposit = () => {
    const { amount } = useLocation()?.state || false;
    const [inputs, setInputs] = useState({})
    const [depositModal, setDepositModal] = useState(false)
    const [contractAddress, setContractAddress] = useState();


    const handleProceedPayment = (e) => {
        e.preventDefault()

        // Set amount
        if (inputs.amount == null || undefined) {
            if (amount != null) {
                inputs.amount = amount
                // Get wallet address
                getAddress()

                // Open deposit modal
                setDepositModal(true)
            } else {
                toast.error('Please add amount!')
            }
        } else {
            // Get wallet address
            getAddress()

            // Open deposit modal
            setDepositModal(true)
        }
    }

    const handleDeposit = (e) => {
        e.preventDefault()
        toast.success("Transaction successful")

        setTimeout(() => toast.info('Transaction been processed'), 3000)
        setDepositModal(false)
    }

    // fxn to set contract address
    const getAddress = () => {
        Object.entries(address).map(([key, value]) => {
            if (key == inputs?.method) {
                setContractAddress(value)
            }
        })
    }

    return (
        <main className='w-full flex gap-4 bg-green-50 lg:pr-5'>
            <Sidebar />

            <section className='w-full mt-3 h-screen overflow-auto'>
                <Balance state={'hidden'} />

                {/* Deposit Modal */}
                <Modal modal={depositModal} setModal={setDepositModal} title={'Deposit fund'}>
                    <p className='text-xl float-right text-slate-700'>{inputs?.method}</p>
                    <section className='flex items-center gap-2'>
                        <FcBullish size={30} />
                        <div>
                            <p className='text-sm'>Amount to deposit</p>
                            <div className="flex items-center gap-1">
                                <h2 className='font-bold'>{inputs?.amount}</h2>
                            </div>
                        </div>
                    </section>

                    <form className='mt-4 flex flex-col gap-3' onSubmit={handleDeposit}>
                        <div className="form-group flex flex-col gap-1">
                            <label className='text-xs' htmlFor='address'>Deposit Address</label>
                            <input className='text-sm bg-base-200 p-2 rounded-xl' type="text" name="address" id="address" defaultValue={contractAddress} />
                        </div>

                        <div className="form-group flex flex-col gap-1">
                            <label className='text-xs' htmlFor='proof'>Upload proof of payment</label>
                            <input className='text-sm bg-base-200 p-2 rounded-xl' type="file" name="proof" id="proof" required placeholder='Enter withdrawal location' />
                        </div>

                        <button type="submit" className='bg-blue-500 text-white p-2 rounded-full'>Make Deposit</button>
                        <p className='text-center text-xs text-slate-400'>Secured by metanosdog</p>
                    </form>
                </Modal>

                <div className="flex flex-col lg:flex-row items-start my-5 gap-4 px-2 lg:px-0">
                    <form onSubmit={handleProceedPayment} className='flex flex-col gap-3 bg-white p-3 rounded-3xl w-full'>
                        <div className="flex items-center my-3 gap-1">
                            <RiSecurePaymentFill size={50} />
                            <h1 className='text-2xl'>Deposit</h1>
                        </div>

                        <div className="form-group flex flex-col gap-1">
                            <label className='' htmlFor='amount'>Deposit amount</label>
                            <input onChange={(e) => inputs.amount = e.target.value} className='text-sm bg-base-200 p-3 rounded' type="text" name="amount" defaultValue={amount ? Intl.NumberFormat().format(amount) : null} id="amount" placeholder='Enter deposit amount' />
                        </div>

                        <div className="form-group flex flex-col gap-1">
                            <label className='' htmlFor='method'>Choose payment method</label>
                            <select name="method" id="method" className='text-sm bg-base-200 p-3 rounded' onChange={(e) => inputs.method = e.target.value} required>
                                <option value="null">Choose method</option>
                                <option value="usdt">Usdt</option>
                                <option value="bank">Bank Transfer</option>
                                <option value="litecoin">Litecoin</option>
                                <option value="ethereum">Ethereum</option>
                                <option value="bitcoin">Bitcoin</option>
                            </select>
                        </div>

                        <button type="submit" className='bg-blue-500 text-white p-2 rounded'>Proceed</button>
                        <p className='text-center text-xs text-slate-400'>Secured by metanosdog</p>
                    </form>

                    <div className="w-full">
                        <ForexChart />
                    </div>
                </div>
                <div className="mt-5">

                    <TickerTapeWidget />
                </div>
            </section>
        </main>
    )
}

export default ForexDeposit