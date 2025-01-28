import React, { useEffect, useState } from "react";
import { urlApi } from "../../constants/urlApi";
const imgDefault =
  "https://bikestoresena.s3.amazonaws.com/imagenesExtras/imgProductoDefault.png";

export const UploadImg = ({imagenes}) => {
  ////const [mostrarImagenAdicional, setMostrarImagenAdicional] = useState(true);
  const [imagenesCargadas, setImagenesCargadas] = useState([]); //*4 Imagenes de abajo
  const [imagenPrincipal, setImagenPrincipal] = useState(imgDefault); //*Imagen principal

  //*Array el cual contiene todas las imagenes que va a recibir mi backend y por consecuencia mi bucket
  const [imagenesEnviar, setImagenesEnviar] = useState([]);

  const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

  //*Funciones para la imagen principal
  const handleImagenPrincipalClick = () => {
    document.getElementById("inputImagenPrincipal").click();
  };

  const handleImagePrincipal = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      console.log("BOTON NO RARO");

      const imagenSubida = event.target.files[0];
      console.log(imagenSubida);

      setImagenPrincipal(URL.createObjectURL(imagenSubida));

      //*Agregar la imagen principal al array a enviar al backend
      const nuevaImagen = [...imagenesEnviar];

      nuevaImagen[0] = imagenSubida;
      setImagenesEnviar(nuevaImagen);
    }
  };

  //*Funcion para cargar imagenes
  const handleImagenSubida = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const imagenSubida = event.target.files[0];

      if (imagenSubida) {
        //!Validacion para que no ingrese archivos que no sean tipo imagen
        if (!allowedTypes.includes(imagenSubida.type)) {
          //* Mostrar el modal de error aquí
          alert(
            "Por favor, ingrese un formato de imagen válido (PNG, JPEG, JPG o WEBP)."
          );
          return;
        }

        const nuevasImagenes = [...imagenesCargadas];
        const nuevasEnviar = [...imagenesEnviar];

        const currentIndex = nuevasImagenes.length; ////< 4 ? nuevasImagenes.length : 3;
        

        nuevasImagenes[currentIndex] = imagenSubida;
        nuevasEnviar[currentIndex + 1] = imagenSubida;

        setImagenesCargadas(nuevasImagenes);
        setImagenesEnviar(nuevasEnviar);

        if (imagenesCargadas.length < 5) {
          setImagenesCargadas([...imagenesCargadas, imagenSubida]);
          setImagenesEnviar(nuevasEnviar);
        } else {
          //* Reemplazar la cuarta imagen por la nueva imagen cargada
          const nuevasImagenes = [...imagenesCargadas];
          nuevasImagenes[3] = imagenSubida;
          setImagenesCargadas(nuevasImagenes);
        }
      }
    }
  };

  //*Funcion para eliminar una imagen
  const handleEliminarImagen = (index) => {
    const nuevasImagenes = [...imagenesCargadas];
    const enviarImagen = [...imagenesEnviar];
    console.log(index, "INDEX");

    nuevasImagenes.splice(index, 1);
    enviarImagen.splice(index + 1, 1);

    setImagenesCargadas(nuevasImagenes);
    setImagenesEnviar(enviarImagen);
    ////setMostrarImagenAdicional(true); // Vuelve a mostrar el div addImg
  };

  //*Cada vez que el array imagenes enviar cambie, esta funcion se activa y envia el array al componente padre
  useEffect(()=>{

    imagenes(imagenesEnviar);

  },[imagenesEnviar]);

  return (
    <>
      <div className="xl:w-[20rem] flex flex-col gap-4 py-4  bg-white rounded-xl">
        <div className="flex flex-col xl:flex-row  w-full h-1/2 items-center justify-center ">
          <div
            className="flex justify-center items-center h-full py-4 relative cursor-pointer"
            onClick={handleImagenPrincipalClick}
          >
            <input
              type="file"
              id="inputImagenPrincipal"
              className="hidden"
              onChange={handleImagePrincipal}
              accept="image/png, image/jpeg, image/jpg, image/webp"
              name="fotos"
            />
            <img src={imagenPrincipal} className="h-full" alt="" />
          </div>
        </div>
        <div className="px-6 flex flex-col lg:w-full h-fit ">
          <p>Imagenes Adicionales</p>
          <div className=" justify-center gap-8 xl:gap-4 h-full p-4 font-bold">
            <div className="grid grid-cols-2 font-bold">
              {imagenesCargadas.map((imagen, index) => (
                <div
                  key={index}
                  className="container-images full text-red flex items-center justify-center relative rounded-lg p-3 text-xs"
                >
                  <div className="text-red text-[1.5rem] xl:text-[1rem] flex gap-1 absolute right-[0.2rem] bottom-[1rem] p-[0.1rem] rounded-md bg-white">
                    <i
                      className="fa-solid fa-cloud-arrow-up cursor-pointer"
                      onClick={(e) => handleImagenSubida(e, index)}
                    ></i>
                    <i
                      className="fa-solid fa-trash-can cursor-pointer"
                      onClick={() => handleEliminarImagen(index)}
                    ></i>
                  </div>
                  <img
                    src={URL.createObjectURL(imagen)}
                    className="h-full"
                    alt=""
                  />
                </div>
              ))}
              {/* BOTON/INPUT QUE ME PERMITÉ SUBIR IMAGENES */}
              {imagenesCargadas.length < 4 && (
                <div className="h-max text-red flex flex-col items-center justify-center rounded-lg p-[0.25rem] text-xs cursor-pointer">
                  <input
                    type="file"
                    id="imagenInput"
                    className="cursor-pointer absolute top-[-9999px] h-full w-full"
                    onChange={handleImagenSubida}
                    accept="image/png, image/jpeg, image/jpg, image/webp"
                    name="fotos"
                  />
                  <label
                    htmlFor="imagenInput"
                    className="border-2 border-red text-red flex flex-col items-center justify-center rounded-lg p-[0.25rem] text-xs cursor-pointer"
                  >
                    <i className="fa-regular fa-image text-lg flex cursor-pointer"></i>
                    <p className="cursor-pointer">Subir imagen</p>
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
