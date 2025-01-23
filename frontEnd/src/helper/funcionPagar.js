//const { usarCarrito } = require("./usarCarrito");
import { urlApi } from "../constants/urlApi";
import { obtenerFecha } from "./obtenerFecha";

export const funcionPagar = async () =>{



    //TODO: Obtencion de datos:
    const carrito = JSON.parse(localStorage.getItem("carrito")); //TODOS: LOS PRODUCTOS EN EL CARRITO
    const envio = JSON.parse(localStorage.getItem("envio")); //TODOS: LA INFORMACION DEL ENVIO
    const infoUser = JSON.parse(localStorage.getItem("infoUser")); //TODO: LA INFORMACION DEL USUARIO
    const fecha = obtenerFecha();

    console.log('carrito:' ,carrito);
    console.log('envio: ', envio);
    console.log('user: ', infoUser);

    if (!carrito || carrito.length === 0 || !envio || !infoUser) {

        console.log('¡ALGO PASÓ EN COMPRAS!');

        return 'NO'
    }
    
    //Mapeo de datos para enviarte especificamente unos datos del carrito y que el backend no reciba un objeto muy grande
    const carritoEnviar = carrito.map((producto)=>{
        return { cantidad : producto.cantidad, id_articulo: producto.id_articulo, precio_total: producto.precio_total }
    })

    //Asignacion de datos en especifico, con el mismo objetivo, enviar los datos necesarios al backend
    const envioEnviar = envio.precio;
    const userEnviar = infoUser.id_usuario;
    console.log(userEnviar);
    //Agrupacion de todos los datos en un objeto, ya que para enviarlo al backend, por nuestros metodos solo podemos enviar un objeto
    const bodyData = {
        carrito: carritoEnviar,
        envio: envioEnviar,
        user: userEnviar,
        fecha: fecha
    }

    console.log(carritoEnviar);
    console.log(envioEnviar);
    console.log(userEnviar);
    console.log(fecha);

    //http://localhost:3000/compra
    const realizarCompra = await fetch(`${urlApi}/compra`, {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: { "Content-Type": "application/json" }
    });

    console.log(realizarCompra);
    
    if (realizarCompra.ok) {
        //Eliminamos la data en el carrito y del envio
        localStorage.removeItem("carrito");
        localStorage.removeItem("envio");
        const resultado = await realizarCompra.json();
        console.log(resultado);
        return resultado
    }

    return `¡Algo ha pasado! ${realizarCompra.json()}`
}