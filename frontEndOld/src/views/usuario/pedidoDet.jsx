import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/allNavBar/navBar";
import { Footer } from "../../components/footer/footer";
import { Informe } from "../../components/pedidos/usuario/informeDet";
import { useLocation } from "react-router-dom";
import { urlApi } from "../../constants/urlApi";
import { Boton } from "../../components/buttons/boton";
import { MensajeErrorProducto } from "../../components/alerts/mensajeErrorProducto";
import { CartProvider } from "../../components/carrito/carritoContext";
import Factura from "../../components/pdf/pdfFactura";
import { PDFDownloadLink } from "@react-pdf/renderer";

export const PedidoDet = () => {
  const [articuloPedido, setArticuloPedido] = useState([]);
  const [usuarioPedido, setUsuarioPedido] = useState([]);
  const [mostrarMensaje, setMostrarError] = useState(false);
  const [mensajeError, setMensajeError] = useState({});
  const userId = JSON.parse(localStorage.getItem("infoUser"));

  //TODO: OBTENER LOS DATOS EN LA RUTA
  // Usar useLocation() para obtener la ubicación actual
  const { search } = useLocation();

  // Crear un nuevo objeto URLSearchParams para analizar la cadena de consulta
  const params = new URLSearchParams(search);

  // Obtener los valores de los parámetros de búsqueda usando get()
  const idPedido = params.get("idPedido");
  const idUsuario = params.get("idUsuario");

  //TODO: REALIZAR CONSULTA:
  useEffect(() => {
    //TODO: VALIDAR QUE TODOS LOS DATOS NECESARIOS SE PRESENTAN
    if (!idPedido || !idUsuario) {
      setMensajeError({
        error: "¡Ups!",
        titulo: "Falta ingresar un dato",
        texto:
          "Para realizar la búsqueda, es necesario ingresar todos los datos. Por favor, completa escribe correctamente e inténtalo nuevamente.",
      });

      setMostrarError(true);
      return;
    }

    //TODO: VALIDAR QUE EL ID_USUARIO QUE INGRESA CORRESPONDE A SU INFORMACION DE SESION

    if (userId.id_usuario != idUsuario) {
      setMensajeError({
        error: "¡Pillado!",
        titulo: "No correspondes a este pedido",
        texto:
          "Parece que has intentado realizar una búsqueda con informacion que no te corresponde. Asegúrate de ingresar correctamente la información y vuelve a intentarlo.",
      });
      setMostrarError(true);
      return;
    }
    const mostrarPedido = async () => {
      const result = await fetch(`${urlApi}/pedido/${idPedido}/${idUsuario}`);

      const datosPedido = await result.json();

      //Manejo de error por si acaso el pedido no se encontró
      if (datosPedido.statuscode != 200) {
        setMensajeError({
          error: "¡Ups!",
          titulo: "Pedido no encontrado",
          texto:
            "El pedido que estás buscando no se ha encontrado en nuestro sistema. Por favor, verifica que el ID del pedido sea correcto e inténtalo de nuevo.",
        });
        setMostrarError(true);

        return;
      }

      console.log(datosPedido);

      setArticuloPedido(datosPedido.body.articulos);
      setUsuarioPedido(datosPedido.body.usuario);
    };
    mostrarPedido();
  }, []);

  console.log(articuloPedido);
  console.log(usuarioPedido);

  const descargarPDF = () => {};

  return (
    <>
      {mostrarMensaje ? (
        <MensajeErrorProducto
          texto={mensajeError.texto}
          error={mensajeError.error}
          titulo={mensajeError.titulo}
          ruta={"home"}
          textRuta={"Ir a inicio"}
          full={true}
        />
      ) : (
        <>
          <CartProvider>
            <NavBar />
          </CartProvider>
          <main className="w-full flex justify-center flex-col items-center  min-h-screen">
            <div className="flex flex-col items-center gap-3 w-full sm:w-full xl:w-[45rem] ">
              <p className="flex justify-center text-red text-2xl">
                <b>Detalles del Pedido</b>
              </p>
              <div className="w-full flex justify-center">
                <Informe
                  objArticulo={articuloPedido}
                  objUsuario={usuarioPedido}
                  idPedido={idPedido}
                />
              </div>
              <div className="flex-wrap  sm:w-[45rem] flex justify-center ">
                <PDFDownloadLink
                  document={
                    <Factura
                      articuloPedido={articuloPedido}
                      idPedido={idPedido}
                      usuarioPedido={usuarioPedido}
                    />
                  }
                  fileName="factura.pdf"
                >
                  <button className="px-10 py-2  tracking-wide text-red text-xl font-bold transition-colors duration-200 transform border-solid bg-white rounded-md hover:bg-red hover:text-white hover:border-solid border-2 hover:border-red">
                    DESCARGAR PDF
                  </button>
                </PDFDownloadLink>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};
