import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/allNavBar/navBar";
import { Footer } from "../../components/footers/footer";
import { Producto } from "../../components/producto/producto";
import { Categorías } from "../../components/producto/filtrado/filtro";
import Paginador from "../../components/producto/paginador";
import ListaProductos from "../../sections/usuario/catalogo/listaProductos";
import FiltrosProductos from "../../sections/usuario/catalogo/filtrosProductos";

export const Catalogo = () => {
  const [productosPaginados, setProductoPaginados] = useState([]);

  const enviarProducto = (dato) => {
    console.log("datos en catalogo: ", dato);
    setProductoPaginados(dato);
  };
  const [categoriasVisibles, setCategoriasVisibles] = useState(true);

  return (
    <>
      <NavBar />
      <main className="flex justify-center w-full min-h-view py-14">
        <div className="flex justify-between gap-8 max-w-[1200px] w-full">
          <FiltrosProductos />
          <div className="w-full">
            <ListaProductos />
          </div>
        </div>
      </main>
    </>
  );
};
