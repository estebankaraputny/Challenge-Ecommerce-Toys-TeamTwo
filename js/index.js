
// ARRAY DE JUGETES 
const productsToys = [
    {
        titleProduct: "Pelota Final World Cup Qatar 2022",
        descriptionProduct: "Pelota de goma",
        stock: 10,
        category: "Deportes",
        imageProduct:'https://media.tycsports.com/files/2022/12/05/513239/pelota-final-mundial-de-qatar-2022_w416.webp',
        idProduct: 1,
        price: 100
    },
    {

        titleProduct: "Helicoptero a control remoto",

        descriptionProduct: "Helicoptero a control remoto",
        stock: 4,
        category: "Juguetes control remoto",
        imageProduct:'https://image.made-in-china.com/155f0j00PmYWzKOMEHcu/OEM-ODM-Gyro-Aircraft-Children-Altitude-Hold-Helicopter-with-Light-3-Channels-RC-Helicopter-Remote-Control-Helicopter-Toys-for-Kid-Remote-Control-Airplane.jpg',
        idProduct: 2,
        price: 200
    },
    {
        titleProduct: "Skate",
        descriptionProduct: "Patineta de madera",
        stock: 2,
        category: "Deportes",
        imageProduct:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2nfeb2lOJf0q5WJu1MjXE-6xKYGW3TBStg&usqp=CAU',
        idProduct: 3,
        price: 300
    },
    {
        titleProduct: "TEG",
        descriptionProduct: "Juego de mesa TEG",
        stock: 5,
        category: "Juegos de mesa",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_782733-MLA40114865267_122019-O.webp',
        idProduct: 4,
        price: 400
    },
    {
        titleProduct: "Cubo de Rubik",
        descriptionProduct: "Cubo de Rubik 3x3",
        stock: 3,
        category: "Juegos disacticos",
        imageProduct:'https://t2.uc.ltmcdn.com/es/posts/5/1/7/como_resolver_el_cubo_de_rubik_21715_600.webp',
        idProduct: 5,
        price: 500
    },
    {
        titleProduct: "Buzz Lightyear",
        descriptionProduct: "Buzz Lightyear articulado",
        stock: 10,
        category: "Figura de accion",
        imageProduct:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV47V6uGEQ9KA8Y8dkTsIDCXdBH0BheuqYIw&usqp=CAU',
        idProduct: 6,
        price: 600
    },
    {
        titleProduct: "PlayStations 5",
        descriptionProduct: "consola de video juegos",
        stock: 10,
        category: "Videojuegos",
        imageProduct:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DSvh3kBWC9T6KJxrG6LSgfLRjx-09rrwJQ&usqp=CAU',
        idProduct: 7,
        price: 1900
    },
    {
        titleProduct: "Cocina",
        descriptionProduct: "Cocina con articulos de cocina incluidos",
        stock: 14,
        category: "Profesion",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_676339-MLA45608086908_042021-O.webp',
        idProduct: 8,
        price: 300
    },
    {
        titleProduct: "Goku Fase Dios",
        descriptionProduct: "El mejor de la historia",
        stock: 10,
        category: "Figura de accion",
        imageProduct:'https://media.telemundo47.com/2022/12/tlmd-messi-copa-nueva-argentina-1.jpg?quality=85&strip=all&resize=400%2C225',
        idProduct: 9,
        price: 6000
    },
    {
        titleProduct: "Pocoyo",
        descriptionProduct: "Peluche de pocoyo, muy suave",
        stock: 10,
        category: "Deportes",
        imageProduct:'https://d2r9epyceweg5n.cloudfront.net/stores/001/868/898/products/pocoyo12-6b5b230474c20205d216608448981732-640-0.jpg',
        idProduct: 10,
        price: 200
    },
    {
        titleProduct: "Juego de Mate",
        descriptionProduct: "para jugar a que tomas mates xd",
        stock: 10,
        category: "Profesion",
        imageProduct:'https://www.trotyl.com.ar/assets/scripts/load.php?src=https://www.trotyl.com.ar/assets/uploads/images/-uWDh9a4.jpeg&q=100&w=468&h=468&zc=1',
        idProduct: 11,
        price: 100
    },
    {
        titleProduct: "Lampara de mesa",
        descriptionProduct: "Efecto de movimiento",
        stock: 10,
        category: "Iluminacion",
        imageProduct:'https://cdn.shopify.com/s/files/1/0080/5791/3425/products/FISURA_LT0323_1_1024x1024.jpg?v=1614602991',
        idProduct: 12,
        price: 150
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
let card = `
<div class="content__messageErr" id="messageError">
</div>
`;


// const renderCards = () => {
    
//     productsToys.map((product) => {
//        return (card += `
                
//         <div class="card" style="width: 18rem; id="cardToy">
//                 <img src="${product.imageProduct}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <span class="hidden" id="idProduct">${product.idProduct}</span>
//                     <h5 class="card-title">${product.titleProduct}</h5>
//                     <p class="card-price">$${product.price}</p>
//                     <button class="btn btn-addToCart gradient" id="buttonAddCart">Agregar al carrito</button>
//                     <a href="./pages/details.html" class="btn card-direccion gradient">Ver más</a>
//                 </div>
//         </div>
        
//         `);
//     });
//     contentCards.innerHTML = card;
// }
// renderCards();


// SE EJECUTA LA FUNCION RENDER CARDS SI LA URL TERMINA EN INDEX.HTML 
      
if (window.location.pathname === "/index.html") {
    
    const renderCards = () => {
        
        productsToys.map((product) => {
        return (card += `
                    
            <div class="card" style="width: 18rem; id="cardToy">
                    <img src="${product.imageProduct}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <span class="hidden" id="idProduct">${product.idProduct}</span>
                        <h5 class="card-title">${product.titleProduct}</h5>
                        <p class="card-price">$${product.price}</p>
                        <button class="btn btn-addToCart gradient" id="buttonAddCart">Agregar al carrito</button>
                        <a href="./pages/details.html" class="btn card-direccion gradient">Ver más</a>
                    </div>
            </div>
            
            `);
        });
        contentCards.innerHTML = card;
    }
    renderCards();
    
    
    // FILTRO POR BUSQUEDA
    
    
    const searchToys = document.getElementById("inputSearch");
    const cardsToys = document.querySelectorAll(".card");
    
    // console.log(searchToys);
    
    searchToys.addEventListener("keyup", (event) =>{
      let toysHidden = [];
      
      // console.log(event.target.value.toLowerCase())
      
    
      if (event.target.matches("#inputSearch")){
          cardsToys.forEach(toy =>{
              toy.textContent.toLowerCase().replace(" ", "-").includes(event.target.value.toLowerCase().replace(" ", "-"))
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
    
    // Container de los productos
    const productsCart = document.querySelector(".products-cart");
    
    // Icono del carrito 
    const btnCart = document.querySelector('.content__cartIcon');
    
    // Productos del carrito 
    // const cartProducts = document.querySelector('.cart-products');
    
    
    
    btnCart.addEventListener('click', () => {
        containerCartProducts.classList.toggle('hidden');
    });
    
    
    // Todos los productos de la tienda
    const productList = document.querySelector(".content__cards");
    
    
    console.log("product", productList);
    
    // Array de productos agregados al carrito 
    let products = [];
    
    // Contador del precio final 
    const valorTotal = document.querySelector(".total__pagar");
    
    
    // Mensaje cuando el carrito esta vacio 
    const cartEmpty = document.querySelector('.cart__empty');
    
    
    // AGREGAR UN PRODUCTO AL CARRITO   
    
    
    productList.addEventListener("click", (event) =>{
        
        if(event.target.classList.contains("btn-addToCart")) {
            const product = event.target.parentElement;
            const infoProduct = {
                title : product.querySelector("h5").textContent,
                price : Number(product.querySelector("p").textContent.slice(1)),
                quantityProduct : 1,
                id : product.querySelector("#idProduct").textContent
                // imageProduct : product.querySelector("img").src 
            };
            
            
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
                // console.log("producto1", product);
            } else{
                products = [...products, infoProduct];
                // console.log("producto2",product);
    
            }
    
            localStorage.setItem('carrito', JSON.stringify(products));
            renderCart();
            saveProductsInLocal(products, obtenerProductosStorage);
        }
    
    });
    
    
    
    
    
    
    //GUARDAD DATOS DEL CARRITO EN localStorage
    const obtenerProductosStorage = () => {
        let productsLocalStorage;
    
        if(localStorage.getItem("carrito") === null){
            productsLocalStorage = [];
        } else {
            productsLocalStorage = JSON.parse(localStorage.getItem("carrito", ))
        }
        return productsLocalStorage
    
    };
    
    const saveProductsInLocal = (products) => {
        let productos; 
        productos = obtenerProductosStorage();
        productos.push(products)
        localStorage.setItem("carrito", JSON.stringify(productos));
    };
    
    
    
    
    
    //ELIMINAR PRODUCTOS DEL CARRITO
    
    
    productsCart.addEventListener('click', event => {
        let producto, productoId;
            const productIdElement = document.getElementById("idProduct");         
    
        if (event.target.classList.contains('icon-close')) {
                producto = event.target.parentElement;
    
                productoId = productIdElement.textContent;
    
                producto.remove();
    
                products = products.filter(producto => producto.id !== productoId);
    
                let carrito = JSON.parse(localStorage.getItem('carrito'));
    
                console.log("359", carrito);
    
                localStorage.removeItem('carrito')
                carrito = carrito.filter(item => item.id !== productoId);
    
                console.log("361", carrito);
                localStorage.setItem('carrito', JSON.stringify(carrito));
                
                renderCart();
        }
    });
    
    
    
    // VACIAR CARRITO 
    
    const botonVaciar = document.getElementById("vaciarCarrito");
    
    botonVaciar.addEventListener("click", (event) =>{
        while(event.firstChild){
            products.removeChild(event.firstChild);
        }
        return false
    })
    
    
    
    //RENDERIZAMOS LOS PRODUCTOS AL CARRITO
    
    
    const renderCart = () =>{
        
        const productosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        // const products = productosCarrito;
        console.log(productosCarrito);
        productsCart.innerHTML = "";
        let totalPrice = 0;
    
    
        productosCarrito.forEach(product => {
            const contentProducts = document.createElement("div");
            contentProducts.classList.add("cart-products");
            contentProducts.innerHTML = `
                <!-- <img src="${product.imageProduct}" alt="imagen del producto" class="image__productCart"> -->
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
    
    };
    

} else{
};        


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
};
renderRedesFooter();





// PAGE DETAILS ENVIAR ID PARA SU RENDERIZACION
let idProduct = document.querySelectorAll("#idProduct");

let directionProduct = document.querySelectorAll(".card-direccion")


for(let i = 0; i < idProduct.length; i++ ){
    console.log(idProduct[i].outerText)
    
    directionProduct[i].addEventListener("click", () =>{
      localStorage.setItem("idOfProduct", idProduct[i].outerText)
    });
}
//Checkbox
const data_base = productsToys.map((eventos) => eventos);

const category_generador = () => {
  const cont_check_cards = document.getElementById("cont_check_cards");
  const categories = data_base.map((categories) => categories.category);

  const filter_category = categories.filter(
    (value, index) => categories.indexOf(value) === index
  );

  const categoryGenerador = filter_category.map(
    (category) => `
  
    <div>
    <input id="c1" name="category" value="${category}" type="checkbox">
    <label for="category">${category}</label>
  </div>
    `
  );
  categoryGenerador.map(insertar=>cont_check_cards.insertAdjacentHTML("beforeend",insertar))

};
category_generador();



// CODIGO DE DESCUENTO 
  
  // const generateCode = () => {
      //     const code = Math.floor(Math.random() * 1000000);
      //    //genero el porcentaje de descuento (entre 10 y 70%)
  //     const percentageDiscount = Math.floor(Math.random() * 60 + 10);
  //     alert(`Su codigo de descuento es: ${code}, Con un descuento del: ${percentageDiscount}%`);
  //     localStorage.setItem("code", code);
  //     localStorage.setItem("percentageDiscount", percentageDiscount);
//   };
  



  

  
// REVISAR CODIGO, FUNCION DEL CARRITO CONTEO 


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
