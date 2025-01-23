import React from "react";

export const Boton = ({ text, enviarAccion, tipoBoton }) => {
    //px-10 py-2 w-auto tracking-wide text-red text-xl font-bold transition-colors duration-200 transform border-solid bg-white rounded-md hover:bg-red hover:text-white hover:border-solid border-2 hover:border-red

    return (
        tipoBoton == 'relleno' ? 
        <button className="px-10 py-2 tracking-wide text-white text-xl font-bold transition-colors duration-200 transform border-solid bg-red rounded-md border-red hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red" onClick={enviarAccion}>
            {text}
        </button> 
        : 
        <button className="px-10 py-2  tracking-wide text-red text-xl font-bold transition-colors duration-200 transform border-solid bg-white rounded-md hover:bg-red hover:text-white hover:border-solid border-2 hover:border-red" onClick={enviarAccion}>
            {text}
        </button>
    )
}