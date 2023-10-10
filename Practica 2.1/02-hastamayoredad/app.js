let edad = 0; // Inicializamos la variable edad a 0
do {
    edad = parseInt(prompt("Introduce tu edad: ")); // Pedimos la edad
} while (edad < 18); // Mientras la edad sea menor que 18, repetimos el bucle
console.log("Eres mayor de edad"); // Cuando salimos del bucle, es que la edad es mayor o igual que 18
