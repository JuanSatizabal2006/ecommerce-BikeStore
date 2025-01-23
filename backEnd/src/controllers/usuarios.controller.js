const db = require("../db");
const { config } = require('dotenv');
config();

const { comparar, encriptar } =  require('../helpers/encriptar');
const { jsonRespuesta } = require("../lib/jsonRespuesta");
const { crearToken } = require("../helpers/generarToken");

//TODO: LOGIN
const getUsuario = async (req,res,next) =>{

    const { correo, contraseña } = req.body; 


    if (!correo || !contraseña) {
        return res.status(409).json(jsonRespuesta(409,{
            error: '¡Todos los campos son requeridos!'
        }));
    }
    
    try {

        const infoUser = await db.query('SELECT * FROM usuarios WHERE correo = $1', [correo]);
        //*Primero hay que validar si el usuario (correo) existe
        if (infoUser.rowCount == 0) {
            return res.status(404).json(jsonRespuesta(404, { error: 'Correo o contraseña no coinciden' }))
        }
        //TODO: Informacion del usuario
        const dataUser = infoUser.rows[0];
        console.log(dataUser);
        const userContraseña = dataUser['contraseña'];//*Retorna unicamente la contraseña

        //*Comparamos si las contraseñas coinciden, pero, esta comparacion se realiza con las contraseñas encriptadas (No es necesario desencriptar)
        //*realizado con el metodo compare de bcrypt, pero aqui lo importamos de un helper, por eso la sintaxis es asi
        const validarContraseña = await comparar(contraseña, userContraseña);
        console.log(validarContraseña);
        //*Validamos las contraseña es correcta
        if (!validarContraseña) {
                    return res.status(404).json(jsonRespuesta(404, { error: 'Correo o contraseña no coinciden' }))
        }

        const dataUserToken = {
            id_usuario : dataUser['id_usuario'], 
            nombreUser: dataUser['nombre'],
            rol: dataUser['id_rol']
        }

        //*Creacion del token con la funcion importada
        const token = await crearToken(dataUserToken);

        console.log(token);

        res.json(jsonRespuesta(200, {
            message: '¡Usuario inició sesion correctamente!',
            //*Token creado y enviado, este se guardará en el localstorage (front)
            token: token,
            //*Informacion para usar sin problema en el front
            usuario: {
                id_usuario : dataUser['id_usuario'], 
                nombreUser: dataUser['nombre'],
                correo: dataUser['correo'],
                telefono: dataUser['telefono']
            }
        }))
        
    } catch (error) {
        next(error)
    }
}

const getUserToken = async (req, res)=>{
    //req.user => payload del token
    const {id_usuario, rol} = req.user;
    console.log('si entramos');
    //!Condicional para validar roles
    console.log(id_usuario , rol);
    try {
        const responseUserToken = await db.query("SELECT rol.id_rol, descripcion FROM rol INNER JOIN usuarios ON rol.id_rol = usuarios.id_rol WHERE usuarios.id_usuario = $1" ,[id_usuario]);

        if (responseUserToken.rows.length == 0) {
            return res.status(404).json(jsonRespuesta(404, { message: '¡Acceso denegado!' }))
        }
        const infoEnviar = responseUserToken.rows[0];
        
        console.log(infoEnviar);

        res.status(200).json(jsonRespuesta(200, { infoEnviar }))

    } catch (error) {
        console.log(error);
        res.status(300).json(jsonRespuesta(300, {error: `es por esto: ${error} puta madre`}))
    }
}

//TODO: REGISTRO
const postUsuario = async (req, res) => {
    console.log(req.user);
    const { id_usuario, id_rol , nombre, apellido, correo,  telefono , tipo_doc, contraseña } = req.user
    //console.log(id_rol, nombre, apellido, correo,  telefono , no_doc ,  tipo_doc, contraseña);

    console.log(typeof id_rol, typeof nombre, typeof apellido, typeof correo, typeof telefono, typeof contraseña, typeof id_usuario);
    
    //!Verifico si las variables extraídas no son falsas o undefined, null, 0, una cadena vacía ("") o NaN
    if ( !id_rol || !nombre || !correo || !telefono || !apellido ||  !tipo_doc || !contraseña || !id_usuario) {
        return res.status(409).json(jsonRespuesta(409 , {
            error: '¡Todos los campos son requeridos!'
        }))  
    }

    //!Validamos datos tipo numero
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

    //!Validamos que el numero de documento cuente con 10 caracteres
    if (id_usuario.toString().length != 10) {
        return res.status(400).json(jsonRespuesta(400 ,{
            error: 'El numero de documento debe ser de 10 caracteres'
        }))
    }

    //!Validamos que el nombre y apellido no contengan numeros
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

    //!Validamos si ya existe el ID
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

    //*Juntar el apellido y nombre en un mismo valor
    const nomnbreCompleto = `${nombre}  ${apellido}`;
    console.log(nomnbreCompleto);

    //TODO: ENCRIPTACION DE LA CONTRASEÑA
    const hashContraseña = await encriptar(contraseña);
    console.log(hashContraseña);

    try {
        
        const userResponseRegistro = await db.query('INSERT INTO usuarios(id_usuario,id_rol, nombre, correo, telefono, tipo_doc, "contraseña") VALUES ($1 , $2 , $3, $4, $5, $6, $7)' , [ id_usuario, id_rol, nomnbreCompleto, correo, telefono, tipo_doc, hashContraseña] );
        console.log(userResponseRegistro);

        res.status(200).json(jsonRespuesta(200 ,{
            message : '¡Usuario creado con exito!'
        }))
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(jsonRespuesta(500 ,{
            error: 'Error al crear el usuario, intenta de nuevo'
        }))
    }
}

const getOneUsuario = async (req,res) => {
    const { id } = req.params;

    const idUsuario = parseInt(id);

    try {
        const responseOneUsuario = await db.query('SELECT * FROM usuarios WHERE id_usuario = $1', [idUsuario]);
        const oneUsuario = await responseOneUsuario.rows[0];

        res.status(200).json(jsonRespuesta(200 ,{
            oneUsuario
        }))

    } catch (error) {
        console.log(error);
        return res.status(500).json(jsonRespuesta(500 ,{
            error: 'Error al obtener el usuario' + error
        }))
    }

}
module.exports = { getUsuario, postUsuario, getUserToken, getOneUsuario }