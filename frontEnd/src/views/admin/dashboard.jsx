import React, { useState } from "react";
import { NavBar } from "../../components/allNavBar/navBar";
import { Chart } from "../../components/dashboard/chart";
import { Selector } from "../../components/inputs/inputSelect";
import { optionSelectMes } from '../../constants/optionsSelect';
import { AllRecuento } from "../../components/dashboard/seccionVentas/allRecuento";
import { AllVentas } from "../../components/dashboard/seccionVentas/allVentas";
import { CartProvider } from "../../components/carrito/carritoContext";
export const DashBoard = () => {

    const [mesDash, setMesDash] = useState(0);


    const definirMes = (data)=>{
        let opcion = data
        console.log(opcion);
        data ? setMesDash(opcion.value) : undefined;
    }

    console.log(mesDash);

    return(
        <>
            <CartProvider>
                <NavBar />
            </CartProvider>
            <div className="flex flex-col flex-wrap w-screen">
                <header className="flex justify-between p-2">
                    <p className=" font-bold text-3xl shrink-0 ">Dashboard</p>
                    <div className="flex w-96 gap-2 px-6">
                        <Selector enviarSelect={definirMes} opciones={optionSelectMes} />
                    </div>
                    
                </header>   
                <div className="flex flex-wrap justify-evenly">
                    <div className="mt-2 flex justify-center items-center">
                        <Chart mes={mesDash} />
                    </div>

                    <AllRecuento />
                   
                </div>
                
                <AllVentas />
            </div>
           
        </>
    )
}