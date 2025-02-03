const { Router } = require("express");
const { subirImagen } = require("../helpers/subirImagen");

const router = Router();

//CONFIGURACION DEL MULTER
const multer = require("multer");
const storage = multer.memoryStorage(); //Imagenes en memoria, son temporales
const upload = multer({ storage});

router.post("/articulos/subirarticulo/", upload.array("imgUrl", 5), subirImagen);



module.exports = router;