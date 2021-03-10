const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');
const imgError = document.getElementById('img-error');

form.addEventListener('submit', (e) => {
e.preventDefault();
const emailVal = email.value;

if(!validateEmail(emailVal)){
    form.classList.toggle('error-form');
    error.classList.toggle('show');
    imgError.classList.toggle('show');
}else{
    form.classList.remove('error-form');
    error.classList.remove('show');
    imgError.classList.remove('show');
}
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}