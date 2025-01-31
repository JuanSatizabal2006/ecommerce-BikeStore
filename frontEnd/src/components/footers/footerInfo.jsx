import React from "react";
import { Link } from "react-router-dom";
import BotonLink from "../botones/botonLink";
import LineSeparador from "../lineSeparador";

export const FooterInfo = () => {
  return (
    <section className="w-full">
      <LineSeparador />
      <div className="flex w-full items-center xl:justify-center py-10 gap-20 flex-col xl:flex-row">
        <div className="items-center xl:items-start p-8 flex flex-col gap-y-4">
          <p className="text-4xl font-semibold">¡Registrate!</p>
          <p className="text-base">
            Sea el primero en conocer nuestras ofertas especiales, noticias y
            actualizaciones.
          </p>
          <div className="button-border">
            <BotonLink ruta="/" texto="Registrate" tipo="relleno" />
          </div>
        </div>
        <div className="flex flex-col gap-5 max-w-[350px] w-full">
          <p className="font-semibold text-xl">
            Puedes encontrarnos en nuestras tiendas fisicas ubicada en :
          </p>
          <div className="flex items-center gap-4">
            <i className="fa-solid fa-location-dot text-red text-2xl"></i>
            <p className="text-grey">
              Cra. 20 #32-18, Palmira, Valle del Cauca
            </p>
          </div>
          <div className="flex items-center gap-4">
            <i className="fa-solid fa-location-dot text-red text-2xl"></i>
            <p className="text-grey">
              Cl. 73 #8-60, Localidad de Chapinero, Bogotá, Cundinamarca
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 max-w-[350px] w-full">
          <p className="font-semibold text-xl">
            ¿Tienes alguna duda? ¡No dudes en contactarnos!
          </p>
          <div className="flex items-center gap-4">
            <i className="fa-solid fa-phone text-red text-2xl"></i>
            <p className="text-grey">+57 315 582 8254</p>
          </div>
          <div className="flex items-center gap-4">
            <i className="fa-solid fa-phone text-red text-2xl"></i>
            <p className="text-grey">+57 323 528 7523</p>
          </div>
          <div className="flex items-center gap-4">
            <i className="fa-solid fa-envelope text-red text-2xl"></i>
            <p className="text-grey">bikestorebellakoo@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
