import React from 'react'
import { Boton } from '../buttons/boton'
import { useNavigate } from 'react-router-dom'

export const MensajeErrorProducto = ({ error, texto, titulo, ruta, textRuta, full }) => {

  const navegar = useNavigate();

  const irHome = ()=>{
    navegar(`/${ruta}`)
  }

  return (
    <div className="flex flex-grow items-center justify-center px-3"  style={!full ?  { minHeight: "calc(100vh - 80px)" } : { minHeight: "100vh" } }>
        <div className="rounded-lg bg-white p-8 text-center shadow-xl max-w-[600px] flex flex-col gap-3">
            <p className="text-5xl font-bold text-red">{error}</p>
            <p className='text-2xl font-bold text-black'>{titulo}</p>
            <div>
                <p className="mb-4 text-gray-600">{texto}</p>
                <Boton text={textRuta} tipoBoton={"relleno"} enviarAccion={irHome} />
            </div>
            
        </div>
    </div>
  )
}