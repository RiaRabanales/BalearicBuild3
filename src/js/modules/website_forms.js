import {
  validarNombres,
  validarUsuario,
  validarContrasena,
  validarTelefono,
  validarEmail,
  validarIgualdad,
} from "./forms_validation.js";

export function cargarFormularios() {
  cargarFormSignUp();
  //document.getElementById("signUpOverlay").addEventListener("click", gestionarSignUp);
  //TODO esto no acaba de funcionar porq el overlay implica click en todo punto
  cargarFormLogIn();
}

function cargarFormSignUp() {
  let signUpHtml = `
    <div id="signUpDiv">
    <h2>¡Date de alta!</h2>
    <p>Los campos obligatorios se marcan con <abbr title="required">*</abbr></p>
    <form id="signUpForm">
      <section>
        <h3>Datos de usuario:</h3>
        <label for="suUsername">Nombre de usuario
          <abbr title="required" aria-label="required">*</abbr>
        :</label>
        <input type="text" id="suUsername" name="suUsername" aria-required="true" placeholder="u123456A">
        <p id="suUsernameError" class="suHidden"></p>
        <br>
        <label for="suPassw">Contraseña
          <abbr title="required" aria-label="required">*</abbr>
        :</label>
        <input type="password" id="suPassw" name="suPass">
        <i class="far fa-eye" id="suPasswIcono"></i>
        <i class="far fa-eye-slash" id="suPasswIconoNo"></i>
        <br>
        <label for="suPassw2" id="suPassw2Label" class="disabledText">Confirmar contraseña:</label>
        <input disabled type="password" id="suPassw2" name="suPass2">
        <i class="far fa-eye" id="suPasswIcono2"></i>
        <i class="far fa-eye-slash" id="suPasswIconoNo2"></i>
        </label>
      </section>

      <section>
        <h3>Datos personales:</h3>
        <label for="suName">Nombre
          <abbr title="required" aria-label="required">*</abbr>
        :</label>
        <input type="text" id="suName" name="suName" placeholder="Vincent">
        <br>
        <label for="suSurname">Apellidos
          <abbr title="required" aria-label="required">*</abbr>
        :</label>
        <input type="text" id="suSurname" name="suSurname" placeholder="van der Grosse">
        <br>
        <label for="suTelf">Teléfono:</label>
        <input type="text" id="suTelf" name="suTelf" placeholder="699-999999" />
        <br>
        <label for="suMail">E-mail:</label>
        <input type="text" id="suMail" name="suMail" placeholder="vincent@vandergrosse.net" />
        <br>
        <label for="suMail2" id="suMail2Label"class="disabledText">Confirmar e-mail:</label>
        <input disabled type="text" id="suMail2" name="suMail2" />
        <br>
        <label for="suCountry">País:</label>
          <select id="suCountry" name="suCountry">
            <option value="TODO">//TODO</option>
          </select>
        <br>
        <fieldset>Edad:<br>
          <input type="radio" id="suAgeMayor" name="suAge" value="suAgeMenor">
          <label for="suAgeMenor"> menor de 18 años</label>
          <input type="radio" id="suAgeMenor" name="suAge" value="suAgeMayor">
          <label for="suAgeMayor"> mayor de 18 años</label>
        </fieldset><br>
      </section>

      <input type="submit" id="suSubmit" value="ALTA" />
      <input type="reset" id="suReset" value="RESTABLECER" />
      <input type="button" id="suClose" value="CANCELAR" />

    </form> 
    </div>
    `;
  document.getElementById("signUpOverlay").innerHTML = signUpHtml;

  /**** EVENT HANDLERS DEL FORMULARIO DE SUSCRIPCIÓN ****/
  // Event handlers de Username:
  let varUsername = document.getElementById("suUsername");
  varUsername.addEventListener("focusin", (e) => {
    e.target.style.background = "lightgrey";
  });
  varUsername.addEventListener("focusout", (e) => {
    gestionarValidacionUsername(e);
  });

  document.getElementById("suName").addEventListener("focusin", (e) => {
    e.target.style.background = "lightgrey";
  });
  document.getElementById("suName").addEventListener("focusout", (e) => {
    let nombre = document.getElementById("suName").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarNombres(nombre)) {
      e.target.style.background = "";
    } else {
      //TODO
    }
  });

  document.getElementById("suSurname").addEventListener("focusin", (e) => {
    e.target.style.background = "lightgrey";
  });
  document.getElementById("suSurname").addEventListener("focusout", (e) => {
    let apellido = document.getElementById("suSurname").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarNombres(apellido)) {
      e.target.style.background = "";
    } else {
      //TODO
    }
  });

  document.getElementById("suPassw").addEventListener("focusin", function () {
    event.target.style.background = "lightgrey";
  });
  document.getElementById("suPassw").addEventListener("focusout", function () {
    let passw = document.getElementById("suPassw").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarContrasena(passw)) {
      event.target.style.background = "";
      //Quiero que me haga enable de la comprobación de la contraseña sólo si cumple mis requisitos:
      document.getElementById("suPassw2").disabled = false;
      document.getElementById("suPassw2Label").classList.remove("disabledText");
    } else {
      //TODO
    }
  });
  document
    .getElementById("suPasswIcono")
    .addEventListener("click", function () {
      //TODO justificar cambio de ojo
      visualizarContrasena("suPassw");
      //TODO ver y no ver ojos
    });
  document
    .getElementById("suPasswIconoNo")
    .addEventListener("click", function () {
      visualizarContrasena("suPassw");
    });

  document.getElementById("suPassw2").addEventListener("focusin", function () {
    event.target.style.background = "lightgrey";
  });
  document.getElementById("suPassw2").addEventListener("focusout", function () {
    let passw = document.getElementById("suPassw").value;
    let passw2 = document.getElementById("suPassw2").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarIgualdad(passw, passw2)) {
      event.target.style.background = "";
    } else {
      //TODO
    }
  });
  document
    .getElementById("suPasswIcono2")
    .addEventListener("click", function () {
      visualizarContrasena("suPassw2");
    });
  document
    .getElementById("suPasswIconoNo2")
    .addEventListener("click", function () {
      visualizarContrasena("suPassw2");
    });

  document.getElementById("suTelf").addEventListener("focusin", function () {
    //TODO: me interesa vaciarlo???
    event.target.style.background = "lightgrey";
  });
  document.getElementById("suTelf").addEventListener("focusout", function () {
    let telf = document.getElementById("suTelf").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarTelefono(telf)) {
      event.target.style.background = "";
    } else {
      //TODO
    }
  });

  document.getElementById("suMail").addEventListener("focusin", function () {
    event.target.style.background = "lightgrey";
  });
  document.getElementById("suMail").addEventListener("focusout", function () {
    let mail = document.getElementById("suMail").value;
    if (validarEmail(mail)) {
      event.target.style.background = "";
      document.getElementById("suMail2").disabled = false;
      document.getElementById("suMail2Label").classList.remove("disabledText");
    } else {
      //TODO
    }
  });

  document.getElementById("suMail2").addEventListener("focusin", function () {
    event.target.style.background = "lightgrey";
  });
  document.getElementById("suMail2").addEventListener("focusout", function () {
    let mail = document.getElementById("suMail").value;
    let mail2 = document.getElementById("suMail2").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarIgualdad(mail, mail2)) {
      event.target.style.background = "";
    } else {
      //TODO
    }
  });

  document
    .getElementById("signUpForm")
    .addEventListener("submit", () => validarSubmit);
  document.getElementById("suClose").addEventListener("click", gestionarSignUp);
}

