import React from "react";

export const Informe = ({ objArticulo, objUsuario, idPedido}) => {

  const copiaArticulos = [...objArticulo];

  console.log(copiaArticulos[0]);
  //Obtener el total de la venta
  const total = copiaArticulos.map((item)=> {
    return parseInt(item.vr_total)
  }, 0);

  return (
    <div className="flex  flex-col items-center  w-[25rem] sm:w-[45rem] bg-white rounded-xl shadow-2xl">
        <div className="flex flex-col px-5 sm:px-0 py-6 space-y-4 ">
            {objUsuario.map((item)=>(
              <div className="grid grid-cols-2" key={item.id_venta}>
                <div className="space-y-4 font-bold">
                    <p>ID:</p>
                    <p>Fecha:</p>
                    <p>Nombre:</p>
                    <p>Numero Telefonico:</p>
                    <p>Correo: </p>
                    <p>Ciudad:</p>
                </div>
                <div className="flex flex-col items-end space-y-4">
                    <p>#{idPedido}</p>
                    <p>{item.fecha.split("T")[0]}</p>
                    <p>{item.nombre}</p>
                    <p>+57 {item.telefono}</p>
                    <p className="underline">{item.correo}</p>
                    <p>{!item.ciudad ? 'No hay ciudad' : item.ciudad}</p>
                </div>
              </div>
            ))}
          {objArticulo.map((item, index)=>(
            <div className="grid grid-cols-2" key={index}>
              <p className="font-bold">{item.nombre}</p>
              <p className="flex justify-end">x{item.cantidad}</p>
            </div>
          ))}
        </div>
          <div className="border-solid border border-red  w-full"></div>
          <div className="text-2xl w-[20rem] sm:w-[37rem] flex flex-wrap justify-between font-bold py-6">
            <p>TOTAL:</p>
            <p>${new Intl.NumberFormat().format(total[0])}</p>
          </div>
    </div>
  );
};
