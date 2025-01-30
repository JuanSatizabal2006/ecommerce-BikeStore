import React from "react";
import { Link } from "react-router-dom";

//TIPO => relleno o hueco

const BotonLink = ({ ruta, texto, tipo }) => {
  return (
    <Link
      to={ruta}
      className={`text-sm  text-center px-10 py-2 tracking-wide font-bold transition-colors rounded-md  hover:border-solid border-2 
        ${
          tipo === "relleno" || !tipo
            ? "bg-white text-red border-red hover:bg-red hover:text-white hover:border-white"
            : "bg-red text-white border-white hover:bg-white hover:text-red hover:border-red"
        }`}
    >
      {texto}
    </Link>
  );
};

export default BotonLink;