function validarSubmit() {}

function cargarFormLogIn() {
  let logInHtml = `
    <div id="logInDiv">
    <form id="logInForm">
        <label for="liUsername">Usuario: </label>
        <input type="text" id="liUsername" name="liUsername" />
        <br>
        <label for="liPassw">Contraseña: </label>
        <input type="password" id="liPassw" name="liPassw" />
        <i class="far fa-eye" id="liPasswIcono"></i>
        <br>
        <input id="liSubmit" type="submit" value="LOG IN" />
        <input type="button" id="liClose" value="CANCELAR" />
    </form> 
    </div>
    `;
  document.getElementById("logInOverlay").innerHTML = logInHtml;

  //Aquí añado los event handlers:
  document
    .getElementById("liPasswIcono")
    .addEventListener("mouseover", function () {
      //justificar mouseover
      visualizarContrasena("liPassw");
      document.getElementById("liPasswIcono").style.color = "grey";
    });
  document
    .getElementById("liPasswIcono")
    .addEventListener("mouseout", function () {
      visualizarContrasena("liPassw");
      document.getElementById("liPasswIcono").style.color = "white";
    });
  document.getElementById("liClose").addEventListener("click", gestionarLogIn);
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
  if (tipoPassw === "password") {
    document.getElementById(idPassw).type = "text";
  } else {
    document.getElementById(idPassw).type = "password";
  }
}

//TODO completar crear el objeto
function generarUsuario() {
  var user = new Object();
  user.username = document.getElementById("suUsername").value;
  user.name = document.getElementById("suName").value;
  user.surname = document.getElementById("suSurname").value;
  //TODO completar
  return user;
}

/**** FUNCIONES DE GESTIÓN DE VALIDACIONES ****/
function gestionarValidacionUsername(e) {
  let usuario = document.getElementById("suUsername").value;
  // Explicación: si la validación es correcta pierde foco; de lo contrario no necesariamente.
  let validacion = validarUsuario(usuario);
  console.log("validacion: " + validacion);
  if (validacion == "VALIDATED") {
    e.target.style.background = "";
    e.target.style.border = "1px solid grey";
    // Oculto el mensaje de error, si se ve:
    document.getElementById("suUsernameError").innerHTML = "<b>&#10004;</b>";
    document.getElementById("suUsernameError").style.display = "inline";
  } else {
    console.log("usuario: " + usuario);
    if (usuario == "") {
      // Si está vacío quito el color, pierdo el foco y quito los mensajes de error.
      e.target.style.border = "1px solid grey";
      e.target.style.background = "";
      document.getElementById("suUsernameError").innerHTML = "";
      document.getElementById("suUsernameError").style.display = "none";
    } else {
      // Si no está vacío lo mantengo y devuelvo el foco.
      e.target.style.border = "3px solid rgb(142,101,27)";
      //TODO devolver el foco
      // Muestro el mensaje de error:
      document.getElementById("suUsernameError").innerHTML = "<i>" + validacion + "</i>";
      document.getElementById("suUsernameError").style.display = "inline";
    }
  }
}
