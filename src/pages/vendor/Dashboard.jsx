import React, { useEffect, useState } from 'react'
import {
  FiCheckCircle,
  FiFileText,
  FiLayers,
  FiMoreHorizontal,
  FiRepeat, FiUsers,
} from 'react-icons/fi'
import VendorNav from '../../components/vendor/VendorNav'
import ads from '../../assets/images/ads.svg'
import CustomRule from '../../components/CustomRule'
import RecentOrder from '../../components/vendor/RecentOrder'

const Dashboard = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {};
  }, [])

  return (
    <>
      <div
        className="w-full bg-[#edf4f6] min-h-screen"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className="flex">
          {/* Side navigation menu */}
          <VendorNav />

          {/* Main content */}
          <div className="main w-full py-7 px-5 md:px-6 lg:px-14 flex flex-col items-start gap-8 md:ml-48 ml-10">
            {/* Top section */}
            <section className="top__content w-full items-center grid md:grid-cols-2 lg:grid-cols-3 gap-4 z-50">
              <div className="w-full bg-white p-5 rounded-md duration-700 hover:scale-105 hover:translate-y-4 hover:shadow-lg">
                <div className="flex gap-5 items-center">
                  <FiLayers size={40} className="text-[#f6b235]" />
                  <div className="text">
                    <h1 className="font-bold">Items Available</h1>
                    <p className="text-sm text-gray-400">25 items</p>
                  </div>
                </div>
              </div>

              <div className="w-full bg-white p-5 rounded-md duration-700 hover:scale-105 hover:translate-y-4 hover:shadow-lg">
                <div className="flex gap-5 items-center">
                  <FiCheckCircle size={40} className="text-[#f6b235]" />
                  <div className="text">
                    <h1 className="font-bold">Items shipped today</h1>
                    <p className="text-sm text-gray-400">15 items</p>
                  </div>
                </div>
              </div>

              <div className="w-full bg-white p-5 md:justify-center md:flex lg:flex-none lg:justify-start md:col-start-1 md:col-end-3 lg:col-start-auto lg:col-end-auto rounded-md duration-700 hover:scale-105 hover:translate-y-4 hover:shadow-lg">
                <div className="flex gap-5 items-center">
                  <FiUsers size={40} className="text-[#f6b235]" />
                  <div className="text">
                    <h1 className="font-bold">Referrals</h1>
                    <p className="text-sm text-gray-400">3 referral(s)</p>
                  </div>
                </div>
              </div>
            </section>
            {/* End of first section */}

            {/* Main Content Advert */}
            <section className="main__ads w-full bg-gradient-to-tr from-indigo-400 to-cyan-400 p-8 rounded-md text-white flex lg:justify-between lg:gap-44 lg:px-14 lg:items-center">
              <div className="ads__text w-full flex">
                <div className="text-start">
                  <h1 className="text-2xl">You are doing great</h1>
                  <h1 className="text-5xl font-bold">Meta Nosdog!</h1>
                  <p className="mt-7 text-gray-600 bg-white p-3 w-32 rounded">
                    Keep it up 👍
                  </p>
                </div>
              </div>

              <div className="ads__image w-full hidden lg:block hover:animate-pulse">
                <img
                  src={ads}
                  alt="Ads Image"
                  className="mt-[-90px] lg:w-[350px]"
                />
              </div>
            </section>
            {/* End main Content Advert */}

            {/* Order Tracker */}
            <section className="order__tracker w-full">
              <div className="flex items-center gap-5 mb-5">
                <h1 className="text-md md:text-xl lg:text-2xl font-bold">
                  Order Tracker
                </h1>
                <CustomRule />
              </div>
              <div className="w-full bg-white p-8 rounded">
                <div className="order__content grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-x items-center md:divide-y-0 gap-4 grid-cols-1">
                  <div className="each flex flex-col items-center">
                    <h1 className="text-5xl font-bold">12</h1>
                    <p className="text-gray-400">New Orders</p>
                  </div>

                  <div className="each flex flex-col items-center">
                    <h1 className="text-5xl font-bold">5</h1>
                    <p className="text-gray-400">In Progress</p>
                  </div>

                  <div className="each flex flex-col items-center">
                    <h1 className="text-5xl font-bold">30</h1>
                    <p className="text-gray-400">Shipped</p>
                  </div>

                  <div className="each flex flex-col items-center">
                    <h1 className="text-5xl font-bold">6</h1>
                    <p className="text-gray-400">Failed</p>
                  </div>
                </div>
              </div>
            </section>
            {/* End order Tracker */}

            {/* Recent orders */}
            <section className="recent__Orders w-full mt-5">
              <div className="flex items-center gap-5 mb-5">
                <h1 className="text-md md:text-xl lg:text-2xl font-bold">
                  Recent Orders
                </h1>
                <CustomRule />
              </div>

              <RecentOrder />
            </section>
            {/* End recent orders */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
