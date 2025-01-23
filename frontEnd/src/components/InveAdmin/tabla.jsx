import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const Tabla = ({objeto}) => {

    const { search } = useLocation();
    const navegar = useNavigate();

    const asginarId = (data) =>{
        console.log(data);
        const params = new URLSearchParams(search);
        params.set("idArticulo", data);

        navegar(`/inventario?idArticulo=${data}`)
    }
    
  return (
    <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full">
            <thead className="border-b-2 border-t-2 border-red relative">
                <tr className="sticky top-0 right-0 ">
                    <th className="w-40 p-3 text-sm font-semibold tracking-wide text-left text-red">ID Producto</th>
                    <th className="w-5 p-3 text-sm font-semibold tracking-wide text-left text-red">Referencia</th>
                    <th className="w-44 p-3 text-sm font-semibold tracking-wide text-left text-red">Nombre producto</th>
                    <th className="w-40 p-3 text-sm font-semibold tracking-wide text-left text-red">Cantidad</th>
                    <th className="w-36 p-3 text-sm font-semibold tracking-wide text-left text-red">Precio Unitario</th>
                    <th className="w-36 p-3 text-sm font-semibold tracking-wide text-left text-red">Categoria</th>
                    <th className="w-90 p-3 text-sm font-semibold tracking-wide text-left text-red"></th>
                </tr>
            </thead>
            <tbody>
                {
                    objeto.map((item, index)=>(

                        <tr key={index}>
                            <td className="p-3 text-sm whitespace-nowrap font-semibold text-black">{item.id_articulo}</td>
                            <td className="p-3 text-sm whitespace-nowrap">{item.referencia}</td>
                            <td className="p-3 text-sm whitespace-nowrap font-bold cursor-pointer" onClick={()=> asginarId(item.id_articulo)}>{item.nombre}</td>
                            <td className={`p-3 text-sm text-gray whitespace-nowrap ${item.stock <= 0 ? 'text-red font-bold' : ''}`}>
                                <span className="p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50">{item.stock <= 0 ? '!!!' : item.stock}</span>
                            </td>
                            <td className="p-3 text-sm whitespace-nowrap">${new Intl.NumberFormat().format(item.precio_total)}</td>
                            <td className="p-3 text-sm whitespace-nowrap">{item.descripcion}</td>
                            <td className="p-3 flex items-center">
                                <input type="checkbox" className="px-2 py-2 appearance-none border-2 border-red rounded cursor-pointer p-1 focus:border- checked:border-grey checked:bg-red" />
                            </td>
                        </tr>

                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}
