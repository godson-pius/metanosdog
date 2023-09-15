import React, { useState } from 'react'
import TopProducts from './TopProducts'
import NewProducts from './NewProducts'
import BestProducts from './BestProducts'

const Trending = () => {
    const [selectedTab, setSelectedTab] = useState('top')
  return (
    <>
        <div className="trending w-full px-20 my-12 flex flex-col items-center">
            <h1 className='text-[#555555] text-3xl uppercase'>Trending</h1>

            <section className="tabs">
                <section className="buttons flex items-center my-5 text-[#555555] divide-x">
                    <button onClick={() => setSelectedTab('top')} className={`duration-700 hover:text-black pr-5 ${selectedTab === 'top' ? 'text-[#7AC751] font-bold' : null}`}>Top Product</button>
                    <button onClick={() => setSelectedTab('new')} className={`duration-700 hover:text-black px-5 ${selectedTab === 'new' ? 'text-[#7AC751] font-bold' : null}`}>New Arrivals</button>
                    <button onClick={() => setSelectedTab('best')} className={`duration-700 hover:text-black pl-5 ${selectedTab === 'best' ? 'text-[#7AC751] font-bold' : null}`}>Best Sellers</button>
                </section>
            </section>

            { selectedTab === 'top' ? <TopProducts /> : null}
            { selectedTab === 'new' ? <NewProducts /> : null}
            { selectedTab === 'best' ? <BestProducts /> : null}
        </div>
    </>
  )
}

export default Trending