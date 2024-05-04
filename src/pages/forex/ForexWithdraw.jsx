import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/forex/Sidebar'
import { IoCode, IoCopySharp, IoWallet } from 'react-icons/io5'
import { FcBullish, FcCandleSticks } from 'react-icons/fc'
import Balance from '../../components/forex/Balance'
import Modal from '../../components/Modal'
import { toast } from 'react-toastify'

const ForexWithdraw = () => {
  const [wdrmodal, setWdrmodal] = useState(false)

  const handlewithdrawal = (e) => {
    e.preventDefault();
    toast.success('Withdrawal successful');

    // Close the modal
    setWdrmodal(false);
  }

  return (
    <main className='w-full flex gap-4 bg-[#f5f9f6]'>

      <Sidebar />
      <section className="w-full flex flex-col mt-3">
        <Balance state={'hidden'} />
        <hr className='my-10 mx-16' />

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
              <label className='text-xs' htmlFor='amount'>Withdrawal location</label>
              <input className='text-sm bg-base-200 p-2 rounded-xl' type="text" name="amount" id="amount" placeholder='Enter withdrawal location' />
            </div>

            <button type="submit" className='bg-green-500 text-white p-2 rounded-full'>Withdraw</button>
            <p className='text-center text-xs text-slate-400'>Secured by metanosdog</p>
          </form>
        </Modal>

        <section className="wdr px-2 lg:pr-5 grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="w-full ring-1 ring-gray-300 bg-white rounded">
            <div className='w-full flex justify-between items-center p-3 border-b-2'>
              <h2 className='font-bold text-sm uppercase'>Usdt Withdraw</h2>
              <button className='btn btn-sm btn-w w-max ring-1 ring-gray-300' onClick={() => setWdrmodal(true)}>
                <IoWallet size={15} />
              </button>
            </div>

            <div className="flex p-3 items-center gap-2">
              <FcCandleSticks size={34} />
              <div className="flex divide-x-2">
                <p className='font-bold text-red-500 p-2'>Minimum : <span className='font-medium'>$300</span></p>
                <p className='font-bold text-green-500 p-2'>Maximum : <span className='font-medium'>$300</span></p>
              </div>
            </div>
          </div>

          <div className="w-full ring-1 ring-gray-300 bg-white rounded">
            <div className='w-full flex justify-between items-center p-3 border-b-2'>
              <h2 className='font-bold text-sm uppercase'>Bank Transfer Withdraw</h2>
              <button className='btn btn-sm btn-w w-max ring-1 ring-gray-300'>
                <IoWallet size={15} />
              </button>
            </div>

            <div className="flex p-3 items-center gap-2">
              <FcCandleSticks size={34} />
              <div className="flex divide-x-2">
                <p className='font-bold text-red-500 p-2'>Minimum : <span className='font-medium'>$300</span></p>
                <p className='font-bold text-green-500 p-2'>Maximum : <span className='font-medium'>$300</span></p>
              </div>
            </div>
          </div>

          <div className="w-full ring-1 ring-gray-300 bg-white rounded">
            <div className='w-full flex justify-between items-center p-3 border-b-2'>
              <h2 className='font-bold text-sm uppercase'>Bitcoin Withdraw</h2>
              <button className='btn btn-sm btn-w w-max ring-1 ring-gray-300'>
                <IoWallet size={15} />
              </button>
            </div>

            <div className="flex p-3 items-center gap-2">
              <FcCandleSticks size={34} />
              <div className="flex divide-x-2">
                <p className='font-bold text-red-500 p-2'>Minimum : <span className='font-medium'>$300</span></p>
                <p className='font-bold text-green-500 p-2'>Maximum : <span className='font-medium'>$300</span></p>
              </div>
            </div>
          </div>

          <div className="w-full ring-1 ring-gray-300 bg-white rounded">
            <div className='w-full flex justify-between items-center p-3 border-b-2'>
              <h2 className='font-bold text-sm uppercase'>Ethereum Withdraw</h2>
              <button className='btn btn-sm btn-w w-max ring-1 ring-gray-300'>
                <IoWallet size={15} />
              </button>
            </div>

            <div className="flex p-3 items-center gap-2">
              <FcCandleSticks size={34} />
              <div className="flex divide-x-2">
                <p className='font-bold text-red-500 p-2'>Minimum : <span className='font-medium'>$300</span></p>
                <p className='font-bold text-green-500 p-2'>Maximum : <span className='font-medium'>$300</span></p>
              </div>
            </div>
          </div>

          <div className="w-full ring-1 ring-gray-300 bg-white rounded">
            <div className='w-full flex justify-between items-center p-3 border-b-2'>
              <h2 className='font-bold text-sm uppercase'>Litecoin Withdraw</h2>
              <button className='btn btn-sm btn-w w-max ring-1 ring-gray-300'>
                <IoWallet size={15} />
              </button>
            </div>

            <div className="flex p-3 items-center gap-2">
              <FcCandleSticks size={34} />
              <div className="flex divide-x-2">
                <p className='font-bold text-red-500 p-2'>Minimum : <span className='font-medium'>$300</span></p>
                <p className='font-bold text-green-500 p-2'>Maximum : <span className='font-medium'>$300</span></p>
              </div>
            </div>
          </div>

          <div className="w-full ring-1 ring-gray-300 bg-white rounded">
            <div className='w-full flex justify-between items-center p-3 border-b-2'>
              <h2 className='font-bold text-sm uppercase'>Bnb Withdraw</h2>
              <button className='btn btn-sm btn-w w-max ring-1 ring-gray-300'>
                <IoWallet size={15} />
              </button>
            </div>

            <div className="flex p-3 items-center gap-2">
              <FcCandleSticks size={34} />
              <div className="flex divide-x-2">
                <p className='font-bold text-red-500 p-2'>Minimum : <span className='font-medium'>$300</span></p>
                <p className='font-bold text-green-500 p-2'>Maximum : <span className='font-medium'>$300</span></p>
              </div>
            </div>
          </div>

        </section>
      </section>
    </main>
  )
}

export default ForexWithdraw

