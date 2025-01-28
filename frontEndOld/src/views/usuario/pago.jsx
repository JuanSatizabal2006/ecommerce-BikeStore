import React, { useEffect, useState } from 'react'
import { Cargando } from '../../components/alerts/cargando'
import { funcionPagar } from '../../helper/funcionPagar'
////import { MensajeOK } from '../../components/alerts/mensajeOk';
import { confirmarCompra } from '../../constants/mensajesUser';
import { useNavigate } from 'react-router-dom';
import { Boton } from '../../components/buttons/boton';
import { NavBar } from '../../components/allNavBar/navBar';
import { CartProvider } from '../../components/carrito/carritoContext';
import { MensajeErrorProducto } from '../../components/alerts/mensajeErrorProducto';

export const PagoUsuario = () => {
  
  const idUsuario = JSON.parse(localStorage.getItem("infoUser"));
  const navegar = useNavigate();
  const [mostrarCargando, setMostrarCargando] = useState(false);
  const [errorPago, setErrorPago] = useState(false);

  const volver = ()=>{
    navegar("/carrito");
  }

  const realizarPago = async () => {
    setMostrarCargando(true);
    try {
      const data = await funcionPagar();
      console.log(data);
      console.log(typeof data);

      if (data === 'NO') {
        setErrorPago(true);
      }

      if (data !== null && data !== undefined) {
        console.log(data.statuscode , ' estado');
        
        console.log(data.body.id_venta, ' body');

        const id = await data.body.id_venta;

        navegar(`/pedido?idPedido=${id}&idUsuario=${idUsuario.id_usuario}`);
      }else{
        console.log('El resultado de funcionPagar no es un objeto válido:', data);
      }

      //setIdVenta(data);
      //setMostrarCargando(false); // Mostrar carga completa
    } catch (error) {
      console.error('Error al realizar el pago:', error);
      // Manejar el error aquí si es necesario
    }
  };
  //error, texto, titulo, ruta, textRuta, full 
  return (
    <>
      {
        mostrarCargando ? 
          <Cargando texto={"Estamos procesando tu pago"} />
        : 
        errorPago ? 
          <MensajeErrorProducto error={'Pago cancelado'} titulo={'Tu compra se ha cancelado'} texto={'¡Lo sentimos!, al parecer ha surgido un problema mientras procesaba tu pago, por favor intenta de nuevo o contactaté con un agente'}  full={true} textRuta={'Ir a mi carrito'} ruta={'carrito'} />  
        :
          <div className='w-full h-screen bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center overflow-hidden'>
              <div className='rounded-lg bg-white p-8 text-center shadow-xl max-w-[600px] flex flex-col gap-3'>
                  <p className='text-2xl font-bold text-red'>¿Estas seguro de realizar esta compra?</p>
                  <p className='text-base text-black'>{confirmarCompra}</p>
                      <div className='flex xl:gap-0 gap-5 justify-evenly'>

                          <Boton text={"Volver"} enviarAccion={ volver } tipoBoton={'regular'} />
                          <Boton text={"Continuar"} enviarAccion={ realizarPago } tipoBoton={'relleno'} />
                          
                      </div>
              </div>
          </div>
        
      }
      
    </>
  )
}
