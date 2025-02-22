import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Products />} />
          <Route path='/product-detail/:product_id' element={<ProductDetail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
