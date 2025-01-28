import React, { useContext, createContext, useEffect, useState } from "react";
import { urlApi } from '../constants/urlApi.js';

//Componente que manejará el contexto, es decir, en este componente usaremos las funciones que nos permitan un logeo

const AuthContext = createContext({
    isLogin: false,
    rol: null
});

export const AuthProvider = ({children}) =>{
    //OBTENER EL ROL DEL LOCAL STORAGE
    const [rol , setRol] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    
    const [verificacionCompleta, setVerificacionCompleta] = useState(false);
    
    useEffect(()=>{

        const obtenerRol = async ()=>{
            //*Obtenemos la informacion del usuario que se almacenaba en el localeStorage
            //const infoUser = JSON.parse(localStorage.getItem("infoUser"));
           
            try {
                const tokenUser = localStorage.getItem("tokenUser");
                
                //!Validamos si no existe el token en el localeStorage para definir el rol de visitante sin login
                
                if (!tokenUser) {
                    setRol('notLogin');
                    setVerificacionCompleta(true);
                    return
                }

                //*Hacemos la consulta a la DB para verificar si ese token es de nosotros (valida la contraseña del token)
                const rolState = await fetch(`${urlApi}/usuario`, {
                    headers : {
                        token: tokenUser
                    }
                })
    
                const response = await rolState.json();
                //! Si la validacion con el token retorna algun error

                if (response.statuscode === 400) {
                    //* Enviarlo a un componente diferente
                    setRol('notLogin');
                    setIsLogin(false);
                    setVerificacionCompleta(true);
                    return
                }
                const dataUser = await response.body.infoEnviar;

                //* Asignar el tipo de rol 
                if (dataUser.id_rol == 1) {
                    setRol('loginAdmin');
                    setIsLogin(true);

                }else if (dataUser.id_rol == 2) {
                    setRol('loginUser');
                    setIsLogin(true);
                }

                setVerificacionCompleta(true);

            } catch (error) {
                console.log(error);
            }
        }
        obtenerRol();
    },[]);

    
    return(

        <AuthContext.Provider value={{ rol, isLogin }}> 
            { verificacionCompleta ? children : null }
        </AuthContext.Provider>
    )
}

//* useAuth retorno todas las funcionalidades y valores de context AuthContext, es decir, que useAuth es todo eso de arriba
export const useAuth = () => useContext(AuthContext);