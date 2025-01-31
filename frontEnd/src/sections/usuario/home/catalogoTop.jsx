import React, { useEffect, useState } from "react";
import { ArticuloCard } from "../../../components/cards/articuloCard";
import TitleHome from "../../../components/titleHome";

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
      <TitleHome
        titulo="¡Explora nuestro catalogo!"
        texto="Explora nuestro catálogo sabiendo que estás obteniendo lo mejor sin
          comprometer tu presupuesto. Disfruta de precios competitivos y ahorros irresistibles en
          cada compra, la calidad no debería romper el banco."
      />
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
