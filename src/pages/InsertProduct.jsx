import { useEffect, useState } from 'react'
import Constante from '../constan'

const InsertProduct = () => {
  const [formData, setFormData] = useState({
    nombreProdcuto: '',
    marca: '',
    modelo: '',
    precio: '',
    stock: ''
  })

  const handleChange = (event) => {
    const { id, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }))
    console.log(formData);
  }

  const submitData = async (event) => {
    event.preventDefault();
    const asset = JSON.stringify(formData)
    const resp = await fetch(`${Constante.RUTA_API}/insert_product.php`,{
      method: 'POST',
      body: asset
    })
    const data = await resp.json();
    console.log(data);
    if (data) {
      toast('Producto guardado ✔', {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
  } else {
      toast.error("Error guardando. Intenta de nuevo");
  }
  }
  
  return (
    <div className='contaier-form'>
      <form className="row g-3 product-form" onSubmit={submitData}>
        <h2>Agregar Producto</h2>
        <div className="col-md-6">
          <label htmlFor="nombreProdcuto" className="form-label">Producto</label>
          <input onChange={handleChange}  type="text" className="form-control" id="nombreProdcuto" />
        </div>
        <div className="col-md-6">
          <label htmlFor="marca" className="form-label">Marca</label>
          <input onChange={handleChange} type="text" className="form-control" id="marca" />
        </div>
          <div className="col-md-6">
          <label htmlFor="modelo" className="form-label">Modelo</label>
          <input onChange={handleChange} type="text" className="form-control" id="modelo" />
        </div>
        <div className="col-md-6">
          <label htmlFor="precio" className="form-label">Precio</label>
          <input onChange={handleChange} type='number' className="form-control" id="precio" />
        </div>
        <div className="col-md-6">
          <label htmlFor="stock" className="form-label">Stock</label>
          <input onChange={handleChange} type="number" className="form-control" id="stock" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  )
}

export default InsertProduct