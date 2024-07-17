import React, { useRef } from 'react'
import { closeDepositPortal, openDepositPortal, testRoi } from '../../api';
import { toast } from 'react-toastify';

const Actions = () => {
    const info = useRef();

    const handleOpenDeposit = async (req, res) => {
        const conf = confirm("Please confirm request")
        if (conf) {
            info.current = toast.info("Executing request....", { autoClose: false })

            const res = await openDepositPortal();
            if (res.status == "success") {
                toast.success("Portal Opened!")
                window.location.reload()
            }
        }
    }

    const handleCloseDeposit = async (req, res) => {
        const conf = confirm("Please confirm request")
        if (conf) {
            info.current = toast.info("Executing request....", { autoClose: false })

            const res = await closeDepositPortal();
            if (res.status == "success") {
                toast.success("Portal Opened!")
                window.location.reload()
            }
        }
    }

    const handleSendRoi = async() => {
        const conf = confirm("Please confirm request")
        if (conf) {
            info.current = toast.info("Executing request....", { autoClose: false })

            const data = { id: "6697a586237fdf4a1dc30f6d" }

            const res = await testRoi(data);
            if (res.message.toString().includes("adding...")) {
                toast.success("Added!")
                
            }
        }
    }

    return (
        <main className='pt-10'>
            <div className='flex items-center mb-4 gap-3'>
                <h1 className='text-xl font-semibold ml-10 uppercase italic'>Actions</h1>
                <span className='w-full h-[0.12rem] bg-gray-300 mr-10'></span>
            </div>

            <section className='w-full flex flex-col lg:flex-row items-center justify-between px-10'>
                <div className='border-2 px-10 py-3 rounded-lg'>
                    <h6 className='font-medium text-lg'>Deposit Portal</h6>
                    <div className='flex gap-2 mt-2'>
                        <button className='btn btn-sm btn-info' onClick={handleOpenDeposit}>Open</button>
                        <button className='btn btn-sm btn-primary' onClick={handleCloseDeposit}>Close</button>
                    </div>
                </div>
               
                <div className='border-2 px-5 py-3 rounded-lg'>
                    <h6 className='font-medium text-lg'>Send ROI</h6>
                    <div className='flex gap-2 mt-2'>
                        <button className='btn btn-sm btn-info' onClick={handleSendRoi}>Send</button>
                        {/* <button className='btn btn-sm btn-primary' onClick={handleCloseDeposit}>Close</button> */}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Actions