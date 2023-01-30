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