import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import carousel_1 from "../../img/img_marcas/carousel_1.png";
import carousel_2 from "../../img/img_marcas/carousel_2.png";
import carousel_3 from "../../img/img_marcas/carousel_3.png";
import carousel_4 from "../../img/img_marcas/carousel_4.png";
import carousel_5 from "../../img/img_marcas/carousel_5.png";
import carousel_6 from "../../img/img_marcas/carousel_6.png";

const slides = [
  { id: 1, image: carousel_1 },
  { id: 2, image: carousel_2 },
  { id: 3, image: carousel_3 },
  { id: 4, image: carousel_4 },
  { id: 5, image: carousel_5 },
  { id: 6, image: carousel_6 },
];

export const CarouselMarcas = () => {
  const [index, setIndex] = useState(0);
  const [isXlScreen, setIsXlScreen] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setIsXlScreen(window.innerWidth >= 1280);
    };
    window.addEventListener("resize", resizeHandler);
    resizeHandler(); // Call the resizeHandler initially
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [isXlScreen]);

  const transitions = useTransition(slides.slice(index, index + 1), {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    config: { tension: 200, friction: 15 },
    trail: 100,
  });

  return (
    <div className="w-full  overflow-hidden flex justify-center ">
      <div className="flex flex-col w-[75%] py-10">
        <div className="linea flex items-center w-screen md:w-150vh mt-12vh">
          <div className="flex-1 h-2 bg-red-700"></div>
          <span className="texto px-10 md:px-20 lg:px-40 text-black font-semibold text-3xl">
            NUESTRAS MARCAS
          </span>
          <div className="flex-1 h-2 bg-red-700"></div>
        </div>
        <div className="images relative overflow-hidden max-w-full flex">
          {transitions((style, item) => (
            <animated.img
              className="img"
              key={item.id}
              src={item.image}
              style={{
                ...style,
                position: "absolute",
                width: isXlScreen ? "calc(50% - 10px)" : "90%",
                maxWidth: isXlScreen ? "25em" : "100%",
                marginBottom: isXlScreen ? 0 : "1rem",
              }}
              alt={`Slide ${item.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

{
  /*


import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import carousel_1 from '../../img/img_marcas/carousel_1.png';
import carousel_2 from '../../img/img_marcas/carousel_2.png';
import carousel_3 from '../../img/img_marcas/carousel_3.png';
import carousel_4 from '../../img/img_marcas/carousel_4.png';
import carousel_5 from '../../img/img_marcas/carousel_5.png';
import carousel_6 from '../../img/img_marcas/carousel_6.png';

const slides = [
  { id: 1, image: carousel_1 },
  { id: 2, image: carousel_2 },
  { id: 3, image: carousel_3 },
  { id: 4, image: carousel_4 },
  { id: 5, image: carousel_5 },
  { id: 6, image: carousel_6 },
];

export const CarouselMarcas = () => {
  const [index, setIndex] = useState(0);
  const [isXlScreen, setIsXlScreen] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setIsXlScreen(window.innerWidth >= 1280);
    };
    window.addEventListener('resize', resizeHandler);
    resizeHandler(); // Call the resizeHandler initially
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + (isXlScreen ? 2 : 1)) % slides.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [isXlScreen]);

  const transitions = useTransition(slides.slice(index, index + (isXlScreen ? 2 : 1)), {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
    config: { tension: 200, friction: 15 },
    trail: 100,
  });

  return (
    <div className="w-full overflow-hidden">
      <center>
        <div className="linea flex items-center w-screen md:w-150vh mt-12vh">
          <div className="flex-1 h-2 bg-red-700"></div>
          <span className="texto px-10 md:px-20 lg:px-40 text-black font-semibold text-3xl">NUESTRAS MARCAS</span>
          <div className="flex-1 h-2 bg-red-700"></div>
        </div>
        <div className="images relative overflow-hidden max-w-full flex">
          {transitions((style, item) => (
            <animated.img
              className="img"
              key={item.id}
              src={item.image}
              style={{
                ...style,
                width: isXlScreen ? 'calc(50% - 10px)' : '90%',
                maxWidth: isXlScreen ? '25em' : '100%',
                marginBottom: isXlScreen ? 0 : '1rem',
              }}
              alt={`Slide ${item.id}`}
            />
          ))}
        </div>
      </center>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import carousel_1 from '../img/img_marcas/carousel_1.png';
import carousel_2 from '../img/img_marcas/carousel_2.png';
import carousel_3 from '../img/img_marcas/carousel_3.png';
import carousel_4 from '../img/img_marcas/carousel_4.png';
import carousel_5 from '../img/img_marcas/carousel_5.png';
import carousel_6 from '../img/img_marcas/carousel_6.png';

const slides = [
  { id: 1, image: carousel_1 },
  { id: 2, image: carousel_2 },
  { id: 3, image: carousel_3 },
  { id: 4, image: carousel_4 },
  { id: 5, image: carousel_5 },
  { id: 6, image: carousel_6 },
];

export const CarouselMarcas = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 2) % slides.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);
  

  const transitions = useTransition(slides.slice(index), {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
    config: { tension: 200, friction: 15 },
  });
  return (
    <div>
      <center>
        <div className="linea">
          <span className="texto">NUESTRAS MARCAS</span>
        </div>
        <div className="images">
          {transitions((style, item) => (
            <animated.img className="img flex flex-row"
                  key={item.id} 
                  src={item.image} 
                  style={style}
                  alt={`Slide ${item.id}`} 
                />
              ))}
        </div>
      </center>
    </div>
  );
};








import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import carousel_1 from '../img/img_marcas/carousel_1.png';
import carousel_2 from '../img/img_marcas/carousel_2.png';
import carousel_3 from '../img/img_marcas/carousel_3.png';
import carousel_4 from '../img/img_marcas/carousel_4.png';
import carousel_5 from '../img/img_marcas/carousel_5.png';
import carousel_6 from '../img/img_marcas/carousel_6.png';

const slides = [
  { id: 1, image: carousel_1 },
  { id: 2, image: carousel_2 },
  { id: 3, image: carousel_3 },
  { id: 4, image: carousel_4 },
  { id: 5, image: carousel_5 },
  { id: 6, image: carousel_6 },
];

export const CarouselMarcas = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 2) % slides.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const transitions = useTransition(slides.slice(index, index + 2), {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
    config: { tension: 200, friction: 15 },
  });

  return (
    <div>
      <center>
        <div className="linea">
          <span className="texto">NUESTRAS MARCAS</span>
        </div>
        <div className="images">
          {transitions((style, item) => (
            <animated.img 
              key={item.id} 
              src={item.image} 
              style={style} 
              className="img relative" 
              alt={`Slide ${item.id}`} 
            />
          ))}
        </div>
      </center>
    </div>
  );
};}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import carousel_1 from '../img/img_marcas/carousel_1.png';
import carousel_2 from '../img/img_marcas/carousel_2.png';
import carousel_3 from '../img/img_marcas/carousel_3.png';
import carousel_4 from '../img/img_marcas/carousel_4.png';
import carousel_5 from '../img/img_marcas/carousel_5.png';
import carousel_6 from '../img/img_marcas/carousel_6.png';

const slides = [
  { id: 1, image: carousel_1 },
  { id: 2, image: carousel_2 },
  { id: 3, image: carousel_3 },
  { id: 4, image: carousel_4 },
  { id: 5, image: carousel_5 },
  { id: 6, image: carousel_6 },
];

export const CarouselMarcas = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 2) % slides.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const transitions = useTransition(slides.slice(index, index + 2), {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
    config: { tension: 200, friction: 15 } // Ajustamos la configuración de la animación
  });

  return (
    <div>
      <center>
        <div className="linea">
          <span className="texto">NUESTRAS MARCAS</span>
        </div>
        <div className="images" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          {transitions((style, item) => (
            <animated.img
              key={item.id}
              src={item.image}
              style={{
                ...style,
                position: 'absolute',
                left: `${item.id === index + 1 ? '50%' : '150%'}`, // Establecemos la posición de las imágenes
                top: 0,
                transform: `${item.id === index + 1 ? 'translateX(-50%)' : 'translateX(0%)'}`, // Ajustamos la transformación de las imágenes
                height: '100%',
                objectFit: 'cover' // Ajustamos la propiedad para que las imágenes se ajusten al contenedor
              }}
              className="img"
              alt={`Slide ${item.id}`}
            />
          ))}
        </div>
      </center>
    </div>
  );
};
*/
}
