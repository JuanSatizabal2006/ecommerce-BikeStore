const bcrypt = require('bcryptjs');

const encriptar = async ( textoPlano )=>{
    const hash = await bcrypt.hash(textoPlano, 10);
    return hash
}

const comparar = async (contraseñaPlana, hashContraseña) =>{
    return await bcrypt.compare(contraseñaPlana, hashContraseña);
}

module.exports = { encriptar, comparar }