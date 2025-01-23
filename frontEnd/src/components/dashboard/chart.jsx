import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
//TODO: Importaciones necesarias de todos los elementos para que funciones
import{ Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler,} from 'chart.js';
import { urlApi } from "../../constants/urlApi";
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler,); //Si, tambien esto


const misoptions = {
    x : {
        ticks: {color: 'red'}
    }
}

export const Chart = ({mes}) => {

    //Declaracion de estados para almacenar la info de los productos
    const [bicicletas, setBicicletas] = useState([]);
    const [accesorios, setAccesorios] = useState([]);
    const [ropa, setRopa] = useState([]);
    let meses = [];

    useEffect(()=>{
        const ventasDashboard = async ()=>{
            //Consulta al backedn
            const response = await fetch(`${urlApi}/dashboard/${mes}`);

            const data = await response.json();
            console.log(data);

            if (data.statuscode != 200) {
                return false
            }

            const datosProductos = await data.body;

            setBicicletas(datosProductos.bicicletas);
            setRopa(datosProductos.ropa);
            setAccesorios(datosProductos.accesorios);
            
        }
        ventasDashboard();
    },[mes])

    //TODO: CONDICIONAL PARA ASIGNAR LA CANTIDAD DE DIAS
    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {

        meses = Array.from({ length: 31 }, (_, i) => i + 1);

    }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){

        meses = Array.from({ length: 30 }, (_, i) => i + 1);

    }else if (mes == 2) {

        meses = Array.from({ length: 28 }, (_, i) => i + 1);

    }else if(mes == 'todos'){

        meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    }

    console.log(bicicletas, 'bicicletas');
    console.log(accesorios, 'accesorios');
    console.log(ropa, 'ropa');

    const midata = {
        labels: meses,
        datasets: [
            {
                label: 'Bicicletas',
                data: bicicletas,
                tension: 0,
                borderColor: 'rgb(183, 28, 28)',
                backgroundColor: 'rgba(183, 28, 28, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgb(183, 28, 28)',
                pointBackgroundColor: 'rgb(183, 28, 28)',
                
            },
            {
                label: 'Ropa',
                data: ropa,
                tension: 0,
                borderColor: 'rgb(10, 73, 123)',
                backgroundColor: 'rgba(10, 73, 123, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(10, 73, 123)',
                pointBackgroundColor: 'rgb(10, 73, 123)',
            },
            {
                label: 'Accesorios',
                data: accesorios,
                tension: 0,
                borderColor: 'rgb(229, 190, 1)',
                backgroundColor: 'rgba(229, 190, 1,0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgb(229, 190, 1)',
                pointBackgroundColor: 'rgb(229, 190, 1)',
            }
    
        ]
    };


    return(
        <div className="flex flex-grow justify-center items-center w-[48rem] h-[27rem] bg-white mb-6 px-3 mx-2 border-solid shadow-lg rounded-2xl flex-wrap">
            {
                !mes ? 
                <div className="flex flex-col gap-6 justify-center items-center"> 
                    <p className="text-red text-2xl">Por favor selecciona una de las opciones para ver la grafica</p>
                    <img src="https://bikestoresena.s3.amazonaws.com/imagenesExtras/imgArrow.png" alt="Imagen ejemplo" />
                </div> : 
                <Line data = {midata} options = {misoptions} style={{ width: '1000px' }}/>
 
            }
            
        </div>
    )
    
};