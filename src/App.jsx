import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CartAnimProvider } from './context/CartAnimContext'
import FlyingDot from './components/ui/FlyingDot'
import Header from './components/header/Header'
import ReviewPage from './components/ui/ReviewPage'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import Iphone from './pages/Iphone'
import Samsung from './pages/Samsung'
import Oppo from './pages/Oppo'
import Asus from './pages/Asus'
import Huawei from './pages/huawei'
import Vivo from './pages/Vivo'
import Ipad from './pages/Ipad'
import Tablet from './pages/Tablet'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import LoginPage from './pages/LoginPage'
import OrderSuccessPage from './pages/OrderSuccessPage'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.2 } },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Routes location={location}>
          <Route path='/' element={<Home/>} />
          <Route path='/Iphone' element={<Iphone />} />
          <Route path='/Samsung' element={<Samsung/>} />
          <Route path='/Oppo' element={<Oppo />} />
          <Route path='/Asus' element={<Asus/>} />
          <Route path='/Huawei' element={<Huawei/>} />
          <Route path='/Vivo' element={<Vivo/>} />
          <Route path='/ipad' element={<Ipad/>} />
          <Route path='/tablet' element={<Tablet/>} />
          <Route path="/review/:id" element={<ReviewPage/>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <CartAnimProvider>
      <BrowserRouter>
        <Header />
        <FlyingDot />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </CartAnimProvider>
  )
}

export default App
