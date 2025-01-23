const db = require("../../db");
const { jsonRespuesta } = require("../../lib/jsonRespuesta");

//TODO: Calculo de cantidades
const cantStockDisponible = async (req, res) =>{
    const response = await db.query("SELECT SUM(stock) FROM articulos WHERE stock >= 1");
    console.log(response.rows[0]);
    res.status(200).json(jsonRespuesta(200, response.rows[0]));
}

const cantStockNoDisponible = async (req, res) =>{
    const response = await db.query("SELECT SUM(stock) FROM articulos WHERE stock <= 1");
    console.log(response);
    res.status(200).json(jsonRespuesta(200, response.rows[0]));
}

const cantVentas = async (req, res) =>{
    const response = await db.query("SELECT SUM(cantidad) FROM det_venta");
    console.log(response);
    res.status(200).json(jsonRespuesta(200, response.rows[0]));
}

const cantUsuarios = async (req, res) =>{
    const response = await db.query("SELECT * FROM usuarios ORDER BY id_usuario ASC");
    console.log(response);
    res.status(200).json(jsonRespuesta(200, response.rowCount));
}

//TODO: Calculo de rangos en las ventas

const masVendidos = async (req, res) =>{
    const response = await db.query("SELECT articulos.nombre, SUM(det_venta.cantidad) AS cantidad FROM (articulos INNER JOIN det_venta ON articulos.id_articulo = det_venta.id_articulo) INNER JOIN ventas ON ventas.id_venta = det_venta.id_venta WHERE ventas.fecha BETWEEN '2024-01-01' AND '2024-12-31' GROUP BY articulos.nombre, cantidad ORDER BY cantidad DESC LIMIT 3");

    console.log(response);

    res.status(200).json(jsonRespuesta(200, response.rows));
}

const menosVendidos = async (req, res) =>{
    const response = await db.query("SELECT articulos.nombre, SUM(det_venta.cantidad) AS cantidad FROM (articulos INNER JOIN det_venta ON articulos.id_articulo = det_venta.id_articulo) INNER JOIN ventas ON ventas.id_venta = det_venta.id_venta WHERE ventas.fecha BETWEEN '2024-01-01' AND '2024-12-31' GROUP BY articulos.nombre, cantidad ORDER BY cantidad ASC LIMIT 3");

    console.log(response);

    res.status(200).json(jsonRespuesta(200, response.rows));
}
//SELECT ventas.id_venta, articulos.nombre, articulos.url_img FROM (ventas INNER JOIN det_venta ON ventas.id_venta = det_venta.id_venta) INNER JOIN articulos ON articulos.id_articulo = det_venta.id_articulo ORDER BY id_venta DESC LIMIT 3;
const ultimasVentas = async (req, res)=>{
    const response = await db.query("SELECT ventas.id_venta, articulos.nombre, articulos.url_img FROM (ventas INNER JOIN det_venta ON ventas.id_venta = det_venta.id_venta) INNER JOIN articulos ON articulos.id_articulo = det_venta.id_articulo ORDER BY id_venta DESC LIMIT 3");

    console.log(response);

    res.status(200).json(jsonRespuesta(200, response.rows));
}

module.exports = { cantStockDisponible, cantStockNoDisponible, cantVentas, cantUsuarios, masVendidos, menosVendidos, ultimasVentas }