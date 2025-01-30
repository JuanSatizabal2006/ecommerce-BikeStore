import React from "react";
import { categoriasHome } from "../../../constants/categoriasHome";
import CategoriaCard from "../../../components/cards/categoriaCard";

const CategoriasHome = () => {
  return (
    <section className="w-full flex flex-col items-center gap-8">
      <div className="max-w-[800px] text-center">
        <h3 className="text-4xl font-semibold mb-6">Categorías</h3>
        <p>
          El viaje comienza con la elección perfecta de bicicletas. Nuestra
          selección de bicicletas está diseñada para adaptarse a cada estilo de
          vida, con cada aventura, descubres la libertad sobre dos ruedas
        </p>
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        {categoriasHome.map((item, index) => (
          <CategoriaCard
            categoria={item.texto}
            img={item.img}
            info={item.info}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriasHome;
