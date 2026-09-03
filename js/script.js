let pantalla = document.getElementById("pantalla");

let numero;
let signo;

function agregar(valor) {
  if (pantalla.value === "0") pantalla.value = valor;
  else pantalla.value = pantalla.value + valor;
}

function limpiar() {
  pantalla.value = "0";
}

function sumar() {
  numero = Number(pantalla.value);
  signo = "+";
  limpiar();
}

function dividir() {
  numero = Number(pantalla.value);
  signo = "/";
  limpiar();
}

function restar() {
  numero = Number(pantalla.value);
  signo = "-";
  limpiar();
}

function multiplicar() {
  numero = Number(pantalla.value);
  signo = "*";
  limpiar();
}

function calcular() {
  if (signo === "+") pantalla.value = Number(numero) + Number(pantalla.value);
  else if (signo === "-")
    pantalla.value = Number(numero) - Number(pantalla.value);
  else if (signo === "*")
    pantalla.value = Number(numero) * Number(pantalla.value);
  else if (signo === "/") {
    if (Number(pantalla.value) == 0) pantalla.value = "ERROR";
    else pantalla.value = Number(numero) / Number(pantalla.value);
  }
}
