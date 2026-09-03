let formulario = document.getElementById("contacto");

let nombre = document.getElementById("nombre");
let rut = document.getElementById("rut");
let correo = document.getElementById("correo");
let telefono = document.getElementById("fon");
let fechaNacimiento = document.getElementById("fenac");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  // ODIO ESTA %$!""$## En fin expresiones irregulares..
  if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre.value)) {
    alert("EL NOMBRE SOLO DEBE CONTENER LETRAS");
    nombre.focus();
    return;
  }

  // VALIDAR RUT BUSQUE PARA LA COSA DEL RUT Y FUNCIONO ODIO LAS EXPRESIONES IREGULARES CUANDO HAY QUE HACERLAS A MANO
  if (!/^\d{1,2}\.?\d{3}\.?\d{3}-[\dkK]$/.test(rut.value)) {
    alert("INGRESE UN RUT VÁLIDO. EJEMPLO: 12.345.678-9");
    rut.focus();
    return;
  }

  // HAGO LA VALIDACION DEL CORREO segun la version de goggle es usar expresion irregular dentro de un IF como se valida lo del nombre
  // LOs campos de validacion se separan con el "|" para que puedea leer otro parametro de expresion irregular
  if (!/^[^\s@]+@(gmail\.com|outlook\.com|duocuc\.cl)$/i.test(correo.value)) {
    alert("EL CORREO DEBE SER @GMAIL.COM, @OUTLOOK.COM O @DUOCUC.CL");
    correo.focus();
    return;
  }

  // VALIDAR COSO TELEFONO EXPRESION IRREGULAR SACADA DE GOGGLE :)
  if (!/^\+56\d{9}$/.test(telefono.value)) {
    alert("EL TELÉFONO DEBE TENER EL PREFIJO +56. EJEMPLO: +56912345678");
    telefono.focus();
    return;
  }

  // ESTA PARTE ME AYUDO MI HERMANO EL CACHABA MAS DE JS
  let fecha = new Date(fechaNacimiento.value);
  let hoy = new Date();

  let edad = hoy.getFullYear() - fecha.getFullYear();

  let mes = hoy.getMonth() - fecha.getMonth();

  // Estaba como tonto poniendo mal esto y al final lo hizo mi hermano
  if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
    edad--;
  }

  if (edad < 18) {
    alert("DEBES SER MAYOR DE 18 AÑOS PARA REALIZAR LA COMPRA");
    fechaNacimiento.focus();
    return;
  }

  // ALARMA PARA GRITARLE EN LA CARA QUE LO HIZO BIEN
  alert("COMPRA REALIZADA CON EXITO!!");  
});
