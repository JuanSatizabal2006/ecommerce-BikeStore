import { urlApi } from "../constants/urlApi";
import { letraCategoria } from "./obtenerLetraCategoria";
import { validarFormulario } from "./validarFormulario";

export const crearProducto = async (data)=>{
    const validacion = validarFormulario(data);

    //! Validamos la respuesta de nuestra funcion de validacion
    if (validacion.respuesta) {
        //*Destructuracion
        const { id_articulo, nombre, impuesto, descuento, margen, stock, costo, categoria, segunda_desc } = data;

        //*OBTENCION DE LA ULTIMA REFERENCIA CON LA CATEGORIA SELECCIONADA
        const response = await fetch(`${urlApi}/referencia/${categoria}`);
    
        const ultimaReferencia = await response.json();
        const referenciaAlfa = await ultimaReferencia.body.max.substring(ultimaReferencia.body.max.length - 3);
        const numReferencia = parseInt(referenciaAlfa) + 1;
        
        //*CONVERTIMOS LOS DATOS QUE SON DECIMALES 
    
        const impuestoDecimal = impuesto / 100;
        const descuentoDecimal = descuento / 100;
        const margenDecimal = margen / 100;
        const costoDecimal = parseFloat(costo.toFixed(2));
    
        //*Convertimos la referencia en base  al retornr de la funcion letraCategoria
        const letraRef = letraCategoria(categoria);
    
        const referenciaNueva = nombre[0].toUpperCase() + letraRef + 'G' + (numReferencia.toString().length == 1 ? `00${numReferencia}` : numReferencia.toString().length == 2 ? `0${numReferencia}` : numReferencia) 
    
        console.log(referenciaNueva);
        //* Calcular el precio total
        const precioTotal = parseFloat((costo + (costo * margenDecimal) - (costo * descuentoDecimal) + (costo * impuestoDecimal)));
    
        const bodyEnviar = {
            id_articulo: id_articulo,
            nombre: nombre,
            impuesto: impuestoDecimal,
            descuento: descuentoDecimal,
            margen: margenDecimal,
            stock: stock,
            costo: costoDecimal,
            id_categoria: categoria,
            segunda_desc: segunda_desc,
            precio_total: precioTotal,
            referencia: referenciaNueva
        }
    
        console.log(bodyEnviar);

        return {datos: bodyEnviar, respuesta: true };
    }else{
        return {error: validacion.error , respuesta : false}
    }
}