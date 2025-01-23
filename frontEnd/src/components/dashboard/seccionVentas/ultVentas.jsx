import React from "react";

export const UltVentas = ({objeto}) => {
    return(
        
        <div className="w-[27.4rem] sm:w-[33rem] xl:w-[29rem] 2xl:w-[34rem] h-72 border-solid shadow-lg sm:mt-5 xl:mt-0 rounded-2xl bg-white content-center">
            <header className="px-5"><h1 className="font-extrabold">Ultimas Ventas</h1></header>
            <div className="divide-y divide-dashed">
                {
                    objeto.map((item, index)=>(

                        <div className="flex justify-space px-5 pt-3" key={index}>
                            <div className="w-16 h-16">
                                <img src={item.url_img.split(",")[0]} alt="EasterEgg" />
                            </div>
                            <div className="px-5">
                                <p className="underline"><b>{item.nombre}</b></p>
                                <p>Id de la orden: {item.id_venta}</p>
                            </div>
                        </div>
                        
                    ))
                }

            </div>
        </div>
       
    )
}