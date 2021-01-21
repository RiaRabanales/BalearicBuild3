import {
  validarNombres,
  validarUsuario,
  validarContrasena,
  validarTelefono,
  validarEmail,
  validarIgualdad,
} from "./forms_validation.js";

import {
  generarHtmlSignUp,
  generarHtmlPaises,
  generarHtmlLogIn,
  generarConfirmacionSignUp,
} from "./forms_html.js"

export function cargarFormularios() {
  cargarFormSignUp();
  cargarFormLogIn();
}

const MAX_NOMBRE = 20;
const MAX_APELLIDO = 30;

function cargarFormSignUp() {
  document.getElementById("signUpOverlay").innerHTML = generarHtmlSignUp();
  generarHtmlPaises();

  /**** EVENT HANDLERS DEL FORMULARIO DE SUSCRIPCIÓN ****/
  // Event handlers de Username:
  let varUsername = document.getElementById("suUsername");
  varUsername.addEventListener("focusin", (e) => {
    e.target.style.background = "lightgrey";
  });
  varUsername.addEventListener("focusout", (e) => {
    gestionarValidacionUsername(e);
  });

  document.getElementById("suPassw").addEventListener("focusin", (e) => {
    e.target.style.background = "lightgrey";
  });
  document.getElementById("suPassw").addEventListener("focusout", (e) => {
    gestionarValidacionContrasena(e);
  });

  document.getElementById("suPasswIcono").addEventListener("click", () => {
    //TODO justificar cambio de ojo
    visualizarContrasena("suPassw");
  });
  document.getElementById("suPasswIconoNo").addEventListener("click", () => {
    visualizarContrasena("suPassw");
  });

  document.getElementById("suPassw2").addEventListener("focusin", (e) => {
    e.target.style.background = "lightgrey";
  });
  document.getElementById("suPassw2").addEventListener("focusout", (e) => {
    gestionarIgualdadContrasena(e);
  });

  document.getElementById("suPasswIcono2").addEventListener("click", () => {
    visualizarContrasena("suPassw2");
  });
  document.getElementById("suPasswIconoNo2").addEventListener("click", () => {
    visualizarContrasena("suPassw2");
  });

  //Event handlers de nombre y apellidos: se validan al submit.
  document.getElementById("suName").addEventListener("focusin", (e) => {
    e.target.style.background = "lightgrey";
  });
  document.getElementById("suName").addEventListener("focusout", (e) => {
    e.target.style.background = "";
  });

  document.getElementById("suSurname").addEventListener("focusin", (e) => {
    e.target.style.background = "lightgrey";
  });
  document.getElementById("suSurname").addEventListener("focusout", (e) => {
    e.target.style.background = "";
  });

  //Event handler de Teléfono:
  document.getElementById("suTelf").addEventListener("focusin", (e) => {
    event.target.style.background = "lightgrey";
  });
  document.getElementById("suTelf").addEventListener("focusout", (e) => {
    let telf = document.getElementById("suTelf").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarTelefono(telf)) {
      e.target.style.background = "";
    } else {
      //TODO
    }
  });

  document.getElementById("suMail").addEventListener("focusin", (e) => {
    e.target.style.background = "lightgrey";
  });
  document.getElementById("suMail").addEventListener("focusout", (e) => {
    let mail = document.getElementById("suMail").value;
    if (validarEmail(mail)) {
      e.target.style.background = "";
      document.getElementById("suMail2").disabled = false;
      document.getElementById("suMail2Label").classList.remove("disabledText");
    } else {
      //TODO
    }
  });

  document.getElementById("suMail2").addEventListener("focusin", (e) => {
    e.target.style.background = "lightgrey";
  });
  document.getElementById("suMail2").addEventListener("focusout", (e) => {
    let mail = document.getElementById("suMail").value;
    let mail2 = document.getElementById("suMail2").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarIgualdad(mail, mail2)) {
      e.target.style.background = "";
    } else {
      //TODO
    }
  });

  document.getElementById("signUpForm").addEventListener("submit", (e) => {
    //así evito el envío y recarga de la página: https://www.stefanjudis.com/today-i-learned/requestsubmit-offers-a-way-to-validate-a-form-before-submitting-it/
    e.preventDefault();  
    let formValidado = validarSubmit(true);
    if (formValidado) {
      let nuevoUsuario = generarUsuario();
      console.log(nuevoUsuario);

      //Esta ventana informa de la correcta subscripción y se cierra automáticamente:
      document.getElementById("signUpOverlay").innerHTML = generarConfirmacionSignUp(nuevoUsuario.username);
      setTimeout(function(){ gestionarSignUp(); }, 5000);
    }
  });
  document.getElementById("suClose").addEventListener("click", gestionarSignUp);
}

