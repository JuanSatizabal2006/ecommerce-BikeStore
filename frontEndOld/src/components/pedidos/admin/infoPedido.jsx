import React from "react";

export const Infopedido = ({fechapedido, ciudad, estado}) => {
    return(
        <div className="  h-[10.625rem] w-[23.875rem] sm:w-[43.75rem] xl:w-[71.5rem] px-4 border-solid rounded-2xl bg-white shadow flex justify-center  flex-wrap">
            <div className="justify-between w-full ">
                <div className="text-red">
                    <h1 className="text-3xl">Informacion de pedido</h1>
                </div>
    
                <div className="flex w-full  justify-around ">
                    
                        <div className="flex-col space-y-6">
                            <p>Fecha de pedido:</p>
                            <p>{fechapedido}</p>
                        </div>
                        <div className="flex-col space-y-6">
                            <p>Destino:</p>
                            <p>{!ciudad ? 'Sin Ciudad' : ciudad}</p>
                        </div>
                   
                    
                        <div className="hidden sm:block flex-col space-y-6 text-left">
                            <p>Metodo de pago:</p>
                            <p>Contraentrega</p>
                        </div>
                        <div className="flex-col space-y-6 text-left ">
                            <p>Envio:</p>
                            <p>${estado}</p>
                        </div>
                    
                    
                </div>
            </div>  
        </div>
    )
}