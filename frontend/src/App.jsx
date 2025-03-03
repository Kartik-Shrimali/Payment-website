import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/info" element={<Dashboard />} />
        <Route path="/sendmoney" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
