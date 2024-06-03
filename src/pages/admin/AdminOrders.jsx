import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import { getOrders } from '../../api'
import OrderItems from '../../components/admin/OrderItems'

const AdminOrders = () => {
    const [orders, setOrders] = useState([])

    const handleGetOrders = async () => {
        const res = await getOrders();
        if (res.status == 'success') {
            setOrders(res.orders)
        }
    }

    useEffect(() => {
        handleGetOrders()
    }, [])
    return (
        <main className='w-full'>
            <Navbar />
            <section className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 px-3 mt-5'>
                {orders.length > 0 ? orders.map((order, index) => (
                    <OrderItems key={order.id} order={order} />
                )) : <p>No order yet!</p>}
            </section>

        </main>
    )
}

export default AdminOrders