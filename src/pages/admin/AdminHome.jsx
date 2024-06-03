import React from 'react'
import Navbar from '../../components/admin/Navbar'
import Statistics from '../../components/admin/Statistics';
import Transactions from '../../components/admin/Transactions';
import Actions from '../../components/admin/Actions';

const AdminHome = () => {
  return (
    <main className='w-full'>
      <Navbar />
      <Statistics />
      <Actions />
      <Transactions />
    </main>
  )
}

export default AdminHome