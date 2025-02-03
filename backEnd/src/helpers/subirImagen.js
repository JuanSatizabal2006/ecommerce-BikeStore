const cloudinary = require("cloudinary").v2;
const { CLOUD_NAME, API_KEY, API_KEY_2 } = require("../config");
const { crearRuta } = require("./rutaImg");

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_KEY_2,
  secure: true,
});
//REFERENCIA NOMBRE + CATEGORIA + ALGUN ID UNICO

//TOCA ENVOLVERLO COMO UNA PROMESA YA QUE CLOUINARY RETORNA UN CALLBACK Y NO UNA PROMESA PREDERTIMADANETE
//Y ASI PODEMOS USAR PROMISE.ALL PARA SUBIR VARIAS IMAGENES A LA VEZ
const promiseCloudinary = async (file, ruta) => {
  return new Promise((resolve, reject) => {
    //Usamos el metodo upload_stream de cloudinary para subir la imagen
    cloudinary.uploader
      .upload_stream({ folder: ruta }, (error, uploadedImage) => {
        //Manejo de errores
        if (error)
          return {
            mensaje: "Subida de imagen fallida",
            error: error,
          };
        resolve(uploadedImage.secure_url); //Si todo sale bien, resolvemos la promesa con la imagen subida
      })
      .end(file.buffer); //Esto envia el buffer de la imagen a cloudinary
  });
};

//Middleware donde recibimos las imagenes y las subimos a Cloudinary, estas imagenes son temporales, es decir que no se guardan
//en el servidor, se suben directamente a Cloudinary, esto funciona asi ya que manejamos el acceso a la imagen con su buffer y no con su ruta
//es decir, estas se guardan en memoria RAM y no el disco

const subirImagen = async (req, res, next) => {
  try {
    const { idCategoria, nombre } = req.body;

    //llamado a la funcion para crear la ruta en la cual se guardara la imagen
    let ruta = await crearRuta(idCategoria, nombre);

    const result = await Promise.all(
      req.files.map((file) => promiseCloudinary(file, ruta))
    );
    if (!result) {
      return res.send({ message: "Error al subir la imagen" });
    }
    req.images = result;
    next();
  } catch (error) {
    res.send({ message: "Error al subir la imagen", error: error.message });
  }
};

module.exports = { subirImagen };
