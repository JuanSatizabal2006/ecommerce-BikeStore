import React from 'react';
import { useState } from 'react';
import { ItemNavBar } from './itemNavBar';
import { Dropdown } from './dropdown';
import { objSideBar, lastOPtion } from "../../constants/objSideBar.js";
import { Catalogo } from '../../views/usuario/catalogo.jsx';
export const SideBar = ({ rol }) => {
    /* ESTADO QUE PERMITA VERIFICAR EL ESTADO (TRUE OR FALSE) DEL BOTON PARA ABRIR EL SLIDE */
    const [open, setOpen] = useState(false);
    const infoItemSidebar = objSideBar;
    const infoItemSidebarLast = lastOPtion;

    /* ESTRUCTURA HTML */
    return (

        <div className="flex items-center z-50 pr-5 ">

            <div className="flex items-center gap-2 text-white hover:text-red border-red cursor-pointer transition duration-300" onClick={() => setOpen(true)}>
                <i className="fa-solid fa-bars border py-1 px-2 rounded-md"></i>
                <p className='font-semibold'>Menú</p>
            </div>
            <div className={`${!open && "hidden"} bg-black/50 h-full w-full fixed top-0 right-0 left-0`}>
            </div>

            {rol === 'loginAdmin' && (
                <aside className={`${open ? "translate-x-0" : "-translate-x-96"} bg-white w-80 h-full fixed top-0 left-0 transition-all duration-700 `}>

                    <div className='sticky top-0'>
                        <header className='w-full h-20 bg-black flex items-center justify-center relative'>
                            <img src="https://bikestoresena.s3.amazonaws.com/imagenesExtras/logo.png" alt="logo" className='w-44' />
                            <i className="fa-solid fa-chevron-left bg-white text-red border-red border-2 py-1 px-2 rounded-md absolute -right-3 cursor-pointer" onClick={() => setOpen(false)}></i>
                        </header>
                        <div className='px-5 py-5 flex flex-col gap-3 mt-3'>
                            <ItemNavBar text={"Registro"} url={"/admin/formproducto"} icon={"fa-solid fa-pencil"} booleanIcon={false} />
                            <ItemNavBar text={"Dashboard"} icon={'bar-chart-outline'} url={"/dashboard"} booleanIcon={true} />
                            <ItemNavBar text={"Inventario"} icon={'file-tray-full-outline'} url={"/inventario"} booleanIcon={true} />
                            <ItemNavBar text={"Pedidos"} icon={'paper-plane'} url={"/pedidosadmin"} booleanIcon={true} />
                            <div className='w-full h-0.5 bg-red'></div>
                        </div>

                    </div>
                </aside>
            )}

            {rol === 'loginUser' && (
                <aside className={`${open ? "translate-x-0" : "-translate-x-96"} bg-white w-80 h-full fixed top-0 left-0 transition-all duration-700 z-50`}>

                    <div className='sticky top-0'>
                        <header className='w-full h-20 bg-black flex items-center justify-center relative'>
                            <img src="https://bikestoresena.s3.amazonaws.com/imagenesExtras/logo.png" alt="logo" className='w-44' />
                            <i className="fa-solid fa-chevron-left bg-white text-red border-red border-2 py-1 px-2 rounded-md absolute -right-3 cursor-pointer" onClick={() => setOpen(false)}></i>
                        </header>
                        <div className='px-5 flex flex-col gap-3 mt-3'>
                            <ItemNavBar text={"Inicio"} icon={'home-outline'} url={"http://localhost:5173/home"} booleanIcon={true} />

                            <div className='w-full h-0.5 bg-red'></div>

                            <div className='flex flex-col gap-3'>
                                {
                                    infoItemSidebar.map((item) =>
                                        <Dropdown key={item.id} title={item.title} icon={item.icon} booleanIcon={item.isReactIcon} lista={item.dropdown} />
                                    )
                                }
                            </div>


                            <div className='w-full h-0.5 bg-red'></div>

                            <div className='flex flex-col gap-3 '>
                                {infoItemSidebarLast.map((item) => (
                                    <ItemNavBar key={item.id} text={item.text} icon={item.icon} booleanIcon={item.isReactIcon} url={item.url} />
                                ))}
                            </div>

                        </div>

                    </div>
                </aside>
            )}

            {rol === 'notLogin' && (
                <aside className={`${open ? "translate-x-0" : "-translate-x-96"} bg-white w-80 h-full fixed top-0 left-0 transition-all duration-700 z-50`}>

                    <div className='sticky top-0'>
                        <header className='w-full h-20 bg-black flex items-center justify-center relative'>
                            <img src="https://bikestoresena.s3.amazonaws.com/imagenesExtras/logo.png" alt="logo" className='w-44' />
                            <i className="fa-solid fa-chevron-left bg-white text-red border-red border-2 py-1 px-2 rounded-md absolute -right-3 cursor-pointer" onClick={() => setOpen(false)}></i>
                        </header>
                        <div className='px-5 flex flex-col gap-3 mt-3'>
                            <ItemNavBar text={"Inicio"} icon={'home-outline'} url={"http://localhost:5173/home"} booleanIcon={true} />

                            <div className='w-full h-0.5 bg-red'></div>

                            <div className='flex flex-col gap-3'>
                                {
                                    infoItemSidebar.map((item) =>
                                        <Dropdown key={item.id} title={item.title} icon={item.icon} booleanIcon={item.isReactIcon} lista={item.dropdown} />
                                    )
                                }
                            </div>


                            <div className='w-full h-0.5 bg-red'></div>

                            <div className='flex flex-col gap-3 '>
                                {infoItemSidebarLast.map((item) => (
                                    <ItemNavBar key={item.id} text={item.text} icon={item.icon} booleanIcon={item.isReactIcon} url={item.url} />
                                ))}
                            </div>

                        </div>

                    </div>
                </aside>
            )}

        </div>

    )
}