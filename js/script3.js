//contact js
const contForm = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateContactForm() {
    event.preventDefault();

    if (name.value.trim().length > 0) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (subject.value.trim().length > 10) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    
    if (address.value.trim().length > 25) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    console.log("heelo");
}

contForm.addEventListener("submit", validateContactForm);

function checkEmail(email) {
    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const inputMatch = regEx.test(email);
    return inputMatch;
}