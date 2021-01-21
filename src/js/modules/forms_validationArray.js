import { validarUsuario, validarContrasena, validarIgualdad, validarNombres } from "./forms_validation.js";

const MAX_NOMBRE = 20;
const MAX_APELLIDO = 30;

export function generarArrayParaValidacion() {
  let usuario = generarObjetoParaValidacion(
    "suUsername",
    "suUsernameError",
    validarUsuario(document.getElementById("suUsername").value)
  );

  let nombre = generarObjetoParaValidacion(
    "suName",
    "suNameError",
    validarNombres(document.getElementById("suName").value, MAX_NOMBRE)
  );

  let apellido = generarObjetoParaValidacion(
    "suSurname",
    "suSurnameError",
    validarNombres(document.getElementById("suSurname").value, MAX_APELLIDO)
  );

  let contrasena = generarObjetoParaValidacion(
    "suPassw",
    "suPasswError",
    validarContrasena(document.getElementById("suPassw").value)
  );

  let contrasena2 = generarObjetoParaValidacion(
    "suPassw2",
    "suPasswError2",
    validarIgualdad(document.getElementById("suPassw").value, document.getElementById("suPassw2").value)
  );

  var listaValidacion = [
    usuario,
    contrasena,
    contrasena2,
    nombre,
    apellido
    
    // telefono, mail, mail2, pais, edad
  ];
  return listaValidacion;
}

export function generarObjetoParaValidacion(
  input,
  inputError,
  metodoValidacion
) {
  let objetoValidacion = new Object();
  objetoValidacion.inputId = input;
  objetoValidacion.inputErrorId = inputError;
  objetoValidacion.validar = metodoValidacion;
  return objetoValidacion;
}
