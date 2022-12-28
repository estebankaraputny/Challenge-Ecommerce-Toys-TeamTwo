
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
    productsToys.map((product) => {
       return (card += `
       <div class="card" style="width: 18rem;" id="cardToy">
            <div class="card-body">
                <a href="./pages/details.html" class="card-direccion"> 
                        <img src="${product.imageProduct}" class="card-img-top" alt="...">
                        <span class="hidden" id="idProduct">${product.idProduct}</span>
                        <h5 class="card-title">${product.titleProduct}</h5>
                        <p class="card-price">$${product.price}</p>
                </a>
                <button class="btn btn-addToCart gradient" id="buttonAddCart">Agregar al carrito</button>
            </div>
        </div>
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

// Carrito 
const containerCartProducts = document.querySelector('.container__cartProducts');
console.log(containerCartProducts)

// Container de los productos
const productsCart = document.querySelector(".products-cart");

// Icono del carrito 
const btnCart = document.querySelector('.content__cartIcon');

// Productos del carrito 
// const cartProducts = document.querySelector('.cart-products');



btnCart.addEventListener('click', () => {
    // console.log("funciona")
    containerCartProducts.classList.toggle('hidden');
});


// Todos los productos de la tienda
const productList = document.querySelector(".content__cards");
// console.log("Products List",productList);


// Array de productos agregados al carrito 
let products = [];

// Contador del precio final 
const valorTotal = document.querySelector(".total__pagar");


// Mensaje cuando el carrito esta vacio 
const cartEmpty = document.querySelector('.cart__empty');


// AGREGAR UN PRODUCTO AL CARRITO   


productList.addEventListener("click", (event) =>{
    // console.log(event.target)
    
    if(event.target.classList.contains("btn-addToCart")) {
        const product = event.target.parentElement;
        
        const infoProduct = {
            title : product.querySelector("h5").textContent,
            price : Number(product.querySelector("p").textContent.slice(1)),
            quantityProduct : 1,
            imageProduct : product.querySelector("img").src
        };
        
        
        // localStorage.setItem("info Products", infoProduct);
        
        // Sumar la cantidad si el producto existe 

        const productExists = products.some(
            product => product.title === infoProduct.title
        );
        
        if(productExists) {
            const productsItem = products.map(product => {
                if(product.title === infoProduct.title) {
                    product.quantityProduct++;
                    return product;
                } else {
                    return product;
                }
            });
            products = [...productsItem];
        } else{
            products = [...products, infoProduct];
        }

        renderCart();
    }

    // console.log(products)



});



//ELIMINAR PRODUCTOS DEL CARRITO


productsCart.addEventListener('click', event => {

    // console.log(event.target.classList.contains("icon-close"))

    if (event.target.classList.contains('icon-close')) {
      const product = event.target;
      const title = product.querySelector('h3').textContent;
  
      products = products.filter(
        product => product.title !== title
      );
  
      console.log("eliminando producto");
  
      renderCart();
    }
});


// products.forEach(product => {
//     const contentProducts = document.createElement("div");
//     contentProducts.classList.add("cart-products");
//     contentProducts.innerHTML = `
//         <img src="./assent/image/logo-iniciatoysstore.png" alt="imagen del producto" class="image__productCart">
//         <p class="cantidad">${product.quantityProduct}</p>
//         <h3 class="name-product">${product.title}</h3>
//         <p class="price-product">$${product.price}</p>
//         <i class="bi bi-x-lg icon-close"></i>
//     `
//     productsCart.appendChild(contentProducts);
//     totalPrice = totalPrice + (product.quantityProduct * product.price);
// });


// productsCart.addEventListener('click', event => {
//     if (event.target.classList.contains('icon__close')) {
//       const product = event.target;
//       const title = product.querySelector('h3').textContent;
  
//       products = products.filter(
//         product => product.title !== title
//       );
  
//       console.log(product);
  
//       renderCart();
//     }
// });



//RENDERIZAMOS LOS PRODUCTOS AL CARRITO

const renderCart = () =>{

    if (products.length === 0) {
		cartEmpty.classList.remove('hidden');
		productsCart.classList.add('hidden');
	    valorTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		productsCart.classList.remove('hidden');
		valorTotal.classList.remove('hidden');
	};



    productsCart.innerHTML= ``;
    let totalPrice = 0;


    products.forEach(product => {
        const contentProducts = document.createElement("div");
        contentProducts.classList.add("cart-products");
        contentProducts.innerHTML = `
            <img src="${product.imageProduct}" alt="imagen del producto" class="image__productCart">
            <p class="cantidad">${product.quantityProduct}</p>
            <h3 class="name-product">${product.title}</h3>
            <p class="price-product">$${product.price}</p>
            <i class="bi bi-x-lg icon-close"></i>
        `
        productsCart.appendChild(contentProducts);
        totalPrice = totalPrice + (product.quantityProduct * product.price);
    });

    valorTotal.innerText = `$${totalPrice}`;

    console.log(valorTotal);

}







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





// PAGE DETAILS ENVIAR ID PARA SU RENDERIZACION
let idProduct = document.querySelectorAll("#idProduct");

let directionProduct = document.querySelectorAll(".card-direccion")


for(let i = 0; i < idProduct.length; i++ ){
    console.log(idProduct[i].outerText)
    
    directionProduct[i].addEventListener("click", () =>{
      localStorage.setItem("idOfProduct", idProduct[i].outerText)
    });
  }
