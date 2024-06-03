import React from 'react'
import logo from '../../../assets/nosdog.png'
import { Link, useLocation } from 'react-router-dom'
import moment from 'moment/moment'

const Footer = () => {
    const location = useLocation()

    const navbarState = () => {
        return location.pathname.includes('sign-in') ||
        location.pathname.includes('sign-up') ||
        location.pathname.includes('forex') ||
        location.pathname.includes('vendor') ||
        location.pathname.includes('admin')
        ? 'hidden' : 'block'
    }
  return (
    <main className={`${navbarState()}`}>
    <div className="trending w-full px-4 md:px-8 lg:px-20 my-10">
        <footer className='flex flex-col lg:flex-row gap-2 items-start justify-between'>
            <div className="info1">
                <img src={ logo } alt="Logo" width={60} />
                <p className='text-sm w-full lg:w-96 mt-1 text-[#555555]'>Metanosdog is the a popular Ecommerce site. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>

            <div className="info2 flex flex-col gap-2 lg:gap-4">
                <h4 className='font-bold text-lg'>Help</h4>
                <Link to='' className='text-sm text-[#555555]'>Privacy Policy</Link>
                <Link to='' className='text-sm text-[#555555]'>Shipping & Delivery</Link>
                <Link to='' className='text-sm text-[#555555]'>Refund Policy</Link>
                <Link to='' className='text-sm text-[#555555]'>Track your order</Link>
            </div>

            <div className="info2 flex flex-col gap-2 lg:gap-4">
                <h4 className='font-bold text-lg'>Store</h4>

                <Link to='' className='text-sm text-[#555555]'>Furniture</Link>
                <Link to='' className='text-sm text-[#555555]'>Real Estate</Link>
                <Link to='' className='text-sm text-[#555555]'>Chairs</Link>
                <Link to='' className='text-sm text-[#555555]'>Tables</Link>
            </div>
            
            <div className="info2 flex flex-col gap-2 lg:gap-4">
                <h4 className='font-bold text-lg'>Supports</h4>

                <Link to='' className='text-sm text-[#555555]'>Feedbacks</Link>
                <Link to='' className='text-sm text-[#555555]'>Contact us</Link>
                <Link to='' className='text-sm text-[#555555]'>Download app</Link>
                <Link to='' className='text-sm text-[#555555]'>Terms & Conditions</Link>
            </div>
        </footer>
        <hr className='my-5' />

        <section className="final flex flex-col justify-between items-center">
            <p className='text-sm text-[#555555]'>&copy; {moment().format("Y")} Trade Point Network - All rights reserved.</p>

            <div className="links flex items-center gap-2 lg:gap-5">
            <Link to='' className='text-sm text-[#7AC751] font-extrabold'>Purchase Metanosdog.</Link>
                <Link to='' className='text-sm text-[#555555]'>Security</Link>
                <Link to='' className='text-sm text-[#555555]'>TradePoint</Link>
            </div>
        </section>
    </div>
</main>
  )
}

export default Footer