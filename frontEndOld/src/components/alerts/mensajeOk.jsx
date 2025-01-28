import React from 'react'
import { Boton } from '../buttons/boton'
import { Link, useNavigate } from 'react-router-dom'

export const MensajeOK = ({ texto, titulo, idRuta, textRuta }) => {

  return (
    <div className="flex flex-grow items-center justify-center px-3" style={{ minHeight: "calc(100vh - 80px)" }}>
        <div className="rounded-lg bg-white p-8 text-center shadow-xl max-w-[600px] flex flex-col gap-3">
            <i className="fa-regular fa-circle-check text-4xl text-green"></i>
            <p className="text-5xl font-bold text-green">{titulo}</p>
            <div>
                <p className="mb-4 text-gray-600">{texto}</p>
                <div>
                    <Link to={"/dashboard"}>
                        <Boton text={textRuta} tipoBoton={"relleno"} />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}