import React, { useEffect, useState } from 'react'
import { colors } from '../utils/colors'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/nosdog.png'
import search from '../../../assets/icons/search.png'
import shop from '../../../assets/icons/shop.png'
import notification from '../../../assets/icons/notification.png'
import userImage from '../../../assets/icons/user.png'
import hamburger from '../../../assets/icons/hamburger.png'
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { useSelector } from 'react-redux'



const Navbar = ({ active, setActive, catActive, setCatActive }) => {
  const colour = colors;
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const carts = useSelector((state) => state.carts.carts)
  const location = useLocation()

  const navbarState = () => {
    return location.pathname.includes('sign-in') ||
    location.pathname.includes('sign-up') ||
    location.pathname.includes('forex')
    ? 'hidden' : 'block'
  }

  return (
    <main className={`${navbarState()}`}>
      <section className={`top w-full items-center flex justify-between py-3 px-4 lg:px-20 text-white bg-[#7AC751]`}>
        { localStorage.getItem('user') != null ? (<h1>Welcome back, {user ? (`${user.firstname} ${user.lastname}`) : null}</h1>) : <h1>TradePoint</h1> }

        <div className="auth flex justify-between gap-2 lg:gap-5 text-sm md:text-md border-2 px-2 py-1 rounded-full duration-500 hover:scale-105 hover:shadow-lg">
          {localStorage.getItem('user') != null ? (
            <Link
              className="md:block text-sm hover:text-bold duration-500 hover:font-extrabold"
              to="/user-dashboard"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              className="md:block text-sm hover:text-bold  font-extrabold"
              to="/sign-in"
            >
              Create Account
            </Link>
          )}
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

        <div className='lg:hidden flex text-4xl gap-2 items-center'>
          {/* <CiSearch /> */}
          <div className="flex">
            <Link to={'/cart'}>
              <img src={shop} alt="Search" width={25} />
            </Link>
            <span className="text-xs mt-[-6px] font-extrabold text-green-100 bg-green-500 w-3 h-3 flex items-center justify-center p-2 rounded-full shadow-lg border-2">{carts.length}</span>
          </div>
          {active ? <LiaTimesSolid onClick={() => setActive(!active)} /> : <FiMenu onClick={() => setActive(!active)} />}
        </div>


        <div className='hidden lg:flex justify-between items-center gap-3'>
          <div className="flex">
            <Link to={'/cart'}>
              <img src={shop} alt="Search" width={20} />
            </Link>
            <span className="text-xs mt-[-6px] font-extrabold text-green-100 bg-green-500 w-3 h-3 flex items-center justify-center p-2 rounded-full shadow-lg border-2">{carts.length}</span>
          </div>
          <img src={notification} alt="Search" width={20} />
          <Link to={localStorage.getItem('user') != null ? '/user-dashboard' : '/sign-in'}>
            <img src={userImage} alt="Search" width={20} />
          </Link>
        </div>
      </header>

      {/* Nav */}
      <nav className='bg-[#F7F8FA] px-10 lg:px-20 flex lg:gap-48 items-center'>
        <div className={`bg-[#7AC751] w-56 justify-center text-white p-3 lg:p-5 flex gap-3 lg:gap-4 items-center`}>
          <img src={hamburger} alt="Search" width={17} />
          <button className={`uppercase text-sm`} onClick={() => setCatActive(!catActive)}>All Collections</button>
        </div>


        <div className={`text-[#555555] navlinks text-sm uppercase lg:flex gap-20 hidden`}>
          <Link to=''>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to=''>Blog</Link>
          <Link to=''>About</Link>
          <Link to='/forex-home'>Forex</Link>
          <Link to=''>Contact Us</Link>
        </div>

        {/* Mobile */}
        <div className={`${active ? 'flex' : 'hidden'} categories gap-4 sm:text-center lg:gap-0 bg-[#f6f7f9] lg:bg-transparent flex flex-col z-50 lg:static absolute top-0 left-0 w-[60vw] lg:w-56 p-3 lg:p-5 h-[100vh] lg:h-auto lg:text-left text-[#555555] text-sm duration-700`}>
          <h2 className='text-lg font-bold text-black lg:hidden'>Trade Point Network</h2>
          <hr className='lg:hidden' />

          <Link to=''>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to=''>Blog</Link>
          <Link to=''>About</Link>
          <Link to='/forex-home'>Forex</Link>
          <Link to=''>Contact Us</Link>
        </div>
      </nav>
    </main>
  )
}

export default Navbar