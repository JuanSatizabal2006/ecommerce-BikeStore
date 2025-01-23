import React from "react";
import logoSenaBlanco from "../../img/logos/logo_sena_blanco.png";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
      <footer className="flex items-center justify-evenly bg-red text-white py-5 content-end w-full flex-wrap relative">
          <div className="flex items-center  justify-center gap-8 min-w-60">
            <a href="https://www.facebook.com/?locale=es_LA" target="_blank">
              <i className="fa-brands fa-facebook text-4xl text-white"></i>
            </a>
            <a href="https://twitter.com/?lang=es" target="_blank">
              <i className="fa-brands fa-square-x-twitter text-4xl text-white"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-square-instagram text-4xl text-white"></i>
            </a>
          </div>
          <div className="hidden sm:block h-16 w-0.5 bg-white"></div>
          <Link to={'/about'}>
            <div className="flex text-2xl gap-3 items-center justify-center min-w-60  leading-10 h-16">
              <p className="text-white">Sobre BikeStore</p>
              <i className="fa-solid fa-heart text-white"></i>
            </div>
          </Link>
          <div className="hidden sm:block h-16 w-0.5 bg-white"></div>
          <picture className="min-w-60">
            <a href="https://oferta.senasofiaplus.edu.co/sofia-oferta/" target="_blank">
              <img
                src={logoSenaBlanco}
                alt="Logo Sena"
                className="w-16 h-16 m-auto"
              />
            </a>
          </picture>
          <Link to={"/noentresaqui"} >
            <div className="w-14 h-14 absolute -top-14 right-0"></div>
          </Link>
      </footer>
  );
};
