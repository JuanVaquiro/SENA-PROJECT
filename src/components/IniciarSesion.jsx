import { Fragment,useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/autoContext";

const IniciarSesion = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  

  return (
    <Fragment>
      <div className="split left">
        <div className="centered">
          <h2 className="subtitulo-left">Bienvenido</h2>
        </div>
      </div>
    
      <div className="split right">
        <Link to='/' style={{ margin: "100px" }}> Regresar </Link>
        <form className="formData">
        <h2>Iniciar Sesion</h2>
        <div className="mb-3">
            <label className="form-label">Ingresar Correo</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
        </div>
        <div className="mb-3">
            <label className="form-label">Contrasena</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" >Recordar</label>
        </div>
        <button type="submit" className="btn btn-primary">Iniciar</button>
        </form>
      </div>
    </Fragment>
  );
}

export default IniciarSesion