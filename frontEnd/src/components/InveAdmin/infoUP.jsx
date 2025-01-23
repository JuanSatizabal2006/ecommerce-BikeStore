import React, { useEffect, useState } from "react";
import { Boton } from "../buttons/boton";
import buzoPrueba from "../../img/buzo_prueba.png";
import { useLocation } from "react-router-dom";
import { urlApi } from "../../constants/urlApi";

export const InveInfo = () => {

    const [data, setData] = useState([]);
    const [sinData, setSinData] = useState(true)

    const {search} = useLocation();
    const params = new URLSearchParams(search);

    useEffect(()=>{

        const idArticulo = params.get('idArticulo');

        const obtenerDatos = async (id) => {
            const response = await fetch(`${urlApi}/onearticulo/${id}`);

            const data = await response.json();

            console.log(data.body);

            setData(data.body);
            setSinData(false);
        }
        
        if (idArticulo) {
            console.log('DIAVLOOOOO');
            obtenerDatos(idArticulo)
        }

    },[search])

    console.log(data);

    return (
        <>
            {
            sinData ? 
            <>
                <div className="flex w-full ">
                    <div className="w-1/4 bg-white rounded-xl h-60 mr-3 flex items-center justify-center overflow-auto shadow hidden md:block">
                        <img className="h-full p-3" src='https://bikestoresena.s3.amazonaws.com/imagenesExtras/imgProductoDefault.png' alt="" />

                    </div>
                <div className="w-full bg-white rounded-xl h-60 ml-2 p-12 shadow hidden md:block ">
                    <div className="text-red  text-3xl flex flex-col gap-12">
                        <div className="text flex justify-between pr-6">
                            <p className="font-semibold">Nombre del producto</p>
                            <button className="px-10 py-2 border-red tracking-wide text-red text-xl font-bold transition-colors duration-200 transform border-solid bg-white rounded-xl hover:bg-red hover:text-white hover:border-solid border-2 hover:border-white">
                                Editar Producto
                            </button>

                            </div>
                        <div className="text text-xl flex w-full justify-between text-black">
                            <div>
                                <div className="">Precio Unitario</div>
                                <div className=" text-black- text-center ">$---</div>
                            </div>
                            <div>
                                <div className=" ">Cantidad Vendidas</div>
                                <div className=" text-black- text-center ">---</div>
                            </div>
                            <div>
                                <div className=" ">Stock</div>
                                <div className=" text-black- text-center ">---</div>
                            </div>
                            <div>
                                <div className=" ">Total Ventas</div>
                                <div className=" text-black- text-center ">---</div>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>



            <div className="w-full bg-white rounded-xl h-60 ml-2 p-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden ">
                    <div className="text-red  text-3xl flex flex-col gap-12">
                        <div className="text flex justify-between pr-6  grid-cols sm:grid-cols-2 gap-4 md:hidden">
                            <p className="font-semibold">Camiseta Ciclismo Mang</p>
                            <button className="px-10 py-2 border-2 border-red tracking-wide text-red text-xl font-bold transition-colors duration-200 transform border-solid bg-white rounded- hover:bg-red hover:text-white hover:border-solid border-2 hover:border-white ">
                                Editar Producto
                            </button>

                            </div>
                        <div className="text text-xl flex w-full justify-between text-black  gap-4 md:hidden ">
                            <div>
                                <div className="">Cantidad</div>
                                <div className=" text-black- text-center ">pene</div>
                            </div>
                            <div>
                                <div className=" ">Cantidad</div>
                                <div className=" text-black- text-center ">pene</div>
                            </div>
                            <div>
                                <div className=" ">Cantidad</div>
                                <div className=" text-black- text-center ">pene</div>
                            </div>
                            <div>
                                <div className=" ">Cantidad</div>
                                <div className=" text-black- text-center ">pene</div>
                            </div>
                            <div>
                                <div className="">Cantidad</div>
                                <div className=" text-black- text-center ">pene</div>
                            </div>
                        </div>

                    </div>
            </div>
            </> 

                : 

            <>
                <div className="flex w-full ">
                    <div className="w-1/4 bg-white rounded-xl h-60 mr-3 flex items-center justify-center overflow-auto rounded-lg shadow hidden md:block">
                        <img className="h-full p-3" src={data.infoProducto[0].url_img.split(",")[0]} alt="" />

                    </div>
                <div className="w-full bg-white rounded-xl h-60 ml-2 p-12 shadow hidden md:block ">
                    <div className="text-red  text-3xl flex flex-col gap-12">
                        <div className="text flex justify-between pr-6">
                            <p className="font-semibold">{data.infoProducto[0].nombre}</p>
                            <button className="px-10 py-2 border-red tracking-wide text-red text-xl font-bold transition-colors duration-200 transform border-solid bg-white rounded-xl hover:bg-red hover:text-white hover:border-solid border-2 hover:border-white">
                                Editar Producto
                            </button>

                            </div>
                        <div className="text text-xl flex w-full justify-between text-black">
                            <div>
                                <div className="">Precio Unitario</div>
                                <div className=" text-black- text-center ">${new Intl.NumberFormat().format(parseInt(data.infoProducto[0].precio_total))}</div>
                            </div>
                            <div>
                                <div className=" ">Cantidad Vendidas</div>
                                <div className=" text-black- text-center ">{data.cantVentas[0].sum}</div>
                            </div>
                            <div className={`${data.infoProducto[0].stock <= 0 ? 'text-red font-bold' : ''}`}>
                                <div className="">Stock</div>
                                <div className='text-black- text-center'>{data.infoProducto[0].stock <= 0 ? '!!!' : data.infoProducto[0].stock}</div>
                            </div>
                            <div>
                                <div className=" ">Total Ventas</div>
                                <div className=" text-black- text-center ">${!data.infoProducto[0].sum ? '0' : new Intl.NumberFormat().format(parseInt(data.infoProducto[0].sum))}</div>
                            </div>
                            
                        </div>

                        </div>
                    </div>
                </div>



                <div className="w-full bg-white rounded-xl h-60 ml-2 p-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden ">
                        <div className="text-red  text-3xl flex flex-col gap-12">
                            <div className="text flex justify-between pr-6  grid-cols sm:grid-cols-2 gap-4 md:hidden">
                                <p className="font-semibold">Camiseta Ciclismo Mang</p>
                                <button className="px-10 py-2 border-2 border-red tracking-wide text-red text-xl font-bold transition-colors duration-200 transform border-solid bg-white rounded- hover:bg-red hover:text-white hover:border-solid border-2 hover:border-white ">
                                    Editar Producto
                                </button>

                                </div>
                            <div className="text text-xl flex w-full justify-between text-black  gap-4 md:hidden ">
                                <div>
                                    <div className="">Cantidad</div>
                                    <div className=" text-black- text-center ">pene</div>
                                </div>
                                <div>
                                    <div className=" ">Cantidad</div>
                                    <div className=" text-black- text-center ">pene</div>
                                </div>
                                <div>
                                    <div className=" ">Cantidad</div>
                                    <div className=" text-black- text-center ">pene</div>
                                </div>
                                <div>
                                    <div className=" ">Cantidad</div>
                                    <div className=" text-black- text-center ">pene</div>
                                </div>
                                <div>
                                    <div className="">Cantidad</div>
                                    <div className=" text-black- text-center ">pene</div>
                                </div>
                            </div>

                        </div>
                    </div>
            </>
            }
            
        </>
    )

}