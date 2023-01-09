
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




// SE EJECUTA LA FUNCION RENDER CARDS SI LA URL TERMINA EN INDEX.HTML 
      
if (window.location.pathname === "/index.html") {
    
    const renderCards = () => {
        
        productsToys.map((product) => {
        return (card += `
                    
            <div class="card" style="width: 18rem; id="cardToy">
                    <img src="${product.imageProduct}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <span class="hidden span" id="${product.idProduct}"></span>
                        <h5 class="card-title">${product.titleProduct}</h5>
                        <h5 class="category d-none">${product.category}</h5>

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
              <img src="./assets/image/undraw_outer_space_re_u9vd.svg" alt="Imagen del espacio" class="img__error">
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
    
    
    // console.log("product", productList);
    
    // Array de productos agregados al carrito 
    let products = [];
    
    // Contador del precio final 
    const valorTotal = document.querySelector(".total__pagar");

    //contador de productos en el carrito
    const contadorProduct = document.querySelector("#contadorProducto");
    
    
    // Mensaje cuando el carrito esta vacio 
    const cartEmpty = document.querySelector('.cart__empty');
    
    
// AGREGAR UN PRODUCTO AL CARRITO   
    
    
productList.addEventListener("click", (event) =>{
        
        if(event.target.classList.contains("btn-addToCart")) {
            const product = event.target.parentElement;
          //  console.log( product.parentElement.querySelector("img").src)
            const infoProduct = {
                title : product.querySelector("h5").textContent,
                price : Number(product.querySelector("p").textContent.slice(1)),
                quantityProduct : 1,
                id : product.querySelector("span").id,
                imageProduct : product.parentElement.querySelector("img").src
            };
            // console.log("id cuando agrego", product.querySelector("span").id);
            
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
    
            swal("GENIAL","Producto agregado con éxito al carrito", "success");
            localStorage.setItem('carrito', JSON.stringify(products));
            renderCart();
          //  saveProductsInLocal(products, obtenerProductosStorage);
        }

    
});
    
    
    
    
    
    
    // function eliminarProducto(id){
    //     const buscarProducto = products.find(productoId => productoId.id === id);
    //     console.log(buscarProducto);
    // }
 
    
//ELIMINAR PRODUCTOS DEL CARRITO
    



const btnDelete=()=>{
    const productIdElement = document.querySelectorAll(".icon-close");
    let productsAux=[];
    productIdElement.forEach((product)=>{


                product.addEventListener('click',event=>{
            
                    let productStorage=JSON.parse(localStorage.getItem('carrito'))
                    productStorage.forEach((productStorage)=>{
                      
                        let productCar=event.target.parentElement;
                        
                        if(productCar.querySelector('span').id!=productStorage.id){
                            productsAux.push(productStorage)
                        }
                    })
                    localStorage.removeItem('carrito')
                    localStorage.setItem('carrito',JSON.stringify(productsAux))
                    renderCart()
    })
            
           

  })

}
          
    
    
// VACIAR CARRITO 
    
const botonVaciar = document.getElementById("vaciarCarrito");
    
     botonVaciar.addEventListener("click", (event) =>{
        localStorage.removeItem('carrito')
        valorTotal.innerText=`$0`
        contadorProduct.innerText = "0";
        renderCart()
})
    
    
 // RENDERIZAMOS LOS PRODUCTOS AL CARRITO
    
    
const renderCart = () =>{
        

    
    const productosCarrito = JSON.parse(localStorage.getItem('carrito')) ;
    // const products = productosCarrito;
    console.log(productosCarrito);
    productsCart.innerHTML = "";
    if(productosCarrito.length === 0){
        productsCart.innerHTML = `
            <p class="cart-empty">No hay productos en tu carrito</p>
        `
    };
    let totalPrice = 0;
    let productTotal = 0;
    
    
        productosCarrito.forEach(product => {
            console.log(product.imageProduct)
            const contentProducts = document.createElement("div");
            contentProducts.classList.add("cart-products");
            contentProducts.innerHTML = `
                <img src="${product.imageProduct}" alt="imagen del producto" class="image__productCart">
                <p class="cantidad">${product.quantityProduct}</p>
                <h3 class="name-product">${product.title}</h3>
                <p class="price-product">$${product.price}</p>
                <i class="bi bi-x-lg icon-close"></i>
                <span class="hidden idCart" id="${product.id}"></span>
            `
            productsCart.appendChild(contentProducts);
            totalPrice = totalPrice + (product.quantityProduct * product.price);
            productTotal = productTotal + product.quantityProduct;
        });
        
        valorTotal.innerText = `$${totalPrice}`;
        contadorProduct.innerText = productTotal;
    
        console.log(valorTotal);
        btnDelete()

    };
  



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
    <input id="c1" name="category" value="${category}" type="checkbox" class="input-category">
    <label for="category" class="check-category">${category}</label>
  </div>
    `
  );
  categoryGenerador.map(insertar=>cont_check_cards.insertAdjacentHTML("beforeend",insertar))

};
category_generador();


const cards_category=()=>{
    const cont_check_cards = document.getElementById("cont_check_cards");
    const elemt_category= document.getElementsByClassName('category');
  
    cont_check_cards.addEventListener("click",(select)=>{
      const input_checkbox=document.querySelectorAll('input[type="checkbox"]');
      const input_checket= [];
      input_checkbox.forEach((input)=>{
        if(input.checked){
          input_checket.push(input.value);
  
        }
      })
      for(let i=0;i< elemt_category.length;i++){
        if(input_checket.includes(elemt_category[i].textContent)){
          elemt_category[i].parentElement.parentElement.classList.remove("d-none");
  
        }else{
          elemt_category[i].parentElement.parentElement.classList.add("d-none");
  
        }
      }
      if(input_checket.length===0){
        for(let i=0;i< elemt_category.length;i++){
          elemt_category[i].parentElement.parentElement.classList.remove("d-none");
  
        }
      }
      
    });
  
  }
  cards_category();


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
let idProduct = document.querySelectorAll(".span");


console.log(idProduct)

let buttonDirection = document.querySelectorAll(".card-direccion")


for(let i = 0; i < idProduct.length; i++ ){
    // console.log(idProduct[i].id)
    buttonDirection[i].addEventListener("click", () =>{
      localStorage.setItem("idOfProduct", idProduct[i].id)
    });
}


// CODIGO DE DESCUENTO 
  
  // const generateCode = () => {
      //     const code = Math.floor(Math.random() * 1000000);
      //    //genero el porcentaje de descuento (entre 10 y 70%)
  //     const percentageDiscount = Math.floor(Math.random() * 60 + 10);
  //     alert(`Su codigo de descuento es: ${code}, Con un descuento del: ${percentageDiscount}%`);
  //     localStorage.setItem("code", code);
  //     localStorage.setItem("percentageDiscount", percentageDiscount);
//   };
  





