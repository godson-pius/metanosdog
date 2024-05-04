import React, { useState } from 'react'
import TopProducts from './TopProducts'
import NewProducts from './NewProducts'
import BestProducts from './BestProducts'
import { addCart } from '../../../store/slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { handleCreateCart } from '../../../api'
import { toast } from 'react-toastify'

const Trending = () => {
    const [selectedTab, setSelectedTab] = useState('top')
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')))

    const addToCart = async (productName, productPrice) => {
        const data = {
            user: currentUser._id,
            productName,
            productPrice
        }

        const res = await handleCreateCart(data);
        if (res.status === "success") {
            dispatch(addCart(res.cart))
            toast.success(`${productName} has been added to cart`)
        } else if (res.response.data.error.code === 11000) {
            toast.info(`${productName} already exists in cart`)
        } else {
            toast.error(`${productName} could not be added to cart`)
        }
    }

    return (
        <>
            <div className="trending w-full px-4 lg:px-20 my-12 flex flex-col items-center">
                <h1 className='text-[#555555] text-3xl uppercase'>Trending</h1>

                <section className="tabs">
                    <section className="buttons flex items-center mt-5 text-[#555555] divide-x">
                        <button onClick={() => setSelectedTab('top')} className={`duration-700 hover:text-black pr-5 ${selectedTab === 'top' ? 'text-[#7AC751] font-bold' : null}`}>Top Product</button>
                        <button onClick={() => setSelectedTab('new')} className={`duration-700 hover:text-black px-5 ${selectedTab === 'new' ? 'text-[#7AC751] font-bold' : null}`}>New Arrivals</button>
                        <button onClick={() => setSelectedTab('best')} className={`duration-700 hover:text-black pl-5 ${selectedTab === 'best' ? 'text-[#7AC751] font-bold' : null}`}>Best Sellers</button>
                    </section>
                </section>

                {selectedTab === 'top' ? <TopProducts products={products}/> : null}
                {selectedTab === 'new' ? <NewProducts products={products}/> : null}
                {selectedTab === 'best' ? <BestProducts products={products}/> : null}
            </div>
        </>
    )
}

export default Trending