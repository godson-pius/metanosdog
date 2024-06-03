import React, { useEffect } from 'react'
import Sidebar from '../../components/forex/Sidebar'
import Landing from '../../components/forex/Landing'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { currentUser } from '../../utils/getUser'
import { getUser } from '../../utils/refreshGetUser'

const ForexHome = () => {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.getItem('user') === null ? navigate('/sign-in') : null
  }, [])
  return (
    <main className='w-full flex gap-4 bg-[#f5f9f6] z-50'>
      <Sidebar />
      <Landing />
    </main>
  )
}

export default ForexHome