import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const RowTablaPedido = ({objeto}) => {

    const navegar = useNavigate();

    const ir = (idVenta, idArticulo)=>{
        console.log(idVenta, 'idVenta');
        console.log(idArticulo, 'idArticulo');

        navegar(`/pedidodetalle?idVenta=${idVenta}&idArticulo=${idArticulo}`);
    }

    return (
        <>
        {
            objeto.map((item, index)=>(

                <tbody className="" key={index}>
                    <tr className="">
                        <td className="p-3 text-sm  whitespace-nowrap">
                            <p className="font-semibold text-black- ">#{item.id_venta}</p>
                        </td>
                        <td className="p-3 text-sm  whitespace-nowrap">
                            {item.articulo}
                            <p className="p-0 text-xs text-gray text-opacity-90 whitespace-nowrap">
                                #{item.referencia}
                            </p>
                        </td>
                        <td className="p-3 text-sm text-gray whitespace-nowrap">
                            <span
                                className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{item.cantidad}</span>
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.usuario}</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">${new Intl.NumberFormat().format(parseInt(item.precio_unit))}</td>
                        <td className="p-3">
                            <button className="px-8 py-2 tracking-wide text-white text-sm font-bold transition-colors duration-200 transform border-none bg-red rounded-lg hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red" onClick={()=> ir(item.id_venta, item.id_articulo)}>
                                Ver más
                            </button>
                        </td>
                    </tr>
                </tbody>

            ))
        }
        </>
    )
}
