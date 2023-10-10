let numero = prompt("Introduzca un número"); // Almacena el número introducido por el usuario
let ul = document.createElement("ul"); // Crea un elemento de lista desordenada

if (isNaN(numero) || numero < 0) {
    // Comprueba si el número introducido es válido
    console.warn("No es un número válido"); // Muestra un mensaje de warning en la consola
} else {
    for (let i = 1; i <= 10; i++) {
        // Bucle que recorre los números del 1 al 10
        ul.innerHTML += `<li>${numero} x ${i} = ${numero * i}</li>`; // Muestra la tabla de multiplicar en el documento
    }
}

document.body.appendChild(ul); // Añade la lista desordenada al documento
