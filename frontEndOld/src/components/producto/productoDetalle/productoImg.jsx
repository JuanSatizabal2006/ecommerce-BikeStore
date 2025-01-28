import React, { useState } from 'react'

export const ProductoImg = ({imagenes}) => {
  
  const urlImg = imagenes.split(",");
  const [imagenPrincipal, setImagenPrincipal] = useState(urlImg[0]);
  const [imagenActiva, setImagenActiva] = useState(0);

  //Obtencion de los enlaces de las imagenes

  const cambiarImagen = (url, index) => { // Cambiado a recibir solo el URL como argumento
    console.log(url);
    console.log(index);
    setImagenPrincipal(url);//Cambiar la URL de la imagen principal
    setImagenActiva(index);//Definir que imagen tendrá la opacidad
  };
  //En el metodo .map, el parametro index define la posicion del valor que se encuentra en el array
  return (
    <div className='flex gap-2 flex-col-reverse h-auto justify-end xl:flex-row'>
        <div className='flex flex-row-re flex-wrap md:flex-col gap-4'>
          {urlImg.map((url, index)=>(
              <img key={url} src={url} className={`w-[5.5rem] h-30 object-fit: cover cursor-pointer hover:scale-100 ${index === imagenActiva ? 'opacity-100' : 'opacity-50'} `} alt="" onClick={() => cambiarImagen(url, index)} />
          ))}
        </div>
        <div className=''>
            <img src={imagenPrincipal} className='h-full object-fit:cover' alt='' />
        </div>
    
    </div>
    
  )
}
