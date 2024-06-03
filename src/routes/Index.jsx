import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Vendor from '../pages/Vendor'
import VendorSignup from '../pages/vendor/VendorSignup'
import VendorSignin from '../pages/vendor/VendorSignin'
import Dashboard from '../pages/vendor/Dashboard'
import UserDashboard from '../pages/users/Dashboard'
import VendorProducts from '../pages/vendor/VendorProducts'
import VendorInbox from '../pages/vendor/VendorInbox'
import VendorTickets from '../pages/vendor/VendorTickets'
import VendorSettings from '../pages/vendor/VendorSettings'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'
import NHome from '../pages/New/NHome'
import ForexHome from '../pages/forex/ForexHome'
import ForexTransactions from '../pages/forex/ForexTransactions'
import ForexSwap from '../pages/forex/ForexSwap'
import ForexAccounts from '../pages/forex/ForexAccounts'
import ForexReferrals from '../pages/forex/ForexReferrals'
import ForexWithdraw from '../pages/forex/ForexWithdraw'
import ForexSettings from '../pages/forex/ForexSettings'
import ForexDeposit from '../pages/forex/ForexDeposit'
import Navbar from '../pages/New/components/Navbar'
import Footer from '../pages/New/components/Footer';
import AdminHome from '../pages/admin/AdminHome';
import AdminOrders from '../pages/admin/AdminOrders'
import AdminWithdrawals from '../pages/admin/AdminWithdrawals'

const Index = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isCatActive, setIsCatActive] = useState(false);
  return (
    <Router basename='/'>
      <Navbar active={isMenuActive} setActive={setIsMenuActive} catActive={isCatActive} setCatActive={setIsCatActive} />
      <Routes>
        <Route path='/' element={<NHome />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/sign-up/:ref' element={<Signup />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/product/:name' element={<Product />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/vendor-signup' element={<VendorSignup />} />
        <Route path='/vendor-signup/:ref' element={<VendorSignup />} />
        <Route path='/vendor-signin' element={<VendorSignin />} />
        <Route path='/vendor-dashboard' element={<Dashboard />} />
        <Route path='/vendor-products' element={<VendorProducts />} />
        <Route path='/vendor-inbox' element={<VendorInbox />} />
        <Route path='/vendor-ticket' element={<VendorTickets />} />
        <Route path='/vendor-settings' element={<VendorSettings />} />
        <Route path='/vendor' element={<Vendor />} />
        <Route path='/user-dashboard' element={<UserDashboard />} />


        {/* New Designs */}
        <Route path='/new' element={<NHome />} />

        {/* Forex Routes */}
        <Route path='/forex-home' element={<ForexHome />} />
        <Route path='/forex-txn' element={<ForexTransactions />} />
        <Route path='/forex-swap' element={<ForexSwap />} />
        <Route path='/forex-accounts' element={<ForexAccounts />} />
        <Route path='/forex-ref' element={<ForexReferrals />} />
        <Route path='/forex-deposit' element={<ForexDeposit />} />
        <Route path='/forex-withdraw' element={<ForexWithdraw />} />
        <Route path='/forex-setting' element={<ForexSettings />} />

        {/* Admin Routes */}
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/admin-orders' element={<AdminOrders />} />
        <Route path='/admin-withdrawals' element={<AdminWithdrawals />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default Index