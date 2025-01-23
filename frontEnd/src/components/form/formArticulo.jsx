import React, { useEffect, useState } from "react";
import { InputForm } from "../inputs/inputForm";
import { Selector } from "../inputs/inputSelect";
import { optionsSelectCategory } from "../../constants/optionsSelect";
import { urlApi } from "../../constants/urlApi";
import { MensajeError } from '../alerts/mensajeError'

export const FormArticuloAdmin = ({ activarValidaciones, enviarData, isError, error }) => {
  const [id, setId] = useState(0);

  const [articulo, setArticulo] = useState({
    id_articulo: 0,
    nombre: "",
    impuesto: 0,
    descuento: 0,
    margen: 0,
    stock: 0,
    costo: 0,
    categoria: "",
    segunda_desc: ""
  });

  //* Enviar articulo al componente padre
  if (activarValidaciones) {
    enviarData(articulo);
  }

  const setSelect = (datosSelect) => {
    if (datosSelect && datosSelect.value) {
      setArticulo({
        ...articulo,
        categoria: datosSelect.value,
      });
    }
  };

  //* DEFINIR EL ID DEL PRODUCTO A CREAR
  useEffect(() => {
    const obtenerDatos = async () => {
      const response = await fetch(`${urlApi}/id`);

      const data = await response.json();   
      setId(data.body[0].max);

      setArticulo({ ...articulo, id_articulo: parseInt(data.body[0].max) });
    };
    obtenerDatos();
  }, []);

  //* Funcion recibida por parte del componente hijo (INPUT)
  const enviarTipeo = (dato) => {
    //* Destructuracion de dato
    const [nombreI, valorI, isNumber] = dato;

    //! Condicional para definir el tipo de conversion
    isNumber
      ? setArticulo({ ...articulo, [nombreI]: parseFloat(valorI) })
      : setArticulo({ ...articulo, [nombreI]: valorI });
  };

  return (
    <>
      <form className="bg-white justify-center xl:justify-normal py-6 sm:p-12 flex gap-6 rounded-xl w-full">
        <div className="xl:w-full flex flex-col gap-4">
          <div className="sm:grid sm:grid-cols-2 gap-4 flex flex-col">
            <div className="flex flex-col ">
              <p>ID</p>
              <p className="pl-4 font-bold text-4xl">#${id}</p>
            </div>

            <InputForm
              anotherClassLabel={"gap-y-3"}
              anotherClassInput={"pl-2 h-10"}
              placeHolder={"Camiseta Ciclismo Mang"}
              name={"nombre"}
              title={"Nombre"}
              typeInput={"text"}
              enviarTipeo={enviarTipeo}
            />
            <InputForm
              anotherClassLabel={"gap-y-3"}
              anotherClassInput={"pl-2 text-start h-40 "}
              placeHolder={"Escribe aqui..."}
              name={"segunda_desc"}
              title={"Descripcion"}
              typeInput={"text"}
              enviarTipeo={enviarTipeo}
            />
            <Selector
              text="Categorias"
              opciones={optionsSelectCategory}
              enviarSelect={setSelect}
              idValue={1}
            ></Selector>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-4 w-full gap-4">
            <InputForm
              anotherClassLabel={"gap-y-3"}
              anotherClassInput={"pl-2 h-10"}
              placeHolder={"0"}
              name={"costo"}
              title={"Costo"}
              typeInput={"number"}
              stepInput={"any"}
              enviarTipeo={enviarTipeo}
            />
            <InputForm
              anotherClassLabel={"gap-y-3"}
              anotherClassInput={"pl-2 h-10"}
              placeHolder={"0%"}
              name={"margen"}
              title={"Margen"}
              typeInput={"number"}
              stepInput={"any"}
              enviarTipeo={enviarTipeo}
            />
            <InputForm
              anotherClassLabel={"gap-y-3"}
              anotherClassInput={"pl-2 h-10"}
              placeHolder={"0"}
              name={"descuento"}
              title={"Descuento"}
              typeInput={"number"}
              stepInput={"any"}
              enviarTipeo={enviarTipeo}
            />

            <div className="flex flex-col gap-y-2 ">
              <p>Precio</p>
              <p className="border-2 border-red rounded-md h-10 w-full p-2">
                Precio (Calculado)
              </p>
            </div>

            <InputForm
              anotherClassLabel={"gap-y-3"}
              anotherClassInput={"pl-2 h-10 "}
              placeHolder={"0"}
              name={"impuesto"}
              title={"Impuesto"}
              typeInput={"number"}
              stepInput={"any"}
              enviarTipeo={enviarTipeo}
            />
            <InputForm
              anotherClassLabel={"gap-y-3"}
              anotherClassInput={"pl-2 h-10"}
              placeHolder={"0"}
              name={"stock"}
              title={"Stock"}
              typeInput={"number"}
              enviarTipeo={enviarTipeo}
            />
            {
                isError && 
                <div className="col-span-2">
                    <MensajeError error={error} />
                </div>
            }
          </div>
        </div>
      </form>
    </>
  );
};
