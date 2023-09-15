import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
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

const Index = () => {
  return (
    <Router basename='/'>
        {/* <Navbar /> */}
        
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/sign-up' element={ <Signup /> } />
            <Route path='/sign-in' element={ <Signin /> } />
            <Route path='/product/:name' element={ <Product /> } />
            <Route path='/shop' element={ <Shop /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/vendor-signup' element={ <VendorSignup /> } />
            <Route path='/vendor-signup/:ref' element={ <VendorSignup /> } />
            <Route path='/vendor-signin' element={ <VendorSignin /> } />
            <Route path='/vendor-dashboard' element={ <Dashboard /> } />
            <Route path='/vendor-products' element={ <VendorProducts /> } />
            <Route path='/vendor-inbox' element={ <VendorInbox /> } />
            <Route path='/vendor-ticket' element={ <VendorTickets /> } />
            <Route path='/vendor-settings' element={ <VendorSettings /> } />
            <Route path='/vendor' element={ <Vendor /> } />
            <Route path='/user-dashboard' element={ <UserDashboard /> } />


            {/* New Designs */}
            <Route path='/new' element={ <NHome /> } />
        </Routes>

        {/* <Footer /> */}
    </Router>
  )
}

export default Index