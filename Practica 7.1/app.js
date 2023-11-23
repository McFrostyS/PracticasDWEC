window.addEventListener("load", (e) => {
    /***********************************  LOGIN ***********************************/
    const form = document.getElementById("form");
    const email = document.getElementById("floatingInput");
    const password = document.getElementById("floatingPassword");

    // Comprobar si el formulario existe para no lanzar errores en la consola
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            fetchUser();
        });
    }

    async function fetchUser() {
        const emailValue = email.value;
        const passwordValue = password.value;

        // Hacer la petición a la API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // Convertir la respuesta a JSON
        const json = await response.json();
        // Comprobar si el email y el zipcode (contraseña en ese caso) son correctos
        const user = json.find((user) => user.email === emailValue && user.address.zipcode === passwordValue);
        if (user) {
            // Redireccionar a la página blog.html
            window.open("blog.html", "_self");
        } else {
            // Mostrar mensaje de error
            const error = document.getElementById("error");
            error.innerHTML = "El email o la contraseña son incorrectos";

            // Limpiar los campos
            email.value = "";
            password.value = "";
        }
    }
    /******************************************************************************/

    /****************************  LISTADO DE USUARIOS ****************************/
    const userList = document.getElementById("itemsUsers");

    // Si estas en la página de usuarios, accede a ellos
    if (userList) {
        accedeUsers();
    }

    async function accedeUsers() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await response.json();
        pintaUsuarios(json);
    }

    function pintaUsuarios(listaUsers) {
        // Recorrer el array de usuarios
        listaUsers.forEach((user) => {
            // Lo añadimos al tbody de la tabla
            userList.innerHTML += `
        <tr>
            <td>${user.id}</td>
            <td><a href='user.html?userId=${user.id}'>${user.name}</a></td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td><a href='posts.html?userId=${user.id}'>Mostrar Posts</a></td>
        </tr>
        `;
        });
    }
    /******************************************************************************/

    /****************************  DATOS DE UN USUARIO ****************************/
    const user = document.getElementById("user");

    if (user) {
        accedeUser();
    }

    async function accedeUser() {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get("userId");

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const json = await response.json();
        pintaUser(json);
    }

    function pintaUser(userData) {
        user.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Name: ${userData.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Username: ${userData.username}</h6>
                <p class="card-text">Email: ${userData.email}</p>
                <p class="card-text">Phone: ${userData.phone}</p>
                <p class="card-text">Website: ${userData.website}</p>
                <p class="card-text">Company: ${userData.company.name}</p>
                <p class="card-text">City: ${userData.address.city}</p>
                <p class="card-text">Street: ${userData.address.street}</p>
                <p class="card-text">Suite: ${userData.address.suite}</p>
                <p class="card-text">Zipcode: ${userData.address.zipcode}</p>
                <p class="card-text">Lat: ${userData.address.geo.lat}</p>
                <p class="card-text">Lng: ${userData.address.geo.lng}</p>
                <td><a href='posts.html?userId=${userData.id}'>Posts</a></td>
            </div>
        </div>
        `;
    }
    /******************************************************************************/

    /******************  LISTADO DE POSTS TOTALES Y POR USUARIO *******************/
    const postsList = document.getElementById("itemsPosts");
    let pagina = 1;
    const siguiente = document.getElementById("siguiente");
    const anterior = document.getElementById("anterior");
    let totalPosts = 0;
    let postsPerPage = 5;

    // Numero de posts totales para saber cuantas páginas hay
    async function postTotales() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        totalPosts = data.length;
    }

    async function accedePosts(pagina) {
        // Obtener el id del usuario de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get("userId");

        // Si hay id, accede a los posts de ese usuario, sino, a todos
        if (userId) {
            await accedePostsUsuario(userId, pagina);
        } else {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pagina}&_limit=${postsPerPage}`);
            const json = await response.json();
            pintaPosts(json);
        }
    }

    async function accedePostsUsuario(userId, pagina) {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${pagina}&_limit=${postsPerPage}&userId=${userId}`
        );
        const json = await response.json();
        pintaPosts(json);
    }

    function pintaPosts(listaPosts) {
        postsList.innerHTML = "";
        if (listaPosts.length > 0) {
            listaPosts.forEach((post) => {
                postsList.innerHTML += `
            <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
            </tr>
            `;
            });
            siguiente.classList.remove("disabled");
        } else {
            postsList.innerHTML = "<tr><td colspan='3'>No hay más posts disponibles de este usuario.</td></tr>";
            siguiente.classList.add("disabled");
        }
    }

    // Limitamos el uso de los botones de siguiente y anterior
    postTotales().then(() => {
        if (siguiente && anterior) {
            siguiente.addEventListener("click", () => {
                if (pagina < Math.ceil(totalPosts / postsPerPage)) {
                    pagina++;
                    accedePosts(pagina);
                }
            });
            anterior.addEventListener("click", () => {
                if (pagina !== 1) {
                    pagina--;
                    accedePosts(pagina);
                }
            });
        }
        accedePosts(pagina);
    });
    /******************************************************************************/
});
