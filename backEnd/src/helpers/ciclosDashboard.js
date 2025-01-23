const { obtenerFecha } = require("./obtenerFecha");

const allMes = (arrayRecibido)=>{

    let arrayEnviar = [];
    console.log(arrayRecibido, 'objeto');
    //Ciclo para crear el tiempo y definir la posicion de las ventas segun la fecha de compra
    for (let i = 1; i <= 12 ; i++) {

        //Como manejamos fechas AAAA-MM-DD, para fijar el tiempo solo necesitamos el mes, incialmente lo dejamos undefined
        let  iterativo = '';
        //Segun el tamaño de i (como caracter) le agregamos un 0 al principio, esto para los meses que solo tienen un digtio ( 1 => 01)
        //Esto se hace con el fin de respetar la sintaxis de fechas que se maneja en la BD
        i.toString().length == 1 ?  iterativo = '0' + i : iterativo =  i;

        let fechaInicio, fechaFin;
        
        //Fechas que crearán el rango de tiempo
        fechaInicio = new Date(`2024-${iterativo}-01`);
        fechaFin = new Date(`$2024-${iterativo}-31`);
        
        //Filtro los items por su fecha, estos se guardan en un nuevo array
        const datoFecha = arrayRecibido.filter((item)=>{
                let fechaBackend = new Date(item.fecha);
                return fechaBackend >= fechaInicio && fechaBackend <= fechaFin 
        })
        
        //Realizo una sumatoria de toda la cantidad de productos vendidos en un mes
        const datosSumados = datoFecha.reduce((acumulador, item) => acumulador +  parseInt(item.cantidad) ,0);

        //Agregamos esa sumatoria al array que principalmente estaba vacio
        arrayEnviar.push(datosSumados);
        
    }
    console.log(arrayEnviar);
    return arrayEnviar
}

const oneMes = (arrayRecibido, cantDias, mes)=>{

    let arrayEnviar = [];
    
    //Ciclo para crear el tiempo y definir la posicion de las ventas segun la fecha de compra
    for (let i = 1; i <= cantDias ; i++) {

        //Como manejamos fechas AAAA-MM-DD, para fijar el tiempo solo necesitamos el mes, incialmente lo dejamos undefined
        let  iterativo = '';
        //Segun el tamaño de i (como caracter) le agregamos un 0 al principio, esto para los meses que solo tienen un digtio ( 1 => 01)
        //Esto se hace con el fin de respetar la sintaxis de fechas que se maneja en la BD
        i.toString().length == 1 ?  iterativo = '0' + i : iterativo =  i;
        console.log(iterativo);
        //Fechas que crearán el rango de tiempo
        let fecha = obtenerFecha(new Date(`2024-${mes}-${iterativo}`));
        console.log(fecha);

        //Filtro los items por su fecha, estos se guardan en un nuevo array
        const datoFecha = arrayRecibido.filter((item)=>{
                let fechaBackend = obtenerFecha(new Date(item.fecha));

                return fechaBackend == fecha
        })
        
        //Realizo una sumatoria de toda la cantidad de productos vendidos en un mes
        const datosSumados = datoFecha.reduce((acumulador, item) => acumulador +  parseInt(item.cantidad) ,0);

        //Agregamos esa sumatoria al array que principalmente estaba vacio
        arrayEnviar.push(datosSumados);
        
        }

    return arrayEnviar
}

module.exports = { allMes, oneMes }