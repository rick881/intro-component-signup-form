const form = document.querySelector('.signup');
const formCtrl = document.querySelectorAll('.form-control');
const firstName = document.getElementById('fname'); 
const lastName = document.getElementById('lname');
const emailAddress = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validateInput();
})

function validateInput() {
    const fName = firstName.value.trim();
    const lName = lastName.value.trim();
    const email = emailAddress.value.trim();
    const pass = password.value.trim();

    if(fName == '') {
        onError(firstName);
    } else {
        onSuccess(firstName);
    }

    if(lName == '') {
        onError(lastName);
    } else {
        onSuccess(lastName);
    }

    if(!isEmailValid(email)) {
        onError(emailAddress);
    } else {
        onSuccess(emailAddress);;
    }

    if(pass == '') {
        onError(password);
    } else {
        onSuccess(password);
    }

}

function isEmailValid (emailAddress) {
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
    if(emailAddress.trim().match(regex)) {
        return (true);
    } 
}
function onError(input) {
    let parent = input.parentElement;
    parent.classList.remove('valid');
    parent.classList.add('invalid');
}
function onSuccess(input) {
    let parent = input.parentElement;
    parent.classList.remove('invalid');
    parent.classList.add('valid');
}