// Validación al enviar el formulario
function sendForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const errorEmail = document.getElementById("errorEmail");
    const errorFormatEmail = document.getElementById("errorFormatEmail");
    const errorPhone = document.getElementById("errorPhone");
    const errorMessageUser = document.getElementById("errorMessageUser");
    const errorSubmit = document.getElementById("errorSubmit");


    if (!isValid) {
        showModal("error-modal"); // Mostrar modal de error
    } else {
        showModal("success-modal"); // Mostrar modal de éxito
    }
    let isValid = true;

    // Validar nombre
    if (!nameInput.value.trim()) {
        nameError.hidden = false;
        isValid = false;
    } else {
        nameError.hidden = true;
    }

    // Validar email
    if (!emailInput.value.trim()) {
        errorEmail.hidden = false;
        errorFormatEmail.hidden = true;
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        errorEmail.hidden = true;
        errorFormatEmail.hidden = false;
        isValid = false;
    } else {
        errorEmail.hidden = true;
        errorFormatEmail.hidden = true;
    }

    // Validar teléfono (debe ser numérico)
    if (!phoneInput.value.trim() || isNaN(phoneInput.value)) {
        errorPhone.hidden = false;
        isValid = false;
    } else {
        errorPhone.hidden = true;
    }

    // Validar mensaje
    if (messageInput.value.trim().length < 5) {
        errorMessageUser.hidden = false;
        isValid = false;
    } else {
        errorMessageUser.hidden = true;
    }

    // Mostrar error de envío si hay campos inválidos
    if (!isValid) {
        errorSubmit.hidden = false;
    } else {
        errorSubmit.hidden = true;
        showModal("error-modal"); // Para el modal de error
        showModal("success-modal"); // Para el modal de éxito
    }
}

// Validar formato de email con expresión regular
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Mostrar modal de confirmación
function showModal(modalId) {
    const modal = document.getElementById(modalId); // Seleccionar modal específico por ID
    if (modal) {
        modal.style.display = "flex"; // Mostrar el modal
    }

    // Cerrar el modal al hacer clic en la "x"
    const closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        modal.style.display = "none"; // Cerrar el modal
    });
}

// Validación en tiempo real al salir de un campo (onblur)
function validateName() {
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");

    if (!nameInput.value.trim()) {
        nameError.hidden = false;
    } else {
        nameError.hidden = true;
    }
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const errorFormatEmail = document.getElementById("errorFormatEmail");

    if (!emailInput.value.trim()) {
        errorEmail.hidden = false;
        errorFormatEmail.hidden = true;
    } else if (!validateEmail(emailInput.value)) {
        errorEmail.hidden = true;
        errorFormatEmail.hidden = false;
    } else {
        errorEmail.hidden = true;
        errorFormatEmail.hidden = true;
    }
}

function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const errorPhone = document.getElementById("errorPhone");

    if (!phoneInput.value.trim() || isNaN(phoneInput.value)) {
        errorPhone.hidden = false;
    } else {
        errorPhone.hidden = true;
    }
}

function validateMessage() {
    const messageInput = document.getElementById("message");
    const errorMessageUser = document.getElementById("errorMessageUser");

    if (messageInput.value.trim().length < 5) {
        errorMessageUser.hidden = false;
    } else {
        errorMessageUser.hidden = true;
    }
}
