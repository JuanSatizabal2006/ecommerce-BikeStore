const express = require("express"); //Importacion de modulos express
const morgan = require("morgan"); //Importacion de modulos morgan
const cors = require("cors"); //Importacion de modulos cors
const { CLOUD_NAME, API_KEY, API_KEY_2 } = require("./config");
const bikeRoutes = require("./routes/bike.routes");



const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_KEY_2,
  secure : true
});

console.log(cloudinary.config());


const app = express(); //En app recaen todas las funcionalidades de express

app.use(cors()); //Comunicar el servidor del front con el backend
app.use(morgan("dev"));
app.use(express.json()); //Establecer que express lea objetos JSON
app.use(express.urlencoded({ extended: true }));
//*Definir que usaremos el modulo fileupload

app.use(bikeRoutes);

app.listen(3000); //Definir el puerto
console.log("Servidor en el puerto 3000");
