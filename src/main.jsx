import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AutoProvider } from './context/autoContext'
import App from './App'
import IniciarSesion from './pages/IniciarSesion'
import Registrace from './pages/Registrace'
import IndexContents from './pages/IndexContents'
import InsertProduct from './pages/InsertProduct'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AutoProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/" element={<App />} />
          <Route path="login" element={<IniciarSesion />} />
          <Route path="Registrace" element={<Registrace />} />
        </Routes>
        <Routes>
          <Route path="Index" element={<IndexContents />} />
          <Route path="IngresarProducto" element={<InsertProduct />} />
        </Routes>
      </BrowserRouter>
    </AutoProvider>
  </React.StrictMode>
);
 