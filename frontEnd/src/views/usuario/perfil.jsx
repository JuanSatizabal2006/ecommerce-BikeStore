import React, { useState, useEffect } from 'react'
import { NavBar } from '../../components/allNavBar/navBar.jsx';
import { Footer } from '../../components/footer/footer.jsx';
import imgPerfil from "../../img/img_perfil/imagenPerfil.png";
import { useLocation } from "react-router-dom";
import iconInfo from "../../img/img_perfil/identificationCard.png";
import { urlApi } from "../../constants/urlApi.js";
import iconDire from "../../img/img_perfil/Direction.png";
import iconSegu from "../../img/img_perfil/Proteccion.png";
import { CartProvider } from '../../components/carrito/carritoContext.jsx';


export const Perfil = () => {

    const usuarioPerfil = JSON.parse(localStorage.getItem("infoUser"));
    console.log(usuarioPerfil)

    const nombreUsuario = usuarioPerfil.nombreUser.split(' ')
    
    const [mostrarInfo, setMostrarInfo] = useState(false);

    const toggleMostrarInfo = () => {
        setMostrarInfo(!mostrarInfo);
    };

    const [mostrarDire, setMostrarDire] = useState(false);

    const toggleMostrarDire = () => {
        setMostrarDire(!mostrarDire);
    };

    const [mostrarSegu, setMostrarSegu] = useState(false);

    const toggleMostrarSegu = () => {
        setMostrarSegu(!mostrarSegu);
    };

    const [isInfoExpanded, setIsInfoExpanded] = useState(false);
    const [isDireExpanded, setIsDireExpanded] = useState(false);
    const [isSeguExpanded, setIsSeguExpanded] = useState(false);

    const toggleInfoExpansion = () => {
        setIsInfoExpanded(!isInfoExpanded);
    };

    const toggleDireExpansion = () => {
        setIsDireExpanded(!isDireExpanded);
    };

    const toggleSeguExpansion = () => {
        setIsSeguExpanded(!isSeguExpanded);
    };

    return (
        <>
            <CartProvider>
                <NavBar />
            </CartProvider>
            <div className='flex flex-col xl:justify-center h-full pb-8 bg-white2'>
                <div className=' w-full px-12 pt-8 flex justify-center'>
                    <div className='flex gap-8 xl:flex-row flex-col xl:justify-start justify-center h-auto w-[72.5rem] border-b-red border-b-4 pt-6 xl:pl-[10rem]'>
                        <div className='flex flex-row justify-center pb-5'>
                            <img src={imgPerfil} alt="" />
                        </div>
                        <div className='flex flex-col xl:align-middle xl:justify-center pb-10'>
                            <p className='font-semibold text-center xl:text-left text-4xl'>{usuarioPerfil.nombreUser}</p>
                            <p className='font-semibold text-center xl:text-left '>{usuarioPerfil.correo}</p>
                        </div>
                    </div>
                </div>
                <div className='px-12 pt-10 flex flex-col justify-center align-middle gap-12 w-full'>
                    <div className="bg-white border-red border-4 rounded-lg xl:px-2 xl:h-[7.5rem] flex xl:flex-row flex-col xl:w-2/3 w-full mx-auto xl:gap-0 gap-4">
                        <div className='pr-7 w-auto h-auto pt-4 pl-2 xl:block hidden'>
                            <img src={iconInfo} alt="" className='' />
                        </div>
                        <div className="flex flex-col">
                            <h1 className='font-bold xl:text-2xl xl:text-left text-center'>Información personal</h1>
                            <p className='text-xl xl:text-left text-center xl:block hidden'>Nombre, apellido, celular, etc...</p>
                        </div>
                        <div className="xl:pl-[22rem] xl:pt-[3.0rem] relative xl:pb-0 pb-2 xl:text-left text-center" >
                            <i className={`fa-solid fa-chevron-down fa-2xl ${isInfoExpanded ? 'rotate-icon' : ''} cursor-pointer`} onClick={() => {
                                toggleInfoExpansion(); toggleMostrarInfo();
                            }}></i>
                        </div>
                    </div>
                    {mostrarInfo && (
                        <div className={`bg-white border-red border-4 rounded-lg px-2 xl:gap-14 gap-2 h-auto flex xl:flex-row flex-col xl:w-2/3 w-full mx-auto ${isInfoExpanded ? 'animation' : ''}`}>
                            <div className="flex flex-col pl-4 xl:h-auto xl:w-auto">
                                <h2 className='font-bold border-b-red border-b-4 w-[14rem] pb-2'>Nombre</h2>
                                <p className='text-xl border-t-red border-t-4 pt-2 w-[10rem] h-auto'>{nombreUsuario[0]} {nombreUsuario[1]}</p>
                                <h2 className='font-bold border-b-red border-b-4 w-[14rem] pb-2'>Celular</h2>
                                <p className='text-xl border-t-red border-t-4 pt-2 pb-4 w-[10rem]'>{usuarioPerfil.telefono}</p>
                            </div>
                            <div className="flex flex-col pl-4">
                                <h2 className='font-bold border-b-red border-b-4 w-[14rem] pb-2'>Apellido</h2>
                                <p className='text-xl border-t-red border-t-4 pt-2 w-[10rem] h-auto'>{nombreUsuario[3]} {nombreUsuario[4]}</p>
                                <h2 className='font-bold border-b-red border-b-4 w-[13rem] pb-2'>Identificacion</h2>
                                <p className='text-xl border-t-red border-t-4 pt-2 pb-4 w-[10rem]'>{usuarioPerfil.id_usuario}</p>
                            </div>
                        </div>
                    )}
                    <div className="bg-white border-red border-4 rounded-lg xl:px-2 xl:h-[7.5rem] flex xl:flex-row flex-col xl:w-2/3 w-full mx-auto xl:gap-0 gap-4">
                        <div className='pr-9 w-auto h-auto pt-5 pl-2 xl:block hidden'>
                            <img src={iconDire} alt="" className='' />
                        </div>
                        <div className="flex flex-col">
                            <h1 className='font-bold xl:text-2xl xl:text-left text-center'>Ubicacion</h1>
                            <p className='text-xl xl:text-left text-center xl:block hidden'>Dirección</p>
                        </div>
                        <div className="xl:pl-[33rem] xl:pt-[3rem] relative xl:pb-0 pb-2 xl:text-left text-center" >
                            <i className={`fa-solid fa-chevron-down fa-2xl ${isDireExpanded ? 'rotate-icon' : ''}  cursor-pointer`} onClick={() => {
                                toggleDireExpansion(); toggleMostrarDire();
                            }}></i>
                        </div>
                    </div>
                    {mostrarDire && (
                        <div className="bg-white border-red border-4 rounded-lg px-2 gap-14 h-auto flex flex-row xl:w-2/3 w-full mx-auto align-middle">
                            <div className="flex flex-col pl-4">
                                <h2 className='font-bold border-b-red border-b-4 w-[13rem] pb-2'>Direccion</h2>
                                <p className='text-xl border-t-red border-t-4 pt-2 pb-4 w-[10rem]'>Cra 24 #43-23</p>
                            </div>
                        </div>
                    )}
                    <div className="bg-white border-red border-4 rounded-lg xl:px-2 xl:h-[7.5rem] flex xl:flex-row flex-col xl:w-2/3 w-full mx-auto xl:gap-0 gap-4">
                        <div className='pr-12 pl-4 w-auto h-auto pt-7 xl:block hidden'>
                            <img src={iconSegu} alt="" className='' />
                        </div>
                        <div className="flex flex-col">
                            <h1 className='font-bold xl:text-2xl xl:text-left text-center'>Seguridad</h1>
                            <p className='text-xl xl:text-left text-center xl:block hidden'>Contraseña</p>
                        </div>
                        <div className="xl:pl-[33rem] xl:pt-[3rem] relative xl:pb-0 pb-2 xl:text-left text-center" >
                            <i className={`fa-solid fa-chevron-down fa-2xl ${isSeguExpanded ? 'rotate-icon' : ''} cursor-pointer`} onClick={() => {
                                toggleSeguExpansion(); toggleMostrarSegu();
                            }}></i>
                        </div>
                    </div>
                    {mostrarSegu && (<div className="bg-white border-red border-4 rounded-lg px-2 gap-14 h-auto flex flex-row xl:w-2/3 w-full mx-auto align-middle">
                        <div className="flex flex-col pl-4">
                            <h2 className='font-bold border-b-red border-b-4 w-[13rem] pb-2'>Contraseña</h2>
                            <p className='text-xl border-t-red border-t-4 pt-2 pb-4 w-[10rem]'>S****_****</p>
                        </div>
                    </div>
                    )}
                </div>
            </div >

            <Footer />
        </>
    )
}
