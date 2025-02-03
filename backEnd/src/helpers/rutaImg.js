//faltaria crear una funcion que reciba los datos de la bicicleta y cree una referencia para este

const crearRuta = (id, referencia = "prueba") => {
  let retorno = "";
  let idCat = parseInt(id);
  switch (idCat) {
    case 1:
      console.log("entro en el case 1");

      retorno = `bicicletas/montana/${referencia}/`;
      break;
    case 2:
      retorno = `bicicletas/ruta/${referencia}/`;
      break;
    case 3:
      retorno = `bicicletas/urbana/${referencia}/`;
      break;
    case 4:
      retorno = `ropa/masculino/${referencia}/`;
      break;
    case 5:
      retorno = `ropa/femenino/${referencia}/`;
      break;
    case 6:
      retorno = `ropa/guantes/${referencia}/`;
      break;
    case 7:
      retorno = `accesorios/seguridad/${referencia}/`;
      break;
    case 8:
      retorno = `accesorios/cascos/${referencia}/`;
      break;
    case 9:
      retorno = `accesorios/buff/${referencia}/`;
      break;
    case 10:
      retorno = `accesorios/balaclava/${referencia}/`;
      break;
  }
  console.log(typeof id);

  console.log("valor en la funcion => " + retorno);

  return retorno;
};

module.exports = { crearRuta };
