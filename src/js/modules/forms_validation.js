//Export para tests de Mocha:
//module.exports = { validarUsuario, validarEmail, validarTelefono, validarContrasena };

/**
 * Valida el nombre de usuario cuando se hace click fuera del campo.
 * Cumple los siguientes requisitos: comienza por u, sigue un número de 6 cifras, y acaba por una única letra mayúscula.
 * @param {String} texto con el nombre de usuario a validar.
 */
export function validarUsuario(texto) {
    let patronUsuario = new RegExp(/^u[0-9]{6}[A-Z]/);
    //TODO comprobar patron?
    if (!patronUsuario.test(texto)) {
        return "ERROR: el patrón de usuario no es válido.";
    }
    return "VALIDATED";
}

/*
La contrasenya ha de complir les regles (longitud, majúscules, etc. lliures seguint les directrius estàndard i d’accessibilitat)
En els 2 camps de Password: En clicar i sostenir el botó esquerre del ratolí sobre la icona d’un ull 
se mostrarà la contrasenya i s’ocultarà altrament 
Coincidencia: En escriure la password en un camp, se comprovarà si coincideix amb la de l’altre camp. 
Si no coincideixen (i cap dels dos camps està buid) llavors mostrarà un missatge en color error sota el segon camp de contrasenya
*/
export function validarContrasena(texto) {
    //TODO
    return true;
}

export function validarIgualdad(texto1, texto2) {
    if (texto1 != texto2) {
        return false;       //TODO mensajes de error
    }
    return true;
}

/**
 * Valida que el texto tenga una longitud mímina de 2 caracteres (para evitar iniciales) y máxima concreta.
 * Devuelve los posibles errores.
 * @param {String} texto a validar
 * @param {Number} longitud máxima que puede tener el texto
 */
export function validarNombres(texto, longitud) {
    if (texto.length == 0) {
        return "Error: campo vacío."
    } else if (texto.length > 2) {
        return "Error: no se permite el uso exclusivo de iniciales."
    } else if (texto.length > longitud) {
        return "Error: este campo no puede superar los " + longitud + " caracteres."
    }
    return "VALIDATED";
}

/*
Se mostrarà un placeholder amb 699-999999 i s’ha de validar que compleix aquest format quan el input perd el focus → si no, mostrarà error
El número de telèfon ha de començar amb un 6 o amb un 9
*/
export function validarTelefono(texto) {
    //TODO completar
    let patronTelf = new RegExp(/[0-9]{3}\-[0-9]{6}/);
    if (!patronTelf.test(texto)) {
        return false;           //TODO que devuelva el tipo de error
    }
    return true;
}

/*
regles de validació d’emails de BalearicBuild, que son: 
aaaaaaaaa@bbbbbbbbbbb.ccc   
aaaaaaaaa només conté lletres majuscules o minuscules
Només hi ha 1 arroba
Només hi ha 1 punt
bbbbbbbbbbb pot contenir màxim 20 lletres minuscules
ccc només pot ser ‘es’, ‘com’ o ‘net’
*/
export function validarEmail(texto) {
    let patronMail = new RegExp
    //TODO continuar
    if (!patronMail.test(texto)) {
        return false;           //TODO que devuelva el tipo de error
    }
    return true;
}
