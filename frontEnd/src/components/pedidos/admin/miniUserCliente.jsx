import React from "react";

export const MiniUserCliente = ({imguser, nombre, telefono, correo, direccion, id}) => {
    return(
        <div className="flex flex-col w-[23.875rem] sm:w-[43.75rem] xl:w-[26.875rem] sm:mr-3 h-[15.625rem] border-solid bg-white shadow rounded-2xl mb-5">
            <div className="flex p-4">
                <div className="rounded-2xl flex gap-4 items-center">

                    <div className="w-24 h-20">
                        <img src={imguser} alt="Easter Egg" className="object-cover w-full h-full" />
                    </div>

                    <p className="text-red text-3xl font-semibold">{nombre}</p>
                </div>
            </div>
            <div className="flex justify-around px-2 sm:px-5">
                <div className="space-y-7">
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold text-lg">Telefono</p>
                            <p className="text-sm">{telefono}</p>
                        </div>
                        
                        <div>
                            <p className="font-semibold text-lg">ID Cliente</p>
                            <p className="text-sm">#{id}</p>
                        </div>
                    </div>                
                </div>
                <div className="space-y-7">
                    <div>
                        <p className="font-semibold text-lg">Correo</p>
                        <p  className="underline text-sm">{correo}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}