const db = require("../../db");
const { crearReferencia } = require("../../helpers/rutaImg");
const { jsonRespuesta } = require("../../lib/jsonRespuesta");

const postArticulos = async (req, res) => {
  const {
    nombre,
    impuesto,
    descuento,
    margen,
    stock,
    costo,
    idCategoria,
    descripcion,
    talla,
    precioTotal,
  } = req.body;

  const imagenes = req.images.toString();
  const referencia = await crearReferencia(idCategoria, nombre);
  console.log(referencia);

  try {
    const result = await db.query(
      'INSERT INTO articulos (nombre, impuesto, descuento, margen, stock, costo, "imgUrl", "idCategoria", descripcion, talla, "precioTotal", referencia) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
      [
        nombre,
        impuesto,
        descuento,
        margen,
        stock,
        costo,
        imagenes,
        idCategoria,
        descripcion,
        talla,
        precioTotal,
        referencia,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ error: "Error al guardar el articulo" });
    }
    res.status(201).json({
      mensaje: "Articulo creado con exito!",
      data: result.rows,
    });
  } catch (error) {
    res
      .status(400)
      .json({ mensaje: "Error al guardar el articulo", error: error.message });
  }
};

const getArticulos = async (req, res) => {
  //Este endpoint incluye la paginacion
  try {
    const {
      page = 1,
      limit = 5,
      categoria = "",
      minPrecio = 0,
      maxPrecio = 0,
    } = req.query;
    const offset = (page - 1) * limit;
    let params = [];
    let query = "SELECT * FROM articulos WHERE (1=1) ";
    let count = 0;

    //CONDICIONALES PARA APLICAR FILTROS
    if (categoria) {
      let categorias = categoria.split(",");
      params.push(...categorias);
      //Se recorre el array de cateogorias y se agrega al query, cada posicion de ese array es una categoria
      query += `AND "idCategoria" IN (${categorias
        .map((value, index) => `$${index + 1}`)
        .join(",")}) `;
    }

    if (minPrecio && maxPrecio) {
      params.push(minPrecio, maxPrecio);
      query += `AND precioTotal BETWEEN $${params.length - 1} AND $${
        params.length
      }`;
    }
    //FIN DE CONDICIONALES PARA LOS FILTROS
    //Contar los resultados de la busqueda
    const queryCount = await db.query(query.replace("*", "COUNT(*)"), params.length > 0 ? params : null);
    
    query += `ORDER BY "idArticulo" ASC LIMIT $${params.length + 1} OFFSET $${
      params.length + 2
    }`;
    console.log(query);
    
    const response = await db.query(query, params.length > 0 ? [...params, limit, offset] : [limit, offset]);
    
    if (response.rowCount === 0) {
      return res.status(404).json({ mensaje: "No se encontraron articulos" });
    }

    res.status(200).json({
      mensaje: "Articulos obtenidos con exito",
      data: {
        count: queryCount.rows[0].count,
        articulos: response.rows,
      },
    });
  } catch (error) {
    res
      .status(400)
      .json({ mensaje: "Error al buscar articulos", error: error.message });
  }
};

//Talvez tenga que eliminar las imagenes actuales y volver a crearlas
const putArticulos = (req, res) =>{
  try {
    const {
      nombre,
      impuesto,
      descuento,
      margen,
      stock,
      costo,
      idCategoria,
      descripcion,
      talla,
      precioTotal,
    } = req.body;
  } catch (error) {
    res.status(400).json({mensaje : "Error al actualizar el articulo", error: error.message})
  }
}

const getUltimoId = async (req, res) => {
  const response = await db.query(
    "SELECT MAX(id_articulo + 1) FROM public.articulos"
  );

  console.log(response.rows);

  res.status(200).json(jsonRespuesta(200, response.rows));
};

const getUltimaReferencia = (async = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(300)
      .json(jsonRespuesta(300, { error: "¡Todos los campos son necesarios" }));
  }

  const response = await db.query(
    "SELECT MAX(referencia) FROM articulos WHERE id_categoria = $1",
    [id]
  );
  console.log(response.rows);

  res.status(200).json(jsonRespuesta(200, response.rows[0]));
});

module.exports = {
  getUltimaReferencia,
  getUltimoId,
  postArticulos,
  getArticulos,
};
