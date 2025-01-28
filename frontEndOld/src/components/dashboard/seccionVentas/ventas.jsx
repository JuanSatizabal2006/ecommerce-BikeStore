import React from "react";

export const Ventas = ({titulo, objeto}) => {
    return(
        <div className="w-[27.4rem] sm:w-[22.3rem] 2xl:w-[36rem] mb-4 sm:mb-0 h-72 border-solid bg-white shadow-lg rounded-2xl content-center">
            <header className="px-5"><h1 className="font-extrabold">{titulo}</h1></header>
            <div className="grid grid-cols-2 px-4">
                <p className="text-left">Nombre</p>
                <p className="text-right">Vendidos</p>
                {
                    objeto.map((item, index)=>(
                        <div key={index} className="col-span-2 grid grid-cols-2">
                            <p className="font-semibold text-left">{item.nombre}</p>
                            <p className="text-right">{item.cantidad} Unds</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}