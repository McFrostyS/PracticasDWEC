const num = prompt("Ingrese un número: ");

// Comprobamos si lo untroducido es un número
if (isNaN(num)) {
    console.log("Lo que ingresaste no es un número");
} else {
    // Verificamos si el número es par o impar
    num % 2 === 0 ? console.log(`El número ${num} es par`) : console.log(`El número ${num} es impar`);
}
