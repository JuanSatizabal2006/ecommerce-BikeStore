import React, { useState, useEffect } from 'react'
import { NavBar } from "../../components/allNavBar/navBar.jsx";
import { CarritoProducto } from '../../components/carrito/carritoProducto.jsx';
import { FooterCarrito } from '../../components/carrito/footerCarrito.jsx';
import { usarCarrito } from '../../helper/usarCarrito.js';
import { MensajeErrorProducto } from '../../components/alerts/mensajeErrorProducto.jsx';
import { confirmarCompra, mensajeSinCarrito } from '../../constants/mensajesUser.js'
import { OpcionesEnvio } from '../../components/carrito/opcionesEnvio.jsx';
import { useNavigate } from 'react-router-dom';

export const Carritopago = () => {

    const navegar = useNavigate();

    //TODO: CARRITO FUNCIONAL
    const { carrito } = usarCarrito();
    const [dataEnvio, setDataEnvio] = useState({});
    const carritoProducto = JSON.parse(window.localStorage.getItem('carrito')) || [];
    
    const enviarPagoEnvio = (data) => {
        console.log(data);
        setDataEnvio(data);
        localStorage.setItem("envio", JSON.stringify(data));
    }

    return (
        <>

            <NavBar />
            <main className={`${carritoProducto.length == 0 ? '' : 'p-8'}`}>
                {
                    carritoProducto.length == 0 ?

                        <MensajeErrorProducto error="¡Ups!" titulo={"Tu carrito está vacío"} texto={mensajeSinCarrito} ruta={"catalogo"} textRuta={"Ir al catalogo"} />

                        :

                        <>
                            <p className='xl:text-left text-center text-4xl text-red font-bold mb-6'>Carrito de compras ({carrito.length}) </p>
                            <div className='flex flex-col gap-4'>

                                <div className='xl:grid hidden xl:grid-cols-5 gap-1.5 border-b-4 border-red'>
                                    <p></p>
                                    <p className='text-black text-left text-lg font-semibold'>Producto</p>
                                    <p className='text-black text-left text-lg font-semibold'>Precio</p>
                                    <p className='text-black text-left text-lg font-semibold'>Cantidad</p>
                                    <p className='text-black text-left text-lg font-semibold'>SubTotal</p>
                                </div>

                                <div className="col-span-5 flex flex-col gap-4">
                                    {
                                        carritoProducto.map((item, index) => (
                                            <CarritoProducto producto={item.nombre} codigo={`#${item.referencia}`} precio={item.precio_total} urlImg={item.url_img} cantidadP={item.cantidad} key={item.id_articulo} stock={item.stock} objeto={item} index={index} />
                                        ))
                                    }
                                </div>

                                <div className='w-full h-1 bg-red' ></div>
                                <OpcionesEnvio enviarPagoEnvio={enviarPagoEnvio} />
                                <FooterCarrito envio={dataEnvio}  />
                            </div>
                        </>
                }
            </main>


        </>
    )
}
