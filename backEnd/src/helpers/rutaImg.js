const db = require("../db.js");
const { añadirCeros } = require("./añadirCeros.js");

const crearReferencia = async (id, nombre) => {
  //QUERY OBTENER ULTIMO ID DE IMAGENES
  const queryCategoria = await db.query(
    'SELECT * FROM categorias WHERE "idCategoria" = $1',
    [id]
  );
  //Obtenemos las dos primeras letras de la categoria y subcategoria
  const categoria = `${queryCategoria.rows[0].categoria
    .slice(0, 2)
    .toUpperCase()}${queryCategoria.rows[0].subCategoria
    .slice(0, 2)
    .toUpperCase()}`;
  
  //Obtenemos el id del ultimo articulo de la categoria
  const maxArticulo = await db.query(
    `SELECT MAX("idArticulo") FROM articulos WHERE "idCategoria" = $1`,
    [id]
  );

  let consecutivo = !maxArticulo.rows[0].max
    ? "001"
    : añadirCeros(maxArticulo.rows[0].max + 1);
  return categoria + consecutivo;
};

const crearRuta = async (id, nombre) => {
  let idCat = parseInt(id);
  let referencia = await crearReferencia(id, nombre);
  const rutas = {
    1: `bicicletas/montana/`,
    2: "bicicletas/ruta/",
    3: "bicicletas/urbana/",
    4: "ropa/masculino/",
    5: "ropa/femenino/",
    6: "ropa/guantes/",
    7: "accesorios/seguridad/",
    8: "accesorios/cascos/",
    9: "accesorios/buff/",
    10: "accesorios/balaclava/",
  };

  return `${rutas[idCat]}${referencia}`;
};

module.exports = { crearRuta, crearReferencia };
