const usuario= document.getElementById("txtUser");
const msgValUsuario = document.getElementById("msgValUser");

const contraseña= document.getElementById("txtPwd");
const msgValPwd = document.getElementById("msgValPwd");

const btnEnviar = document.getElementById("btnEnviar");

const btnEnviar2 = document.getElementById("btnEnviar2");

function Validacion(){

    let vusuario = usuario.value;
    msgValUsuario.innerText ="";
    let RegExpUser = /^[a-zA-Z0-9\_\-]{4,16}$/

    let vpwd = contraseña.value;
    msgValPwd.innerText ="";
    let RegExpPwd = /^[A-Z]+([a-z])*$/;


    if(!RegExpUser.test(vusuario)){
        msgValUsuario.innerText = "El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo";
        
    }

    if(!RegExpPwd.test(vpwd)){
        msgValPwd.innerText = "Debe contener una mayuscula";
    }
    window.location="favoritos.html";
}

function Validacion2(){

    window.location="signup.html";
}

btnEnviar.onclick = () => Validacion();
btnEnviar2.onclick = () => Validacion2();