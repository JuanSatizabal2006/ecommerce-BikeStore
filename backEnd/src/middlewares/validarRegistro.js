const db = require("../db");
const { jsonRespuesta } =  require("../lib/jsonRespuesta");

const validarRegistro = async (req, res)=>{
    
    try {
            //verifico si las variables extraídas no son falsas o undefined, null, 0, una cadena vacía ("") o NaN
            if ( !id_rol || !nombre || !correo || !telefono || !apellido ||  !tipo_doc || !contraseña || !id_usuario) {
                return res.status(409).json(jsonRespuesta(409 , {
                    error: '¡Todos los campos son requeridos!'
                }))  
            }
        
            //Validamos datos tipo numero
            if (isNaN(telefono)) {
                return res.status(400).json(jsonRespuesta(400 ,{
                    error: 'El campo telefono solo admite números'
                }))
            }
        
            if (isNaN(id_usuario)) {
                return res.status(400).json(jsonRespuesta(400 ,{
                    error: 'El campo numero de documento solo admite números'
                }))
            }
        
            //Validamos que el numero de documento cuente con 10 caracteres
            if (id_usuario.toString().length != 10) {
                return res.status(400).json(jsonRespuesta(400 ,{
                    error: 'El numero de documento debe ser de 10 caracteres'
                }))
            }
        
            //Validamos que el nombre y apellido no contengan numeros
            if (/\d/.test(nombre) ) {
                return res.status(400).json(jsonRespuesta(400 ,{
                    error: 'El nombre no puede contener numeros'
                }))
            };
        
            if (/\d/.test(apellido) ) {
                return res.status(400).json(jsonRespuesta(400 ,{
                    error: 'El apellido no puede contener numeros'
                }))
            };
        
            //Validamos si ya existe el ID
            const validarId = await db.query('SELECT id_usuario FROM usuarios WHERE id_usuario = $1' ,[id_usuario]);
            
            if (validarId.rows != 0){
                return res.status(400).json(jsonRespuesta(400 ,{
                    error: 'Numero de documento ya se encuentra registrado'
                }))
            }
        
            const validarCorreo = await db.query("SELECT correo FROM usuarios WHERE correo = $1" ,[correo]);
        
            if (validarCorreo.rows != 0){
                return res.status(400).json(jsonRespuesta(400 ,{
                    error: 'Correo ya se encuentra registrado'
                }))
            }
        
            const dataRegistro = res
        
            req.user = dataRegistro;
        
            next();
        
    } catch (error) {
        console.log(error);
        res.status(500).json(jsonRespuesta(500,{
            message: `=${error}¡Oh no!, algo malo ha sucedido`
        }))
    }
}