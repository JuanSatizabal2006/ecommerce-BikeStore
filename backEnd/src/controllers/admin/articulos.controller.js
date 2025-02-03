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

module.exports = { getUltimaReferencia, getUltimoId, postArticulos };
