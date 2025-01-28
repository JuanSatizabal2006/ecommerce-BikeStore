import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import CtN1 from '../../img/img_categories/CtN1.png';
import CtN2 from '../../img/img_categories/CtN2.png';
import CtN3 from '../../img/img_categories/CtN3.png';
import { Link } from 'react-router-dom';

export const Categories = () => {
    
    const [hoveredId, setHoveredId] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredId(id);
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };

    const misObjetos = [
        {
            id: 1,
            nImg: CtN1,
            text: "Montaña",
            info: "Sumérgete en la belleza salvaje con nuestras bicicletas de montaña. Diseñadas para conquistar terrenos desafiantes, estas compañeras todo terreno te llevan a nuevos picos y senderos intrépidos"
        },
        {
            id: 3,
            nImg: CtN2,
            text: "Ruta",
            info: "Para los amantes de la velocidad y la elegancia, nuestras bicicletas de ruta son la elección ideal. Creadas para el asfalto, estas máquinas aerodinámicas te llevan más lejos y más rápido"
        },
        {
            id: 2,
            nImg: CtN3,
            text: "Urbana",
            info: "Cuando la ciudad es tu terreno de juego, nuestras bicicletas urbanas son tu entrada a una movilidad sin esfuerzo. Diseñadas con practicidad y estilo en mente, estas bicicletas son perfectas para el día a día"
        }
    ];

    return (
        <div className="categories-container flex flex-col xl:flex-row cursor-pointer">
            
                {misObjetos.map((obj) => {
                    // Definir la animación con useSpring
                    const animation = useSpring({
                        opacity: hoveredId === obj.id ? 1 : 0,
                        config: { duration: 200 }
                    });

                    return (
                        <Link to={`/catalogo?categoria=${obj.id}`} key={obj.id}>
                            <div
                                className="category-item "
                                onMouseEnter={() => handleMouseEnter(obj.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="category-content">
                                    <img
                                        id={obj.id}
                                        src={obj.nImg}
                                        alt={obj.text}
                                        className="category-image"
                                    />
                                    <p className='text text-center text-xl font-bold my-1 text-black'>
                                        {obj.text}
                                    </p>
                                </div>
                                <animated.div className="categories-information" style={animation}>
                                    <p className="categories-information-text text-center text-base font-medium text-black">
                                        {obj.info}
                                    </p>
                                </animated.div>
                            </div>
                        </Link>
                    );
                })}
            
        </div>
    );
};
