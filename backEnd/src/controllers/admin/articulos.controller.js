const db = require("../../db");
const { jsonRespuesta } = require("../../lib/jsonRespuesta");

const postArticulos = async (req, res) => {
  //*INFORMACION QUE RECIBO DE PARTE DEL CLIENTE
  const {
    idArticulo,
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
    //referencia,
  } = req.user.producto;

  const rutasImg = req.user.imagenes.map((item) => {
    return `https://bikestoresena.s3.amazonaws.com/${item}`;
  });

  const url_img = rutasImg.toString();

  //Valido si están todos los datos
  if (
    !idArticulo ||
    !nombre ||
    !impuesto ||
    !descuento ||
    !margen ||
    !stock ||
    !costo ||
    !idCategoria ||
    !descripcion ||
    !talla ||
    !precioTotal
  ) {
    return res
      .status(300)
      .json(jsonRespuesta(300, { error: "¡Todos los campos son necesarios" }));
  }

  try {
    const result = await db.query(
      "INSERT INTO articulos (id_articulo, nombre, impuesto, descuento, margen, stock, costo, url_img, id_categoria, segunda_desc, referencia, precio_total) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      [
        id_articulo,
        nombre,
        impuesto,
        descuento,
        margen,
        stock,
        costo,
        url_img,
        id_categoria,
        segunda_desc,
        referencia,
        precio_total,
      ]
    );
    console.log(result);
    res.json(result.rows[0]);
    //res.json("Cargue efectivo");
  } catch (error) {
    //!EVITAR QUE EL SERVIDOR SE CAIGA
    res.json({ error: error.message });
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
