
const nombre = document.getElementById("txtNombre");
const msgValNombre = document.getElementById("msgValNombre");

const email = document.getElementById("txtEmail");
const msgValEmail = document.getElementById("msgValEmail");

const usuario = document.getElementById("txtUser");
const msgValUsuario = document.getElementById("msgValUser");

const contraseña = document.getElementById("txtPwd");
const msgValPwd = document.getElementById("msgValPwd");

const contraseña2 = document.getElementById("txtPwd2");
const msgValPwd2 = document.getElementById("msgValPwd2");

const btnEnviar = document.getElementById("btnEnviar");

function Validacion() {

  let error = false

  let vnombre = nombre.value;
  msgValNombre.innerText = "";
  let RegExpNom = /^[A-Za-z]+([\s]?[A-Za-z])*$/;

  let vemail = email.value;
  msgValEmail.innerText = "";
  let RegExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let vusuario = usuario.value;
  msgValUsuario.innerText = "";
  let RegExpUser = /^[a-zA-Z0-9\_\-]{4,16}$/

  let vpwd = contraseña.value;
  msgValPwd.innerText = "";
  let RegExpPwd = /^[A-Z]+([a-z])*$/;

  let vpwd2 = contraseña2.value;
  msgValPwd2.innerText = "";


  if (vnombre == "" || !RegExpNom.test(vnombre)) {
    msgValNombre.innerText = "Nombre inválido";
    error = true
  }

  if (!RegExpEmail.test(vemail)) {
    msgValEmail.innerText = "Email invalido";
    error = true
  }

  if (!RegExpUser.test(vusuario)) {
    msgValUsuario.innerText = "El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo";
    error = true
  }

  if (!RegExpPwd.test(vpwd)) {
    msgValPwd.innerText = "Debe contener una mayuscula";
    error = true
  }

  if (vpwd === vpwd2) {
    msgValPwd2.innerText = ""
  } else {
    msgValPwd2.innerText = "Ambas contraseñas deben ser iguales"
    error = true
  }

  // si no hay errores, se envia a la base de datos
  if (error === false) {
    const obj = {
      name: nombre.value,
      email: email.value,
      userName: usuario.value,
      password: contraseña.value
    }
    // se hace un post para enviar la data
    fetch("http://localhost:9000/api/users", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "content-type": "application/json"
      }
    }).then(res => res.json())
      .then(data => {
        window.location = "lista.html";
        alert("Registro exitoso");
        //enviar los datos al storage
        localStorage.setItem("usuario", JSON.stringify(data))
        //console.log(data)
      })
  }
}

btnEnviar.onclick = () => Validacion();
