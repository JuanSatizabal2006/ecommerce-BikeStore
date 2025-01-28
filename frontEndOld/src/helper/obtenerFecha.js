//TODO: Funcion para obtener la fecha
export const obtenerFecha = ()=>{
    
    // Obtener la fecha actual
    const fechaActual = new Date();

    // Obtener el día, mes y año
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Nota: Los meses van de 0 a 11 en JavaScript
    const año = fechaActual.getFullYear();

    // Formatear la fecha en el formato dd-mm-yyyy
    const fechaFormateada = (dia < 10 ? '0' : '') + dia + '-' + (mes < 10 ? '0' : '') + mes + '-' + año;

    return fechaFormateada
}

