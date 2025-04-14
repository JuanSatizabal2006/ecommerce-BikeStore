const db = require("../../db");

const getCategorias = async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM categorias ORDER BY "idCategoria" ASC;'
    );

    if (result.rowCount <= 0) {
      res.status(404).json({
        mensaje: "Error al cargar las categorias",
        error: "No hay categorias registradas",
      });
    }

    return res.status(200).json({
      mensaje: "Categorias cargadas correctamente",
      data: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error en el controlador",
      error: error.message,
    });
  }
};

const getSubCategorias = async (req, res) => {
  if (!req.params.id) {
    return res.status(404).json({
      mensaje: "Error al cargar las subcategorias",
      error: "El id de la categoria es obligatorio",
    });
  }

  const { id } = req.params;

  //Validamos si es un numero
  if (isNaN(id)) {
    return res.status(404).json({
      mensaje: "Error al cargar las subcategorias",
      error: "El id de la categoria debe ser un numero",
    });
  }

  try {
    const result = await db.query(
      `SELECT * FROM "subCategorias" WHERE "idCategoria" = $1`,
      [id]
    );

    if (result.rowCount <= 0) {
      return res.status(404).json({
        mensaje: "Error al cargar las subcategorias",
        error: `No se encontraron subcategorias relacionadas a la categoria => ${id} `,
      });
    }

    return res.status(200).json({
      mensaje: "Subcategorias cargadas correctamente",
      data: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error en el controlador",
      error: error.message,
    });
  }
};

module.exports = { getCategorias, getSubCategorias };
