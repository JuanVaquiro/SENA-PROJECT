import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/autoContext";

const Registrace = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [Error, setError] = useState('')

  const { Signup } = useAuth();
  const navigate = useNavigate()

  const HanldeChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const HandleSumbit = async (event) => {
    event.preventDefault();
    setError('')
    try {
      await Signup(user.email, user.password);
      navigate('/')
    } catch (error) {
      if (error.code === 'auth/internal-error') {
        setError('Error! Correo invalido')
      } else {
        setError('Error! la contrasena debe ser mayor de 6 caracteres')
      }
    };
  }

  return (
    <div className="container">
    <Link to="/">Regresar</Link>
    <h2>Registrate</h2>
      <form onSubmit={HandleSumbit} aria-label="form">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            required
            onChange={HanldeChange}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Contrasena</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="**********"
            required
            onChange={HanldeChange}
          />
        </div>
        { Error && <p>{Error}</p> }
        <button type="submit" className="btn btn-primary">
          Registrase
        </button>
      </form>
    </div>
  );
};

export default Registrace