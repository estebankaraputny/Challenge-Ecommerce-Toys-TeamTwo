import {createUser, verificarUsuario, loginGoogle} from './firebaseConfig.js';
const btnLogin = document.getElementById('btn-login');
btnLogin.addEventListener('click',  (e) => {
    e.preventDefault();
    const mailValue = document.getElementById('mail').value;
    const passwordValue = document.getElementById('password').value;
    verificarUsuario(mailValue,passwordValue);

    

});


const btnRegister = document.getElementById('btn-register');

btnRegister.addEventListener('click',  (e) => {
    const usernameRegisterValue = document.getElementById('usernameRegister').value;
    const passwordRegisterValue = document.getElementById('passwordRegistration').value;
    const mailRegisterValue = document.getElementById('mailRegister').value;
    e.preventDefault();
  

    createUser(mailRegisterValue, passwordRegisterValue,usernameRegisterValue);
    setTimeout(function(){
        window.location = '/pages/desglose.html';
    }, 3000);})
    


    const btnLoginGoogle = document.getElementById('login-google');
    btnLoginGoogle.addEventListener('click',(e)=>{
        loginGoogle();

    })