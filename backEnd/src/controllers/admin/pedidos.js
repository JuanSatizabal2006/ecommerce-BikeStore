const db = require("../../db");
const { jsonRespuesta } = require('../../lib/jsonRespuesta');

const allPedidos = async (req,res)=>{
    //*Consulta
    const response = await db.query('SELECT articulos.id_articulo, ventas.id_venta, articulos.nombre AS articulo, usuarios.nombre AS usuario, det_venta.cantidad, referencia, det_venta.precio_unit FROM ((ventas INNER JOIN usuarios ON usuarios.id_usuario = ventas.id_usuario) INNER JOIN det_venta ON det_venta.id_venta = ventas.id_venta) INNER JOIN articulos ON articulos.id_articulo = det_venta.id_articulo GROUP BY ventas.id_venta, articulos.nombre, usuarios.nombre, det_venta.cantidad, referencia, det_venta.precio_unit, articulos.id_articulo ORDER BY id_venta ASC');

    res.status(200).json(jsonRespuesta(200, response.rows));
}

const onePedido = async (req,res) =>{

    const { idVenta, idArticulo } = req.params;
    
    //!Validacion por si no se ingresan datos
    if (!idVenta || !idArticulo) {
        return res.status(300).json(jsonRespuesta(300, {error : '¡Todos los campos son necesarios!'}))
    }

    //!Validacion por si se ingresan letras
    if (isNaN(idVenta) || isNaN(idArticulo)) {
        return res.status(300).json(jsonRespuesta(300, {error : '¡Solo se pueden ingresar numeros!'}))
    }

    try {
        //*Consulta
        const response = await db.query('SELECT img_user, articulos.id_articulo,usuarios.nombre AS "nombreUsuario", usuarios.telefono, usuarios.correo, usuarios.id_usuario, usuarios.direccion, ventas.id_venta, ventas.fecha, (det_venta.precio_unit * det_venta.cantidad) AS total, det_venta.cantidad AS cantidad, det_venta.envio,articulos.nombre AS articulo, referencia, url_img FROM ((ventas INNER JOIN usuarios ON usuarios.id_usuario = ventas.id_usuario) INNER JOIN det_venta ON det_venta.id_venta = ventas.id_venta) INNER JOIN articulos ON articulos.id_articulo = det_venta.id_articulo WHERE ventas.id_venta = $1 AND articulos.id_articulo = $2', [idVenta, idArticulo]);

        //!Validamos si no sé encontró el pedido
        if (response.rows.length === 0) {
            return res.status(404).json(jsonRespuesta(404, {error : '¡No se encontró!'}))
        }

        res.status(200).json(jsonRespuesta(200, response.rows));

    } catch (error) {
        res.status(500).json(jsonRespuesta(500, {error: `¡Algo ha pasado: ${error}`}));
    }
}

module.exports= { allPedidos, onePedido }