import { validarUsuario } from "./forms_validation.js";

const MAX_NOMBRE = 20;
const MAX_APELLIDO = 30;

export function generarArrayParaValidacion() {

    let usuario = generarObjetoParaValidacion("suUsername", "suUsernameError", validarUsuario(document.getElementById("suUsername").value));

    var listaValidacion = [
        usuario
        /*contrasena,
        contrasena2,
        nombre,
        apellidos,
        telefono,
        mail,
        mail2,
        pais,
        edad
        */
    ];
    return listaValidacion;
}

function generarObjetoParaValidacion(input, inputError, metodoValidacion) {
    let objetoValidacion = new Object();
    objetoValidacion.inputId = input;
    objetoValidacion.inputErrorId = inputError;
    objetoValidacion.validar = metodoValidacion;
    // intentar meterlo en objeto: objetoValidacion.validar = ejecutarMetodoValidacion(input);
    return objetoValidacion;
}






