import React, { useEffect, useState } from 'react'
import { Recuento } from './recuento'
import { urlApi } from '../../../constants/urlApi';


export const AllRecuento = () => {

    const [ cantUsuarios, setCantUsuarios ] = useState('');
    const [ cantVentas, setCantVentas ] = useState('');
    const [ cantStockSi, setCantStockSi ] = useState('');
    const [ cantStockNo, setCantStockNo ] = useState('');

    useEffect(()=>{
        const obtenerDatos = async ()=>{

            //Obtencion de la cantidad de usuarios
            const responseUsuario = await fetch(`${urlApi}/cantusuarios`); 
            
            const dataUsuario = await responseUsuario.json();

            //Obtencion de la cantidad de ventas
            const responseVentas = await fetch(`${urlApi}/cantventas`);

            const dataVentas = await responseVentas.json();

            //Obtencion de la cantidad de productos disponibles
            const responseStockSi = await fetch(`${urlApi}/stockdisponible`);

            const dataStockSi = await responseStockSi.json();

            //Obtencion de la cantidad de productos no disponible
            const responseStockNo = await fetch(`${urlApi}/stocknodisponible`);

            const dataStockNo = await responseStockNo.json();

            //Asignacion de datos:
            setCantUsuarios(dataUsuario.body);
            setCantVentas(dataVentas.body.sum);
            setCantStockSi(dataStockSi.body.sum);
            setCantStockNo(dataStockNo.body.sum);

        }
        obtenerDatos()
    }, [])
    /*
    console.log(cantUsuarios);
    console.log(cantVentas);
    console.log(cantStockSi);
    console.log(cantStockNo);*/

    return (
        <>
            <div className="grid grid-cols-2 gap-4  mb-6 xl:mb-0">
                <Recuento icon="fa-user-group" numero={cantUsuarios} objeto="Usuarios" estado="Activos" />
                <Recuento icon="fa-truck-ramp-box" numero={cantVentas} objeto="Unidades" estado ={"Vendidas"}/>
                <Recuento icon="fa-box-open" numero={cantStockSi} objeto="Unidades" estado ={"Disponibles"}/>
                <Recuento icon="fa-x" numero={cantStockNo.substring(1)} objeto="Unidades" estado ={"No disponibles"}/>
            </div>
        </>
    )
}
