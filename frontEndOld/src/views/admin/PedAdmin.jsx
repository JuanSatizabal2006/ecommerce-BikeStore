import React from "react";
import { NavBar } from "../../components/allNavBar/navBar";
import { Tablapedido } from "../../components/inventario/tablaPed.jsx";
import { CartProvider } from "../../components/carrito/carritoContext.jsx";


export const PedAdmin = () => {
  return (
    <>
    <CartProvider>
      <NavBar />
    </CartProvider>

      <div className=" flex justify-center min-h-screen bg-white2">
        <div className=' w-screen h-screen px-10 flex justify-start flex-col gap-10'>
          <div className=' flex flex-col h-15 w-full pb-5 border-b-red border-b-2'>
            <p className='text-black text-4xl px-7 pt-7 font-bold'>Pedidos</p>

          </div>
          <Tablapedido />
        </div >
      </div >


    </>
  );
};
