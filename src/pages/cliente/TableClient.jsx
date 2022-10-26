import { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import Swal from 'sweetalert2'
import Constante from '../../constan'
import Navbar2 from "../../components/Navbar2"

const TableClient = () => {
  const [client, setClient] = useState([]);
  const navigate = useNavigate();

  const GetClient = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/get_client.php`);
    const data = await resp.json();
    setClient(data);
  };

  const DeleteClient = async (nombre, id) => {
    console.log(nombre, id);
    const alertMessage = await Swal.fire({
      title: "Confirmación",
      text: `¿Estás seguro que deseas eliminar el registro: "${nombre}"?`,
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
      `${Constante.RUTA_API}/delete_client.php?id=${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await resp.json();
    if (data) {
      toast.success("Cliente eliminado ", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      GetClient()
    } else {
      toast.error("Error eliminando. Intenta de nuevo");
    }
  };

  useEffect(() => {
    GetClient();
  }, []);

  return (
    <Fragment>
      <ToastContainer></ToastContainer>
      <Navbar2 />
      <h2 className="sub-title">TABLA CLIENTE</h2>
      <div>
        <Link
          style={{ float: "right", margin: "8px 55px" }}
          to="/IngresarCliente"
        >
          <button className="btn btn-success">Nuevo Cliente</button>
        </Link>
      </div>
      <div style={{ whith: "90%" }}>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>NOMBRE</th>
              <th>APELLIDO</th>
              <th>DOCUMENTO</th>
              <th>DIRECCION</th>
              <th>TELEFONO</th>
              <th>EMAIL</th>
              <th>MODIFICAR</th>
            </tr>
          </thead>
          <tbody className="cursor-pointer">
            {client.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.nombre}</td>
                <td>{data.apellido}</td>
                <td>{data.documento}</td>
                <td>{data.direccion}</td>
                <td>{data.telefono}</td>
                <td>{data.email}</td>
                <td className="edit">
                  <button
                    onClick={() => navigate(`/IditarCliente/${data.id}`)}
                    className="btn btn-primary">
                    Editar
                  </button>
                  <button
                    onClick={() => DeleteClient(data.nombre, data.id)}
                    className="btn btn-danger">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default TableClient