import { Carousel } from "@material-tailwind/react";
import React from "react";
import LineSeparador from "../../../components/lineSeparador";

const CarruselMarcas = () => {
  return (
    <section className="w-full">
      <div className="w-full relative flex justify-center items-center">
        <h3 className="bg-white text-4xl z-10 py-2 px-5 font-semibold">
          Nuestras marcas
        </h3>
        <div className="bg-red w-full h-2 absolute z-0"></div>
      </div>
      <Carousel
        className="h-52"
        autoplay={true}
        autoplayDelay={3000}
        loop={true}
        prevArrow={() => null}
        nextArrow={() => null}
        navigation={() => null}
      >
        <div className="flex justify-evenly items-center w-full h-full">
          <img
            src="/public/img/carrusel/imgMarcas/marca1.png"
            alt="GW"
            className="w-40 h-28 object-contain"
          />
          <img
            src="/public/img/carrusel/imgMarcas/marca2.png"
            alt="SPECIALIZED"
            className="w-40 h-28 object-contain"
          />
          <img
            src="/public/img/carrusel/imgMarcas/marca3.png"
            alt="SCOTT"
            className="w-40 h-28 object-contain"
          />
        </div>
        <div className="flex justify-evenly items-center w-full h-full">
          <img
            src="/public/img/carrusel/imgMarcas/marca4.png"
            alt="TREK"
            className="w-40 h-28 object-contain"
          />
          <img
            src="/public/img/carrusel/imgMarcas/marca5.png"
            alt="CANNONDALE"
            className="w-40 h-28 object-contain"
          />
          <img
            src="/public/img/carrusel/imgMarcas/marca6.png"
            alt="FOX"
            className="w-40 h-28 object-contain"
          />
        </div>
      </Carousel>
      <LineSeparador />
    </section>
  );
};

export default CarruselMarcas;
