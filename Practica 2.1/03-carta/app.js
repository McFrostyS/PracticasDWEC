// Alamacenamos en variables los datos de la carta
let nombre = prompt("Introduzca su nombre");
let curso = prompt("Introduzca el nombre del curso");
let localidad = prompt("Introduzca la localidad");
let fechaInicio = prompt("Introduzca la fecha de inicio");
let fechaFin = prompt("Introduzca la fecha de fin");

// Creamos la carta con los datos introducidos
let carta = `Estimado ${nombre.trim()}, <br>
Bienvenido al curso de ${curso.trim()} que se celebrará en la localidad de ${localidad.trim()} entre las fechas ${fechaInicio.trim()} y ${fechaFin.trim()}.
Espero que el curso se desarrolle según sus expectativas. Estaremos encantados de atenderle.<br><br>
Atentamente,<br>
La dirección.`;

// Mostramos la carta en el documento
document.getElementById("carta").innerHTML = carta;
