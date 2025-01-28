import React, { useEffect, useState } from 'react'
import { urlApi } from '../../../constants/urlApi';
import { Ventas } from './ventas';
import { UltVentas } from './ultVentas';

export const AllVentas = () => {

    const [masVentas, setMasVentas] = useState([]);
    const [menosVentas, setMenosVentas] = useState([]);
    const [ultimasVentas, setUltimasVentas] = useState([]);

    useEffect(()=>{
        const obtenerDatos = async ()=>{

            //Obtencion de los productos mas vendidos
            const responseMas = await fetch(`${urlApi}/masvendidos`);
            console.log(responseMas, 'AHHHHHHHHHHHHHH');
            const dataMas = await responseMas.json();

            //Obtencion de los productos menos vendidos
            const responseMenos = await fetch(`${urlApi}/menosvendidos`);

            const dataMenos = await responseMenos.json();

            //Obtencion de las ultimas ventas
            const responseUltimas = await fetch(`${urlApi}/ultimosvendidos`);

            const dataUltimas = await responseUltimas.json();

            setMasVentas(dataMas.body);
            setMenosVentas(dataMenos.body);
            setUltimasVentas(dataUltimas.body);
        }
        obtenerDatos();
    },[]);

    console.log(masVentas);
    console.log(menosVentas);
    console.log(ultimasVentas);

  return (
    <>
        <div className=" flex flex-col items-center sm:flex-row sm:justify-evenly flex-wrap ml-2 2xl:justify-evenly">
            <Ventas titulo="Mas Vendidos" objeto={masVentas} />
            <Ventas titulo="Menos Vendidos" objeto={menosVentas} />
            <UltVentas objeto={ultimasVentas} />
        </div>
    </>
  )
}

