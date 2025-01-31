//MEJORAR A OPCION DE OBJETO


const crearRuta = (data) => {
    let retorno = '';

  switch (data.id_categoria) {
    case 1:
        retorno = `bicicletas/montana/${data.referencia}`
      break;
    case 2:
        retorno = `bicicletas/urbana/${data.referencia}`
      break;
    case 3:
        retorno = `bicicletas/ruta/${data.referencia}`
      break;
    case 4:
        retorno = `cascos/${data.referencia}`
      break;
    case 5:
        retorno = `guantes/${data.referencia}`
      break;
    case 6:
        retorno = `luces/${data.referencia}`
      break;
    case 7:
        retorno = `ropa/femenino/${data.referencia}`
      break;
    case 8:
        retorno = `ropa/masculino/${data.referencia}`
      break;
    case 9:
        retorno = `seguridad/${data.referencia}`
      break;
    default:
        retorno = '¡Algo ha pasado!'
      break;
  }

  return retorno
};

module.exports = { crearRuta };
