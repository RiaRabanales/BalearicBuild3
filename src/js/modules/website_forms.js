export function gestionarSignUp() {
    var vistaSignUp = document.getElementById("signUpOverlay").style.display;
    if (vistaSignUp == "block") {
        document.getElementById("signUpOverlay").style.display = "none";
    } else {
        document.getElementById("signUpOverlay").style.display = "block";
    }  
}

export function gestionarLogIn() {
    //TODO
}