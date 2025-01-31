import React from "react";

const CategoriaCard = ({ categoria, img, info }) => {
  return (
    <div className="max-w-80 min-w-56 text-center">
      <div className="group relative overflow-hidden rounded-lg cursor-pointer">
        <div className="absolute w-full h-full bg-grey_transparent flex items-center p-4 font-medium -translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <p>{info}</p>
        </div>
        <img src={img} alt={categoria} />
      </div>
      <p className="first-letter:uppercase font-semibold mt-3 text-lg">
        {categoria}
      </p>
    </div>
  );
};

export default CategoriaCard;
