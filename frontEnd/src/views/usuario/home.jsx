import React from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components/allNavBar/navBar.jsx";
import CarruselHome from "../../sections/usuario/home/carruselHome.jsx";
import CategoriasHome from "../../sections/usuario/home/categoriasHome.jsx";
import CarruselMarcas from "../../sections/usuario/home/carruselMarcas.jsx";
import CatalogoTop from "../../sections/usuario/home/catalogoTop.jsx";
import Servicios from "../../sections/usuario/home/servicios.jsx";
import { FooterInfo } from "../../components/footers/footerInfo.jsx";
import { Footer } from "../../components/footers/footer.jsx";

export const Home = () => {
  //const isUser = JSON.parse(localStorage.getItem('infoUser')) || null

  const navigate = useNavigate();

  const ir = () => {
    navigate("/catalogo");
  };

  return (
    <>
      <NavBar />
      <CarruselHome />
      <main className="px-14 py-10 flex flex-col items-center gap-20">
        <CategoriasHome />
        <CarruselMarcas />
        <CatalogoTop />
        <Servicios />
        <FooterInfo />
      </main>
      <Footer />
      {/*
            {
                !isUser && <FooterInfo />
            }
            */}
    </>
  );
};
