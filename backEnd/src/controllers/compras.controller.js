const db = require("../db");
const { jsonRespuesta } = require("../lib/jsonRespuesta");

const doCompraUser = async (req , res) =>{

    const { carrito, envio, user, fecha  } = req.body;
    //console.log(user.id_usuario);
    
    console.log(carrito);
    console.log(envio);
    console.log(user);
    console.log(typeof fecha, fecha);
    
    if ( !carrito || !envio || !user || !fecha) {
        return res.status(300).json(jsonRespuesta(300, {error: "¡Todos los datos son necesarios!"}))
    }

    //TODO: INSERT EN VENTA
    try {
        const responseVenta = await db.query("INSERT INTO ventas(id_venta, fecha, id_usuario) VALUES ((SELECT MAX(id_venta) + 1 FROM ventas), $1, $2) RETURNING *", [fecha, user]);

        //!LA RESPUESTA ES INCORRECTA?
        if (responseVenta.rows.length == 0) {
            return res.status(300).json(jsonRespuesta(300, {error : "!Error en crear la venta¡"}))
        }
        console.log(responseVenta);
        //*OBTENEMOS EL ID DE LA VENTA PARA INGRESAR EN EL INSERT DE DET_VENTA
        const id_venta = responseVenta.rows[0].id_venta;

        console.log(responseVenta.rows[0].id_venta);

        //TODO: CREAMOS LOS REGISTROS EN LA TABLA DET_VENTA, PARA ESTO LO HACEMOS DE FORMA INTERATIVA, PARA QUE LA CONSULTA SE HAGA N VECES SEGUN LA CANTIDAD DE PRODUCTOS EN EL CARRITO.

        //*Primero, obtenemos el maximo id_det de la tabla det_venta, para que al hacer el insert_into, esta secuencia no se vea afectada
        const maxIdDet = await db.query("SELECT MAX(id_det) FROM det_venta");
        //Retornamos el ultimo id de la tabla det_venta, con el fin de establecer el dato inicial para que el consecutivo no empiece desde 1
        const id_det = await maxIdDet.rows[0].max;
        console.log(typeof id_det, id_det);

        //*Establecemos el valor actual de la secuencia al máximo valor utilizado
        await db.query(`SELECT setval('det_venta_id_det_seq', $1)`, [id_det]);
        //*Insertamos la informacion en la tabla det_venta
        const insertPromises = carrito.map(async (item) => {
            await db.query("INSERT INTO det_venta(id_articulo, id_venta, cantidad, envio, precio_unit) VALUES ( $1, $2, $3, $4, $5) RETURNING * ", [item.id_articulo, id_venta, item.cantidad, envio, item.precio_total]);
        });

        //*ESPERAMOS QUE TODAS LAS PROMESAS SE CUMPLAN
        await Promise.all(insertPromises);

        //TODO: ACTUALIZAR EL VR_TOTAL EN LA TABLA VENTA
        const respuestaVrTotal = await db.query("UPDATE ventas SET vr_total = (SELECT SUM(cantidad * precio_unit) + MAX(envio) FROM det_venta WHERE det_venta.id_venta = ventas.id_venta GROUP BY id_venta) WHERE ventas.id_venta = $1" , [id_venta]);

        console.log('update vr_total', respuestaVrTotal);

        //*VALIDAMOS SI TODO OK :D
        if (respuestaVrTotal.rowCount === 0) {
            return res.status(300).json(jsonRespuesta(300, {error: "¡Compra fallida, intenta de nuevo!"}))
        }

        //TODO: ACTUALIZAR EL STOCK EN ARTICULOS

        const respuestaStock = await db.query("UPDATE articulos SET stock = stock - det_venta.cantidad FROM det_venta WHERE articulos.id_articulo = det_venta.id_articulo AND det_venta.id_venta = $1 RETURNING *", [id_venta]);

        console.log(respuestaStock.rowCount);

        if (respuestaStock.rowCount === 0) {
            return res.status(300).json(jsonRespuesta(300, {error: "¡Actualizacion de productos ha fallado!"}))
        }

        //TODO: CUANDO TODO TERMINÓ, ENVIAMOS UNA RESPUESTA AFIRMATIVA Y EL ID_VENTA
        res.status(200).json(jsonRespuesta(200, {mensaje: "¡Compra realizada con exito!", id_venta}))

    } catch (error) {
        res.status(500).json(jsonRespuesta(500, {error: `SU PUTA MADRE ${error}`}));
    }
    
}

module.exports = {doCompraUser }