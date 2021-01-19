import {
  validarNombres,
  validarUsuario,
  validarContrasena,
  validarTelefono,
  validarEmail,
  validarIgualdad
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
        <br>
        <label for="suPassw">Contraseña
          <abbr title="required" aria-label="required">*</abbr>
        :</label>
        <input type="password" id="suPassw" name="suPass">
        <i class="far fa-eye" id="suPasswIcono"></i>
        <i class="far fa-eye-slash" id="suPasswIconoNo"></i>
        
        <br>
        <label for="suPassw2">Confirmar contraseña:</label>
        <input type="password" id="suPassw2" name="suPass2">
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
        <label for="suMail2">Confirmar e-mail:</label>
        <input type="text" id="suMail2" name="suMail2" />
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

  //Aquí añado los event handlers:
  document.getElementById("suUsername").addEventListener("focusin", function() {
    //TODO: me interesa vaciarlo???
    event.target.style.background = 'lightgrey';
  })
  document.getElementById("suUsername").addEventListener("focusout", function() {
    let usuario = document.getElementById("suUsername").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarUsuario(usuario)) {
      event.target.style.background = '';
    } else {
      event.target.style.border = "3px solid rgb(142,101,27)";
      //TODO
    }
  });

  document.getElementById("suName").addEventListener("focusin", function() {
    event.target.style.background = 'lightgrey';
  })
  document.getElementById("suName").addEventListener("focusout", function() {
    let nombre = document.getElementById("suName").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarNombres(nombre)) {
      event.target.style.background = '';
    } else {
      //TODO
    }
  });

  document.getElementById("suSurname").addEventListener("focusin", function() {
    event.target.style.background = 'lightgrey';
  })
  document.getElementById("suSurname").addEventListener("focusout", function() {
    let apellido = document.getElementById("suSurname").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarNombres(apellido)) {
      event.target.style.background = '';
    } else {
      //TODO
    }
  });

  document.getElementById("suPassw").addEventListener("focusin", function() {
    event.target.style.background = 'lightgrey';
  })
  document.getElementById("suPassw").addEventListener("focusout", function() {
    let passw = document.getElementById("suPassw").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarContrasena(passw)) {
      event.target.style.background = '';
    } else {
      //TODO
    }
  });
  document.getElementById("suPasswIcono").addEventListener("click", function() {    //TODO justificar cambio de ojo
    visualizarContrasena("suPassw");
    //TODO ver y no ver ojos
  });
  document.getElementById("suPasswIconoNo").addEventListener("click", function() {
    visualizarContrasena("suPassw");
  });

  document.getElementById("suPassw2").addEventListener("focusin", function() {
    event.target.style.background = 'lightgrey';
  })
  document.getElementById("suPassw2").addEventListener("focusout", function() {
    let passw = document.getElementById("suPassw").value;
    let passw2 = document.getElementById("suPassw2").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarIgualdad(passw, passw2)) {
      event.target.style.background = '';
    } else {
      //TODO
    }
  });
  document.getElementById("suPasswIcono2").addEventListener("click", function() {
    visualizarContrasena("suPassw2");
  });
  document.getElementById("suPasswIconoNo2").addEventListener("click", function() {
    visualizarContrasena("suPassw2");
  });

  document.getElementById("suTelf").addEventListener("focusin", function() {
    //TODO: me interesa vaciarlo???
    event.target.style.background = 'lightgrey';
  })
  document.getElementById("suTelf").addEventListener("focusout", function() {
    let telf = document.getElementById("suTelf").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarTelefono(telf)) {
      event.target.style.background = '';
    } else {
      //TODO
    }
  });

  document.getElementById("suMail").addEventListener("focusin", function() {
    event.target.style.background = 'lightgrey';
  })
  document.getElementById("suMail").addEventListener("focusout", function() {
    let mail = document.getElementById("suMail").value;
    if (validarEmail(mail)) {
      event.target.style.background = '';
    } else {
      //TODO
    }
  });

  document.getElementById("suMail2").addEventListener("focusin", function() {
    event.target.style.background = 'lightgrey';
  })
  document.getElementById("suMail2").addEventListener("focusout", function() {
    let mail = document.getElementById("suMail").value;
    let mail2 = document.getElementById("suMail2").value;
    //TODO si me devuelve true perder foco, si me devuelve false no
    if (validarIgualdad(mail, mail2)) {
      event.target.style.background = '';
    } else {
      //TODO
    }
  });

  //TODO poner los radiobuttons en un fieldset, ver web accessibility tutorials / forms de w3.org

  document.getElementById("suClose").addEventListener("click", gestionarSignUp);
}

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
  document.getElementById("liPasswIcono").addEventListener("mouseover", function() {    //justificar mouseover
    visualizarContrasena("liPassw");
    document.getElementById("liPasswIcono").style.color = "grey";
  });
  document.getElementById("liPasswIcono").addEventListener("mouseout", function() {
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
