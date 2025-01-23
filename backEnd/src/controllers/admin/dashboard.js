const db = require("../../db");
const { dataDashboard } = require("../../helpers/dataDashboard");
const { jsonRespuesta } = require("../../lib/jsonRespuesta");

const getAllVentas = async (req,res) =>{

    const { dataFecha } = req.params;
    
    try {
        //TODO: CONSULTA A LA BASE DE DATOS
        const response = await db.query(`SELECT articulos.nombre, articulos.id_categoria, ventas.fecha, SUM(det_venta.cantidad) AS cantidad FROM (articulos INNER JOIN det_venta ON articulos.id_articulo = det_venta.id_articulo) INNER JOIN ventas ON ventas.id_venta = det_venta.id_venta WHERE ventas.fecha BETWEEN '2024-01-01' AND '2024-12-31' GROUP BY articulos.nombre, articulos.id_categoria, ventas.fecha`);
        
        if (response.rows.length == 0) {
            res.status(200).json(jsonRespuesta(200 , {error: "¡No se encontrarón ventas!"} ));    
        }
        //TODO: LLAMADOS A LA FUNCION QUE NOS PERMITE TODO EL FILTRADO Y EL RETORNO DE LAS CANTIDAD SEGUN EL MES
        //*Retornar BICICLETAS:
        const datosBicicletas = await dataDashboard(response.rows, [1,2,3], dataFecha);
        
        //console.log(datosBicicletas , 'BICLETAS');

        //*RETORNAR ROPA
        const datosRopa = await dataDashboard(response.rows, [5,7,8], dataFecha);

        //console.log(datosRopa, 'ROPA');
        //*RETORNAR ACCESORIOS
        const datosAccesorios = await dataDashboard(response.rows, [4,6,9] , dataFecha);
        
        //console.log(datosAccesorios, 'ACCESORIOS');


        //*Respuesta al admin
        res.status(200).json(jsonRespuesta(200 , {bicicletas: datosBicicletas, ropa: datosRopa, accesorios: datosAccesorios} ));

    } catch (error) {
        console.log(error);
        res.status(300).json(jsonRespuesta(300, {error: error}))
    }

};

module.exports = { getAllVentas }