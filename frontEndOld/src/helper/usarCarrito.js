import { useContext } from "react"
import { carritoContexto } from "../components/carrito/carritoContext"


export const usarCarrito = ()=>{
    
    const contexto = useContext(carritoContexto);
    
    if (!contexto) {
        throw new Error('Su puta madre')
    }

    return contexto
}