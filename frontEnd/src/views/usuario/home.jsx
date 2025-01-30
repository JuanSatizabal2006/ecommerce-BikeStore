import React from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components/allNavBar/navBar.jsx";
import CarruselHome from "../../sections/usuario/home/carruselHome.jsx";
import CategoriasHome from "../../sections/usuario/home/categoriasHome.jsx";
import CarruselMarcas from "../../sections/usuario/home/carruselMarcas.jsx";
import CatalogoTop from "../../sections/usuario/home/catalogoTop.jsx";
import Servicios from "../../sections/usuario/home/servicios.jsx";

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
      <main className="px-14 py-10 flex flex-col items-center gap-16">
        <CategoriasHome />
        <CarruselMarcas />
        <CatalogoTop />
        <Servicios />
        <div className="w-full h-80 bg-red"></div>
      </main>
      {/*
            <div className="section-3 flex flex-col gap-4">

            </div>
            <div className="section-4">
                <div className="container-tittle-nosotros my-10">
                    <Tittle
                        Tittle={'Nuestro Servicios'}
                        Text={"No solo ofrecemos bicicletas excepcionales, sino que también nos "}
                        Text2={"comprometemos a brindarte una experiencia completa. Más allá de"}
                        Text3={"la venta de bicicletas, te presentamos nuestros servicios exclusivos"}
                        Text4={"que transformarán tu conexión con el ciclismo"}

                    />
                </div>
            </div>
            <div className="section-5">
                <Services />
            </div>

            {
                !isUser && <FooterInfo />
            }
            <Footer />
            */}
    </>
  );
};
