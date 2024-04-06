import React from 'react'
import { colors } from '../utils/colors'
import { Link } from 'react-router-dom'
import logo from '../../../assets/nosdog.png'
import search from '../../../assets/icons/search.png'
import shop from '../../../assets/icons/shop.png'
import notification from '../../../assets/icons/notification.png'
import user from '../../../assets/icons/user.png'
import hamburger from '../../../assets/icons/hamburger.png'
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";



const Navbar = ({active, setActive}) => {
  const colour = colors;

  return (
    <>
      <section className={`hidden top w-full lg:flex justify-between py-3 px-20 text-white bg-[#7AC751]`}>
        <h1>Welcome back,</h1>

        <div className="auth flex justify-between gap-5">
          <Link to=''>
            Login
          </Link>
          <span>|</span>
          <Link>
            Sign Up
          </Link>
        </div>
      </section>

      <header className={`w-full flex gap-5 lg:gap-0 px-10 md:px-20 lg:py-5 md:py-5 py-4 justify-between items-center`}>
        <img src={logo} alt="Logo" className='w-16 h-16' />

        {/* Search bar */}
        <div className={`hidden w-[50rem] lg:flex border-2 border-[#7AC751] rounded-xl`}>
          <input type="text" className='w-full rounded-l-lg px-4' placeholder='search here' />
          <button className={`bg-[#7AC751] p-3 rounded-r-lg`}>
            <img src={search} alt="Search" width={20} />
          </button>
        </div>

        <div className='lg:hidden flex text-4xl gap-2'>
          <CiSearch />
          {active ? <LiaTimesSolid onClick={() => setActive(!active)} /> :<FiMenu onClick={() => setActive(!active)} />}
        </div>


        <div className='hidden lg:flex justify-between items-center gap-6'>
          <img src={shop} alt="Search" width={20} />
          <img src={notification} alt="Search" width={20} />
          <img src={user} alt="Search" width={20} />
        </div>
      </header>

      {/* Nav */}
      <nav className='bg-[#F7F8FA] px-10 lg:px-20 flex lg:gap-48 items-center'>
        <div className={`bg-[#7AC751] w-56 justify-center text-white p-3 lg:p-5 flex gap-3 lg:gap-4 items-center`}>
          <img src={hamburger} alt="Search" width={17} />
          <button className={`uppercase text-sm`}>All Collections</button>
        </div>
        

        <div className={`text-[#555555] navlinks text-sm uppercase lg:flex gap-20 hidden`}>
          <Link to=''>Home</Link>
          <Link to=''>Shop</Link>
          <Link to=''>Blog</Link>
          <Link to=''>About</Link>
          <Link to='/forex'>Forex</Link>
          <Link to=''>Contact Us</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar