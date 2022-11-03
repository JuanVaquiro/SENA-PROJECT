import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AutoProvider } from './context/autoContext'
import App from './App'
import IniciarSesion from './pages/IniciarSesion'
import Registrace from './pages/Registrace'
import IndexContents from './pages/IndexContents'
import InsertProduct from './pages/product/InsertProduct'
import UpdateProduct from './pages/product/UpdateProduct'
import TableClient from './pages/cliente/TableClient'
import GeneralFactura from './pages/factura/GeneralFactura'
import InsertClient from './pages/cliente/InsertClient'
import UpdateClient from './pages/cliente/UpdateClient'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AutoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<IniciarSesion />} />
          <Route path="Registrace" element={<Registrace />} />
          <Route path="Index" element={<IndexContents />} />
          <Route path="IngresarProducto" element={<InsertProduct />} />
          <Route path="IditarProducto/:id" element={<UpdateProduct />} />
          <Route path="Cliente" element={<TableClient />} />
          <Route path="IngresarCliente" element={<InsertClient />} />
          <Route path="IditarCliente/:id" element={<UpdateClient />} />
          <Route path="Factura" element={<GeneralFactura />} />
        </Routes>
      </BrowserRouter>
    </AutoProvider>
  </React.StrictMode>
);
 