import React, { useEffect, useState } from "react";
import { Producto } from "../../../components/producto/producto";
import { ArticuloCard } from "../../../components/cards/articuloCard";

const CatalogoTop = () => {
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

  return (
    <section>
      <div className="max-w-[800px] text-center">
        <h3 className="text-4xl font-semibold mb-6">
          ¡Explora nuestro catalogo!
        </h3>
        <p>
          Explora nuestro catálogo sabiendo que estás obteniendo lo mejor sin
          comprometer tu presupuesto. Disfruta de precios competitivos y ahorros irresistibles en
          cada compra, la calidad no debería romper el banco.
        </p>
      </div>
      <div className="productos flex xl:flex-row flex-col xl:justify-center items-center gap-x-16 ">
        {productos.map((item) => (
          <ArticuloCard
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
    </section>
  );
};

export default CatalogoTop;
