import React from 'react'
import Sidebar from '../../components/forex/Sidebar'
import Landing from '../../components/forex/Landing'

const ForexTransactions = () => {
  return (
    <main className='w-full flex gap-4'>
      <Sidebar />
      <Landing />
    </main>
  )
}

export default ForexTransactions