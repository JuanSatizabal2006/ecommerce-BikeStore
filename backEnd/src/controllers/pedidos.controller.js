const db = require("../db");
const { jsonRespuesta } = require("../lib/jsonRespuesta")

const getOnePedido = async (req, res) =>{
    const { idPedido, idUsuario } = req.params;

    //!Validar que dichos valores si existan
    if(!idPedido || !idUsuario){
        return res.status(300).json(jsonRespuesta(300, {error: "¡Es necesario un id del pedido!"}))
    }

    try {
        //*Convertimos los datos a integer para evitar de errores por tipos de datos
        const idPedidoNumber = parseInt(idPedido);
        const idUserNumber = parseInt(idUsuario);

        //!Validar que no recibimos letras    
        if (isNaN(idPedidoNumber) || isNaN(idUserNumber)) {
            return res.status(300).json(jsonRespuesta(300, {error: "¡Solo se permiten números!"}))
        }

        //!Validamos si ese id de venta realmente pertenece a ese usuario
        const validarDatos = await db.query("SELECT nombre, correo, telefono, ciudad, id_venta, fecha FROM usuarios INNER JOIN ventas ON ventas.id_usuario = usuarios.id_usuario WHERE usuarios.id_usuario = $1 AND (ventas.id_usuario = $2 AND ventas.id_venta = $3)", [idUserNumber, idUserNumber, idPedidoNumber]);

        console.log(validarDatos);

        if (validarDatos.rows.length === 0) {
            return res.status(300).json(jsonRespuesta(300, {error: "¡Pedido no encontrado!"}))
        }

        //*Realizamos la consulta de los productos vendidos
        const respondePedido = await db.query("SELECT ventas.id_venta, ventas.fecha, ventas.vr_total, det_venta.cantidad, det_venta.envio, articulos.nombre FROM (ventas INNER JOIN det_venta ON det_venta.id_venta = ventas.id_venta) INNER JOIN articulos ON det_venta.id_articulo = articulos.id_articulo WHERE det_venta.id_venta = $1", [idPedidoNumber]);

        console.log(respondePedido);

        if (respondePedido.rows.length === 0) {
            return res.status(300).json(jsonRespuesta(300, {error: "¡No se encuentraá el pedido!"}))
        }

        res.status(200).json(jsonRespuesta(200, { articulos: respondePedido.rows, usuario: validarDatos.rows}))

    } catch (error) {
        res.status(300).json(jsonRespuesta(300, {error: error}))
    }

}

module.exports = { getOnePedido }