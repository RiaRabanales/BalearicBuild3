export function cargarFormularios() {
  cargarFormSignUp();
  document.getElementById("signUpOverlay").addEventListener("click", gestionarSignUp);
  cargarFormLogIn();
  document.getElementById("liSubmit").addEventListener("click", realizarLogIn);
}

function cargarFormSignUp() {
  let signUpHtml = `
    <div id="signUpDiv">
    <h2>¡Date de alta!</h2>
    <p>Los campos obligatorios se marcan con <abbr title="required">*</abbr>.</p>
    <form id="signUpForm">
      <section>
        <label for="suUsername">Nombre de usuario:
          <input type="text" id="suUsername" name="suUsername" value="BestGamer#92">
          <abbr title="required" aria-label="required">*</abbr>
        </label><br>
        <label for="suName">Nombre:
          <input type="text" id="suName" name="suName" value="Vincent">
          <abbr title="required" aria-label="required">*</abbr>
        </label><br>
        <label for="suSurname">Apellido:
          <input type="text" id="suSurname" name="suSurname" value="van der Grosse">
          <abbr title="required" aria-label="required">*</abbr>
        </label>
      </section>
      
      <section>
        <label for="suPassw">Contraseña:
          <input type="password" id="suPassw" name="suPass" value="blahblahblah">
          <abbr title="required" aria-label="required">*</abbr>
        </label><br>
        <label for="suPassw2">Repetir contraseña:
          <input type="password" id="suPassw2" name="suPass2" value="blahblahblah">
          <abbr title="required" aria-label="required">*</abbr>
        </label>
      </section>

      <section>
        <label for="suTelf">Teléfono:
          <input type="text" id="suTelf" name="suTelf" value="699-999999">
        </label><br>
        <label for="suCountry">País:
          <select id="suCountry" name="suCountry">
            <option value="TODO">//TODO</option>
          </select>
        </label><br>
        <p>Edad:
          <abbr title="required" aria-label="required">*</abbr><br>
          <input type="radio" id="suAgeMayor" name="suAge" value="suAgeMenor">
          <label for="suAgeMenor"> menor de 18 años</label>
          <input type="radio" id="suAgeMenor" name="suAge" value="suAgeMayor">
          <label for="suAgeMayor"> mayor de 18 años</label>
        </p><br>
      </section>

      <input type="submit" id="suSubmit" value="ALTA">
      <input type="reset" id="suReset" value="RESTABLECER">
    </form> 
    </div>
    `;
    document.getElementById("signUpOverlay").innerHTML = signUpHtml;
}

function cargarFormLogIn() {
    let logInHtml = `
    <div id="logInDiv">
    <form id="logInForm">
        <label for="liName">Usuario: </label>
        <input type="text" id="liName" name="liName" value="Vincent"><br>
        <label for="liSurname">Contraseña: </label>
        <input type="text" id="liSurname" name="liSurname" value="van der Grosse"><br>
        <input id="liSubmit" type="submit" value="LOG IN">
    </form> 
    </div>
    `;
    document.getElementById("logInOverlay").innerHTML = logInHtml;
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
  if (logInDiv == "none") {
    document.getElementById("logInOverlay").style.display = "none";
  } else {
    document.getElementById("logInOverlay").style.display = "block";
  }
}

function realizarLogIn() {
  //TODO
  console.log("Log in hecho");
}
