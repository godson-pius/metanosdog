import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import WithdrawItems from '../../components/admin/WithdrawItems'
import { toast } from 'react-toastify'
import { getAllTransactions } from '../../api'

const AdminWithdrawals = () => {
    const [withdrawals, setWithdrawals] = useState([])
    const [apiStatus, setApiStatus] = useState('Fetching  requests...')
    const [runOnce, setRunOnce] = useState(false)
    const info = useRef()

    const handleGetWithdrawals = async () => {
        const res = await getAllTransactions();
        if (res.status == "success") {
            setWithdrawals(res.withdrawals)
            toast.dismiss(info.current)
            setRunOnce(true)
            
            { res.withdrawals.length > 0 ? setApiStatus('') : setApiStatus('No  withdrawal yet!') }
        } else {
            toast.dismiss(info.current)
            toast.error('Failed to get withdrawal requests!')
            setApiStatus('Failed to fetch withdrawal requests')
        }
    }

    useEffect(() => {
        setInterval(() => {
            handleGetWithdrawals()
        }, 5000)
    }, [])

  return (
    <main className='w-full'>
            <Navbar />
            <section className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 px-3 mt-5'>
                {withdrawals.length > 0 ? withdrawals.map((withdrawal, index) => (
                    <WithdrawItems key={index} withdrawal={withdrawal} />
                )) : <p>{ apiStatus}</p>}
            </section>

        </main>
  )
}

export default AdminWithdrawals