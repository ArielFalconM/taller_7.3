document.addEventListener("DOMContentLoaded", function () {

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click",function(){
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let terms = document.getElementById("terminos").checked;

    let todoCompleto = nombre !== "" && apellido !== "" && email !== "" && password1 !== "" && password2 !== "" ;
    let largo = password1.length >= 6;
    let iguales = password1 === password2;

    if (todoCompleto && largo && iguales && terms) {
        showAlertSuccess();
    }
    else{
        showAlertError();
    }
})
})