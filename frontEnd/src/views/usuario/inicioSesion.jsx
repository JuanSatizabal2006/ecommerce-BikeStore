import React, { useEffect, useState } from 'react'
import { Boton } from "../../components/buttons/boton.jsx";
import { InputForm } from '../../components/inputs/inputForm.jsx';
import { useAuth } from '../../auth/authProvider.jsx';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { urlApi } from '../../constants/urlApi.js';
import { MensajeError } from '../../components/alerts/mensajeError.jsx';
import { Modal } from '../../components/alerts/modal.jsx';

export const InicioSesion = () => {

    const togglePasswordVisibility = () => {
        setCheckTrue2(!checkTrue2);
    };

    const usuarioPerfil = JSON.parse(localStorage.getItem("infoUser"));
    console.log(usuarioPerfil)

    const navegar = useNavigate();
    const [mensajeError, setMensajeError] = useState('');//Variable para manejar el error
    const [verModal, setVerModal] = useState(false);
    const [checkTrue2, setCheckTrue2] = useState(true);

    const navegarL = () => {
        navegar("/registro")
    }

    //variables a mandar al back
    const [infoLog, setInfoLog] = useState({
        correo: '',
        contraseña: ''
    });

    //Se toman los datos que se escriban en el input
    const enviarTipeo = (data) => {
        const [nombreI, valueI] = data


        setInfoLog({
            ...infoLog, [nombreI]: valueI
        })
    }

    //Boton que llama a la API para validar si el usuario existe o no
    const iniciarSesion = async (eForm) => {
        eForm.preventDefault(); //Evita que la pagina se recargue
        try {
            const response = await fetch(`${urlApi}/login`, {
                method: "POST",
                body: JSON.stringify(infoLog),
                headers: { "Content-Type": "application/json" }
            });

            const dataResponse = await response.json();
            if (response.ok) {
                console.log('Inició');
                console.log(dataResponse);
                setMensajeError('');

                localStorage.setItem('tokenUser', dataResponse.body.token);
                localStorage.setItem('infoUser', JSON.stringify(dataResponse.body.usuario));

                setVerModal(true);

            } else {
                setMensajeError(dataResponse['body'].error);

            }

        } catch (error) {
            console.log('error:', error);
        }


    }

    return (
        <div className="relative flex max-lg:flex-col xl:flex-row justify-center min-h-screen overflow-y-hidden bg-wgrey h-screen">

            <div className="w-full xl:w-1/2 hidden xl:block h-screen m-auto bg-red">
                <div>
                    <Link to={'/home'}>
                        <img src='https://bikestoresena.s3.amazonaws.com/logos/logo_blanco.png' alt="" className="pt-5 w-64 pl-5" />
                    </Link>
                    <img src='https://bikestoresena.s3.amazonaws.com/imagenesExtras/Cicla_inicioSesion.svg' alt="" className="m-auto pt-5 w-3/5 h-3/5" />
                </div>
            </div>

            <main className="flex flex-col xl:gap-[1rem] gap-12 xl:justify-center justify-center w-full xl:w-1/2 h-full p-4 bg-white2">
                <div className='w-auto flex xl:justify-start justify-center relative pt-5'>
                    <p className=" pt-3 xl:pb-[3rem] b-7 text-2xl font-bold text-white">
                        <span className="bg-red rounded-xl xl:px-20 px-5 py-3">BIENVENIDO</span>
                    </p>
                </div>

                {!!mensajeError && <MensajeError error={mensajeError} texto="Inténtalo de nuevo." />}
                <form className='flex flex-col xl:align-middle'>
                    <InputForm name={'correo'} title={'Correo Electrónico:'} typeInput={'email'} enviarTipeo={enviarTipeo} />
                    <InputForm name={'contraseña'} title={'Contraseña:'} typeInput={'password'} enviarTipeo={enviarTipeo} showPassword={!checkTrue2} />
                    <div className="flex items-center pt-2">
                        <input
                            type="checkbox"
                            className=" text-black focus:ring-grey border-red  rounded"
                            onChange={togglePasswordVisibility}

                        />
                        <label htmlFor="show-password" className="pl-[0.15rem] block text-black">
                            Mostrar contraseña
                        </label>
                    </div>
                    <div className='flex justify-center pt-8'>
                        <Boton text="Entrar" enviarAccion={iniciarSesion} />
                    </div>
                    <p className="text-base pt-5 text-center text-gray-700">¿No tienes cuenta? <Link to={'/registro'} className='text-underline text-blue'>¡Regístrate YA!</Link></p>

                </form>

            </main>
            {verModal ? <Modal ruta={"/home"} titulo={`¡Bienvenido, ${usuarioPerfil.nombreUser}!`} text={`Disfruta de nuestra tienda`} /> : null}
        </div>
    );
}


<div className='w-[100vh] flex justify-end absolute top-5 left-[20rem]'>
    <p className=" pt-3 pb-[3rem] b-7 text-2xl font-bold text-white">
        <span className="bg-red rounded-xl px-20 py-3">BIENVENIDO</span>
    </p>
</div>