import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../../components/forex/Sidebar'
import Balance from '../../components/forex/Balance'
import ForexChart from '../../components/forex/ForexChart'
import TickerTapeWidget from '../../components/forex/TickerTapeWidget'
import { RiSecurePaymentFill } from 'react-icons/ri'
import Modal from '../../components/Modal'
import { FcBullish } from 'react-icons/fc'
import { toast } from 'react-toastify'
import { address } from '../../utils/address'
import { useLocation, useNavigate } from 'react-router-dom'
import { checkIsDepositOpen, forexDeposit } from '../../api'
import { copyValue } from '../../utils/copy'
import { FiCopy } from 'react-icons/fi'
import { currentUser } from '../../utils/getUser'
import moment from 'moment/moment'
import { getUser } from '../../utils/refreshGetUser'

const ForexDeposit = () => {
    const navigate = useNavigate()
    const { amount, plan } = useLocation()?.state || false;
    const [inputs, setInputs] = useState({})
    const [depositModal, setDepositModal] = useState(false)
    const [contractAddress, setContractAddress] = useState();
    const info = useRef(null)


    const handleProceedPayment = (e) => {
        getUser()
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

    const handlePOP = (e) => {
        const file = e.target.files[0];
        transformFile(file);
    };

    const transformFile = (file) => {
        const reader = new FileReader()

        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                inputs.pop = reader.result;
            };
        } else {
            inputs.pop = "";
        }
    };

    const handleDeposit = async (e) => {
        info.current = toast.info("Making deposit, please wait...", { autoClose: false });
        e.preventDefault()
        inputs.role = currentUser.role
        inputs.user = currentUser
        inputs.date = moment().format();
        inputs.plan = plan
        inputs.status = "pending"

        const data = { ...inputs }
        const res = await forexDeposit(data)

        if (res.status === "success") {
            toast.success('Transaction is being processed')

            setTimeout(() => toast.info('Deposit will reflect once approved!'), 3000)
            setDepositModal(false)
            toast.dismiss(info.current)

            // get user details
            getUser(currentUser.email)
        } else {
            toast.error('Transaction failed! Please try again.')
            toast.dismiss(info.current)
        }
    }

    // fxn to set contract address
    const getAddress = () => {
        Object.entries(address).map(([key, value]) => {
            if (key == inputs?.methodofpayment) {
                setContractAddress(value)
            }
        })
    }

    // Function to see if deposit has reached max amount
    const isDepositFundingOpen = async () => {
        const res = await checkIsDepositOpen();
        if (res.message == "false") {
            navigate('/forex-home')
            toast.info("Deposit has reached max amount...")
        }
    }

    useEffect(() => {
        isDepositFundingOpen()
        return () => { }
    }, [])

    return (
        <main className='w-full flex gap-4 bg-green-50 lg:pr-5'>
            <Sidebar />

            <section className='w-full mt-3 h-screen overflow-auto'>
                <Balance state={'hidden'} />

                {/* Deposit Modal */}
                <Modal modal={depositModal} setModal={setDepositModal} title={'Deposit fund'}>
                    <p className='text-xl float-right text-slate-700'>{inputs?.method?.toString().toUpperCase()}</p>
                    <section className='flex items-center gap-2'>
                        <FcBullish size={30} />
                        <div>
                            <p className='text-sm'>Amount to deposit</p>
                            <div className="flex items-center gap-1">
                                <h2 className='font-bold'>{inputs?.amount} USDT</h2>
                            </div>
                        </div>
                    </section>

                    <form className='mt-4 flex flex-col gap-3' onSubmit={handleDeposit}>
                        <div className="form-group flex flex-col gap-1">
                            <label className='text-xs' htmlFor='address'>Deposit Address</label>
                            <div className='flex items-center gap-2'>
                                <input readOnly className='text-sm bg-gray-100 p-2 rounded-xl w-full' type="text" name="address" id="address" defaultValue={contractAddress} />
                                <FiCopy color='black' className='cursor-pointer' onClick={(e) => copyValue(contractAddress)} size={20} />
                            </div>
                        </div>

                        <div className="form-group flex flex-col gap-1">
                            <label className='text-xs' htmlFor='proof'>Trasaction Id</label>
                            <input onChange={(e) => inputs.txnId =  e.target.value} className='text-sm bg-gray-100 p-2 rounded-xl' type="text" name="proof" id="proof" required placeholder='Enter transaction Id' />
                        </div>
                        
                        <div className="form-group flex flex-col gap-1">
                            <label className='text-xs' htmlFor='proof'>Upload proof of payment</label>
                            <input onChange={handlePOP} className='text-sm bg-gray-100 p-2 rounded-xl' type="file" name="proof" id="proof" required placeholder='Enter withdrawal location' />
                        </div>

                        <button type="submit" className='bg-blue-500 text-white p-2 rounded-full'>Make Deposit</button>
                        <p className='text-center text-xs text-slate-400'>Secured by tradepointnetwork</p>
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
                            <input readOnly required className='text-lg bg-gray-100 p-3 rounded font-bold' type="text" name="amount" defaultValue={amount ? Intl.NumberFormat().format(amount) : null} id="amount" placeholder='Enter deposit amount' />
                        </div>

                        <div className="form-group flex flex-col gap-1">
                            <label className='' htmlFor='method'>Choose payment method</label>
                            <select name="method" id="method" className='text-sm bg-gray-100 p-3 rounded' onChange={(e) => inputs.methodofpayment = e.target.value} required>
                                <option value="null">Choose method</option>
                                <option value="usdt">USDT (TRC20)</option>
                                <option disabled value="bank">Bank Transfer (Coming Soon)</option>
                                <option disabled value="litecoin">Litecoin (Coming Soon)</option>
                                <option disabled value="ethereum">Ethereum (Coming Soon)</option>
                                <option disabled value="bitcoin">Bitcoin (Coming Soon)</option>
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