/* Els camps Name i Surname tendran una amplada màxima recomanada de 20 i 30 caracters respecticament. 
    Si l’usuari supera el límit, mostrarà sota cada camp un missatge en color error tipus Longitud màxima superada
 */
export function validarNombres(texto) {
    console.log(texto);
    //TODO
    return true;
}

/*
Validar username en sortir del camp (perdre focus) que compleixi aquestes normes: 
Començarà obligatòriament per “u”
Després vendrà un número de 6 xifres
Acabarà amb una sola lletra majúscula
*/
export function validarUsuario(texto) {
    //TODO
    return true;
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
    //TODO
    return true;
}

/*
Se mostrarà un placeholder amb 699-999999 i s’ha de validar que compleix aquest format quan el input perd el focus → si no, mostrarà error
El número de telèfon ha de començar amb un 6 o amb un 9
*/
export function validarTelefono(texto) {
    //TODO
    return true;
}

/*
Coincidencia: Se comprovarà i es mostrarà error en les mateixes condicions que amb el password
En clicar el botó ENVIAR se comprovarà si l’email compleix els regles de validació d’emails de BalearicBuild, que son: 
aaaaaaaaa@bbbbbbbbbbb.ccc   
aaaaaaaaa només conté lletres majuscules o minuscules
Només hi ha 1 arroba
Només hi ha 1 punt
bbbbbbbbbbb pot contenir màxim 20 lletres minuscules
ccc només pot ser ‘es’, ‘com’ o ‘net’
*/
export function validarEmail(texto) {
    //TODO
    return true;
}
