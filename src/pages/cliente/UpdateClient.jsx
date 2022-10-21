import { Fragment, useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar2 from '../../components/Navbar2';
import Constante from '../../constan'

const UpdateClient = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
        email: "",
    })
    const { id } = useParams()

    const componentId =  async () => { 
        const resp = await fetch(`${Constante.RUTA_API}/get_client_id.php?id=${id}`,)
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
        const resp = await fetch(`${Constante.RUTA_API}/update_client.php`, {
          method: "POST",
          body: asset,
        });
        const data = await resp.json();
        console.log(data);
        if (data) {
          toast.success("Cliente editado con exito", {
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
      <Link style={{ color: "black" }} to="/Cliente">
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
          <h2>Editar Cliente</h2>
          <div className="col-md-6">
            <label htmlFor="nombre" className="form-label">
                Nombre
            </label>
            <input
              value={formData.nombre}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="nombre"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="apellido" className="form-label">
                Apellido
            </label>
            <input
              value={formData.apellido}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="apellido"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="direccion" className="form-label">
                Direccion
            </label>
            <input
              value={formData.direccion}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="direccion"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="telefono" className="form-label">
                Telefono
            </label>
            <input
              value={formData.telefono}
              onChange={handleChange}
              type="number"
              className="form-control"
              id="telefono"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              id="email"
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

export default UpdateClient