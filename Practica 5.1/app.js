window.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");
    const nombre = document.querySelector("#name");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const creditCard = document.querySelector("#credit-card");
    const terms = document.querySelector("#terms");
    const codigoPostal = document.querySelector("#codigoPostal");
    const numeroEntero = document.querySelector("#numeroEntero");
    const numeroReal = document.querySelector("#numeroReal");
    const telefono = document.querySelector("#numeroTelefono");
    const telefonoInternacional = document.querySelector("#telefonoInternacional");
    const fecha = document.querySelector("#fecha");
    const dni = document.querySelector("#dni");
    const url = document.querySelector("#url");
    const contraseña = document.querySelector("#contraseña");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();

        let valido = true;

        if (
            !validaNombre(nombre) ||
            !validaEmail(email) ||
            !validaPassword(password) ||
            !validaCreditCard(creditCard) ||
            !validaCodigoPostal(codigoPostal) ||
            !validaNumeroEntero(numeroEntero) ||
            !validaNumeroReal(numeroReal) ||
            !validaNumeroTelefono(telefono) ||
            !validaNumeroTelefonoInternacional(telefonoInternacional) ||
            !validaFecha(fecha) ||
            !validaDNI(dni) ||
            !validaURL(url) ||
            !validaPasswordSegura(contraseña) ||
            !validaTerms(terms)
        ) {
            valido = false;
        }

        if (valido) {
            formulario.submit();
        }
    });

    function validaEmail(email) {
        // Que tenga formato de email válido
        const regex = /^[-\w.%+]+@(?:[\w-]+\.)+[\w]{2,}$/;
        const mailValue = email.value.trim();
        if (mailValue.match(regex)) {
            marcarValido(email);
            return true;
        } else {
            marcarError(email, "El email no tiene formato válido");
            return false;
        }
    }

    function validaNombre(nombre) {
        // que tenga entre 1 y 40 caracteres, sin números
        const regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        const nameValue = nombre.value.trim();
        if (nameValue.match(regex)) {
            marcarValido(nombre);
            return true;
        } else {
            marcarError(nombre, "El nombre no tiene formato válido");
            return false;
        }
    }

    function validaPassword(password) {
        // Que tenga al menos 8 caracteres, una mayúscula, una minúscula y un número
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        const passwordValue = password.value.trim();
        if (passwordValue.match(regex)) {
            marcarValido(password);
            return true;
        } else {
            marcarError(password, "La contraseña no tiene formato válido o es menor a 8 caracteres");
            return false;
        }
    }

    function validaCreditCard(creditCard) {
        // Que tenga entre 13 y 16 dígitos
        const regex = /^[0-9]{13,16}$/;
        const creditCardValue = creditCard.value.trim();
        if (creditCardValue.match(regex)) {
            marcarValido(creditCard);
            return true;
        } else {
            marcarError(creditCard, "La tarjeta de crédito no tiene formato válido");
            return false;
        }
    }

    function validaTerms(terms) {
        // Que esté marcado
        if (terms.checked) {
            marcarValido(terms);
            return true;
        } else {
            marcarError(terms, "Debes aceptar los términos y condiciones");
            return false;
        }
    }

    function validaCodigoPostal(codigoPostal) {
        // Código postal de 5 dígitos (0-5) seguidos de 4 dígitos
        const regex = /^[0-5][0-9]{4}$/;
        const codigoPostalValue = codigoPostal.value.trim();
        if (codigoPostalValue.match(regex)) {
            marcarValido(codigoPostal);
            return true;
        } else {
            marcarError(codigoPostal, "El código postal no tiene formato válido");
            return false;
        }
    }

    function validaNumeroEntero(numeroEntero) {
        // Número entero positivo
        const regex = /^[0-9]+$/;
        const numeroEnteroValue = numeroEntero.value.trim();
        if (numeroEnteroValue.match(regex)) {
            marcarValido(numeroEntero);
            return true;
        } else {
            marcarError(numeroEntero, "Número entero inválido");
            return false;
        }
    }

    function validaNumeroReal(numeroReal) {
        // Número real
        const regex = /^[+-]?\d+(\.\d+)?$/;
        const numeroRealValue = numeroReal.value.trim();
        if (numeroRealValue.match(regex)) {
            marcarValido(numeroReal);
            return true;
        } else {
            marcarError(numeroReal, "Número real inválido");
            return false;
        }
    }

    function validaNumeroTelefono(telefono) {
        // Número de teléfono de 10 dígitos
        const regex = /^[0-9]{10}$/;
        const telefonoValue = telefono.value.trim();
        if (telefonoValue.match(regex)) {
            marcarValido(telefono);
            return true;
        } else {
            marcarError(telefono, "Número de teléfono inválido (deben ser 10 dígitos)");
            return false;
        }
    }

    function validaNumeroTelefonoInternacional(telefonoInternacional) {
        // Número de teléfono internacional con formato +XX-XXXXXXXXXXXXX
        const regex = /^\+\d{1,3}-\d{6,14}$/;
        const telefonoInternacionalValue = telefonoInternacional.value.trim();
        if (telefonoInternacionalValue.match(regex)) {
            marcarValido(telefonoInternacional);
            return true;
        } else {
            marcarError(telefonoInternacional, "Número de teléfono internacional inválido (formato: +XX-XXXXXXXXXXXXX)");
            return false;
        }
    }

    function validaFecha(fecha) {
        // Formato MM/DD/AAAA
        const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
        const fechaValue = fecha.value.trim();
        if (fechaValue.match(regex)) {
            marcarValido(fecha);
            return true;
        } else {
            marcarError(fecha, "Fecha inválida (formato: MM/DD/AAAA)");
            return false;
        }
    }

    function validaDNI(dni) {
        // DNI español con 8 dígitos seguidos de una letra
        const regex = /^[0-9]{8}[A-Z]$/;
        const dniValue = dni.value.trim();
        if (dniValue.match(regex)) {
            marcarValido(dni);
            return true;
        } else {
            marcarError(dni, "DNI inválido (formato: 12345678A)");
            return false;
        }
    }

    function validaURL(url) {
        // URL con protocolo http o https obligatorio
        const regex = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:/~+#]*[\w\-\@?^=%&/~+#])?$/;
        const urlValue = url.value.trim();
        if (urlValue.match(regex)) {
            marcarValido(url);
            return true;
        } else {
            marcarError(url, "URL inválida");
            return false;
        }
    }

    function validaPasswordSegura(contraseña) {
        // Al menos un dígito, al menos una letra y longitud de 8 a 10 caracteres
        const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,10}$/;
        const contraseñaValue = contraseña.value.trim();
        if (contraseñaValue.match(regex)) {
            marcarValido(contraseña);
            return true;
        } else {
            marcarError(
                contraseña,
                "La contraseña no cumple con los requisitos (8-10 caracteres, al menos un dígito y una letra)"
            );
            return false;
        }
    }

    function marcarError(elemento, mensaje) {
        elemento.parentNode.querySelector(".error-feedback").textContent = mensaje;
        elemento.parentNode.classList.add("error");
    }

    function marcarValido(elemento) {
        elemento.parentNode.querySelector(".error-feedback").textContent = "";
        elemento.parentNode.classList.remove("error");
    }
});

const marketingCheckboxes = document.querySelectorAll(".marketing");

function selectAllMarketing() {
    marketingCheckboxes.forEach((checkbox) => {
        checkbox.checked = true;
    });
}

function deselectAllMarketing() {
    marketingCheckboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
}
