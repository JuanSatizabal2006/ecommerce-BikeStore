import React, { useState, useEffect } from 'react';
import QuantityButton from '../buttons/botonCantidad';
import { usarCarrito } from '../../helper/usarCarrito';
import { BotonEliminar } from '../buttons/botonEliminar';

export const CarritoProducto = ({ producto, precio, codigo, urlImg, cantidadP, stock, objeto, index }) => {

  //TODO: Sobre el CARRITO
  const { aumentarPrecio, eliminarCarrito } = usarCarrito();
  const [tamaño, setTamaño] = useState(window.innerWidth > 540);

  const unaUrlImg = urlImg.split(",");

  //AUMENTAR LA CANTIDAD DEL PRODUCTO UTILIZANDO EL CONTEXTO
  const aumentarCantidad = (data) => {
    console.log(data);
    aumentarPrecio([data, index]);
  }

  const eliminarProducto = () => {
    eliminarCarrito(index)
  }

  useEffect(() => {
    const handleResize = () => {
        setTamaño(window.innerWidth > 540);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <>
      <div className='grid xl:grid-cols-5 flex-col xl:gap-2.5 gap-5 w-full h-full xl:justify-end justify-center bg-white rounded-xl shadow-md relative'>

        <div className='flex items-center justify-center xl:pt-0 pt-4'>
          <img src={unaUrlImg[0]} alt="vrg" className='h-24' />
        </div>

        <div className='flex items-center'>

          <div>
            <p className='xl:text-normal text-xl xl:text-left text-center xl:px-0 px-2'>{producto}</p>
            <p className='text-base xl:text-left text-center'>{codigo}</p>
          </div>

        </div>

        <div className='flex items-center xl:gap-0 gap-1 xl:justify-normal justify-center'>
          <p className='xl:hidden block font-bold text-lg'>Precio:</p>
          <p className='xl:text-left text-center'>${new Intl.NumberFormat().format(precio)}</p>
        </div>

        <div className='flex items-center xl:justify-normal justify-center'>
          <QuantityButton maxCantidad={stock} onChange={aumentarCantidad} valorInicial={objeto.cantidad} />
        </div>

        <div className='flex items-center xl:gap-0 gap-1 xl:justify-normal justify-center xl:pb-0 pb-4'>
          <p className='xl:hidden block font-bold text-lg'>Subtotal:</p>
          <p className='xl:text-left text-center'>${new Intl.NumberFormat().format(cantidadP * parseInt(precio))}</p>
        </div>

        {
          tamaño ?

            <div className='text-red absolute flex items-center justify-center p-1 cursor-pointer rounded-full bg-white text-2xl border-2 border-red -top-2 left-[98%] hover:text-white hover:bg-red transition-colors duration-300ms'
              onClick={eliminarProducto}>
              <ion-icon name="trash-outline"></ion-icon>
            </div>

            :

            <BotonEliminar enviar={eliminarProducto} botonText="Eliminar" />

        }

      </div>
    </>
  );
};



