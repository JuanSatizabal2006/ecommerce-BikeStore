import React from "react";

export const InfoProducto = ({img, nombreproducto, referencia, idpedido, cantidad, preciototal}) =>{

    let imagen = '';

    if (img) {
        imagen = img.split(',').shift();
    }

    return(
        <div className="flex items-center content-center justify-evenly w-[23.875rem] px-4 sm:w-[43.75rem] sm:h-[15.625rem] h-auto border-solid rounded-2xl bg-white shadow">
            
            <div className="w-48 h-[10.563rem] pr-5">
                <img src={imagen} alt="Easter egg" className="w-full h-full object-contain"/>
            </div>
            <div>
                <div className="pb-3">
                    <p className="text-2xl text-red font-semibold">{nombreproducto}</p>
                    <p className="text-black text-sm italic">#{referencia}</p>
                </div>
                <div className="flex justify-between">
                    <div className="space-y-3 text-red text-lg">
                        <p>ID Pedido:</p>
                        <p>Cantidad:</p>
                        <p>Precio total:</p>
                    </div>
                    <div className="space-y-3 text-lg">
                        <p>#{idpedido}</p>
                        <p>{cantidad}</p>
                        <p>${new Intl.NumberFormat().format(preciototal)}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}