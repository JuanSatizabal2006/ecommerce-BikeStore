import React, { useEffect, useState } from 'react'
//import { Talla } from './botonTalla.jsx';
import QuantityButton from '../../buttons/botonCantidad.jsx';
import { Boton } from '../../buttons/boton.jsx';
import { usarCarrito } from '../../../helper/usarCarrito.js';

export const ProductoInfo = ({ producto, precio, descripcion, stock, objProducto, id }) => {


    return (
        <>
            <div className=' flex flex-row h-auto'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='text-4xl font-bold pb-2 text-center md:text-start'>{producto}</p>
                        <p className='text-2xl text-gray font-bold pb-8 text-center md:text-start'>${new Intl.NumberFormat().format(precio)} </p>
                        <p className='font-semibold text-justify md:text-start'>{descripcion}</p>
                    </div>
                    
                    
                    <div className='flex flex-row items-center flex-wrap '>

                       
     
                        <div>
                            <p className='font-semibold'>Cantidad:</p>
                            <QuantityButton maxCantidad={stock} valorInicial={1} />
                        </div>

                    </div>
                    {/*VALIDACION PARA VER SI HAY STOCK O NO*/}
                    {stock >= 1 ? 
                    <p className='font-semibold'>Stock: <span className='text-green'>DISPONIBLE</span></p> 
                    : 
                    <p className='font-semibold'>Stock: <span className='text-red'>NO DISPONIBLE</span></p>
                    }
                    
                    <div className='flex flex-col gap-4'>
                        <Boton text={true ? 'Eliminar del carrito' :"Añadir al carrito" } tipoBoton={'relleno'} />
                        <Boton text="Comprar ahora" tipoBoton={'regular'} />
                    </div>
                </div>
            </div>
        </>
    )
}
