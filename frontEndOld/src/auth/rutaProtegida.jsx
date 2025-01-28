import React from "react";
import { Outlet, Navigate, useLocation  } from "react-router-dom";
import { useAuth } from "./authProvider";

export const RutaProtegida = () => {
    
    const { rol, isLogin } = useAuth();

    // Lógica para determinar las rutas accesibles según el rol
    let rutasAccesibles = [];

    switch (rol) {
        case 'notLogin':
            rutasAccesibles = ['/', '/home', '/catalogo', '/login', '/registro', '/termCond', '/about', '/producto/:idProducto', '/producto'];
            break;
        case 'loginUser':
            rutasAccesibles = ['/', '/home', '/catalogo', '/carrito', '/pedido', '/pago', '/perfil', '/contact', '/about', '/producto/:idProducto', '/producto'];
            break;
        case 'loginAdmin':
            rutasAccesibles = ['/admin/formproducto', '/inventario', '/pedidosadmin', '/pedidodetalle', '/dashboard', '/perfilAdmin'];
            break;
        default:
            break;
    }

    const rutaActual = useLocation().pathname;

    // Verificar si esa ruta es accesible para dicho rol
    const esRutaAccesible = rutasAccesibles.includes(rutaActual);

    return (
        esRutaAccesible ? (
            <Outlet />
        ) : (
            isLogin ? (
                rol === 'loginUser' ? (
                    <Navigate to={'/home'} />
                ) : (
                    <Navigate to={'/dashboard'} />
                )
            ) : (
                <Navigate to={'/login'} />
            )
        )
    )
}