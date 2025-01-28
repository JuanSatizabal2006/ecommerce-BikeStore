import React, { useState } from 'react'
import { CheckboxInput } from "../../components/inputs/inputCheckBox.jsx";
import { Boton } from "../../components/buttons/boton.jsx";
import { Selector } from "../../components/inputs/inputSelect.jsx";
import { InputForm } from '../../components/inputs/inputForm.jsx';
import { urlApi } from '../../constants/urlApi.js';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { MensajeError } from '../../components/alerts/mensajeError.jsx';
import { Modal } from '../../components/alerts/modal.jsx';
import { optionsSelect } from '../../constants/optionsSelect.js';

export const Registro = () => {

    const validarContraseña = (contraseña) => {
        console.log(contraseña);
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+-])[A-Za-z\d@$!%*?&+-]{8,}$/;
        return regex.test(contraseña);
    };

    const togglePasswordVisibility = () => {
        setCheckTrue2(!checkTrue2);
    };

    const [verModal, setVerModal] = useState(false);
    const [checkTrue, setCheckTrue] = useState(false);
    const [checkTrue2, setCheckTrue2] = useState(true);

    const navegar = useNavigate();//Navegacion
    const [mensajeError, setMensajeError] = useState('');//Variable para manejar el error
    //Cuerpo del body a enviar
    const [infoRegistro, setInfoRegistro] = useState({
        correo: '',
        nombre: '',
        telefono: 0,
        id_usuario: 0,
        tipo_doc: '',
        id_rol: 2,
        contraseña: '',
        apellido: ''
    })

    //Guardado de lo que se digite en los inputs
    const enviarTipeo = (data) => {
        const [nombreI, valueI] = data;
        setInfoRegistro({
            ...infoRegistro, [nombreI]: valueI
        })
    }

    //Validar si ya aceptó los terminos y condiciones
    const checkBox = (data) => {
        data.target.checked ? setCheckTrue(true) : setCheckTrue(false)

    }

    //Funcion que llama a la API para realizar el registro
    const registrarse = async (e) => {
        e.preventDefault();
        console.log('antes');


        try {

            if (!checkTrue) {

                setMensajeError('Es necesario aceptar los terminos y condiciones');
                return

            }

            if (validarContraseña(infoRegistro.contraseña)) {
                console.log(validarContraseña(infoRegistro.contraseña));
                setMensajeError('La contraseña debe contener al menos una mayúscula, un número y un símbolo, y tener al menos 8 caracteres.');
                return;
            }

            const response = await fetch(`${urlApi}/registro`, {
                method: "POST",
                body: JSON.stringify(infoRegistro),
                headers: { "Content-Type": "application/json" }
            })

            const dataResponse = await response.json();

            if (response.ok) {
                console.log(dataResponse['body'].message);
                setMensajeError('');
                setVerModal(true);

            } else {
                console.log(dataResponse['body'].error);

                setMensajeError(dataResponse['body'].error);
            }

        } catch (error) {
            console.log(error);
        }

    }

    //Recoleccion de los datos del input select
    const setSelect = (datosSelect) => {

        if (datosSelect && datosSelect.value) {
            console.log('Info del select:', datosSelect.value);
            setInfoRegistro({
                ...infoRegistro, tipo_doc: datosSelect.value
            })
        } else {
            console.log('El objeto datosSelect no está definido correctamente.');
        }
    }

    console.log(infoRegistro);

    return (
        <main className="relative flex  xl:flex-row  justify-center min-h-screen xl:overflow-y-hidden bg-wgrey h-screen">
            <form className="container flex flex-col xl:justify-center  w-full xl:w-1/2 h-full pt-5 xl:pt-16 xl:px-6 p-14 bg-white2">

                <div className='w-auto flex xl:justify-end justify-center relative pb-5'>
                    <p className=" relative b-7 text-2xl font-bold text-white bg-red rounded-xl px-20 py-3">
                        REGISTRATE
                    </p>
                </div>
                {!!mensajeError && <MensajeError error={mensajeError} />}

                <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 w-full justify-center">
                    <div className='w-full xl:w-1/2'>
                        <InputForm name={'correo'} title={'Correo Electrónico'} typeInput={'email'} enviarTipeo={enviarTipeo} />
                    </div>
                    <div className='w-full xl:w-1/2'>
                        <InputForm name={'telefono'} title={'Celular'} typeInput={'text'} enviarTipeo={enviarTipeo} />
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 w-full justify-center">
                    <div className='w-full xl:w-1/2 pt-1'>
                        <Selector text="Tipo de documento" enviarSelect={setSelect} opciones={optionsSelect} />
                    </div>
                    <div className='w-full xl:w-1/2'>
                        <InputForm name={'id_usuario'} title={'Número de documento'} typeInput={'number'} enviarTipeo={enviarTipeo} />
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 w-full justify-center">
                    <div className='w-full xl:w-1/2'>
                        <InputForm name={'nombre'} title={'Nombre'} typeInput={'text'} enviarTipeo={enviarTipeo} />
                    </div>
                    <div className='w-full xl:w-1/2'>
                        <InputForm name={'apellido'} title={'Apellido'} typeInput={'text'} enviarTipeo={enviarTipeo} />
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 w-full justify-center">
                    <div className='w-full xl:w-1/2'>
                        <InputForm name={'contraseña'} title={'Contraseña'} typeInput={'password'} enviarTipeo={enviarTipeo} showPassword={!checkTrue2} />
                    </div>
                    <div className='w-full xl:w-1/2'>
                        <InputForm name={'contraseñaVerificada'} title={'Confirmar contraseña'} typeInput={'password'} enviarTipeo={enviarTipeo} showPassword={!checkTrue2}  />
                    </div>
                </div>

                <div className="pt-3 pb-5 flex xl:flex-row flex-col justify-between ">
                    <CheckboxInput text="términos y condiciones" enviarCheck={checkBox} />
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className=" text-black focus:ring-grey border-red  rounded"
                            onChange={togglePasswordVisibility}
                            
                        />
                        <label htmlFor="show-password" className="pl-[0.15rem] block text-black">
                            Mostrar contraseña
                        </label>
                    </div>
                </div>

                <div className="flex justify-center pt-1">
                    <Boton text="Registrarse" className="p-4 xl:p-20" enviarAccion={registrarse} />
                </div>

                <div className="flex justify-center pt-4 xl:pb-0 pb-2">
                    <Link to={"/login"} className="text-base hover:underline">
                        Volver
                    </Link>
                </div>

            </form>

            <div className="xl:w-1/2 hidden xl:block h-screen m-auto bg-red">
                <div>
                    <Link to={'/home'}>
                        <div className='flex justify-end'>
                            <img src='https://bikestoresena.s3.amazonaws.com/logos/logo_blanco.png' alt="" className="registro-logo pt-5 w-64 pr-5" />
                        </div>
                    </Link>
                    <img src='https://bikestoresena.s3.amazonaws.com/imagenesExtras/ciclaRegistro.png' alt="" className="registro-cicla m-auto pt-10 w-3/5 h-3/5" />
                </div>
            </div>
            {/* TODO: MOSTRAR O NO EL MODAL */}
            {verModal ? <Modal ruta={"/login"} titulo={"¡Registro realizado con exito!"} text={"Ahora tienes tu cuenta BikeStore, ¡Inicia sesion!"} /> : null}
        </main>
    );

}