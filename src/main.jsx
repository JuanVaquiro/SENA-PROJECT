import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App'
import IniciarSesion from './components/IniciarSesion'
import Registrace from './components/Registrace'
import { AutoProvider } from './context/autoContext'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AutoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<IniciarSesion />} />
          <Route path="Registrace" element={<Registrace />} />
        </Routes>
      </BrowserRouter>
    </AutoProvider>
  </React.StrictMode>
);
