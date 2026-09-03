// ESTA WEA ES DE PRUEBA

let formulario = document.getElementById("login");

let usuario = document.getElementById("usuario");
let password = document.getElementById("password");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  // Recuperar los datos registrados
  let usuarioRegistrado = localStorage.getItem("usuario");
  let passwordRegistrada = localStorage.getItem("password");

  // Comprobar usuario y contraseña PARA QUE EL MONO COLOCQUE BIEN LAS COSAS
  if (
    usuario.value === usuarioRegistrado &&
    password.value === passwordRegistrada
  ) {
    alert("INICIO DE SESIÓN CORRECTO");

    window.location.href = "index.html";
  } else {
    alert("USUARIO O CONTRASEÑA INCORRECTOS");

    usuario.focus();
  }
});
