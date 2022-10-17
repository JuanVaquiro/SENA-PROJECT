import { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Constante from '../constan';

const TableProduct = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const GetProduct = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/get_product.php`);
    const data = await resp.json();
    setProduct(data)
  } 
  
  const Delete = async (nombre_producto, id) => {
    console.log(nombre_producto, id);
    const alertMessage = await Swal.fire({
      title: "Confirmación",
      text: `¿Estás seguro que deseas eliminar el registro: "${nombre_producto}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3298dc",
      cancelButtonColor: "#f14668",
      cancelButtonText: "No",
      confirmButtonText: "Sí, eliminar",
    });
    if (!alertMessage.value) {
      return;
    }
    const resp = await fetch(
      `${Constante.RUTA_API}/delete_product.php?id=${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await resp.json();
    if (data) {
      toast.success("Producto eliminado ", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      GetProduct()
    } else {
      toast.error("Error eliminando. Intenta de nuevo");
    }
  };

  useEffect(() => {
    GetProduct()
  }, [])
  
  return (
    <Fragment>
    <ToastContainer></ToastContainer>
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
         
              <button  onClick={() =>
                navigate(`/IditarProducto/${data.id}`)
              } className='btn btn-primary'>Editar</button>
         
              <button onClick={() => Delete(data.nombre_producto, data.id)} className='btn btn-danger'>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </Fragment>
  )
}

export default TableProduct