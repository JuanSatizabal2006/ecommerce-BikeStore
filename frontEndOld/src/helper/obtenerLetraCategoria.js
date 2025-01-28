export const letraCategoria = (numero) =>{
    switch (numero) {
        case 1:
            return 'M'; // Montaña
        case 2:
            return 'U'; // Urbana
        case 3:
            return 'R'; // Ruta
        case 4:
            return 'C'; // Cascos
        case 5:
            return 'G'; // Guantes
        case 6:
            return 'L'; // Luces
        case 7:
            return 'F'; // Femenino
        case 8:
            return 'M'; // Masculino
        case 9:
            return 'S'; // Seguridad
        default:
            return ''; // En caso de un número no válido
    }
}