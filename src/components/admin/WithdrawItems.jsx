import React from 'react'

const WithdrawItems = ({ withdrawal }) => {

    const handleConfirmOrder = async () => { }
    
  return (
    <div className="w-full flex flex-col bg-white border-2 p-3 rounded-2xl gap-2">
    <div className="w-full flex items-center justify-between">
        <h4 className='text-gray-500'>Order Id:</h4>
        <div className='flex items-center gap-3'>
            <span className='text-sky-500 font-normal'>{withdrawal?._id}</span>
            <FiCopy onClick={() => copyValue(withdrawal?._id)} className='cursor-pointer hover:animate-pulse' size={20} />
        </div>
    </div>

    <hr />

    <div className="w-full flex items-center justify-between">
        <h4 className='text-gray-500'>Amount: </h4>
        <div className='flex items-center gap-3'>
            <span className='text-sky-500 font-normal'>$909</span>
        </div>
    </div>

    <div className="w-full flex items-center justify-between">
        <h4 className='text-gray-500'>From: </h4>
        <div className='flex items-center gap-3'>
            <span className='text-sky-500 font-normal'>{`${withdrawal?.user}`}</span>
        </div>
    </div>

    <hr />

    <div className="w-full flex items-center justify-between">
        <h4 className='text-gray-500'>Timestamps: </h4>
        <div className='flex items-center gap-3'>
            <span className='text-sky-500 font-normal'>{moment(withdrawal.createdAt).fromNow()}</span>
        </div>
    </div>

    <div className="w-full flex items-center justify-between">
        <h4 className='text-gray-500'>Date & Time: </h4>
        <div className='flex items-center gap-3'>
            <span className='text-sky-500 font-normal'>{moment(withdrawal.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</span>
        </div>
    </div>

    <hr />

    <div className="w-full flex items-center justify-between">
        <h4 className='text-gray-500'>Products: </h4>
    </div>

    {withdrawal.products.map((product, index) => (
        <div className="w-full flex items-center justify-between">
            <h4 className='text-sky-600'>{ product.productName }</h4>
            <div className='flex items-center gap-3'>
                <span className='text-sky-500 font-normal'>{ formatNum(product.productPrice) }</span>
            </div>
        </div>
    ))}

    <hr />

    <div className='w-full my-2'>
        <div className=' flex items-center gap-2 justify-center px-20 md:px-48 lg:px-56'>
            <button onClick={handleConfirmOrder} className='w-full btn btn-info text-white'>Confirm Order</button>
            <button className='w-full btn btn-error text-white'>Cancel Order</button>
        </div>
    </div>
</div>
  )
}

export default WithdrawItems