const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

form.addEventListener('submit', function(e){
    let isValid = true;
    if (fullName.value.length < 5) {
        nameError.textContent = 'Full name must be at least 5 characters';
        isValid = false;
    } else {
        nameError.textContent = '';
    }
    if (!email.value.includes('@')) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    const phoneNumber = phone.value;
    if (phoneNumber.length !== 10 || phoneNumber === '1234567890' || isNaN(phoneNumber)) {
        phoneError.textContent = 'Phone number must be 10 digits and not be 1234567890';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }
    const name = fullName.value.toLowerCase();
    const pwd = password.value;
    if (pwd.length < 8 || pwd.toLowerCase() === 'password' || pwd.toLowerCase() === name) {
        passwordError.textContent = 'Password must be at least 8 characters, cannot be "password" or your name';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }
    if (pwd !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }
    if (!isValid) {
        e.preventDefault();
    }
});

fullName.addEventListener('input', function() {
    if (fullName.value.length >= 5) {
        nameError.textContent = '';
    } else {
        nameError.textContent = 'Full name must be at least 5 characters';
    }
});

email.addEventListener('input', function() {
    if (email.value.includes('@')) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Please enter a valid email address';
    }
});

phone.addEventListener('input', function(){
    if (phone.value.length === 10 && phone.value !== '1234567890' && !isNaN(phone.value)) {
        phoneError.textContent = '';
    } else {
        phoneError.textContent = 'Phone number must be 10 digits and not be 1234567890';
    }
});

password.addEventListener('input', function(){
    const name = fullName.value.toLowerCase();
    const pwd = password.value;
    if (pwd.length >= 8 && pwd.toLowerCase() !== 'password' && pwd.toLowerCase() !== name) {
        passwordError.textContent = '';
    } else {
        passwordError.textContent = 'Password must be at least 8 characters, cannot be "password" or your name';
    }
});

confirmPassword.addEventListener('input', function(){
    if (password.value === confirmPassword.value) {
        confirmPasswordError.textContent = '';
    } else {
        confirmPasswordError.textContent = 'Passwords do not match';
    }
});
