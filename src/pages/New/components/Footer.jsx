import React from 'react'
import logo from '../../../assets/nosdog.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="trending w-full px-20 my-10">
        <footer className='flex items-start justify-between'>
            <div className="info1">
                <img src={ logo } alt="Logo" width={60} />
                <p className='text-sm w-96 mt-1 text-[#555555]'>Metanosdog is the a popular Ecommerce site. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>

            <div className="info2 flex flex-col gap-4">
                <h4 className='font-bold text-lg'>Help</h4>

                <Link to='' className='text-sm text-[#555555]'>Privacy Policy</Link>
                <Link to='' className='text-sm text-[#555555]'>Shipping & Delivery</Link>
                <Link to='' className='text-sm text-[#555555]'>Refund Policy</Link>
                <Link to='' className='text-sm text-[#555555]'>Track your order</Link>
            </div>

            <div className="info2 flex flex-col gap-4">
                <h4 className='font-bold text-lg'>Store</h4>

                <Link to='' className='text-sm text-[#555555]'>Furniture</Link>
                <Link to='' className='text-sm text-[#555555]'>Real Estate</Link>
                <Link to='' className='text-sm text-[#555555]'>Chairs</Link>
                <Link to='' className='text-sm text-[#555555]'>Tables</Link>
            </div>
            
            <div className="info2 flex flex-col gap-4">
                <h4 className='font-bold text-lg'>Supports</h4>

                <Link to='' className='text-sm text-[#555555]'>Feedbacks</Link>
                <Link to='' className='text-sm text-[#555555]'>Contact us</Link>
                <Link to='' className='text-sm text-[#555555]'>Download app</Link>
                <Link to='' className='text-sm text-[#555555]'>Terms & Conditions</Link>
            </div>
        </footer>
        <hr className='my-5' />

        <section className="final flex justify-between items-center">
            <p className='text-sm text-[#555555]'>&copy; 2023 Metanosdog - All rights reserved.</p>

            <div className="links flex items-center gap-5">
            <Link to='' className='text-sm text-[#7AC751] font-extrabold'>Purchase Metanosdog</Link>
                <Link to='' className='text-sm text-[#555555]'>Security</Link>
                <Link to='' className='text-sm text-[#555555]'>Metanosdog</Link>
            </div>
        </section>
    </div>
</>
  )
}

export default Footer