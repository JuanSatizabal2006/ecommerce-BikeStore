import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardArticulo } from "../../../components/cards/cardArticulo";
import { useArticulos } from "../../../hooks/useArticulos";

const ListaProductos = () => {
  const { moreArticulos, articulos, more, countArt } = useArticulos();
  console.log(articulos);

  return (
    <>
      {/*
      articulos.map((values, index) => (
        <CardArticulo
          idProducto={values.idArticulo}
          nombre={values.nombre}
          urlmg={values.imgUrl.split(',')[0]}
          descuento={values.descuento}
          precio={values.precioTotal}
          precioAnterior={0}
          objetoProducto={values}
          key={index}
        />
      ))*/}

      <InfiniteScroll
        dataLength={articulos.length}
        next={moreArticulos}
        hasMore={more}
        loader={<p>Cargando</p>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Ya no hay más productos</b>
          </p>
        }
        className="grid grid-cols-3"
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
