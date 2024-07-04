import React from 'react'
import Sidebar from '../../components/forex/Sidebar'
import Landing from '../../components/forex/Landing'
import { IoPersonAdd } from 'react-icons/io5'
import Balance from '../../components/forex/Balance'
import { currentUser } from '../../utils/getUser'
import { formatNum } from '../../utils/format'

const ForexReferrals = () => {
  const user = currentUser

  return (
    <main className='w-full flex gap-4'>
      <Sidebar />
      <section className="w-full flex flex-col mt-3">
        <Balance state={'hidden'} />

        <hr className='mt-10 mx-16' />

        <h1 className='mt-3 mb-4 ml-5'>You have <span className='text-2xl font-bold'>{ formatNum(user.children.length) }</span> referral(s)</h1>
        <section className="wdr px-2 lg:pr-5 grid grid-cols-1 lg:grid-cols-3 gap-3">

          {user.children.map((ref, index) => (
            <div className="w-full ring-1 ring-gray-300 bg-white rounded-2xl">
              <div className='w-full flex justify-between items-center p-3'>
                <h2 className='font-bold text-sm uppercase'>{ ref }</h2>
                <button className='btn btn-sm btn-w w-max duration-700 ring-1 ring-gray-300 hover:text-white'>
                  <IoPersonAdd size={15} />
                </button>
              </div>
            </div>
          ))}



        </section>
      </section>
    </main>
  )
}

export default ForexReferrals