import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/allNavBar/navBar";
import ListaProductos from "../../sections/usuario/catalogo/listaProductos";
import FiltrosProductos from "../../sections/usuario/catalogo/filtrosProductos";

export const Catalogo = () => {

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
