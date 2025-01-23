import React from 'react'
import { Boton } from '../buttons/boton'
import { useNavigate } from "react-router-dom"

export const Modal = ({ruta, text, titulo,  cantBoton = 1, refrescar}) => {

    //TODO: SI LA ACCION ES FALSE, EL BOTON SERÁ PARA NAVEGAR, SI ES TRUE, SERÁ PARA UNA ACCION EN ESPECIFICO
    const navegar = useNavigate();

    const continuar1 = ()=>{
        navegar(ruta);
        //!PUEDE OCASIONAR UN BUG
        location.reload();
    }   

    return (
        <>  
            <div className='w-full h-full bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center fixed top-0 left-0 overflow-hidden z-50'>
                <div className='rounded-lg bg-white p-8 justify-center items-center text-center shadow-xl max-w-[600px] flex flex-col gap-3'>
                    <img src="https://bikestoresena.s3.amazonaws.com/imagenesExtras/iconExito.png" alt="" className='w-20 h-20' />
                    <p className='text-2xl font-bold text-red'>{titulo}</p>
                    <p className='text-base text-black'>{text}</p>
                    {
                        cantBoton == 1 ? 
                        <Boton text={"CONTINUAR"} enviarAccion={ continuar1 } tipoBoton={'relleno'} />
                        :
                        <div className='flex justify-evenly'>

                            <Boton text={"Volver"} enviarAccion={ refrescar } tipoBoton={'regular'} />
                            <Boton text={"Continuar"} enviarAccion={ continuar1 } tipoBoton={'relleno'} />
                            
                        </div>
                        
                    }
                    
                </div>
            </div>
        </>
    )
}
