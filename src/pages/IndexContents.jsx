import { Fragment } from 'react'
import { useAuth } from '../context/autoContext'
import TableProduct from './product/TableProduct'
import Navbar2 from '../components/Navbar2';

const IndexContents = () => {
  const {  Loading } = useAuth()

  if(Loading) return <h2>Cargando...</h2>

  return (
    <Fragment>
        <Navbar2/>       
        <TableProduct />
    </Fragment>
  )
}

export default IndexContents