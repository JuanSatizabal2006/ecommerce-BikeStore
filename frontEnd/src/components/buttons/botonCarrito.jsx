import React from 'react'

export const BotonCarrito = ({enviarCarrito, estado}) => {

  return (
    <div className='flex items-center border-2 border-red cursor-pointer px-4 py-2 rounded-md text-red' onClick={enviarCarrito}>
      {
        estado ? 
        <>
          <p>Producto añadido </p>
          <i className="fa-regular fa-circle-check"></i>
        </>
        
        : 
        <>
          <p>Añadir al carrito</p>
          <ion-icon name="cart-outline" className="text-xl" ></ion-icon>
        </>
      }
    </div>
  )
}
