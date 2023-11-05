const formulario = document.querySelector("#formulario");
const input = document.querySelector("#input");
const listaTareas = document.querySelector("#lista-tareas");
const temp = document.querySelector("#temp").content;

// Añade un event listener al formulario para crear una nueva tarea
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Crea una nueva tarea a partir del temp
    const tarea = temp.cloneNode(true);
    const p = tarea.querySelector("p");
    p.textContent = input.value; // Añade el texto de la tarea

    // Crea un nuevo elemento de lista para la tarea
    const li = document.createElement("li");
    li.style.listStyle = "none";

    // Añade event listeners a los botones de completar y eliminar
    tarea.querySelector(".fa-check-circle").addEventListener("click", () => {
        // Si no está tachada tacharla y si está tachada destacharla
        if (p.style.textDecoration === "line-through") {
            p.style.textDecoration = "none";
        } else {
            p.style.textDecoration = "line-through";
        }
    });
    tarea.querySelector(".fa-times-circle").addEventListener("click", () => {
        li.remove();
    });

    // Añade la tarea al elemento de lista
    li.appendChild(tarea);
    // Añade el elemento de lista a la lista de tareas
    listaTareas.appendChild(li);

    // Limpia el input
    input.value = "";
});
