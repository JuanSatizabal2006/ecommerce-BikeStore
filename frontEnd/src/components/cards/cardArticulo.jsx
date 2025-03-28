import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BotonCarrito } from "../buttons/botonCarrito";
import { usarCarrito } from "../../helper/usarCarrito";


export const CardArticulo = ({
  descuento,
  urlmg,
  nombre,
  precioAnterior,
  precio,
  idProducto,
  objetoProducto,
}) => {
  //const { añadirCarrito, carrito, quitarProductoBoton } = usarCarrito();
  const [añadido, setAñadido] = useState(false);
  const [nombreCorto, setNombreCorto] = useState(nombre);

  /*
  useEffect(() => {
    const checarProductosCarrito = () => {
      return setAñadido(
        carrito.some((item) => item.id_articulo === objetoProducto.id_articulo)
      );
    };
    checarProductosCarrito();

    // Truncar el nombre del producto si es mayor a 20 caracteres
    if (nombre.length > 20) {
      setNombreCorto(nombre.substring(0, 18) + "...");
    } else {
      setNombreCorto(nombre);
    }
  }, [carrito, nombre]);*/

  const enviarCarrito = (data) => {
    console.log(data);
    añadirCarrito(data);
  };

  const eliminarCarrito = (data) => {
    console.log(data);
    quitarProductoBoton(data);
    setAñadido(true);
  };

  return (
    <div className="flex flex-col w-56 items-center border-solid rounded-2xl px-2 py-[1.2rem] bg-white shadow relative">
      {descuento * 100 >= 10 && (
        <div className="flex items-center justify-center h-[3rem] w-[3rem] rounded-full bg-red absolute -top-2 -right-2">
          <p className="text-white">{descuento * 100}%</p>
        </div>
      )}

      <Link to={`/producto/${idProducto}`}>
        <picture
          className="w-full "
          onClick={() => {
            console.log(idProducto);
          }}
        >
          <img src={urlmg} className="bg-contain bg-center h-[10rem]" />
        </picture>
      </Link>

      <div className="text-center pt-1.5">
        <p className="text-lg pt-1.5">{nombreCorto}</p>
        {descuento * 100 >= 10 && (
          <p className="pt-1 text-red text-sm line-through opacity-35">
            ${new Intl.NumberFormat().format(precioAnterior)} COP
          </p>
        )}
        <p className="pt-3 text-green text-base mb-3">
          ${new Intl.NumberFormat().format(precio)} COP
        </p>
      </div>

      <BotonCarrito
        enviarCarrito={() =>
          añadido
            ? eliminarCarrito(objetoProducto)
            : enviarCarrito(objetoProducto)
        }
        estado={añadido}
      ></BotonCarrito>
    </div>
  );
};
