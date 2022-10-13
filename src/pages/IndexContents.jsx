import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/autoContext'
import TableProduct from './TableProduct'

const IndexContents = () => {
  const { User, Logout, Loading } = useAuth()
  const navigate = useNavigate()

  const HanldeLogout = async () => {
    try {
      await Logout()
      navigate('/')
    } catch (error) {
      console.log(error) 
    }
  }

  if(Loading) return <h2>Cargando...</h2>

  return (
    <div>
        <h2>Bienvenido { User.displayName || User.email}</h2>

        <button className='btn btn-danger' onClick={HanldeLogout}>
            Cerrar Sesion
        </button>

        <TableProduct />
    </div>
  )
}

export default IndexContents