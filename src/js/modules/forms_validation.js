//Export para tests de Mocha:
//module.exports = { validarUsuario, validarEmail, validarTelefono, validarContrasena };

const MIN_PASSW = 3;
const MAX_PASSW = 8;

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

/**
 * Valida si la contraseña sigue los siguientes estándares:
 * - entre 3 y 8 caracteres (en constantes)
 * - caracteres alfanuméricos o guiones bajos
 * @param {String} texto con la contraseña a validar
 */

export function validarContrasena(texto) {
    if (texto.length < MIN_PASSW) {
        return "ERROR: la contraseña no puede tener menos de " + MIN_PASSW + " caracteres."
    } else if (texto.length > MAX_PASSW) {
        return "ERROR: la contraseña no puede tener más de " + MAX_PASSW + " caracteres."
    }
    let patronContrasena = new RegExp(/^[a-zA-Z0-9_]*$/);
    if (!patronContrasena.test(texto)) {
        return "ERROR: el patrón de contraseña no es válido.";
    }
    //TODO ir añadiendo más requisitos de expresiones regulares
    return "VALIDATED";
}

/**
 * Comprueba si dos valores son iguales.
 * @param {String} texto1 primera contraseña/mail/otro texto para comprobar
 * @param {String} texto2 segunda contraseña/mail/otro texto para comprobar
 * @returns true si son iguales, false si son diferentes
 */
export function validarIgualdad(texto1, texto2) {
    if (texto1 != texto2) {
        return false;
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
        return "ERROR: campo vacío."
    } else if (texto.length < 2) {
        return "ERROR: no se permite el uso exclusivo de iniciales."
    } else if (texto.length > longitud) {
        return "ERROR: este campo no puede superar los " + longitud + " caracteres."
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
