import React, { useState } from "react";
import { NavBar } from "../../components/allNavBar/navBar";
import { Tablain } from "../../components/InveAdmin/tablasInventario";
import { InveInfo } from "../../components/InveAdmin/infoUP";
import { CartProvider } from "../../components/carrito/carritoContext";

export const InventaAdmin = () => {

  return (
    <>
    <CartProvider>
      
      <NavBar />

    </CartProvider>
      
        <div className=' w-screen px-10 pb-10 flex-col gap-10 flex justify-center min-h-screen bg-white2'>
          <div className='flex flex-col w-full pb-5 border-b-red border-b-2 gap-4'>
            <p className='text-black text-4xl px-7 pt-7 font-bold'>Inventario</p>
            <div className=' flex flex-col  w-full pb-5 border-b-red border-b-2'></div>
             <InveInfo />
          </div>

            <Tablain />

        </div >
      


    </>
  );
};