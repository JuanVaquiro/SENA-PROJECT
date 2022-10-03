import { Fragment } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/autoContext'

const ProtectedRoute = ({ children }) => { 
    const { User, Loading } = useAuth()

    if(Loading) return <h2>Cargando...</h2>
    
    if(!User) return <Navigate to='/' />

    return <Fragment>{children}</Fragment>
}

export default ProtectedRoute