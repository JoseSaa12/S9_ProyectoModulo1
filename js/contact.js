
function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');

    if (!nameInput.value.trim()) {
        nameError.hidden = false;
        return false;
    } else if (nameInput.value.trim().toLowerCase() === "ironhack") {
        alert("You cannot be Ironhack, because I am Ironhack.");
        nameError.hidden = false;
        return false;
    } else {
        nameError.hidden = true;
        return true;
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const errorEmail = document.getElementById('errorEmail');
    const errorFormatEmail = document.getElementById('errorFormatEmail');
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue) {
        errorEmail.hidden = false;
        errorFormatEmail.hidden = true;
        return false;
    } else if (!emailRegex.test(emailValue)) {
        errorEmail.hidden = true;
        errorFormatEmail.hidden = false;
        return false;
    } else {
        errorEmail.hidden = true;
        errorFormatEmail.hidden = true;
        return true;
    }
}

function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const errorPhone = document.getElementById('errorPhone');

    if (!phoneInput.value.trim()) {
        errorPhone.hidden = false;
        return false;
    } else {
        errorPhone.hidden = true;
        return true;
    }
}

function validateMessage() {
    const messageInput = document.getElementById('message');
    const errorMessage = document.getElementById('errorMessageUser');

    if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
        errorMessage.hidden = false;
        return false;
    } else {
        errorMessage.hidden = true;
        return true;
    }
}

function sendForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();

    const errorSubmit = document.getElementById('errorSubmit');
    const successModal = document.getElementById('success-modal');
    const errorModal = document.getElementById('error-modal');

    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
        errorSubmit.hidden = true;
        successModal.style.display = "block";
    } else {
        errorSubmit.hidden = false;
        errorModal.style.display = "block";
    }
}

// Cerrar modales
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('success-modal').style.display = "none";
        document.getElementById('error-modal').style.display = "none";
    });
});
