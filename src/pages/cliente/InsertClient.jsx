import { Fragment, useState } from 'react'
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import Constante from '../../constan'
import Navbar2 from "../../components/Navbar2"

const InsertClient = () => {
    const [formData, setFormData] = useState({
      nombre: "",
      apellido: "",
      documento: "",
      direccion: "",
      telefono: "",
      email: "",
    });

    const handleChange = (event) => {
      const { id, value } = event.target;
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    };

    const submitData = async (event) => {
      event.preventDefault();
      const asset = JSON.stringify(formData);
      const resp = await fetch(`${Constante.RUTA_API}/insert_client.php`, {
        method: "POST",
        body: asset,
      });
      const data = await resp.json();
      console.log(data);
      if (data) {
        toast.success("Cliente guardado con exito", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFormData({
          nombre: "",
          apellido: "",
          documento: "",
          direccion: "",
          telefono: "",
          email: "",
        });
      } else {
        toast.error("Error guardando. Intenta de nuevo");
      }
    };

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
        <h2>Agregar Cliente</h2>
        <div className="col-md-6">
          <label htmlFor="nombre" className="form-label">
            Nombres
          </label>
          <input
            value={formData.nombre}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="nombre"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="apellido" className="form-label">
            apellidos
          </label>
          <input
            value={formData.apellido}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="apellido"
            required
          />
        </div>
        <div className="col-md-6">
        <label htmlFor="documento" className="form-label">
          documento
        </label>
        <input
          value={formData.documento}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="documento"
          required
        />
      </div>
        <div className="col-md-6">
          <label htmlFor="direccion" className="form-label">
            direccion
          </label>
          <input
            value={formData.direccion}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="direccion"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="telefono" className="form-label">
            telefono
          </label>
          <input
            value={formData.telefono}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="telefono"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            required
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
  )
}

export default InsertClient