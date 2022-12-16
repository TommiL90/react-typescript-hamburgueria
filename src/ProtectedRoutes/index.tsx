
import { useContext } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'



export const ProtectedRoutes = () => {

  const { user, verification } = useContext(UserContext)


    if (verification) {
      return null
    }

    return user ? <Outlet/> : <Navigate to="/login"  />
}

