import Home from './pages/Home'
import About from './pages/About'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Support from './pages/Support'
import SellOnSeguraMart from './pages/SellOnSeguraMart'
import Contact from './pages/Contact'
import AllFoodItems from './pages/AllFoodItems'
import Food from './pages/Food'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import Pharmacy from './pages/Pharmacy'
import AllPharmacyItems from './pages/AllPharmacyItems'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgottenPassword from './pages/ForgottenPassword'
import ResetPassword from './pages/ResetPassword'
import TrackOrder from './pages/TrackOrder'
import Checkout from './pages/Checkout'
import Profile from './pages/Profile'
import Order from './pages/Order'
import OrderDetails from './pages/OrderDetails'
import TrackOrderDetails from './pages/TrackOrderDetails'
import MyWishlist from './pages/MyWishlist'
import BillPayment from './pages/BillPayment'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/forgot_password" element={<ForgottenPassword />} />
          <Route path="/user/reset_password" element={<ResetPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/food" element={<Food />} />
          <Route path="/food/:id" element={<AllFoodItems />} />
          <Route path="/pharmacy/:id" element={<AllPharmacyItems />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/product/details/:id" element={<Detail />} />
          <Route path="/sellonseguramart" element={<SellOnSeguraMart />} />
          <Route path="/track_order" element={<TrackOrder />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/order" element={<Order />} />
          <Route path="/account/order/:id" element={<OrderDetails />} />
          <Route path="/account/track_orderDetails" element={<TrackOrderDetails />} />
          <Route path="/account/myWishlist" element={<MyWishlist />} />
          <Route path="/account/bill_payment" element={<BillPayment />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
