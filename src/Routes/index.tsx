import { Navigate, Route, Routes } from 'react-router-dom'
import DashBoard from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import { ProtectedRoutes } from '../ProtectedRoutes'

const RoutesMain = () => (
  <Routes>
    <Route element={<ProtectedRoutes />}>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<DashBoard />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </Routes>
)

export default RoutesMain
