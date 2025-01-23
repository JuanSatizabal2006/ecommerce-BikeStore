import React, { useEffect, useState } from 'react';
import { OpcionFiltro } from './opcionFiltro';
import { useLocation, useNavigate } from 'react-router-dom';

export const Categorías = ({ titulo }) => {
  
  const location = useLocation();
  const navegar = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const categoriasQuery = queryParams.getAll('categoria');

    const [filtro, setFiltro] = useState({
        1: categoriasQuery.includes('1'),
        2: categoriasQuery.includes('2'),
        3: categoriasQuery.includes('3'),
        4: categoriasQuery.includes('4'),
        5: categoriasQuery.includes('5'),
        6: categoriasQuery.includes('6'),
        7: categoriasQuery.includes('7'),
        8: categoriasQuery.includes('8'),
        9: categoriasQuery.includes('9'),
    });

    useEffect(() => {
        const newParams = new URLSearchParams(location.search);

        // Eliminar todas las categorías existentes del parámetro 'categoria'
        newParams.delete('categoria');

        // Agregar solo los números de categoría seleccionados a la URL
        Object.keys(filtro).forEach(key => {
            if (filtro[key]) {
                newParams.append('categoria', key);
            }
        });

        // Reemplazar la URL actual
        console.log({}, '', `${location.pathname}?${newParams.toString()}`);
        navegar(`${location.pathname}?${newParams.toString()}`);
    }, [filtro]);

    const aplicaFiltro = (valor) => {
        setFiltro(prevState => ({
            ...prevState,
            [valor]: !prevState[valor]
        }));
    };

    const renderizarOpciones = () => {
        switch (titulo) {
            case "Bicicletas":
                return (
                    <>
                        <OpcionFiltro label="Urbana" accionInput={() => aplicaFiltro(2)} valor={filtro[2]} />
                        <OpcionFiltro label="Montaña" accionInput={() => aplicaFiltro(1)} valor={filtro[1]} />
                        <OpcionFiltro label="Ruta" accionInput={() => aplicaFiltro(3)} valor={filtro[3]} />
                    </>
                );
            case "Ropa":
                return (
                    <>
                        <OpcionFiltro label="Femenino" accionInput={() => aplicaFiltro(7)} valor={filtro[7]} />
                        <OpcionFiltro label="Masculino" accionInput={() => aplicaFiltro(8)} valor={filtro[8]} />
                    </>
                );
            case "Accesorios":
                return (
                    <>
                        <OpcionFiltro label="Guantes" accionInput={() => aplicaFiltro(5)} valor={filtro[5]} />
                        <OpcionFiltro label="Cascos" accionInput={() => aplicaFiltro(4)} valor={filtro[4]} />
                        <OpcionFiltro label="Luces" accionInput={() => aplicaFiltro(6)} valor={filtro[6]} />
                        <OpcionFiltro label="Seguridad" accionInput={() => aplicaFiltro(9)} valor={filtro[9]} />
                    </>
                );
            case "":
                return (
                    <>
                        <OpcionFiltro label="Ver Todo" />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className='mt-4'>
            <div className="flex flex-col w-56 bg-white p-4 rounded-xl shadow">
                <p className="text-xl font-semibold mb-2">{titulo}</p>
                {renderizarOpciones()}
            </div>
        </div>
    );
};