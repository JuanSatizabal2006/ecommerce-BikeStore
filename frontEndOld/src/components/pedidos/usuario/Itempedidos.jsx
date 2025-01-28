import React from 'react'
import buzoPrueba from "../../../img/buzo_prueba.png";

export const Itempedidos = ({ producto, vr_total, fecha_pedido, codigo, Estado }) => {

  return (
    <>
    <div className='flex w-full bg-white rounded-xl my-5 items-center shadow-md px-2 py-3'>
        <p className='text-2xl font-semibold'>#34</p>

        <div className='flex flex-row items-center'>

            <img src={buzoPrueba} alt="" className='h-24 pl-32' />
            <div className=' pl-48'>
                <p>{producto}</p>
                <p className='text-xs'>{codigo}</p>
            </div>
            <div className='pl-[6.1rem]'>
                <p>{vr_total}</p>
            </div>
            <div className='pl-[9.5rem]'>
                <p>{fecha_pedido}</p>
            </div>
            <div className='pl-[9.6rem]'>
                <p className='text-center'>{Estado}</p>
            </div>

        </div>
            
    </div>
       
    </>
  )

}

