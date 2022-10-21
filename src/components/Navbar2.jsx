import { Link } from "react-router-dom";
import { useAuth } from '../context/autoContext'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
  const { User, Logout } = useAuth()
  const navigate = useNavigate()

  const HanldeLogout = async () => {
    try {
      await Logout()
      navigate('/')
    } catch (error) {
      console.log(error) 
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/Index">
          Producto
        </Link>
        <Link className="navbar-brand" to="/Cliente">
          Cliente
        </Link>
         <Link className="navbar-brand" to="/Factura">
          Factura
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <p> {User.displayName || User.email}</p>
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={HanldeLogout}>
                Cerrar Sesion
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2