import React from 'react'
import Sidebar from '../../components/forex/Sidebar'
import Balance from '../../components/forex/Balance'
import TickerTapeWidget from '../../components/forex/TickerTapeWidget'
import ForexChart from '../../components/forex/ForexChart'

const ForexSwap = () => {
  return (
    <main className='w-full flex gap-4'>
      <Sidebar />
      
      <section className='w-full mt-3'>
        <Balance />
        
        <p className='w-full text-center my-10 text-4xl underline '>Coming Soon</p>
        <TickerTapeWidget />
        <ForexChart />
      </section>
    </main>
  )
}

export default ForexSwap