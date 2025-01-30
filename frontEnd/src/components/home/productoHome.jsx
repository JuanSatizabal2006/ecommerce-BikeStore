import React, { useEffect } from "react";
import { urlApi } from "../../constants/urlApi";
import { useState } from "react";
import { Producto } from "../producto/producto";

export const ProductoHome = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const response = await fetch(`${urlApi}/home/articulos`);
      const data = await response.json();
      console.log(data);

      setProductos(data.body);
    };
    obtenerDatos();
  }, []);
  
  //descuento, urlmg, nombreProducto, precio_anterior, precio, idProducto, objetoProducto
  return (
    <div className="productos flex xl:flex-row flex-col xl:justify-center items-center gap-x-16 ">
      {productos.map((item) => (
        <Producto
          descuento={item.descuento}
          urlmg={item.url_img.split(",").shift()}
          nombreProducto={item.nombre}
          precio_anterior={item.costo}
          precio={item.precio_total}
          idProducto={item.id_articulo}
          objetoProducto={item}
          key={item.id_articulo}
        />
      ))}
    </div>
  );
};
///home/articulos
