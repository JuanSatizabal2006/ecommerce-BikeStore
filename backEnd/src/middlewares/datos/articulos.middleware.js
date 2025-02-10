
const validArticulo = (req, res, next) => {
  try {
    let errors = {};

    if (!req.body.nombre) errors.nombre = "El nombre del articulo es requerido";
    if (!req.body.impuesto) errors.impuesto = "El impuesto es requerido";
    if (!req.body.descuento) errors.descuento = "El descuento es requerido";
    if (!req.body.margen) errors.margen = "El margen es requerido";
    if (!req.body.stock) errors.stock = "El stock es requerido";
    if (!req.body.costo) errors.costo = "El costo es requerido";
    if (!req.body.idCategoria) errors.idCategoria = "La categoria es requerida";
    if (!req.body.descripcion)
      errors.descripcion = "La descripcion es requerida";
    if (!req.body.talla) errors.talla = "La talla es requerida";
    if (!req.body.precioTotal)
      errors.precioTotal = "El precio total es requerido";
    if (req.files.length === 0)
      errors.imgUrl = "La imagen es requerida";
    //Revisar si hay datos en el objeto de errors para lanzarlos
    if (Object.keys(errors).length > 0) {
      const error = new Error("Error en los datos");
      error.detalles = errors;
      throw error;
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message, error: error.detalles });
  }
};


module.exports = { validArticulo };