function cargarFormLogIn() {
  document.getElementById("logInOverlay").innerHTML = generarHtmlLogIn();

  //Aquí añado los event handlers:
  document.getElementById("liUsername").addEventListener("focusin", (e) => {
    e.target.style.background = "lightgrey";
  });
  document.getElementById("liUsername").addEventListener("focusout", (e) => {
    e.target.style.background = "";
  });

  document.getElementById("liPassw").addEventListener("focusin", (e) => {
    e.target.style.background = "lightgrey";
  });
  document.getElementById("liPassw").addEventListener("focusout", (e) => {
    e.target.style.background = "";
  });

  document.getElementById("liPasswIcono").addEventListener("mouseover", () => {
    //justificar mouseover
    visualizarContrasena("liPassw");
    document.getElementById("liPasswIcono").style.color = "grey";
  });
  document.getElementById("liPasswIcono").addEventListener("mouseout", () => {
    visualizarContrasena("liPassw");
    document.getElementById("liPasswIcono").style.color = "white";
  });
}

export function gestionarSignUp() {
  var vistaSignUp = document.getElementById("signUpOverlay").style.display;
  if (vistaSignUp == "block") {
    document.getElementById("signUpOverlay").style.display = "none";
  } else {
    document.getElementById("signUpOverlay").style.display = "block";
  }
}

export function gestionarLogIn() {
  var vistaLogIn = document.getElementById("logInOverlay").style.display;
  if (vistaLogIn == "block") {
    document.getElementById("logInOverlay").style.display = "none";
  } else {
    document.getElementById("logInOverlay").style.display = "block";
  }
}

function visualizarContrasena(idPassw) {
  let tipoPassw = document.getElementById(idPassw).type;
  let icono = "suPasswIcono";
  let iconoNo = "suPasswIconoNo";
  if (idPassw == "suPassw2") {
    icono += "2";
    iconoNo += "2";
  }
  if (tipoPassw === "password") {
    document.getElementById(idPassw).type = "text";
    document.getElementById(icono).style.display = "none";
    document.getElementById(iconoNo).style.display = "inline";
  } else {
    document.getElementById(idPassw).type = "password";
    document.getElementById(icono).style.display = "inline";
    document.getElementById(iconoNo).style.display = "none";
  }
}

/**** FUNCIONES DE GESTIÓN DE VALIDACIONES ****/

function validarSubmit(validacionFormulario) {    //el parametro se pasa siempre en true
  //TODO: validar nombre, apellido, telefono, país, edad; de última a primera por el focus.
  //TODO: validar también todos los demás
  let varApellido = document.getElementById("suSurname").value;
  let validacionApellido = validarNombres(varApellido, MAX_APELLIDO);
  if (validacionApellido == "VALIDATED") {
    marcarInputCorrecto("suSurname", "suSurnameError");
  } else {
    marcarInputError("suSurname", "suSurnameError", validacionApellido);
    validacionFormulario = false;
  }

  let varNombre = document.getElementById("suName").value;
  let validacionNombre = validarNombres(varNombre, MAX_NOMBRE);
  if (validacionNombre == "VALIDATED") {
    marcarInputCorrecto("suName", "suNameError");
  } else {
    marcarInputError("suName", "suNameError", validacionNombre);
    validacionFormulario = false;
  }

  // Tengo que comprobar de nuevo para garantizar que no esté vacío:
  let varUsuario = document.getElementById("suUsername").value;
  let validacionUsuario = validarUsuario(varUsuario);
  if (validacionUsuario == "VALIDATED") {
    marcarInputCorrecto("suUsername", "suUsernameError");
  } else {
    marcarInputError("suUsername", "suUsernameError", validacionUsuario);
    validacionFormulario = false;
  }

  return validacionFormulario;
}

function generarUsuario() {
  var user = new Object();
  user.username = document.getElementById("suUsername").value;
  user.password = document.getElementById("suPassw").value;
  user.name = document.getElementById("suName").value;
  user.surname = document.getElementById("suSurname").value;
  user.phone = document.getElementById("suTelf").value;
  user.mail = document.getElementById("suMail").value;
  user.country = document.getElementById("suCountry").value;
  // TODO: user.age = document.getElementById("suName").value;
  return user;
}

