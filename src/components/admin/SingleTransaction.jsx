import React, { useRef } from 'react'
import { FiCopy } from 'react-icons/fi';
import moment from 'moment/moment';
import { copyValue } from '../../utils/copy';
import { toast } from 'react-toastify';
import { formatNum } from '../../utils/format';
import { confirmTransaction } from '../../api';

const SingleTransaction = ({ txn, getTxns }) => {
    const info = useRef();

    const handleConfirmTxn = async () => {
        info.current = toast.info("Checking blocks for confirmations...", { autoClose: false })

        const data = {
            role: txn.role,
            id: txn.user._id,
            txnId: txn.txnId,
            amount: txn.amount
        }

        // console.log(data);
        // return;
        
        const res = await confirmTransaction(data);
        if (res.status == "success") {
            toast.success("Transaction confirmed!")
            toast.dismiss(info.current)
            getTxns()
            setTimeout(() => { window.location.reload() }, 2000)
        }
    }

    return (
        <div className="w-full flex flex-col bg-white border-2 p-3 rounded-2xl gap-2">
            <div className="w-full flex items-center justify-between">
                <h4 className='text-gray-500'>Transaction Id:</h4>
                <div className='flex items-center gap-3'>
                    <span className='text-sky-500 font-normal'>{txn?.txnId}</span>
                    <FiCopy onClick={() => copyValue(txn?.txnId)} className='cursor-pointer hover:animate-pulse' size={20} />
                </div>
            </div>

            <div className="w-full flex items-center justify-between">
                <h4 className='text-gray-500'>Investment Plan: </h4>
                <div className='flex items-center gap-3'>
                    <span className='text-sky-500 font-normal'>{txn?.plan}</span>
                </div>
            </div>

            <div className="w-full flex items-center justify-between">
                <h4 className='text-gray-500'>Method of Payment: </h4>
                <div className='flex items-center gap-3'>
                    <span className='text-sky-500 font-normal'>{txn?.methodofpayment}</span>
                </div>
            </div>

            <hr />

            <div className="w-full flex items-center justify-between">
                <h4 className='text-gray-500'>Amount: </h4>
                <div className='flex items-center gap-3'>
                    <span className='text-sky-500 font-normal'>${formatNum(txn?.amount)}</span>
                </div>
            </div>

            <div className="w-full flex items-center justify-between">
                <h4 className='text-gray-500'>From: </h4>
                <div className='flex items-center gap-3'>
                    <span className='text-sky-500 font-normal'>{txn?.user.role == 'user' ? `${txn?.user.firstname} ${txn?.user.lastname}` : txn?.user.managerFullname}</span>
                </div>
            </div>

            <hr />

            <div className="w-full flex items-center justify-between">
                <h4 className='text-gray-500'>Timestamps: </h4>
                <div className='flex items-center gap-3'>
                    <span className='text-sky-500 font-normal'>{moment(txn?.date).fromNow()}</span>
                </div>
            </div>

            <div className="w-full flex items-center justify-between">
                <h4 className='text-gray-500'>Date & Time: </h4>
                <div className='flex items-center gap-3'>
                    <span className='text-sky-500 font-normal'>{moment(txn?.date).format("MMMM Do YYYY, h:mm:ss a")}</span>
                </div>
            </div>

            <hr />

            <div className='w-full my-2'>
                {txn?.status == 'success' ? (<button className='w-full btn btn-info text-white'>Transaction Approved</button>) : (
                    <div className=' flex items-center gap-2 justify-center px-20 md:px-48 lg:px-56'>
                        <button onClick={handleConfirmTxn} className='w-full btn btn-info text-white'>Approve payment</button>
                        <button className='w-full btn btn-error text-white'>Cancel Payment</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SingleTransaction