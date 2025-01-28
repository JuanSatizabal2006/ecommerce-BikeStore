import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/allNavBar/navBar";
import { MiniUserCliente } from "../../components/pedidos/admin/miniUserCliente"; 
import { InfoProducto } from "../../components/pedidos/admin/infoProducto";
import { Infopedido } from "../../components/pedidos/admin/infoPedido";
import { urlApi } from "../../constants/urlApi";
import { useLocation } from "react-router-dom";
import { obtenerFecha } from "../../helper/obtenerFecha";
import { MensajeErrorProducto } from "../../components/alerts/mensajeErrorProducto";
import { CartProvider } from "../../components/carrito/carritoContext";

export const VerPedidoAdmin = () => {

    const [data, setData] = useState({});
    const [mostrarMensaje, setMostrarError] = useState(false);//Estado para mostrar o no el error
    const [mensajeError, setMensajeError] = useState({});//Estado para manejar los mensajes
    //Obtencion de los datos de la URL
    const { search } = useLocation();

    const params = new URLSearchParams(search);

    const idVenta = params.get('idVenta');
    const idArticulo = params.get('idArticulo');

    useEffect(()=>{

        //Validar que se encuentren todos los parametros
        if (!idVenta || !idArticulo) {
            setMensajeError({

                error: "¡Ups!",
                titulo: "Falta ingresar un dato",
                texto: "Para realizar la búsqueda, es necesario ingresar todos los datos. Por favor, completa escribe correctamente e inténtalo nuevamente."
    
            })
    
            setMostrarError(true);
            return 
        }
        //Validar que no ingresé letras
        if (isNaN(idVenta) || isNaN(idArticulo)) {
            setMensajeError({

                error: "¡Ups!",
                titulo: "No puedes ingresar letras",
                texto: "Para realizar la búsqueda, es necesario que solo ingreses numeros. Por favor, completa escribe correctamente e inténtalo nuevamente."
    
            })

            setMostrarError(true);
            return 
        }

        //Consulta
        const obtenerDatos = async ()=>{
            const response = await fetch(`${urlApi}/pedidosadmin/one/${idVenta}/${idArticulo}`);

            const data = await response.json();
            console.log(data);

            if (data.statuscode === 404) {
                setMensajeError({

                    error: "¡Ups!",
                    titulo: "Pedido no encontrado",
                    texto: "El pedido que estás buscando no se ha encontrado en nuestro sistema. Por favor, verifica que el ID del pedido sea correcto e inténtalo de nuevo."
        
                })
    
                setMostrarError(true);
                return 
            }

            setData(data.body[0]);
        }
        obtenerDatos()
    },[])

    console.log(data);
    
    return(
        <>
        
        {
            mostrarMensaje ? 
            
            <MensajeErrorProducto texto={mensajeError.texto} error={mensajeError.error} titulo={mensajeError.titulo} ruta={"/pedidosadmin"} textRuta={"Volver"} full={true} /> 
            
            :
            <>
            <CartProvider>
                <NavBar />
            </CartProvider>
            <div className="flex flex-col w-full items-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl text-extrabold mx-4 text-center xl:text-left w-full">Pedidos</h1> 
                    <div className="border-solid border border-red w-[27rem] sm:w-[78rem] mx-auto"></div> 
                </div>
                
              
            
                <div className="ml-3 sm:ml-0 flex justify-center content-center sm:justify-center">
                    <div className="flex flex-col w-full items-center sm:items-right">
                        <div className="flex flex-col  xl:flex-row space-y-3 sm:space-y-0  mb-5 mt-5  justify-center">

                            <MiniUserCliente imguser = {data.img_user}  nombre = {data.nombreUsuario} telefono={data.telefono} direccion={data.direccion} id={data.id_usuario} correo={data.correo}/>
                            
                            <InfoProducto img = {data.url_img} nombreproducto={data.articulo} referencia={data.referencia} idpedido={data.id_venta} cantidad={data.cantidad} preciototal={data.total}/>

                        </div>
                        <div className="flex justify-center sm:ml-0 xl:justify-center mb-5 mt-3 sm:mt-0 ">
                            <Infopedido fechapedido={obtenerFecha(data.fecha)} ciudad={data.direccion} estado={data.envio} />
                        </div>
                    </div>
                    
                </div>
                
            </div>
            </>
            }
        </>
    )
}