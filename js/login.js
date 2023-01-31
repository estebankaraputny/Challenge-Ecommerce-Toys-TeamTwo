import {createUser} from './firebaseConfig.js';
const btnLogin = document.getElementById('btn-login');
const usernameValue = document.getElementById('username').value;
const passwordValue = document.getElementById('password').value;
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const localstorageUser = localStorage.getItem('user');
    const localstoragePassword = localstorageUser.password;
    const localstorageUsername = localstorageUser.username;
    console.log(localstorageUsername);
if(usernameValue === localstorageUsername && passwordValue === localstoragePassword) {
    alert('Login successful');
} else {
    alert('Login failed')
}
});


const btnRegister = document.getElementById('btn-register');

btnRegister.addEventListener('click',  (e) => {
    const usernameRegisterValue = document.getElementById('usernameRegister').value;
    const passwordRegisterValue = document.getElementById('passwordRegistration').value;
    const mailRegisterValue = document.getElementById('mailRegister').value;
    e.preventDefault();
  

    createUser(mailRegisterValue, passwordRegisterValue);
    setTimeout(function(){
        window.location = '/pages/login.html';
    }, 3000);})