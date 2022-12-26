// ARRAY DE JUGETES 
const productsToys = [
    {
        titleProduct: "Pelota",
        descriptionProduct: "Pelota de goma",
        stock: 10,
        category: "Deportes",
        imageProduct:'https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        idProduct: 1,
        price: 100
    },
    {
        titleProduct: "Helicoptero",
        descriptionProduct: "Helicoptero a control remoto",
        stock: 4,
        category: "Juguetes control remoto",
        imageProduct:'https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        idProduct: 2,
        price: 200
    },
    {
        titleProduct: "Patineta",
        descriptionProduct: "Patineta de madera",
        stock: 2,
        category: "Deportes",
        imageProduct:'https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        idProduct: 3,
        price: 300
    },
    {
        titleProduct: "TEG",
        descriptionProduct: "Juego de mesa TEG",
        stock: 5,
        category: "Juegos de mesa",
        imageProduct:'https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        idProduct: 4,
        price: 400
    },
    {
        titleProduct: "Cubo de Rubik",
        descriptionProduct: "Cubo de Rubik 3x3",
        stock: 3,
        category: "Juegos disacticos",
        imageProduct:'https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        idProduct: 5,
        price: 500
    },
    {
        titleProduct: "Buzz Lightyear",
        descriptionProduct: "Buzz Lightyear articulado",
        stock: 10,
        category: "Juguetes de accion",
        imageProduct:'https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        idProduct: 6,
        price: 600
    },
    {
        titleProduct: "Play Station",
        descriptionProduct: "Consola de Videojuegos",
        stock: 10,
        category: "Videojuegos",
        imageProduct:'https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        idProduct: 7,
        price: 1600
    },
    {
        titleProduct: "Guitarra",
        descriptionProduct: "Guitarra de plastico",
        stock: 10,
        category: "Arte",
        imageProduct:'https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        idProduct: 8,
        price: 100
    },
    {
        titleProduct: "Lampara Pinguino Led",
        descriptionProduct: "Lampara led",
        stock: 10,
        category: "Ilumicancion",
        imageProduct:'https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        idProduct: 9,
        price: 250
    },
    
]


const developers = [
    {
        name: "Esteban Karaputny",
        github:"https://github.com/estebankaraputny",
        linkdin: "https://www.linkedin.com/in/esteban-karaputny-9149171ab/"
    },
    {
        name: "Brisa Alvarez",
        github:"https://github.com/bbrialvarez",
        linkdin:"https://www.linkedin.com/mwlite/in/brisa-%C3%A1lvarez-5a211622a"
    },
    {
        name: "Cesar Ferreyra",
        github:"https://github.com/CesarFerrey",
        linkdin: "www.linkedin.com/in/cesar-ferreyra-vadnal"
    },
    {
        name: "Franco Guerra",
        github:"https://github.com/FrancoLguerra",
        linkdin: "https://www.linkedin.com/in/franco-luis-guerra/"
    }
]



// EFECT TOGGLE IN BUTTON MENU 

const botonMenu = document.getElementById("botonMenu");
const linksMenu = document.getElementById("contentLinks");

botonMenu.addEventListener("click",() =>{
    linksMenu.classList.toggle(`activo`)
});



// RENDERIZAR PRODUCTOS 



const contentCards = document.getElementById("contentCards");
let card = ``;


const renderCards = () => {
    productsToys.map((event) => {
       return (card += `
       <a href="#" class="card-direccion"> 
            <div class="card" style="width: 18rem;" id="cardToy">
                <img src="${event.imageProduct}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${event.titleProduct}</h5>
                    <p class="card-price">$${event.price}</p>
                    <a href="#" class="btn btn-addToCart gradient">Agregar al carrito</a>
                </div>
            </div>
       </a>
                `);
    });
    contentCards.innerHTML = card;
}
renderCards();


const searchToys = document.getElementById("inputSearch");

// console.log(searchToys);

searchToys.addEventListener("keyup", (event) =>{
    const cardsToys = document.querySelectorAll("#cardToy")
    let toysHidden = [];
    
    console.log(event.target.value.toLowerCase())
    

    if (event.target.matches("#inputSearch")){
        cardsToys.forEach(toy =>{
            toy.textContent.toLowerCase().includes(event.target.value.toLowerCase())
            ? toy.classList.remove("hidden")
            : toy.classList.add("hidden")

            
            if(toy.classList.contains("hidden")){
                toysHidden.push(toy)
            }
        })
    }
    const messageError = document.getElementById("messageError");
    let message = ``;
    
    if (toysHidden.length === cardsToys.length){
        message += `
        <div class="card__mensajeDeError">
            <img src="./assent/image/undraw_outer_space_re_u9vd.svg" alt="Imagen del espacio" class="img__error">
            <div class="mensaje__error">
                <h2>No hay productos que coincidan con tu búsqueda.</h2>
                <ul>
                    <li>Revisá la ortografía de la palabra.</li>
                    <li>Utilizá palabras más genéricas o menos palabras.</li>
                    <li>Prueba navegar por nuestro menú de categorías.</li>
                    <li>Vuelve a la página principal para seguir buscando.</li>
                </ul>
            </div>
        </div>
        `
    }
    messageError.innerHTML = message; //Mostrara este mensaje si es que no se encuentra ningun producto

});



// COMIENZA LA FUNCIONALIDAD DEL CARRITO 


const containerCartProducts = document.querySelector('.container__cartProducts')
const btnCart = document.querySelector('.content__cartIcon')
console.log(containerCartProducts)


btnCart.addEventListener('click', () => {
    // console.log("funciona")
    containerCartProducts.classList.toggle('hidden')
});



const productList = document.querySelector(".content__cards")
// const buttonCard = document.querySelector(".btn-addToCart");

console.log(productList);

productList.addEventListener("click", (event) =>{
    // console.log(event.target)
    if(event.target.classList.contains("btn-addToCart")){
        const product = event.target.parentElement;
        console.log(product.querySelector("h5").textContent)
    }
})

// RENDERIZAR DEV EN EL FOOTER 

const contentRedes = document.getElementById("redesDev");
let div = ``;

const renderRedesFooter = () => {
    developers.map((dev) =>{
        return (
            div += `
            <div class="dev">
                <p>${dev.name}</p>
                <div>
                    <a href="${dev.linkdin}"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="${dev.github}"><i class="fa-brands fa-github"></i></a>
                </div>
          </div> `
        );
    });
    contentRedes.innerHTML = div;
}
renderRedesFooter()


// CODIGO DE DESCUENTO 

// const generateCode = () => {
    //     const code = Math.floor(Math.random() * 1000000);
    //    //genero el porcentaje de descuento (entre 10 y 70%)
//     const percentageDiscount = Math.floor(Math.random() * 60 + 10);
//     alert(`Su codigo de descuento es: ${code}, Con un descuento del: ${percentageDiscount}%`);
//     localStorage.setItem("code", code);
//     localStorage.setItem("percentageDiscount", percentageDiscount);
//   };





