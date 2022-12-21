// EFECT TOGGLE IN BUTTON MENU 

const botonMenu = document.getElementById("botonMenu");
const linksMenu = document.getElementById("contentLinks");

botonMenu.addEventListener("click",() =>{
    linksMenu.classList.toggle(`activo`)
});
