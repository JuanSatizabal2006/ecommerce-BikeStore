import React from 'react'
import { Itempedidos } from '../../components/pedidos/usuario/Itempedidos'
import { NavBar } from '../../components/allNavBar/navBar'
import { CartProvider } from '../../components/carrito/carritoContext'

export const Pedidos = () => {
  return (
    <>
    <CartProvider>
        <NavBar />
    </CartProvider>
        <div className=" flex justify-center min-h-screen pb-7 bg-white2">
            <div className=' w-screen h-screen p-10 flex justify-start flex-col'>
                <div className=' flex flex-col justify-between h-20 w-full border-b-red border-b-2'>
                    <p className='text-red text-xl font-bold'>Mis Pedidos (4)</p>
                    <div className='flex justify-end w-full'>
                        <p className=' text-black text-base font-semibold'>Producto</p>
                        <p className='pl-36 text-black text-base font-semibold'>Valor Total</p>
                        <p className='pl-36 text-black text-base font-semibold'>Fecha de pedido</p>
                        <p className='pl-36 pr-20 text-black text-base font-semibold'>Envio</p>
                    </div>
                </div>
                <div>
                    <Itempedidos producto="Camisa Mang MTB" codigo="#698573CMTB" vr_total="$999.999.999" fecha_pedido="27/02/2024" Estado="En curso" />
                    <Itempedidos producto="Camisa Mang MTB" codigo="#698573CMTB" vr_total="$999.999.999" fecha_pedido="01/02/2024" Estado="Entregado" />
                    <Itempedidos producto="Camisa Mang MTB" codigo="#698573CMTB" vr_total="$999.999.999" fecha_pedido="07/03/2024" Estado="En curso" />
                    <Itempedidos producto="Camisa Mang MTB" codigo="#698573CMTB" vr_total="$999.999.999" fecha_pedido="29/02/2024" Estado="Cancelado" />
                </div>
            </div>
        </div>
    </>
  )
}
