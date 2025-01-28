import React from "react";
import { Link } from "react-router-dom";

export const FooterInfo = () => {
  return (
    <div className="section-6 w-full">
      <div className=" xl:mx-56 line bg-red w-full xl:w-[150vh] h-[2px] my-10 flex"></div>
      <div className="end-info-container flex w-full items-center xl:justify-center gap-20 xl:h-80 flex-col xl:flex-row mb-12">
        <div className="resgiter-container items-center xl:items-start p-8 flex flex-col gap-y-10">
          <p className="text-4xl font-semibold">¡Registrate!</p>
          <p className="text-sm">
            Sea el primero en conocer nuestras ofertas especiales, noticias y
            <br></br>
            actualizaciones.
          </p>
          <div className="button-border">
            <button
              onClick={() => navigate("register")}
              className="text-xs w-40 h-10 px-10 py-2 tracking-wide text-white font-normal transition-colors duration-200 transform border-solid bg-red rounded-xl hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red"
            >
              REGISTRATE
            </button>
          </div>
        </div>
        <div className="locates-container text-base flex flex-col gap-5">
          <p className="font-semibold">
            Puedes encontrarnos en nuestras
            <br></br>
            tiendas fisicas ubicada en :
          </p>
          <div className="ubi-1-container">
            <img className="icon" src="" alt="" />
            <p className="text-grey">
              Cra. 20 #32-18, Palmira,
              <br></br>
              Valle del Cauca
            </p>
          </div>
          <div className="ubi-1-container">
            <img className="icon" src="" alt="" />
            <p className="text-grey">
              Cl. 73 #8-60, Localidad de
              <br></br>
              Chapinero, Bogotá,
              <br></br>
              Cundinamarca
            </p>
          </div>
        </div>
        <div className="contact-container text-base flex flex-col gap-5">
          <Link
            to="/contact"
            className="font-semibold text-black underline"
          >
            ¿Tienes alguna duda?
            <br />
            ¡No dudes en contactarnos!
          </Link>
          <div className="tel-1-container">
            <img src="" alt="" className="icon" />
            <p className="text-grey">+57 315 582 8254</p>
          </div>
          <div className="tel-2-container">
            <img src="" alt="" className="icon" />
            <p className="text-grey">+57 323 528 7523</p>
          </div>
          <div className="email-container">
            <img src="" alt="" className="icon" />
            <p className="text-grey">bikestorebellakoo@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
