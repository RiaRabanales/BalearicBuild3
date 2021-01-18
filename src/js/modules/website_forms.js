export function gestionarSignUp() {
    var vistaSignUp = document.getElementById("signUpOverlay").style.display;
    if (vistaSignUp == "block") {
        document.getElementById("signUpOverlay").style.display = "none";
    } else {
        document.getElementById("signUpOverlay").style.display = "block";
    }  
}

export function gestionarLogIn() {
    var vistaLogIn = document.getElementById("logInDiv").style.display;
    if (logInDiv == "none") {
        document.getElementById("logInDiv").style.display = "none";
    } else {
        document.getElementById("logInDiv").style.display = "block";
    }  
}

export function realizarLogIn() {
    //TODO
    console.log("Log in hecho");
}