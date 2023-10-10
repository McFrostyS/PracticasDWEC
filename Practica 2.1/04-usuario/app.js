let email = prompt("Introduzca su email"); // Almacena el email introducido por el usuario
let usuario = email.slice(0, email.indexOf("@")); // Almacena el nombre de usuario hasta el carácter @ con el método slice() y indexOf()
console.log(usuario.trim()); // Muestra el nombre de usuario en la consola con el método trim() para eliminar los espacios en blanco
