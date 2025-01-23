import React, { useState } from 'react';
import { useAuth } from '../../auth/authProvider';
import { Link, useNavigate } from 'react-router-dom';
import { ModalCS } from '../alerts/modalCS';

export const SideBarUser = ({ nombre, apellido, url, rol, }) => {

    const [open, setOpen] = useState(false);
    const [verModal, setVerModal] = useState(false);

    const toggleSidebar = () => {
        setOpen(!open);
    };

    const navegar = useNavigate();

    const cerrarSesion = () => {
        
        setVerModal(true);
    }

    return (
        <>
            <div className="flex items-center z-50">

                <i className="fa-solid fa-circle-user cursor-pointer text-black bg-white rounded-full border-solid border-white border-[3.5px] ease-in duration-300 hover:border-red hover:text-white hover:rounded-full hover:bg-red hover:scale-100    text-4xl" id='navBar-icon-user' onClick={() => setOpen(true)}></i>
                <div className={`${!open && "hidden"} bg-black/50 h-full  w-full fixed top-0 right-0 left-0`}>
                </div>

                {rol === 'loginAdmin' && (
                    <aside className={`${open ? "right-0" : "right-[-20rem]"} bg-white font-semibold text-xl text-red w-[19rem] h-screen fixed top-0 transition-all duration-700 ease-in-out`}>
                        <header className='w-full h-20 bg-black flex items-center justify-center relative'>
                            <i className="fa-solid fa-chevron-left rotate-180 bg-white text-red border-red border-2 py-1 px-2 rounded-md absolute -left-3 cursor-pointer" onClick={() => setOpen(false)}></i>
                            <div className="container h-full px-10 flex absolute top-10 gap-x-2 justify-center w-full">
                                <img className="w-20 h-20" src={`${url}`}></img>
                                <div className="caontainer-text flex flex-col gap-2 pt-2">
                                    <p className='container-name text-white'>{nombre}</p>
                                    <p className='container-apellido'>{apellido}</p>
                                </div>
                            </div>
                        </header>
                        <div className="flex w-full justify-center items-center flex-col">
                            <div className="nav flex w-3/4 flex-col">
                                <div className="border-y-2 border-red mt-14 pl-6 py-6 gap-10 flex flex-col">
                                    <div className="section-1 flex gap-4 items-center">
                                        <i className="fa-solid fa-user text-red"></i>
                                        <p className='text-red'>Ver perfil</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 pl-6 py-6 items-center cursor-pointer" onClick={cerrarSesion}>
                                    <i className="fa-solid fa-right-to-bracket"></i>
                                    <p>Cerrar sesión</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                )}

                {rol === 'notLogin' && (
                    <aside className={`${open ? "right-0" : "right-[-20rem]"} bg-white font-semibold text-xl text-red w-[19rem] h-screen fixed top-0 transition-all duration-700 ease-in-out`}>
                        <header className='w-full h-20 bg-black flex items-center justify-center relative'>
                            <i className="fa-solid fa-chevron-left rotate-180 bg-white text-red border-red border-2 py-1 px-2 rounded-md absolute -left-3 cursor-pointer" onClick={() => setOpen(false)}></i>

                        </header>
                        <div className="flex w-full justify-center items-center flex-col">
                            <div className="nav flex w-3/4 flex-col">
                                <div className="mt-8 py-1 gap-10 flex flex-col border-b-2 h-56 border-red">
                                    <div className="section-1 flex">
                                        <Link to={'/login'} className="w-full p-3 tracking-wide text-center text-white text-xl font-bold transition-colors duration-200 transform border-solid bg-red rounded-md hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red">
                                            Iniciar Sesion
                                        </Link>
                                    </div>
                                    <div className="section-2 flex">
                                        <Link to={'/registro'} className="w-full p-3 tracking-wide text-center text-red text-xl font-bold transition-colors duration-200 transform border-solid bg-white rounded-md hover:bg-red hover:text-white hover:border-solid border-2 hover:border-red" >
                                            Registrarse
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                )}

                {rol === 'loginUser' && (
                    <aside className={`${open ? "right-0" : "right-[-20rem]"} bg-white font-semibold text-xl text-red w-[19rem] h-screen fixed top-0 transition-all duration-700 ease-in-out`}>

                        <header className='w-full h-20 bg-black flex items-center justify-center relative'>
                            <i className="fa-solid fa-chevron-left rotate-180 bg-white text-red border-red border-2 py-1 px-2 rounded-md absolute -left-3 cursor-pointer" onClick={() => setOpen(false)}></i>
                            <div className="container h-full px-10 flex absolute top-10 gap-x-2 justify-center w-full">
                                <img className="w-20 h-20" src={`${url}`}></img>
                                <div className="caontainer-text flex flex-col gap-2 pt-2">
                                    <p className='container-name text-white'>{nombre}</p>
                                    <p className='container-apellido'>{apellido}</p>
                                </div>
                            </div>
                        </header>
                        <div className="flex w-full justify-center items-center flex-col">
                            <div className="nav flex w-3/4 flex-col">
                                <div className="border-y-2 border-red mt-14 pl-6 py-6 gap-10 flex flex-col">

                                    <Link to={'/perfil'} className="section-1 flex gap-4 items-center cursor-pointer">
                                        <i className="fa-solid fa-user text-red"></i>
                                        <p className='text-red'>Ver perfil</p>
                                    </Link>
                                    <Link to={'/pedidos'} className="section-2 flex gap-4 items-center cursor-pointer">
                                        <i className="fa-solid fa-bag-shopping text-red"></i>
                                        <p className='text-red'>Mis pedidos</p>
                                    </Link>
                                </div>
                                <div className="flex gap-4 pl-6 py-6 cursor-pointer items-center" onClick={cerrarSesion}>
                                    <i className="fa-solid fa-right-to-bracket"></i>
                                    <p>Cerrar sesión</p>
                                </div>

                            </div>
                        </div>
                        {verModal ? <ModalCS ruta={"/login"} titulo={`¿Estas seguro de cerrar sesion?`} /> : null}
                    </aside>
                    
                )}
                
            </div>
            {verModal ? <ModalCS ruta={'/login'} titulo={`¿Estas seguro de cerrar sesion?`} /> : null}
        </>
    )
}
