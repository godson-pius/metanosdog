import React, { useEffect, useState } from 'react'
import { FiEye } from "react-icons/fi";
import { getUserOrders } from '../../api';

const Orders = ({ userId }) => {
    const [isOpenOrder, setOpenOrder] = useState(true);
    const [isClosedOrder, setClosedOrder] = useState(false);
    const [activeOrderMenu, setOrderMenu] = useState("open-orders");
    const [orders, setOrders] = useState([])

    const openOrderSection = (_section) => {
        setOpenOrder(false);
        setClosedOrder(false);

        switch (_section) {
            case "open-orders":
                setOpenOrder(true);
                setOrderMenu("open-orders");
                break;

            case "closed-orders":
                setClosedOrder(true);
                setOrderMenu("closed-orders");
                break;

            default:
                break;
        }
    };

    const setActiveOrderMenu = (menu) => {
        return menu == activeOrderMenu
            ? "border-b-2 border-slate-800 font-bold shadow-lg text-slate-800"
            : null;
    };

    const handleGetUserOrders = async () => {
        const res = await getUserOrders(userId);
        if (res.status == 'success') {
            setOrders(res.orders)
        }
    }

    useEffect(() => {
        handleGetUserOrders();
    }, [])

    return (
        <div className="w-full p-3">
            <div className="bg-white w-full p-5">
                {/* <h1 className="text-lg border-b-2 mb-5 text-slate-800">Orders</h1> */}

                <div className="flex gap-10">
                    <button
                        onClick={() => openOrderSection("open-orders")}
                        className={`text-sm text-gray-400 uppercase ${setActiveOrderMenu(
                            "open-orders"
                        )}`}
                    >
                        open orders
                    </button>
                    <button
                        onClick={() => openOrderSection("closed-orders")}
                        className={`text-sm text-gray-400 uppercase ${setActiveOrderMenu(
                            "closed-orders"
                        )}`}
                    >
                        closed orders
                    </button>
                </div>

                {isOpenOrder ? (
                    <div className="closed-content w-full flex flex-col mt-5">
                        {orders.length > 0 ? (
                            orders.map((order, index) => (
                                order.products.map((product, index) => (
                                    <div key={index} className="w-full ring-2 ring-gray-200 p-2 mb-3 rounded-full">
                                        <div className="flex items-center justify-between">
                                            <div className='flex gap-2'>
                                                <div className="bg-gray-400 w-20 h-20 rounded-full"></div>
                                                <div className="flex flex-col justify-between">
                                                    <h1 className="uppercase mr-36 font-bold">
                                                        {product.productName}
                                                    </h1>
                                                    <span className="text-sm uppercase text-gray-400">
                                                        order { order._id }
                                                    </span>

                                                    <div className="flex mt-3 items-center gap-2">
                                                        <button className={`${order.dispatched == 'pending' ? 'text-yellow-800 bg-yellow-300' : 'text-green-800 bg-green-800'} p-1 text-sm rounded`}>
                                                            { order.dispatched }
                                                        </button>
                                                        <span className="text-xs uppercase text-slate-800 font-extrabold">
                                                            on 12/11/2022
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <FiEye className="mr-5" fontSize={20} />
                                        </div>
                                    </div>
                                ))
                            ))
                        ) : <p>No open order!</p>}
                    </div>
                ) : null}

                {isClosedOrder ? (
                    <div className="open-content w-full flex flex-col mt-5">
                        <div className="w-full ring-2 ring-gray-200 p-2 mb-5 rounded-full">
                            <div className="flex items-center justify-between">
                                <div className="bg-gray-400 w-20 h-20 rounded-full"></div>
                                <div className="flex flex-col justify-between">
                                    <h1 className="uppercase mr-36 font-bold">
                                        Computer lenses for screen reading in the night late
                                        hours
                                    </h1>
                                    <span className="text-sm uppercase text-gray-400">
                                        order 1232223
                                    </span>

                                    <div className="flex mt-3 items-center gap-2">
                                        <button className="text-slate-800 bg-slate-200 p-1 text-sm rounded">
                                            Failed Delivery
                                        </button>
                                        <span className="text-xs uppercase text-slate-800 font-extrabold">
                                            on 12/11/2022
                                        </span>
                                    </div>
                                </div>
                                <FiEye className="mr-5" fontSize={20} />
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Orders