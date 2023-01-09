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

const idProducts=localStorage.getItem("idOfProduct");
console.log(idProducts)

 function detailsDom() {
    let main = "";
  
    const cardup = document.getElementById("container_detalis");
    console.log(cardup);
  
    for (let i = 0; i < productsToys.length; i++) {
      if(productsToys[i].idProduct==idProducts){


         const cuota3=productsToys[i].price/3;
         const cuota6=productsToys[i].price/6;
         const cuota12=productsToys[i].price/12;

        main += ` 
            <div class="container-img">
                <img src="${productsToys[i].imageProduct}" width="500px" class="img-detailsProduct">
            </div>
            <div class="container_details">
                  <span class="nav-location">Home / ${productsToys[i].category} / ${productsToys[i].titleProduct} </span>
  
                  <div class="details">
                  <h3 class="title-details">${productsToys[i].titleProduct}</h3>
                  </div>
                  <div class="details">
                  <h3 class="price-details">$${productsToys[i].price}</h3>
                  </div>
                  <div class="details">
                    <p><i class="bi bi-credit-card-2-back"></i> En <span class="precio-cuota">3</span> cuotas de <span class="precio-cuota">$${parseInt(cuota3)}</span> </p>
                    <p><i class="bi bi-credit-card-2-back"></i> En <span class="precio-cuota">6</span> cuotas de <span class="precio-cuota">$${parseInt(cuota6)}</span></p>
                    <p><i class="bi bi-credit-card-2-back"></i> En <span class="precio-cuota">12</span> cuotas de <span class="precio-cuota">$${parseInt(cuota12)}</span></p>
                  </div>
                  
                  <div class="details">
                  <p class="details" >${productsToys[i].descriptionProduct}</p>
                  
                  </div>
                  
                  <button class="btn_Add" id="buttonAddCart">AGREGAR AL CARRITO</button>
                  <p class="mensaje-info"><i class="bi bi-info-circle icon-info"></i> Debido a la situación de cuarentena total en el país, los tiempos previstos de entrega pueden sufrir demoras.</p>

                  <div class="tarjetas-details">
                    <h3 class="title-pagos">Medios de Pago</h3>
                    <div class="logos-pagos">
                      <img src="../assets/image/visa.png" alt="logo de visa" class="logo-pagar">
                      <img src="../assets/image/logo-masterCard.webp" alt="logo de mastercard" class="logo-pagar">
                      <img src="../assets/image/logo-mercadopago.png" alt="logo de mercado pago" class="logo-pagar">
                    </div>
                  </div>
                  
              </div>
          

        `;
      }
        cardup.innerHTML = main;
    }
    }

    detailsDom()


//     //Agrega producto al carrito
//    const addproduct=document.querySelector('.btn_Add');
//    addproduct.addEventListener("click",(event)=>{

   



//    })


