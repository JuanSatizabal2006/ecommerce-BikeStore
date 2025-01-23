const db = require("../db");
const { jsonRespuesta } = require("../lib/jsonRespuesta");

const getArticulos = async (req, res, next) => {

    try {
        const allArticulos = await db.query("SELECT * FROM articulos WHERE stock >= 1 ORDER BY descuento DESC, id_articulo ASC");
        res.json(allArticulos.rows);
        //res.send('Hola soy la funcion externa y estoy obteniendo todos los articulos');
    } catch (error) {
        next(error)
    }

};

const getOneArticulo = async (req, res) => {

    try {
        const { id } = req.params;
        //*Convertimos el id a un dato entero
        const idProducto = parseInt(id);
        //*Validamos que el id que nos pasan no sea un texto, null, undefined
        if (!idProducto || typeof idProducto == "string") {
            return res.status(404).json(jsonRespuesta(404, {error: '¡Articulo no encontrado!'}));
        }

        const oneArticulo = await db.query('SELECT * FROM articulos WHERE id_articulo = $1', [ idProducto ]);

        //*No se encuentra un articulo
        if(oneArticulo.rows.length === 0){
            return res.status(404).json(jsonRespuesta(404, {error: '¡Articulo no encontrado!'}))
        }

        res.status(200).json(jsonRespuesta(200 , oneArticulo.rows));

    } catch (error) {
        console.log(error.message);
    }
    
};

const getArticulosHome = async (req,res) =>{
    const response = await db.query("SELECT * FROM public.articulos WHERE stock >= 1 ORDER BY descuento DESC, id_articulo ASC LIMIT 3");
    console.log(response.rows);
    res.status(200).json(jsonRespuesta(200, response.rows));
}

const putArticulos = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nombre , costo, margen, descuento, id_categoria } = req.body;
        
        //*const selectPreview = db.query("SELECT * FROM articulos WHERE id_articulo = $1", [])

        const resultPut = await db.query("UPDATE articulos SET nombre = $1 , costo = $2, margen = $3, descuento = $4, id_categoria = $5 WHERE id_articulo = $6",[ nombre , costo, margen, descuento, id_categoria, id ])
    
        if(resultPut.rows.length === 0){
            return res.status(404).json({message : "Articulo no encontrado"})
        }
    
        res.json(resultPut);
    } catch (error) {
        next(error)
    }
}

const deleteArticulos = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await db.query('DELETE FROM articulos WHERE id_articulo = $1', [ id ]);
    
        if(result.rowCount === 0){
            return res.status(404).send("La tarea no se encuentra")
        }
        res.json(result);
        //res.sendStatus(204);
    } catch (error) {
        next(error)
    }
};

module.exports ={ getArticulos, getOneArticulo, putArticulos, deleteArticulos, getArticulosHome }