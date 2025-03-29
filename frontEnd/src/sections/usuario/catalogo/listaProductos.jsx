import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardArticulo } from "../../../components/cards/cardArticulo";
import { useArticulos } from "../../../hooks/useArticulos";
import { Cargando } from "../../../components/alerts/cargando";

const ListaProductos = () => {
  const { moreArticulos, articulos, more, countArt } = useArticulos();
  console.log(articulos.length);

  return (
    <>
      <p>{countArt} Resultados</p>
      <InfiniteScroll
        dataLength={articulos.length}
        next={moreArticulos}
        hasMore={more}
        loader={<Cargando texto="Cargando" />}
        endMessage={
          <div className="col-span-3">
            <p>Ya no hay más productos</p>
          </div>
        }
        className="w-full grid grid-cols-3 gap-8 justify-items-center py-1"
      >
        {articulos.map((values, index) => (
          <CardArticulo
            idProducto={values.idArticulo}
            nombre={values.nombre}
            urlmg={values.imgUrl.split(",")[0]}
            descuento={values.descuento}
            precio={values.precioTotal}
            precioAnterior={0}
            objetoProducto={values}
            key={index}
          />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default ListaProductos;
