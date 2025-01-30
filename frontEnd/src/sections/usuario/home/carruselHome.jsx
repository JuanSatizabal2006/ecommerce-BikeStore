import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { dataCarruselHome } from "../../../constants/carruselHome";
import BotonLink from "../../../components/botones/botonLink";

const CarruselHome = () => {
  return (
    <>
      <Carousel
        className="h-[calc(100vh-80px)] w-full"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            size="lg"
            onClick={handlePrev}
            className="group !absolute top-2/4 left-4 -translate-y-2/4 hover:bg-red transition-colors rounded-full duration-300"
          >
            <i className="fa-solid fa-chevron-left text-red group-hover:text-white transition-colors duration-300"></i>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            size="lg"
            onClick={handleNext}
            className="group !absolute top-2/4 !right-4 -translate-y-2/4 hover:bg-red transition-colors rounded-full duration-300"
          >
           <i className="fa-solid fa-chevron-right text-red group-hover:text-white transition-colors duration-300"></i>
          </IconButton>
        )}
        loop={true}
      >
        {dataCarruselHome.map((item, index) => (
          <div
            className={`flex w-full h-full relative ${item.ubicacion[0]}`}
            key={index}
          >
            <img
              src={item.img}
              alt=""
              className="absolute w-full h-full object-cover top-0 z-0"
            />
            <div
              className={`z-10 p-20 flex flex-col gap-2 max-w-[800px] ${item.ubicacion[1]}`}
            >
              <p className="font-semibold text-5xl">{item.tittle}</p>
              <p className="text-xl font-normal">{item.parrafo}</p>
              <BotonLink ruta={"/"} texto={"Ver Más"} tipo={"relleno"} />
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarruselHome;
