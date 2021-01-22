/**
 * Genera y devuelve un string con el código html del formulario de subscripción.
 */
export function generarHtmlSignUp() {
  let htmlSignUp = `
    <div id="signUpDiv">
    <h2>¡Date de alta!</h2>
    <form id="signUpForm">
      <p><abbr title="required">*</abbr> marca los campos obligatorios.</p>
      <section>
        <h3>datos de usuario</h3>
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
        <i class="far fa-eye-slash" id="suPasswIconoNo" style="display:none"></i>
        <p id="suPasswError" class="suHidden"></p>
        <br>
        <label for="suPassw2" id="suPassw2Label" class="disabledText">Confirmar contraseña:</label>
        <input disabled type="password" id="suPassw2" name="suPass2">
        <i class="far fa-eye" id="suPasswIcono2"></i>
        <i class="far fa-eye-slash" id="suPasswIconoNo2" style="display:none"></i>
        <p id="suPasswError2" class="suHidden"></p>
        </label>
      </section>

      <section>
        <h3>datos personales</h3>
        <label for="suName">Nombre
          <abbr title="required" aria-label="required">*</abbr>
        :</label>
        <input type="text" id="suName" name="suName" placeholder="Vincent">
        <p id="suNameError" class="suHidden"></p>
        <br>
        <label for="suSurname">Apellidos
          <abbr title="required" aria-label="required">*</abbr>
        :</label>
        <input type="text" id="suSurname" name="suSurname" placeholder="van der Grosse">
        <p id="suSurnameError" class="suHidden"></p>
        <br>
        <label for="suTelf">Teléfono:</label>
        <input type="text" id="suTelf" name="suTelf" placeholder="699-999999" />
        <p id="suTelfError" class="suHidden"></p>
        <br>
        <label for="suMail">E-mail:</label>
        <input type="text" id="suMail" name="suMail" placeholder="vincent@vandergrosse.net" />
        <p id="suMailError" class="suHidden"></p>
        <br>
        <label for="suMail2" id="suMail2Label"class="disabledText">Confirmar e-mail:</label>
        <input disabled type="text" id="suMail2" name="suMail2" />
        <p id="suMailError2" class="suHidden"></p>
        <br>
        <label for="suCountry">País:</label>
          <select id="suCountry" name="suCountry">
          </select>
        <br>
        <fieldset>Edad
        <abbr title="required" aria-label="required">*</abbr>: 
        <p id="suAgeError" class="suHidden"></p>
        <br>
          <input type="radio" id="suAgeMenor" name="suAge" value="suAgeMenor">
          <label for="suAgeMenor" id="suAgeMenorLabel"> menor de 18 años</label>
          <input type="radio" id="suAgeMayor" name="suAge" value="suAgeMayor">
          <label for="suAgeMayor" id="suAgeMayorLabel"> mayor de 18 años</label>
        </fieldset><br>
      </section>

      <div id="suButtons">
        <input type="submit" id="suSubmit" value="ALTA" />
        <input type="reset" id="suReset" value="RESTABLECER" />
        <input type="button" id="suClose" value="CANCELAR" />
      </div>

    </form> 
    </div>
    `;

  return htmlSignUp;
}

/**
 * Gestionarme el select de países vía XHR
 */
export function generarHtmlPaises() {
  let htmlPaises = "";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.eu/rest/v2/all?fields=name");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = function () {
    let listaPaises = xhr.response;

    let htmlPaises  = listaPaises.map((elemento) => {
      let pais = elemento.name;
      //TODO: si me da tiempo, esto podrían ser dos maps??? ver
      if (pais == "Spain") {
        return "<option value='" + pais + "' selected='selected'>" + pais + "</option>";
      } else {
        return "<option value='" + pais + "'>" + pais + "</option>";
      }
    }).join();

    document.getElementById("suCountry").innerHTML = htmlPaises;
  };

}

/**
 * Genera y devuelve un string con el código html del formulario de log in.
 */
export function generarHtmlLogIn() {
  let htmlLogIn = `
    <div id="logInDiv">
    <form id="logInForm">
        <label for="liUsername">Usuario: </label>
        <br>
        <input type="text" id="liUsername" name="liUsername" />
        <br>
        <label for="liPassw">Contraseña:
        <i class="far fa-eye" id="liPasswIcono"></i>
        </label>
        <br>
        <input type="password" id="liPassw" name="liPassw" />
        <br>
        <div>
        <input id="liSubmit" type="submit" value="LOG IN" />
        <input id="liClose" type="button" value="SALIR" />
        </div>
    </form> 
    </div>
    `;

  return htmlLogIn;
}


export function generarConfirmacionSignUp(usuario) {
  let htmlConfirm = `
    <div id="signUpConfirm">
    <h3>¡Alta realizada!</h3>
    <p>Todo correcto, 
    `;
  htmlConfirm += usuario;
  htmlConfirm +=
    `.
    <br>
    Estás dado de alta en el juego.
    </div>
    `;
  return htmlConfirm;
}

export function generarConfirmacionLogIn(usuario) {
  let htmlConfirm = `
    <div id="logInConfirm">
    <h3>¡Bienvenido de nuevo, 
    `;
  htmlConfirm += usuario;
  htmlConfirm +=
    `!</h3>
    `;
  return htmlConfirm;
}