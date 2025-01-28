import React, { createContext, useState } from 'react'
//OBTENCION DEL CARRITO EN EL LOCALESTORAGE
const cartInitialState = JSON.parse(window.localStorage.getItem('carrito')) || []

//TODO: Contexto del carrito
export const carritoContexto = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(cartInitialState);

    const obtenerCarritoLocaleStorage = (data) => {
        localStorage.setItem("carrito" , JSON.stringify(data))
    }
    
    const añadirCarrito = (producto)=>{
        console.log(producto);
        const productoIndex = carrito.findIndex(item => item.id_articulo == producto.id_articulo );
        
        //SI EL USUARIO QUIERE AÑADIR UN PRODUCTO QUE YA AÑADIÓ CORRECTAMENTE
        if (productoIndex >= 0) {
            const actualizarCarrito = [...carrito];
            console.log(actualizarCarrito);
            actualizarCarrito[productoIndex].cantidad +=1 ;
            setCarrito(actualizarCarrito);
            return
        }

        //TODO: sobre prevState: es el valor anterior del estado antes de que se realice la actualización del estado.
        setCarrito(prevState => ([
            ...prevState,
            {
                ...producto,
                cantidad: 1
            }
        ]));

    }

    const aumentarPrecio = ( dato ) => {
        //dato[0] => LA CANTIDAD A AUMENTAR
        //dato[1] => INDICE DEL PRODUCTO
        const actualizarCarrito = [...carrito];
        actualizarCarrito[dato[1]].cantidad = dato[0] ;
        setCarrito(actualizarCarrito);
    }

    obtenerCarritoLocaleStorage(carrito);
 
    const quitarProductoBoton = (producto) =>{
        setCarrito(prevState => prevState.filter(item => item.id_articulo != producto.id_articulo ))
    }

    const eliminarCarrito = (data) => {
        console.log(data);
        const actualizarCarrito = [...carrito];
        actualizarCarrito.splice(data, 1);
        setCarrito(actualizarCarrito);
    }
    
  return (
    <carritoContexto.Provider value={{
        carrito,
        añadirCarrito,
        eliminarCarrito,
        quitarProductoBoton,
        aumentarPrecio
    }}>
        {children}
    </carritoContexto.Provider>
  )
}