function gestionarValidacionUsername(e) {
  let usuario = document.getElementById("suUsername").value;
  // Explicación: si la validación es correcta pierde foco; de lo contrario no necesariamente.
  let validacion = validarUsuario(usuario);
  if (validacion == "VALIDATED") {
    e.target.style.background = "";
    e.target.style.border = "1px solid grey";
    // Oculto el mensaje de error, si se ve:
    document.getElementById("suUsernameError").innerHTML = "<b>&#10004;</b>";
    document.getElementById("suUsernameError").style.display = "inline";
  } else {
    if (usuario == "") {
      // Si está vacío quito el color, pierdo el foco y quito los mensajes de error.
      e.target.style.border = "1px solid grey";
      e.target.style.background = "";
      document.getElementById("suUsernameError").innerHTML = "";
      document.getElementById("suUsernameError").style.display = "none";
    } else {
      // Si no está vacío lo mantengo y devuelvo el foco.
      e.target.style.border = "3px solid rgb(142,101,27)";
      // Muestro el mensaje de error:
      document.getElementById("suUsernameError").innerHTML = "<i>" + validacion + "</i>";
      document.getElementById("suUsernameError").style.display = "inline";
    }
  }
}

function gestionarValidacionContrasena(e) {
  let passw = document.getElementById("suPassw").value;
  let validacion = validarContrasena(passw);
  if (validacion == "VALIDATED") {
    e.target.style.background = "";
    e.target.style.border = "1px solid grey";
    document.getElementById("suPasswError").innerHTML = "<b>&#10004;</b>";
    document.getElementById("suPasswError").style.display = "inline";
    // Activo el input de la comprobación:
    document.getElementById("suPassw2").disabled = false;
    document.getElementById("suPassw2Label").classList.remove("disabledText");
  } else {
    if (passw == "") {
      e.target.style.border = "1px solid grey";
      e.target.style.background = "";
      document.getElementById("suPasswError").innerHTML = "";
      document.getElementById("suPasswError").style.display = "none";
    } else {
      e.target.style.border = "3px solid rgb(142,101,27)";
      document.getElementById("suPasswError").innerHTML = "<i>" + validacion + "</i>";
      document.getElementById("suPasswError").style.display = "inline";
      //Y vacío y desactivo los inputs de la comprobación:
      document.getElementById("suPassw2").value = "";
      document.getElementById("suPasswError2").innerHTML = "";
      document.getElementById("suPasswError2").style.display = "none";
      document.getElementById("suPassw2").disabled = true;
      document.getElementById("suPassw2Label").classList.add("disabledText");
    }
  }
}

function gestionarIgualdadContrasena(e) {
  let passw = document.getElementById("suPassw").value;
  let passw2 = document.getElementById("suPassw2").value;
  if (validarIgualdad(passw, passw2)) {
    e.target.style.background = "";
    e.target.style.border = "1px solid grey";
    document.getElementById("suPasswError2").innerHTML = "<b>&#10004;</b>";
    document.getElementById("suPasswError2").style.display = "inline";
  } else {
    if (passw == "") {
      e.target.style.border = "1px solid grey";
      e.target.style.background = "";
      document.getElementById("suPasswError2").innerHTML = "";
      document.getElementById("suPasswError2").style.display = "none";
    } else {
      e.target.style.border = "3px solid rgb(142, 101, 27)";
      document.getElementById("suPasswError2").innerHTML = "<i>ERROR: las contraseñas no coinciden.</i>";
      document.getElementById("suPasswError2").style.display = "inline";
    }
  }
}

function marcarInputError(miInput, miInputError, textoError) {
  document.getElementById(miInput).style.border = "3px solid rgb(142, 101, 27)";
  document.getElementById(miInput).focus();
  document.getElementById(miInputError).innerHTML = "<i>" + textoError + "</i>";
  document.getElementById(miInputError).style.display = "inline";
}

function marcarInputCorrecto(miInput, miInputError) {
  document.getElementById(miInput).style.border = "1px solid grey";
  document.getElementById(miInputError).innerHTML = "<b>&#10004;</b>";
  document.getElementById(miInputError).style.display = "inline";
}