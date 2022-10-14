import { Fragment, useEffect, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import Constante from '../constan';

const TableProduct = () => {
  const [product, setProduct] = useState([])
  const navigate = useNavigate();
 
  const GetProduct = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/get_product.php`);
    const data = await resp.json();
    console.log(data)
    setProduct(data)
  }

  useEffect(() => {
    GetProduct()
  }, [])
  
  return (
    <Fragment>
    <div>
    <Link to="/IngresarProducto">
      <button className='btn btn-success'>Nuevo Producto</button>
    </Link>
    </div>
    <table className="table table-striped table-hover">
      <thead className='table-dark'>
        <tr>
          <th>#</th>
          <th>PROCUTO</th>
          <th>MARCA</th>
          <th>MODELO</th>
          <th>PRECIO</th>
          <th>STOCK</th>
          <th>MODIFICAR</th>
        </tr>
      </thead>
      <tbody className="cursor-pointer">
        {product.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.nombre_producto
            }</td>
            <td>{data.marca}</td>
            <td>{data.modelo}</td>
            <td>{data.precio}</td>
            <td>{data.stock}</td>
            <td className='edit'>
              <button className='btn btn-primary'>Editar</button>
              <button className='btn btn-danger'>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </Fragment>
  )
}

export default TableProduct