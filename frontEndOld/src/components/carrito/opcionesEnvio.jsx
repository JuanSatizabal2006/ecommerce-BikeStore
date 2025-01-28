import React , { useEffect, useState } from 'react'

export const OpcionesEnvio = ({enviarPagoEnvio}) => {

    const [mostrarOpciones, setMostrarOpciones] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(2);

    const opcionesEnvio = [
        { nombre: "Estándar Rápido", fecha: "2-3 días hábiles", precio: 15000 },
        { nombre: "Estándar Económico", fecha: "5-7 días hábiles", precio: 8000 },
        { nombre: "Por favor selecciona una opcion de envio ", fecha: "", precio: null }
    ];

    useEffect(()=>{
        const tomarPagoEnvio = ()=>{
            
            enviarPagoEnvio(opcionesEnvio[opcionSeleccionada]);
        } 
        tomarPagoEnvio();
    },[opcionSeleccionada]);

    const toggleMostrarOpciones = () => {
        setMostrarOpciones(!mostrarOpciones);
    };
    
    const seleccionarOpcion = (index) => {
        setOpcionSeleccionada(index);
        setMostrarOpciones(false);
    };

    return (
        <>
            <div onClick={toggleMostrarOpciones} className='flex flex-row  xl:justify-evenly xl:gap-10 justify-center  bg-white items-center p-5 rounded-xl shadow-md cursor-pointer '>
            
                <p className='text-center'>{opcionesEnvio[opcionSeleccionada].nombre}</p>
                <p>{opcionesEnvio[opcionSeleccionada].fecha}</p>
                <p>${new Intl.NumberFormat().format(opcionesEnvio[opcionSeleccionada].precio)}</p>
            
            </div>

            {mostrarOpciones && (
            <div className="opciones-envio rounded-xl flex flex-col gap-3 pt-5">

                {opcionesEnvio.slice(0,2).map((opcion, index) => (
                    <div
                        key={index}
                        className={`flex flex-row justify-evenly p-4 items-center rounded-xl shadow-md space-x-3 cursor-pointer ${index === opcionSeleccionada ? 'bg-red text-white' : 'bg-white shadow-md'}`}
                        onClick={() => seleccionarOpcion(index)}
                    >
                        
                        <p className=''>{opcion.nombre}</p>
                        <p className=''>{opcion.fecha}</p>
                        <p className=''>${new Intl.NumberFormat().format(opcion.precio)}</p>
                        
                    </div>
                ))}
            </div>
                    )}
        </>
  )
}