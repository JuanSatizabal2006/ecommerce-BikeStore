import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import imgN1 from '../../img/img_services/img_N1.png';
import imgN2 from '../../img/img_services/img_N2.png';

export const Services = () => {

    const [hoveredId, setHoveredId] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredId(id);
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };

    const misObjetos = [
        {
            id: "1",
            nImg: imgN2,
            info: "Únete a la conversación, comparte tus pensamientos y conecta con otros amantes del ciclismo. En BikeStore, el diálogo no tiene límites y la comunidad es nuestra fuerza impulsora. ¡Únete a nosotros y forma parte de la conversación!",
            text: "Atención 24/7"
        },

        {
            id: "2",
            nImg: imgN1,
            info: "Comprendemos que las aventuras no siempre ocurren en horarios convencionales. Es por eso que nuestro equipo de atención al cliente está disponible las 24 horas, los 7 días de la semana. ¿Tienes una pregunta urgente o necesitas asistencia? Estamos aquí para resolver cualquier problema y asegurarnos de que tu experiencia con nosotros sea siempre fluida y placentera.",
            text: "Blog"
        }

    ];




    return (
        <div className="services-container flex justify-center gap-10 my-16 flex-col xl:flex-row">
            {misObjetos.map((obj) => {
                const animation = useSpring({
                    opacity: hoveredId === obj.id ? 1 : 0,
                    config: { duration: 200 }
                });
                if (obj.id == 1) {
                    //console.log(obj.id);

                    return (

                        <div
                            key={obj.id}
                            className={`services-item flex flex-col relative items-center ${obj.id}`}
                            onMouseEnter={() => handleMouseEnter(obj.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="services-content flex flex-col items-center flex-1 relative">
                                <img
                                    id={obj.id}
                                    src={obj.nImg}
                                    alt={obj.text}
                                    className="services-image w-full max-w-[23.125em] h-full flex-1 my-4"
                                />
                            </div>

                            <animated.div className="services-information flex px-5 justify-center bg-grey_transparent flex-col my-4 h-[32.55em] w-full rounded-2xl absolute z-10" style={animation}>
                                <p className="services-information-text flex text-center text-lg font-medium">
                                    {obj.info}
                                </p>
                            </animated.div>
                            <p className='text-3xl font-semibold py-6'>
                                {obj.text}
                            </p>
                        </div>
                    );
                }
                else {
                    console.log(obj.id)
                    return (

                        <div
                            key={obj.id}
                            className={`services-item flex flex-col relative items-center ${obj.id}`}
                            onMouseEnter={() => handleMouseEnter(obj.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <p className='text-3xl font-semibold py-6'>
                                {obj.text}
                            </p>
                            <div className="services-content flex flex-col items-center flex-1 relative">
                                <img
                                    id={obj.id}
                                    src={obj.nImg}
                                    alt={obj.text}
                                    className="services-image w-full max-w-[23.125em] h-full flex-1 my-4"
                                />
                            </div>

                            <animated.div className="services-information flex px-5 justify-center bg-grey_transparent flex-col mt-[6.25rem] h-[32.55em] w-full rounded-2xl absolute z-10" style={animation}>
                                <p className="services-information-text flex text-center text-lg font-medium">
                                    {obj.info}
                                </p>
                            </animated.div>
                            
                        </div>
                    );
                }
            })}
        </div>
    );
};