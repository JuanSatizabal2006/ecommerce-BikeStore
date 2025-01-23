import React from 'react'
import { TermDiv } from '../../components/termCondiciones/termDiv';
import { objTerminos } from '../../constants/objTerminos';
import { Boton } from '../../components/buttons/boton';
import { useNavigate } from 'react-router-dom';

export const PoliticaCompra = () => {

    const navegar = useNavigate();

    const ir = () => {
        navegar('/registro')
    }


    return (
        <main className='relative flex  xl:flex-row lg:flex-col md:flex-col justify-center xl:h-screen xl:overflow-y-hidden bg-wgrey'>
            <div className='xl:w-1/2 bg-red hidden xl:block lg:block md:block w-full h-full m-auto'>
                <div>
                    <div>
                        <img src='https://bikestoresena.s3.amazonaws.com/logos/logo_blanco.png' alt="" className="registro-logo pt-5 w-64 pl-5" />
                        <img src="https://bikestoresena.s3.amazonaws.com/imagenesExtras/imgIconTerm/ciclaTerm.png" alt="" className="m-auto pt-16 pb-16 xl:w-2/3 xl:h-2/3 1/2" />
                    </div>
                </div>
            </div>

            <div className='xl:w-1/2 h-full xl:p-6 p-5 flex flex-col justify-center gap-5'>
                <div className='w-auto flex xl:flex-row flex-col items-center xl:justify-start xl:gap-8 gap-5 justify-center relative'>
                    <p className="p-3 text-2xl xl:text-center text-center font-bold text-white bg-red rounded-xl">
                        TERMINOS Y CONDICIONES
                    </p>
                    <Boton text='Volver' enviarAccion={ir} tipoBoton={'regular'} />
                </div>
                
                <div className='flex flex-col gap-8'>
                    {objTerminos.map((item,index)=>(<TermDiv key={index} num={index} icon={item.icon} text={item.text} />))}
                </div>

            </div>
        </main>
    )
}
