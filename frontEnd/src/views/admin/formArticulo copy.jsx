import React, { StrictMode } from 'react'
import { useState } from 'react'
import { InputForm } from '../../components/inputs/inputForm'
import { urlApi } from '../../constants/urlApi'
import { Boton } from '../../components/boton'
import { NavBar } from "../../components/allNavBar/navBar"
import { CartProvider } from '../../components/carrito/carritoContext'
import { Selector } from '../../components/inputs/inputSelect'
import { optionsSelectCategory } from '../../constants/optionsSelect'

export const FormArticulo = () => {

    const [articulo, setArticulo] = useState({
        id_articulo: 0,
        nombre: "",
        impuesto: 0,
        descuento: 0,
        margen: 0,
        stock: 0,
        costo: 0,
        talla: 0,
        categoria: '',
        segunda_desc: "",
        url_img: null
    });

    console.log(articulo);

    //Funcion recibida por parte del componente hijo (INPUT)
    const enviarTipeo = (dato) => {
        console.log(dato);
        //Destructuracion de dato
        const [nombreI, valorI, isNumber] = dato;

        //Condicional para definir el tipo de conversion
        isNumber ? setArticulo({ ...articulo, [nombreI]: parseFloat(valorI) }) : setArticulo({ ...articulo, [nombreI]: valorI });
    }

    const setSelect = (datosSelect) => {

        if (datosSelect && datosSelect.value) {
            console.log('Info del select:', datosSelect.value);
            setArticulo({
                ...articulo, categoria: datosSelect.value
            })
        } else {
            console.log('El objeto datosSelect no está definido correctamente.');
        }
    }

    const btnEnviar = async (eForm) => {
        eForm.preventDefault(); //Evita que la pagina se recargue

        const res = await fetch(`${urlApi}/articulo`, {
            method: 'POST',
            body: JSON.stringify(articulo),
            headers: { "Content-Type": "application/json" }
        });
        const info = await res.json();

        console.log(info);

        console.log("Se ha enviado");
    }

    return (
        <>
            <StrictMode>
                <CartProvider>

                    <NavBar />

                </CartProvider>
                <div className=" flex flex-col px-14 gap-8 w-full h-screen">
                    <div className="flex flex-col gap-6">
                        <div className="py-4 border-b-2 border-red">
                            <p className='text-4xl font-bold'>Agregar Productos</p>
                        </div>
                        <div className="flex gap-8">
                            <div className="flex flex-col xl:flex-row align-middle justify-center">
                                <form className='bg-white p-12 flex gap-6 rounded-xl' onSubmit={btnEnviar}>
                                    <div className='xl:w-full flex flex-col gap-4'>
                                       <div className="grid grid-cols-2 gap-4">
                                            <InputForm anotherClassLabel={'gap-y-3'} placeHolder={'Hola'} anotherClassInput={' h-8'} name={'id_articulo'} title={"ID"} typeInput={"number"} enviarTipeo={enviarTipeo} />
                                            <InputForm anotherClassLabel={'gap-y-3'} anotherClassInput={' h-8'} name={'nombre'} title={"Nombre"} typeInput={"text"} enviarTipeo={enviarTipeo} />
                                            <InputForm anotherClassLabel={'gap-y-3'} anotherClassInput={'h-40 '} name={'segunda_desc'} title={"Descripcion"} typeInput={"text"} enviarTipeo={enviarTipeo} />
                                            <Selector text="Categorias" opciones = {optionsSelectCategory} enviarSelect={setSelect} idValue={1}></Selector>
                                            </div>
                                        <div className="flex flex-col xl:flex-row  w-full justify-between gap-4">
                                            <InputForm anotherClassLabel={'gap-y-3'} anotherClassInput={'h-8'} name={'costo'} title={"Costo"} typeInput={"number"} stepInput={"any"} enviarTipeo={enviarTipeo} />
                                            <InputForm anotherClassLabel={'gap-y-3'} anotherClassInput={'h-8'} name={'margen'} title={"Margen"} typeInput={"number"} stepInput={"any"} enviarTipeo={enviarTipeo} />
                                            <InputForm anotherClassLabel={'gap-y-3'} anotherClassInput={'h-8'} name={'descuento'} title={"Descuento"} typeInput={"number"} stepInput={"any"} enviarTipeo={enviarTipeo} />
                                            <InputForm anotherClassLabel={'gap-y-3'} anotherClassInput={'h-8'} name={'stock'} title={"Stock"} typeInput={"number"} stepInput={"any"} enviarTipeo={enviarTipeo} />
                                        </div>
                                        <div className="flex flex-col xl:flex-row  w-full gap-4">
                                            <InputForm anotherClassLabel={'gap-y-3'} anotherClassInput={'h-8'} name={'impuesto'} title={"Impuesto"} typeInput={"number"} stepInput={"any"} enviarTipeo={enviarTipeo} />
                                            <InputForm anotherClassLabel={'gap-y-3'} anotherClassInput={'h-8'} name={'talla'} title={"Talla"} typeInput={"number"} enviarTipeo={enviarTipeo} />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="xl:w-1/5 flex flex-col gap-4 py-4  h-full bg-white rounded-xl">
                                <div className="flex flex-col xl:flex-row  w-full h-1/2 items-center justify-center ">
                                    <div className="flex items-baseline gap-2">
                                        <i className="fa-regular fa-file-image text-9xl"></i>
                                        <div className=" text-red h-full flex  gap-2">
                                            <i className="fa-solid fa-cloud-arrow-up"></i>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 flex flex-col  gap-8 xl:gap-4 xl:w-full xl:h-1/2 ">
                                    <p>Imagenes Adicionales</p>
                                    <div className="flex flex-row flex-wrap  justify-center gap-8 xl:gap-4 px-3">
                                        <div className="xl:w-5/12 xl:h-1/2 border-2 border-red text-red items-center justify-center rounded-lg p-2 text-xs">
                                            <i className="fa-regular fa-image text-lg flex"></i>
                                            <p>Subir imagen</p>
                                        </div>
                                        <div className="xl:w-5/12 xl:h-1/2 border-2 border-red text-red items-center justify-center rounded-lg p-2 text-xs">
                                            <i className="fa-regular fa-image text-lg flex"></i>
                                            <p>Subir imagen</p>
                                        </div>
                                        <div className="xl:w-5/12 xl:h-1/2 border-2 border-red text-red items-center justify-center rounded-lg p-2 text-xs">
                                            <i className="fa-regular fa-image text-lg flex"></i>
                                            <p>Subir imagen</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row xl:flex-col xl:w-full xl:justify-end justify-center">
                        <div className="container-buttons flex xl:w-3/12">
                            <button onClick={enviarTipeo} className="px-10 py-1 tracking-wide text-white text-sm font-bold transition-colors duration-200 transform border-solid bg-red rounded-md hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red">
                                Guardar
                            </button>
                            <div>
                                <button onClick={btnCerrarSesion} className="px-10 py-1 tracking-wide text-white text-sm font-bold transition-colors duration-200 transform border-solid bg-red rounded-md hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red">
                                    Cerrar Sesion
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </StrictMode>
        </>
    )
}
