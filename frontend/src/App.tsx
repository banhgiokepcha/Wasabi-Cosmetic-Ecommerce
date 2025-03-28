import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductPage } from './pages/Products/Product';
import { Welcome } from './pages/welcome'

function App() {
  

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/product' element={<ProductPage/>} />
          <Route path='/welcome' element={<Welcome/>}/>
        </Routes>
      </BrowserRouter>
  
  )
}

export default App
