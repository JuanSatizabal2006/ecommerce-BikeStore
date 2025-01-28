import React, { useEffect, useState } from 'react'
import { Boton } from '../buttons/boton'
import { usarCarrito } from '../../helper/usarCarrito'
import { urlApi } from '../../constants/urlApi';
import { Modal } from '../alerts/modal';
import { confirmarCompra } from '../../constants/mensajesUser';
import { useNavigate } from 'react-router-dom';

export const FooterCarrito = ({envio}) => {

    const navegar = useNavigate();
    
    const { carrito } = usarCarrito();
    const [subTotal, setSubTotal] = useState(0);

    const [infoUsuario, setInfoUsuario] = useState({});
    const idUsuario = JSON.parse(localStorage.getItem("infoUser"));
    
    //TODO: Aumentar el precio subtotal:
    useEffect(()=>{

        const calcularSubTotal = carrito.reduce((acumulador, producto)=> {
            return acumulador + (parseInt(producto.precio_total) * producto.cantidad )
        }, 0);
    
        setSubTotal(calcularSubTotal);

    }, [carrito]);
    
    //TODO: Obtener informacion del usuario

    useEffect(()=>{
        const obtenerInfoUser = async ()=>{
            const response = await fetch(`${urlApi}/obtenerusuario/${idUsuario.id_usuario}`);
            const result = await response.json();
            const data = result.body.oneUsuario;
            console.log(data, 'data');

            setInfoUsuario(data);
        }
        obtenerInfoUser();
    },[]);

    const irPago = () => {
        
        if (envio.precio) {
            navegar("/pago")
        }
        
    }

  return (
    <footer className='pt-3 pb-5 flex xl:flex-row flex-col xl:justify-between justify-center h-full w-full'>
        
        <div className='flex flex-col xl:justify-normal justify-center gap-3'>
            {/* FETCH */}
            <div className='flex xl:justify-normal justify-center items-center gap-2'>
                <i className="fa-solid fa-location-dot text-red text-2xl"></i>
               <p className='text-left text-black text-lg font-semibold'>Direccion de Entrega</p> 
            </div>
            
            <p className='xl:text-left text-center text-black text-base font-regular'>{infoUsuario.nombre} | {infoUsuario.telefono}</p>
            <p className='xl:text-left text-center text-black text-base font-regular'>{infoUsuario.direccion}</p>
            <p className='xl:text-left text-center text-black text-base font-regular'>{infoUsuario.ciudad}</p>
        </div>
        
        <div className='flex flex-col xl:justify-end justify-center gap-3'>
            <p className='xl:text-right text-center text-black text-base font-semibold'>Subtotal Productos: ${new Intl.NumberFormat().format(subTotal)}</p>
            <p className='xl:text-right text-center text-black text-base font-semibold'>Costos de envio: ${new Intl.NumberFormat().format(envio.precio)}</p>
            <p className='xl:text-right text-center text-black text-base font-semibold'>Total: ${new Intl.NumberFormat().format(subTotal + envio.precio)}</p>
            <div className='flex xl:justify-end justify-center'>
                <Boton text={"Pagar >"} tipoBoton={"relleno"} enviarAccion={irPago} />
            </div>
        </div>
        
    </footer>
  )
}