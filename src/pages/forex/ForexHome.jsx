import React from 'react'
import Sidebar from '../../components/forex/Sidebar'
import Landing from '../../components/forex/Landing'

const ForexHome = () => {
  return (
    <main className='w-full flex gap-4 bg-[#f5f9f6] z-50'>
      <Sidebar />
      <Landing />
    </main>
  )
}

export default ForexHome