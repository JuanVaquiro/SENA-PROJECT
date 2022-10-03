import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { useAuth } from "../context/autoContext";

const IniciarSesion = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { Login, LoginWithGoogle } = useAuth();
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

  return (
    <Fragment>
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
        </form>
         <button className="" onClick={HanldeGoogleSignin} >
            Iniciar con Google 
          </button> 
      </div>
    </Fragment>
  );
};

export default IniciarSesion;
