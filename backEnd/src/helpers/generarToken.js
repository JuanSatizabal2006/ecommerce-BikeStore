const jsonwebtoken = require("jsonwebtoken");

const crearToken = async (dataUser)=>{

    return jsonwebtoken.sign(
        dataUser,
        process.env.TOKEN_SECRET,
        {expiresIn: process.env.TOKEN_EXPIRATION}
    );

}

module.exports = { crearToken }

