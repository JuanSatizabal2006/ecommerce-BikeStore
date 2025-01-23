const { response } = require('express');
const db = require('../../db');
const { jsonRespuesta } = require('../../lib/jsonRespuesta')
/*
SELECT id_articulo, nombre, stock, referencia, precio_total, descripcion FROM articulos INNER JOIN categorias ON articulos.id_categoria = categorias.id_categoria ORDER BY id_articulo ASC
*/
const allProductosInventario = async (req,res) =>{
    const response = await db.query("SELECT id_articulo, nombre, stock, referencia, precio_total, descripcion, referencia, url_img FROM articulos INNER JOIN categorias ON articulos.id_categoria = categorias.id_categoria ORDER BY id_articulo ASC");
    console.log(response);

    return res.status(200).json(jsonRespuesta(200, response.rows))
}


const oneProducto = async (req,res)=>{

    const {idArticulo} = req.params;

    //!Validaciones:
    if (!idArticulo) {
        return res.status(300).json(jsonRespuesta(300 , {error : '¡Se necesitan parametros!'}))
    }

    if (isNaN(idArticulo)) {
        return res.status(300).json(jsonRespuesta(300 , {error : '¡Solo puedes ingresar numeros!'}))
    } 

    try {
        //*Consulta
        const responseVentas = await db.query("SELECT nombre, stock, url_img, precio_total, SUM(precio_unit * cantidad) FROM articulos INNER JOIN det_venta ON articulos.id_articulo = det_venta.id_articulo WHERE articulos.id_articulo = $1 GROUP BY nombre, stock, url_img, precio_total", [idArticulo]);

        //!Validamos si dicho producto tuvo ventas, con el fin de solo enviar la info del producto
        if (responseVentas.rows.length === 0) {
            const responseCeroVentas = await db.query("SELECT  nombre, stock,url_img, precio_total FROM articulos WHERE id_articulo = $1", [idArticulo]);

            return res.status(200).json(jsonRespuesta(200, {infoProducto: responseCeroVentas.rows, cantVentas: [{sum: 0}]}))
        }

        /*
        SELECT SUM(cantidad) FROM articulos INNER JOIN det_venta ON articulos.id_articulo = det_venta.id_articulo WHERE articulos.id_articulo = 2
        */ 
        const responseCantVentas = await db.query("SELECT SUM(cantidad) FROM articulos INNER JOIN det_venta ON articulos.id_articulo = det_venta.id_articulo WHERE articulos.id_articulo = $1", [idArticulo]);

        //!Validamos por si las moscas de que dicho producto cuente con ventas
        if (responseCantVentas.rows.length === 0) {

            return res.status(300).json(jsonRespuesta(300 , {error : '¡No hay ventas de este producto!'}))

        }


        res.status(200).json(jsonRespuesta(200, {infoProducto : responseVentas.rows, cantVentas : responseCantVentas.rows}))
    } catch (error) {
        return res.status(300).json(jsonRespuesta(300 , {error : `¡Algo ha pasado! error: ${error}`}))
    }

}

module.exports = { allProductosInventario, oneProducto }