import React, { useEffect, useState } from "react";
import { Boton } from "../buttons/boton";
import { RowTablaPedido } from "./rowTablaPedido";
import { urlApi } from "../../constants/urlApi";
import { RowTablaPedidoResp } from "./rowTablaPedidoResp";

export const Tablapedido = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        const obtenerDatos = async ()=>{
            const response = await fetch(`${urlApi}/pedidosadmin`);

            const data = await response.json();

            setData(data.body);
        }
        obtenerDatos()
    },[])

    return (
        <>
            <div className="w-full px-10 bg-white overflow-auto rounded-lg shadow hidden md:block pt-6">
                
                    <table className="w-full">
                        <thead className=" border-b-2 border-t-2 border-red">
                            <tr>
                                <th className="w-40 p-3 text-sm font-semibold tracking-wide text-left text-red">ID Pedido</th>
                                <th className="w-60 p-3 text-sm font-semibold tracking-wide text-left text-red">Nombre/ID producto</th>
                                <th className="w-40 p-3 text-sm font-semibold tracking-wide text-left text-red">Cantidad</th>
                                <th className="w-35 p-3 text-sm font-semibold tracking-wide text-left text-red">Destinatario</th>
                                <th className="w-50 p-3 text-sm font-semibold tracking-wide text-left text-red">Precio Total</th>
                                <th className="w-40 p-3 text-sm font-semibold tracking-wide text-left text-red"></th>
                            </tr>
                        </thead>
                       <RowTablaPedido objeto={data} />

                    </table>
            </div >

            {/* RESPONSIVE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                <RowTablaPedidoResp objeto={data} />
            </div>
        </>



    )

}
