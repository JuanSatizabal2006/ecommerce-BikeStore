import { BrowserRouter, Route, Router, Routes } from "react-router-dom"; //Modulos que nos permite la navegacion
import React from "react";
//TODO: TODAS LAS VISTAS
import { Home } from "./views/usuario/home.jsx";
import { Catalogo } from "./views/usuario/catalogo.jsx";
import { FormArticulo } from "./views/admin/formArticulo.jsx";
import { InicioSesion } from "./views/usuario/inicioSesion.jsx";
import { AuthProvider } from "./auth/authProvider.jsx";
import { RutaProtegida } from "./auth/rutaProtegida.jsx";
import { Registro } from "./views/usuario/registro.jsx";
import { DetalleProducto } from "./views/usuario/detalleProducto.jsx";
import { Carritopago } from "./views/usuario/carritoCompras.jsx";
import { CartProvider } from "./components/carrito/carritoContext.jsx";
import { About } from "./views/usuario/about.jsx";
import { Contact_us } from "./views/usuario/contacto.jsx";
import { PagoUsuario } from "./views/usuario/pago.jsx";
import { PedidoDet } from "./views/usuario/pedidoDet.jsx";
import { DashBoard } from "./views/admin/dashboard.jsx";
import { InventaAdmin } from "./views/admin/InventaAdmin.jsx";
import { PedAdmin } from "./views/admin/PedAdmin.jsx";
import { VerPedidoAdmin } from "./views/admin/verPedidoAdmin.jsx";
import { Pedidos } from "./views/usuario/pedidos.jsx";
import { Perfil } from "./views/usuario/perfil.jsx";
import { PerfilAdmin } from "./views/admin/perfilAdmin.jsx";
import { PoliticaCompra } from "./views/usuario/politicaCompra.jsx";
import { Easteregg } from "./views/usuario/easteregg.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      {/* Definir que tendré una navegacion */}

      {/* TODO: Aquellas rutas que necesitan el contexto del carritos */}

      <Routes>
        {/* Rutas que necesitan proteccion */}

        <Route path="/carrito" element={<Carritopago></Carritopago>} />
        <Route path="/pago" element={<PagoUsuario />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />

        <Route path="/producto/:idProducto" element={<DetalleProducto />} />

        <Route path="/login" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact_us />} />
        <Route path="/termCond" element={<PoliticaCompra />} />
        <Route path="/pedido" element={<PedidoDet />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/mispedidos" element={<Pedidos />} />

        <Route path="/admin/formproducto" element={<FormArticulo />} />
        <Route path="/inventario" element={<InventaAdmin />} />
        <Route path="/pedidosadmin" element={<PedAdmin />} />
        <Route path="/pedidodetalle" element={<VerPedidoAdmin />} />
        <Route path="/perfilAdmin" element={<PerfilAdmin />} />
        <Route path="/dashboard" element={<DashBoard />} />

        <Route path="/noentresaqui" element={<Easteregg />} />
      </Routes>
    </BrowserRouter>
  );
};
