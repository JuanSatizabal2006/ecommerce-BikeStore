const authRespuesta = {
    body:{
        user : User,
        accederToken: '',
        refrescarToken: '',
    }
}

const authRespuestaError = {
    body :{
        error: ''
    }
}

const User = {
    id_usuario: Number,
    nombre: '',
    correo: ''
}