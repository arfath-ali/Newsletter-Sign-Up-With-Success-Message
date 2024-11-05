const labels = document.getElementsByClassName("subscription__form-labels")[0];
const email = document.getElementsByClassName("subscription__email")[0];
const subscribeButton = document.getElementsByClassName("subscription__button")[0];
const dismissButton = document.getElementsByClassName("confirmation__button")[0];
const subscriptionPage = document.getElementsByClassName("subscription__page")[0];
const confirmationPage = document.getElementsByClassName("confirmation__page")[0];

subscribeButton.addEventListener('click', () => {
    if (isEmailValid(email.value)) {
        subscriptionPage.classList.add("hidden");
        confirmationPage.classList.remove("hidden");
        clearErrorMessage();
    } else {
        showErrorMessage();
    }
});

dismissButton.addEventListener('click', () => {
    confirmationPage.classList.add("hidden");
    subscriptionPage.classList.remove("hidden");
});

function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
}

function showErrorMessage() {
    clearErrorMessage();
    const validEmailRequiredMessage = document.createElement("p");
    validEmailRequiredMessage.textContent = "Valid email required";
    validEmailRequiredMessage.classList.add("errorMessage");
    labels.appendChild(validEmailRequiredMessage);
    labels.classList.add("layout");
    email.classList.add("invalidEmail");
}

function clearErrorMessage() {
    const errorMessage = labels.querySelector(".errorMessage");
    if (errorMessage) {
        labels.removeChild(errorMessage);
        email.classList.remove("invalidEmail");
    }
}

