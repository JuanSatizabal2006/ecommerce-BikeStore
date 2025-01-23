export const validarFormulario = (data) =>{
    const { id_articulo, nombre, impuesto, descuento, margen, stock, costo, categoria, segunda_desc } = data;
    
    if (!id_articulo || !nombre || !impuesto || !descuento || !margen || !stock || !costo || !categoria || !segunda_desc ) {    
        
        return {error: '¡Todos los campos son necesarios!', respuesta: false}
    }

    //! Validar Nombre

    if (nombre.trim() === "") {
      return {error: 'Ingresa el nombre del producto', respuesta: false}
    }

    if (nombre.length > 50) {
      return {error: '¡El nombre del producto no puede superar los 50 caracteres!', respuesta: false}
    }

    //! Validar Descripción
    if (segunda_desc.trim() === "") {
        return {error: '¡Ingreasa la descripcion del producto!', respuesta: false}
    }

    if (segunda_desc.length > 500) {
        return {error: '¡El nombre del producto no puede superar los 50 caracteres!', respuesta: false}
    }

    //! Validar Costo
    if (costo < 1000 || costo > 999999999999) {
      return {error: 'Por favor, ingresa un costo válido entre 1.000 y 999.999.999.999,99', respuesta: false}
    }

    if (isNaN(costo)) {
        return {error: '¡El costo no puede contener letras', respuesta: false}
    }

    //! Validar Margen
    if (margen < 0 || margen > 100) {
      return {error: 'Por favor, ingresa un margen válido entre 0 y 100', respuesta: false}
    }

    if (isNaN(margen)) {
        return {error: '¡El margen no puede contener letras!', respuesta: false}
    }

    //! Validar Descuento
    if (descuento < 0 || descuento > 100) {
        return {error: 'Por favor, ingresa un descuento valido entre 0 y 100', respuesta: false}
    }

    if (isNaN(descuento)) {
        return {error: '¡El descuento no puede contener letras!', respuesta: false}
    }

    //! Validar Stock
    if (stock < 0 || stock > 1000) {
        return {error: 'Por favor, ingresa un stock valido entre 0 y 1000', respuesta: false}
    }

    if (isNaN(stock)) {
        return {error: '¡El stock no puede contener letras!', respuesta: false}
    }

    //! Validar Impuesto
    if (impuesto < 0 || impuesto > 100) {
      return {error: 'Por favor, ingresa un impuesto válido entre 0 y 100', respuesta: false}
    }

    if (isNaN(impuesto)) {
        return {error: '¡El impuesto no puede contener letras!', respuesta: false}
    }

    return {data : data, respuesta: true}

}