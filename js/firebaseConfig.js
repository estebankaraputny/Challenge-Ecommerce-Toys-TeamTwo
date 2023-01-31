import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

  // Import the functions you need from the SDKs you need
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAW5wjQ-GHnUiNKcQRdh0sy5AXuWFjG62c",
    authDomain: "iniciatoys-mobile.firebaseapp.com",
    projectId: "iniciatoys-mobile",
    storageBucket: "iniciatoys-mobile.appspot.com",
    messagingSenderId: "265614041631",
    appId: "1:265614041631:web:bd6755ee1733494e76ab2a"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  export const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
     
      const user = userCredential.user;
      alert("registro creado")
      localStorage.setItem("login",true)

    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("acceso denegado");
    

     })
   
  }

  export const verificarUsuario = (email, password) => {
    console.log("dentro de verificar usuario")
   
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
     
        const user = userCredential.user;
        alert("acceso correcto")
        localStorage.setItem("login",true)
        setTimeout(function(){
          window.location = '/pages/desglose.html';
      }, 3000)
      })
       
        
     .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("acceso denegado");
    

     })
  }
  const provider = new GoogleAuthProvider();
  export const loginGoogle = () =>{
    console.log(provider)
    signInWithPopup(auth,provider)
    .then((result) => {
      console.log("google correcto")
      localStorage.setItem("login",true)
      setTimeout(function(){
        window.location = '/pages/desglose.html';
    }, 3000)

    })
    .catch((error)=>{
      console.log(error)

    })
  }