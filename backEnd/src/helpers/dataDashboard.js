const { oneMes, allMes } = require("./ciclosDashboard");

const dataDashboard = async ( objetoData, categorias, mes )=>{

    console.log(categorias);
    console.log(mes, 'mes');
    
    //Aplicamos un filtro para unicamente retornar los datos que tengan dichas categorias
    const datosFiltrados = await objetoData.filter((item) => {
        return item.id_categoria === categorias[0] || item.id_categoria === categorias[1] || item.id_categoria === categorias[2]
    });
    
    //Filtro para aplicar la cantidad de dias segun el mes
    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
        fechasRango = 31
        return oneMes(datosFiltrados, fechasRango, mes);

    }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
        fechasRango = 30
        return oneMes(datosFiltrados, fechasRango, mes);

    }else if (mes == 2) {
        return oneMes(datosFiltrados, 28, mes);

    }else if(mes == 'todos'){
        return allMes(datosFiltrados);

    }else{

        return 'DATOS INVALIDOS'
    }

}

module.exports = { dataDashboard }