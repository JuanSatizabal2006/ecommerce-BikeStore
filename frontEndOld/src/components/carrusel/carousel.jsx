import React from "react";
import { Carouselobj } from "./carouselobj.jsx";

import imgN1 from "../../img/img_carousel/imgN1.jpg";
import imgN2 from "../../img/img_carousel/imgN2.jpg";
import imgN3 from "../../img/img_carousel/imgN3.jpg";
import imgN4 from "../../img/img_carousel/imgN4.jpg";

const images = [imgN1, imgN2, imgN3, imgN4];

const texts = [
  {
    tittle: "Las mejores bicicletas",
    parrafo:
      "De las mejores marcas de toda Colombia\n¡Desde el 20%  -  30% y 40% de descuento!",
    position: { top: "10%", left: "10%" },
  },
  {
    tittle: "Las mejores prendas\ndeportivas",
    parrafo: "De la mejor calidad para todo tipo de aventuras",
    position: { top: "50%", left: "10%", transform: "translateY(-50%)" },
  },
  {
    tittle: "Todo tipo de accesorios",
    parrafo: "Te acompañan con la mayor calidad en todas tus\naventuras",
    position: { bottom: "10%", right: "2%" },
    textAlign: "right",
  },
  {
    tittle: "¡Forma parte de nuestra comunidad!",
    parrafo:
      "Unete a otros fanaticos en el ciclismo, comparte nuevas aventuras y explora\nnuevos lugares",
    position: { top: "10%", right: "2%" },
    textAlign: "right",
  },
];

export const CarouselP = () => {
  return <Carouselobj images={images} texts={texts} />;
};
