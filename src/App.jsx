import Nabvar from './components/Nabvar'
import cicla from './assets/ciclista.png'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nabvar />
      <main className="mainContener">
        <div className="sub-contener-div_1">
          <div className="contener-sub-div_2">
            <h1 className="mainTitulo">
              Bienvenido a la Plataforma
              <br></br>
              <span className="mainSpan"> CiclaMundo </span>
              Gestiona y Controla<br></br>los procesos
              <span className="mainSpan"> Administrativo</span>
            </h1>
            <div className="imgContener-div_4">
              <img src={cicla} alt="Logo" />
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <Link to="/">Términos de uso</Link>
        <Link to="/">Inicio</Link>
        <Link to="/">Centro de ayuda</Link>
      </footer>
    </div>
  );
}

export default App
