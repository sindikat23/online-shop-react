import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import About from './pages/About.jsx';
import CartListProvider from './Context/CartList.jsx';
import Carts from './pages/Carts.jsx';
import Household from './pages/Household.jsx';
import Electronica from './pages/Electronica.jsx';
import LogIn from './Log/LogIn.jsx';
import Profile from './Log/Profile.jsx';
import {ToastContainer, toast } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer/>
    <CartListProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/" element={<App />}>
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="household" element={<Household />} />
            <Route path="electronics" element={<Electronica />} />
            <Route path="product-detail/:product_id" element={<ProductDetail />} />
            <Route path="cart-list" element={<Carts />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartListProvider>
  </StrictMode>
);