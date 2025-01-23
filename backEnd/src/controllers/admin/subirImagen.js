const { config } = require('dotenv');
const { subirAws } = require('../../helpers/s3');
const { crearRuta } = require('../../helpers/crearRuta');
const { jsonRespuesta } = require('../../lib/jsonRespuesta');
config();

const subirImagen = async (req, res, next)=>{
    console.log(req.body);
    try {
        //* En esta variable unicamente retornamos los datos del articulo que no son las imagenes
        const producto = JSON.parse(req.body.producto);
        console.log(producto);

        //* Retornamos la ruta que se le asignará a la imagen
        const ruta = crearRuta(producto);
        console.log(ruta, '==========RUTA=========');

        //*req.files son las imagenes que nos llegan del front
        const result = await Promise.all(req.files.map(async (file) => {
            return await subirAws(file, ruta);
        }));

        console.log(result);

        console.log({respuesta: "Archivo subido " +  result});

        req.user = {imagenes: result, producto: producto}
        next()

    } catch (error) {
        res.status(300).json(jsonRespuesta(300, {error: error}));
    }

}


module.exports = { subirImagen }