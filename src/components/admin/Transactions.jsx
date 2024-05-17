import React, { useEffect, useRef, useState } from 'react'
import SingleTransaction from './SingleTransaction';
import { getAllTransactions } from '../../api';
import { toast } from 'react-toastify';

const Transactions = () => {
    const [transactions, setTransactions] = useState([])
    const [search, setSearch] = useState("")
    const info = useRef();

    const handleGetTxns = async() => {
        info.current = toast.info("Loading transaction blocks...", { autoClose: false })

        const res = await getAllTransactions();
        if (res.status == "success") {
            setTransactions(res.txns[0].deposits)
            toast.dismiss(info.current)
        }
    }
    
    useEffect(() => {
        handleGetTxns()
    }, [])
    
    return (
        <main className='w-full my-16 px-3 md:px-10'>
            <div className='flex items-center gap-3'>
                <h1 className='text-xl font-semibold uppercase italic'>Transactions</h1>
                <span className='w-full h-[0.12rem] bg-gray-300 mr-10'></span>
            </div>

            <input type="search" name="txnid" id="tnxid" placeholder='Search by transaction id' className='p-2 bg-base-200 w-full my-4 rounded-full border-2 px-3' onChange={(e) => setSearch(e.target.value)} />

            {/* Txns */}
            <section className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
                { transactions.filter((e) => search.toLowerCase().trim() == "" ? transactions : e.txnId.toLowerCase().includes(search.toLowerCase())).map((txn, index) => (
                    <SingleTransaction txn={txn} getTxns={handleGetTxns} key={index} />
                )) }
            </section>
        </main>
    )
}

export default Transactions