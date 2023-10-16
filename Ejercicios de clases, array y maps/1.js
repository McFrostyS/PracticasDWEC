// Ejercicio 1
class Persona {
    constructor(dni, nombre, apellidos, poblacion, edad, estudios, carnetConducir) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.poblacion = poblacion;
        this.setEdad(edad);
        this.setEstudios(estudios);
        this.carnetConducir = carnetConducir;
    }

    getEdad() {
        return this.edad;
    }

    setEdad(edad) {
        if (typeof edad === "number") {
            this.edad = edad;
        } else {
            alert("La edad debe ser un número");
        }
    }

    getEstudios() {
        return this.estudios;
    }

    setEstudios(estudios) {
        if (typeof estudios === "string") {
            this.estudios = estudios;
        } else {
            alert("Los estudios deben ser un string");
        }
    }
}

// Comprobación de la alerta de edad y estudios
let persona1 = new Persona("Juan", "Perez", "Madrid", 30, "Bachiller", true);
console.log(persona1);

let persona2 = new Persona("Juan", "Perez", "Madrid", "30", "Bachiller", true);
console.log(persona2);

let persona3 = new Persona("Juan", "Perez", "Madrid", 30, 1, true);
console.log(persona3);

// Ejercicio 2
let personas = [
    new Persona("12345689A", "Juan", "Perez", "Madrid", 31, "Bachiller", true),
    new Persona("98765432B", "Pedro", "Perez", "Madrid", 20, "Bachiller", false),
    new Persona("56789012C", "Ana", "Perez", "Madrid", 34, "Bachiller", true),
    new Persona("34567890D", "Maria", "Perez", "Madrid", 40, "Bachiller", true),
    new Persona("23456789E", "Luis", "Perez", "Madrid", 22, "Bachiller", true),
];

personas.sort((a, b) => {
    return a.edad > b.edad ? 1 : -1;
});

let div = document.getElementById("personas");
let ul = document.createElement("ul");
personas.forEach((persona) => {
    let li = document.createElement("li");
    li.innerHTML = `${persona.nombre} ${persona.apellidos}, ${persona.poblacion}, edad: ${persona.edad}, estudios: ${persona.estudios}, carnet:  ${persona.carnetConducir}`;
    ul.appendChild(li);
});
div.appendChild(ul);

// Ejercicio 3
let mapaAlumnos = new Map();

// Llenar el Map con los objetos Persona del array personas
personas.forEach((persona) => {
    mapaAlumnos.set(persona.dni, persona);
});

// Ordenamos el mapa por clave
mapaAlumnos = new Map([...mapaAlumnos.entries()].sort());
// Ordenamos mapa por edad
mapaAlumnos = new Map([...mapaAlumnos.entries()].sort((a, b) => a[1].edad - b[1].edad));

// Mostramos el mapa por la tabla
let tabla = document.getElementById("tabla-alumnos");
let tbody = tabla.querySelector("tbody");
mapaAlumnos.forEach((persona, dni) => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
                <td>${dni}</td>
                <td>${persona.nombre}</td>
                <td>${persona.apellidos}</td>
                <td>${persona.poblacion}</td>
                <td>${persona.edad}</td>
                <td>${persona.estudios}</td>
                <td>${persona.carnetConducir ? "Sí" : "No"}</td>
            `;
    tbody.appendChild(fila);
});
