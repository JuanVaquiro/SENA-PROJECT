import { Fragment, useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar2 from '../../components/Navbar2';
import Constante from '../../constan'

const UpdateProduct = () => {
    const [formData, setFormData] = useState({
        nombre_producto: '',
        marca: '',
        modelo: '',
        precio: '',
        stock: ''
    })
    const { id } = useParams()

    const componentId =  async () => { 
        const resp = await fetch(`${Constante.RUTA_API}/get_product_id.php?id=${id}`,)
        const data = await resp.json()
        console.log('get data:', data);
        setFormData(data)
    }

    const handleChange = (event) => {
        const { id, value } = event.target
        setFormData((prevState) => ({
          ...prevState,
          [id]: value
        }))
        console.log(formData)
    }

    const submitData = async (event) => {
        event.preventDefault();
        const asset = JSON.stringify(formData);
        const resp = await fetch(`${Constante.RUTA_API}/update_product.php`, {
          method: "POST",
          body: asset,
        });
        const data = await resp.json();
        console.log(data);
        if (data) {
          toast.success("Producto editado con exito", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Error guardando. Intenta de nuevo");
        }
      };

    useEffect(() => {
        componentId()
    }, [])
    
  return (
    <Fragment>
      <Navbar2 />
      <Link style={{ color: "black" }} to="/Index">
        <img
          src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
          alt="volver"
          style={{ width: "50px", marginLeft: "18px", padding: "3px" }}
        />
        Volver
      </Link>
      <div className="contaier-form">
        <ToastContainer></ToastContainer>
        <form className="row g-3 product-form" onSubmit={submitData}>
          <h2>Editar Producto</h2>
          <div className="col-md-6">
            <label htmlFor="nombre_producto" className="form-label">
              Producto
            </label>
            <input
              value={formData.nombre_producto}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="nombre_producto"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="marca" className="form-label">
              Marca
            </label>
            <input
              value={formData.marca}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="marca"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="modelo" className="form-label">
              Modelo
            </label>
            <input
              value={formData.modelo}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="modelo"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="precio" className="form-label">
              Precio
            </label>
            <input
              value={formData.precio}
              onChange={handleChange}
              type="number"
              className="form-control"
              id="precio"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="stock" className="form-label">
              Stock
            </label>
            <input
              value={formData.stock}
              onChange={handleChange}
              type="number"
              className="form-control"
              id="stock"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default UpdateProduct