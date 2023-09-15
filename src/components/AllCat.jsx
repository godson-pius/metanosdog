import React from 'react'
import react from '../assets/react.svg'
import BestSellingProducts from './BestSellingProducts'
import FeaturedProducts from './FeaturedProducts'
import LatestProducts from './LatestProducts'
import TopRatedProducts from './TopRatedProducts'

const AllCat = () => {
  return (
    <>
        <div className="w-full bg-gray-100 p-5">
            <div className="w-full flex flex-col md:flex-row gap-7 md:gap-0 items-center bg-white p-10 rounded shadow-2xl justify-between">
                <FeaturedProducts />

                <LatestProducts />

                <BestSellingProducts />

                <TopRatedProducts />
            </div>
        </div>
    </>
  )
}

export default AllCat