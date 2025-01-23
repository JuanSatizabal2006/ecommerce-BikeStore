import React, { useEffect, useState } from "react";
import { Boton } from "../buttons/boton";
import { Tabla } from "./tabla";
import { urlApi } from "../../constants/urlApi";

export const Tablain = () => {

    const [datos, setDatos] = useState([]);
    
    useEffect(()=>{
        const obtenerDatos = async () => {
            const response = await fetch(`${urlApi}/allproducto`);

            const dataResponse = await response.json();

            setDatos(dataResponse.body);
        }
        obtenerDatos();
    },[]);

    return (
        <>
            <div className="w-full max-h-96 px-10 pt-2 py-5 bg-white overflow-auto rounded-lg shadow hidden md:block  ">
                <div className="flex items-center justify-between ">
                    <h1 className="font-bold text-2xl pb-5">Informacion</h1>
                </div>

                <Tabla objeto={datos} />
            </div >
        </>
    )

}