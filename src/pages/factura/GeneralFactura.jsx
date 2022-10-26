import { useEffect, useState } from 'react'
import Navbar2 from "../../components/Navbar2"
import Constante from '../../constan';

const GeneralFactura = () => {
  const [client, setClient] = useState([])
  const [product, setProduct] = useState([])

  const GetClient = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/get_client.php`);
    const data = await resp.json();
    console.log(data);
    setClient(data);
  };

  const GetProduct = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/get_product.php`);
    const data = await resp.json();
    console.log(data);
    setProduct(data)
  } 

  useEffect(() => {
    GetClient();
    GetProduct();
  }, [])

  return (
    <div>
      <Navbar2 />
      <h2 className="sub-title">GENERAR FACTURA</h2>
      <form className="generalFactur">
        <select className="form-select" aria-label="Default select example">
         <option selected>Selecione Cliente</option>
        {client.map((data) => (
          <option key={data.id} value={data.nombre}>{data.nombre}{' '}{data.apellido}</option>
        ))}
        </select>
        <select className="form-select" aria-label="Default select example">
          <option selected>Selecione Producto</option>
          {product.map((data) => (
            <option key={data.id} value={data.nombre_producto}>{data.nombre_producto}</option>
          ))}
        </select>
        <input
          placeholder="cantidad"
          type="number"
          className="form-control"
          id="cantidad"
          required
        />
        <button className="btn btn-success">Generar Factura</button>
      </form>
    </div>
  );
}

export default GeneralFactura