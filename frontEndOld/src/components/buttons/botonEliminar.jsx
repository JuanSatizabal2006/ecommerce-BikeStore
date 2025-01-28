import React from 'react';


export const BotonEliminar = ({ enviar, botonText }) => {

    return (

        <div className='w-auto xl:pb-0 pb-4  flex justify-center'>
            <button onClick={enviar} className="px-10 py-2 w-auto tracking-wide text-red text-xl font-bold transition-colors duration-200 transform border-solid bg-white rounded-md hover:bg-red hover:text-white hover:border-solid border-2 hover:border-red">
                {botonText}
            </button>
        </div>

    );
}
