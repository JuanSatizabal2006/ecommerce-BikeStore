const { jsonRespuesta } = require("../lib/jsonRespuesta");
const  jsonwebtoken  = require("jsonwebtoken");

const autenticarToken = async (req, res, next) =>{
    //Recibimos el token
    const token = req.headers['token'];

    try {
         //Si existe un token:
        if (token) {
            jsonwebtoken.verify(token, process.env.TOKEN_SECRET, (error , data)=>{
                //data => Payload del token
                if (error) {
                    //Si el token  que se envia no es el mismo que el token guardado
                    return res.status(400).json(jsonRespuesta(400, {
                        error: "Token Invalido"
                    }))
                }else{
                    //Si la contraseña del token es correcta, continuamos con la ruta y enviamos el token
                    req.user = data;
                    next()
                }
            })
        }else{
            //Esto sucede cuando no existe un token, es decir, cuando en la consulta no le pasamos un token
            res.status(400).json(jsonRespuesta(400, {
                error: 'Necesitas un token'
            }))
        }   
    } catch (error) {
        console.log(error);
        res.status(500).json(jsonRespuesta(500,{
            message: `=${error}¡Oh no!, algo malo ha sucedido`
        }))
    }
}

module.exports = { autenticarToken }