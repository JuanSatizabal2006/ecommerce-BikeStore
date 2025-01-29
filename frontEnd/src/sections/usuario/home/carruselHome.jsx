import React from "react";
import { Carousel } from "@material-tailwind/react";
import { dataCarruselHome } from "../../../constants/carruselHome";
import { Link } from "react-router-dom";

const CarruselHome = () => {
  return (
    <>
      <Carousel className="h-[calc(100vh-80px)] w-full">
        {dataCarruselHome.map((item, index) => (
          <div className={`flex w-full h-full relative ${item.ubicacion[0]}`} key={index}>
            <img src={item.img} alt="" className="absolute w-full h-full object-cover top-0 z-0" />
            <div className={`z-10 p-20 flex flex-col ${item.ubicacion[1]}`}>
              <p className="font-semibold text-5xl">{item.tittle}</p>
              <p className="text-xl font-normal">{item.parrafo}</p>
              <Link
                to={"/catalogo"}
                className="text-xs text-center w-48 h-10 px-10 py-3 tracking-wide text-white font-bold transition-colors duration-200 transform border-solid bg-red rounded-md hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red"
              >
                VER MÁS
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarruselHome;
