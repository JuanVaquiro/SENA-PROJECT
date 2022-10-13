import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { useAuth } from "../context/autoContext";

const IniciarSesion = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { Login, LoginWithGoogle, ResetPassword } = useAuth();
  const navigate = useNavigate();
  const [Error, setError] = useState("");

  const HanldeChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const HandleSumbit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await Login(user.email, user.password);
      navigate("/Index");
    } catch (error) {
      setError(error.message);
    }
  };

  const HanldeGoogleSignin = async() => { 
    try {
      await LoginWithGoogle()
      navigate("/Index");   
    } catch (error) {
      setError(error.message)
    }
  }

  const HandleResetPassword = async () => { 
    if(!user.email) return setError('Por favor Ingresar un correo')
    try {
      await ResetPassword(user.email)
      setError('hemos enviado un correo de recuperacion de contraseña al correo vinculado')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Fragment>
      <div>
      <div className="split left">
        <div className="centered">
          <h2 className="subtitulo-left">Bienvenido</h2>
        </div>
      </div>

      <div className="split right">
        <Link to="/" style={{ margin: "100px" }}>
          {" "}
          Regresar{" "}
        </Link>
        <form onSubmit={HandleSumbit} className="formData">
          <h2>Iniciar Sesion</h2>
          <div className="mb-3">
            <label className="form-label">Ingresar Correo</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              aria-describedby="emailHelp"
              required
              onChange={HanldeChange}
            />
            <div id="emailHelp" className="form-text">
              Nunca compartiremos tu correo electrónico con nadie más.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Contrasena</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Contrasena"
              required
              onChange={HanldeChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Recordar</label>
          </div>
          { Error && <Alert message={Error} /> }
          <button type="submit" className="btn btn-primary">
            Iniciar
          </button>

          <a 
          onClick={HandleResetPassword}
          style={{ margin: "10px" }} 
          href="#!">
          Olvidaste tu contraseña?
          </a>
          
          <div>
            <button className="btn btn-light" onClick={HanldeGoogleSignin} >
              Iniciar con Gmail 
              <img src="https://blenderartists.org/uploads/default/original/4X/c/7/8/c788ce085235238219fca467b045cdc61ed6c7dd.png" alt="google"  width="36" height="28" />
            </button> 
          </div>

        </form>
      </div>
      </div>
    </Fragment>
  );
};

export default IniciarSesion;
