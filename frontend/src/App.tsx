import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ProductPage } from './pages/Products/Product';
import {ProductDetail} from './pages/Products/ProductDetail';
import { Welcome } from './pages/welcome'

function App() { 
  return (
    <>
    <h1>Hello World</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/product' element={<ProductPage/>} />
          <Route path='/product/:slug' element={<ProductDetail />} />
          <Route path='/' element={<Welcome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
