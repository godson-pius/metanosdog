import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const userNav = ({ openSection, active }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const navigate = useNavigate()

  const setActive = (menu) => {
    return menu == active ? "border-l-2 border-orange-300" : null;
  };

  const logout = () => {
    localStorage.removeItem("user")
    window.location.href = '/sign-in'
  }

  return (
    <>
        <div className="w-64">
            <div className="w-64 flex flex-col gap-2 bg-slate-900 h-96 text-slate-100 p-5 font-bold rounded">
                <div className='text-center w-full bg-gradient-to-r from-slate-800 text-sm to-black shadow-2xl border-b-2 p-2 rounded mb-5 font-extrabold cursor-pointer hover:scale-125 hover:-translate-y-5 duration-700'>Hi,  { user ? (`${user.firstname} ${user.lastname}`) : null }</div>
                <Link onClick={() => openSection('account')} className={`p-1 pl-2 duration-300 ${setActive('account')}`}>My Account</Link>
                <Link onClick={() => openSection('order')} className={`p-1 pl-2 duration-300 ${setActive('order')}`}>Orders</Link>
                <Link onClick={() => openSection('inbox')} className={`p-1 pl-2 duration-300 ${setActive('inbox')}`}>Inbox</Link>
                <Link onClick={() => logout()} className={`p-1 pl-2 duration-300 ${setActive('logout')}`}>Logout</Link>
                <Link to='/' className={`p-1 pl-2 duration-300 ${setActive('delete')}`}>Delete Account</Link>
            </div>
        </div>
    </>
  )
}

export default userNav