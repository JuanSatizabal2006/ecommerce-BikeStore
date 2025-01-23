import React, { useEffect, useState } from 'react';
import { NavBar } from '../../components/allNavBar/navBar.jsx';
import { useLocation } from 'react-router-dom';
import { MensajeErrorProducto } from '../../components/alerts/mensajeErrorProducto.jsx';
import { mensaje404Url } from '../../constants/mensajesUser.js'
import { urlApi } from '../../constants/urlApi.js'
import { ProductoInfo } from '../../components/producto/productoDetalle/productoInfo.jsx';
import { ProductoImg } from '../../components/producto/productoDetalle/productoImg.jsx'

export const DetalleProducto = () => {

    const [verError, setVerError] = useState(false);//ESTADO QUE DEFINE SI EL ERROR SE MUESTRA O NO
    const [producto, setProducto] = useState([]);//ESTADO DONDE SE GUARDARÁ LA INFORMACION DEL PRODUCTO
    
    //TODO: Obtener el id de la url
    const rutaPagina = useLocation().pathname.split("/");
    const idProducto = parseInt(rutaPagina[2]);
    console.log(idProducto);

    useEffect(()=>{

        if (!idProducto || typeof idProducto == "string") {
            return setVerError(true);
        }

        if (rutaPagina[2].length >= 10) {
            return setVerError(true);
        }

        const obtenerProducto = async ()=>{
            //TODO: Consulta para obtener unicamente un solo producto basado en su ID
            try {
                const response = await fetch(`${urlApi}/articulos/${idProducto}`);
                const data = await response.json();
                console.log(data);
                
                //Si la consulta devuelve una respuesta de que no encontró el producto, entonces ver mensaje de error
                if (data.statuscode != 200) {
                    return setVerError(true)
                }
                
                //Guardamos los datos en un array, ya que así lo retorna el backend
                setProducto(data.body);

            } catch (error) {
                setVerError(true);
            }
           
        }

        obtenerProducto();
    },[]);
    
    return (
        <>
            <NavBar />
            {
            verError ? 
                <MensajeErrorProducto texto={mensaje404Url} titulo={"¡Ups! Parece que te has perdido en el camino"} error={"404"} />
            : 
                <>
                    {producto.map((productoData)=>(
                        <div className='container grid grid-cols-1 gap-6 mx-auto p-12 mt-6 md:grid-cols-2 md:gap-8 md:p-4' key={productoData.id_articulo}>
                            <ProductoImg imagenes={productoData.url_img} />
                            <ProductoInfo producto={productoData.nombre} precio={`${parseFloat(productoData.precio_total)}`} descripcion={productoData.segunda_desc} stock={productoData.stock} objProducto={producto} id={idProducto} />
                        </div>
                    ))}
                </>
            } 
        </>
    )
}