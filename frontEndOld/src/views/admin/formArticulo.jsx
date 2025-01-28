import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/allNavBar/navBar";
import { CartProvider } from "../../components/carrito/carritoContext";
import { UploadImg } from "../../components/form/uploadImg";
import { FormArticuloAdmin } from "../../components/form/formArticulo";
import { Boton } from "../../components/buttons/boton";
import { crearProducto } from "../../helper/crearProducto";
import { urlApi } from "../../constants/urlApi";
import { Cargando } from '../../components/alerts/cargando';
import { MensajeOK } from "../../components/alerts/mensajeOk";

export const FormArticulo = () => {
  const [imagenes, setImagenes] = useState([]);
  const [activarValidaciones, setActivarValidaciones] = useState(false);
  const [verError, setVerError] = useState(false);
  const [mensajeError, setMensajeError] = useState("");

  const [cargando, setCargando] = useState(false);

  const [isSubido, setIsSubido] = useState(false)

  //* Recibir las imagenes
  const definirImagenes = (data) => {
    //console.log(data);
    setImagenes(data);
  };

  const enviar = () => {
    setActivarValidaciones(!activarValidaciones);
  };

  const obtenerData = async (data) => {
    const response = await crearProducto(data);

    if (response.respuesta) {
      subirProducto(response.datos);

    } else {
      setMensajeError(response.error);
      setVerError(true);
    }
  };

  const subirProducto = async (producto) => {
    setCargando(true);

    //*Creacion de objeto que nos permitirá el envio de imagenes en formato JSON
    const formData = new FormData();

    imagenes.map((item) => {
      formData.append("fotos", item);
    });

    formData.append("producto", JSON.stringify(producto));
    
    const response = await fetch(`${urlApi}/subirimagen`, {
      method: "POST",
      body: formData
    });

    console.log(response);

    if (response.ok) {
        setCargando(false);
        const data = await response.json();
        console.log(data);
        setIsSubido(true);
    }
    
  };

  return (
    <>
    {
        cargando ? <Cargando texto="Subiendo producto..." /> :
        isSubido ? <MensajeOK titulo='¡Producto subido correctamente!' texto='Actualmente tu producto ya se encuentra en el sistema' textRuta='Ir a home' /> :
    <>
      <CartProvider>
        <NavBar />
      </CartProvider>

      <div className=" flex flex-col px-14 py-6 gap-8 w-full min-h-screen mb-5">
        <div className="flex flex-col gap-6 w-full">
          <div className="py-4 border-b-2 border-red ">
            <p className="text-4xl font-bold">Editar producto</p>
          </div>
          <div className="flex xl:flex-row flex-col gap-8">
            <FormArticuloAdmin
              activarValidaciones={activarValidaciones}
              enviarData={obtenerData}
              isError={verError}
              error={mensajeError}
            />
            <UploadImg imagenes={definirImagenes} />
          </div>
        </div>
        <div className="flex w-full justify-center px-8">
          <Boton
            text={"Guardar"}
            tipoBoton={"relleno"}
            enviarAccion={enviar}
          ></Boton>
        </div>
      </div>
      </>
    }
    </>
  );
};
