import React from 'react'

export const RowTablaPedidoResp = ({objeto}) => {
  return (
    <>
    {
        objeto.map((item, index)=>(

            <div className="bg-white space-y-3 p-4 rounded-lg shadow" key={index} >
                <div className="flex items-center space-x-6 text-1sm">
                    <div>
                        <div className=" text-black font-bold text-xl">#{item.id_venta}</div>
                    </div>
                    <div className="text-gray-500">{item.articulo}</div>
                    <div>
                        <span
                            className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">#{item.referencia}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-6 text-1sm">
                    <div className="font-semibold text-red">Destinatario</div>
                    <div className="text-gray-500">{item.usuario}</div>
                </div>
                <div className="flex items-center space-x-6 text-1sm">
                    <div className="font-semibold text-red">Cantidad</div>
                    <div className="text-gray-500">{item.cantidad}</div>
                </div>
                <div className="flex items-center space-x-6 text-1sm">
                    <div className="font-semibold text-red">precio Total</div>
                    <div className="text-gray-500">${new Intl.NumberFormat().format(parseInt(item.precio_unit))}</div>
                </div>
                <div className="flex items-center space-x-6 text-1sm">
                    <button className="px-8 py-2 tracking-wide text-white text-sm font-bold transition-colors duration-200 transform border-solid bg-red rounded-3xl hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red">
                        detalles
                    </button>
                </div>
            </div>

        ))
    }
    </>
  )
}
