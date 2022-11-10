import { Routes, Route } from 'react-router-dom'
import { Cart } from './pages/Cart'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Cart />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}
