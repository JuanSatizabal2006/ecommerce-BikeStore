import React from "react";
import { categoriasHome } from "../../../constants/categoriasHome";
import CategoriaCard from "../../../components/cards/categoriaCard";
import TitleHome from "../../../components/titleHome";

const CategoriasHome = () => {
  return (
    <section className="w-full flex flex-col items-center gap-8">
      <TitleHome
        titulo="Categorías"
        texto="El viaje comienza con la elección perfecta de bicicletas. Nuestra
          selección de bicicletas está diseñada para adaptarse a cada estilo de
          vida, con cada aventura, descubres la libertad sobre dos ruedas"
      />
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
