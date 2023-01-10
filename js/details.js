// ARRAY DE JUGETES 
const productsToys = [
    {
        titleProduct: "Pelota Al Hilm Pro Final Qatar 2022 Edicion Especial N5",
        descriptionProduct: "Pelota de goma",
        stock: 10,
        category: "Deportes",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_741864-MLA53161544064_012023-O.webp',
        idProduct: 1,
        price: 2600
    },
    {

        titleProduct: "Cheerwing Helicóptero Azul",
        descriptionProduct: "Este Syma S107 Mini RC Helicóptero es el más duradero y estable del mundo. El artículo viene con el último sistema Gyro para control de precisión. La estructura de metal ha demostrado soportar decenas de colisiones. El minihelicóptero carga directamente desde el conductor que utiliza pilas de tipo AA y tiene un control para recortar funciones completas para el vuelo perfecto.",
        stock: 4,
        category: "Control Remoto",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_850834-MLA52876570949_122022-O.webp',
        idProduct: 2,
        price: 200
    },
    {
        titleProduct: "Skate Kalima Maple Pro",
        descriptionProduct: "Deck maple canadiense medidas: 8, Lija goma Negra Ruedas Kalima TRANS 51mm y Trucks de aluminio y acero templado",
        stock: 2,
        category: "Deportes",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_879658-MLA42197351692_062020-O.webp',
        idProduct: 3,
        price: 180
    },
    {
        titleProduct: "Monopoly Clásico Hasbro C1009",
        descriptionProduct: "¡Un clásico! Reuní a tus amistades para disfrutar de horas de risas y diversión mientras juegan a ser agentes inmobiliarios con el Monopoly. Deberán comprar, vender e intercambiar propiedades estratégicamente para aumentar sus fortunas, si te declarás en quiebra... ¡perdiste!",
        stock: 5,
        category: "Juegos de Mesa",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_852178-MLA44678979171_012021-O.webp',
        idProduct: 4,
        price: 80
    },
    {
        titleProduct: "Cubo Rubik 3x3 Moyu Meilong 3x3x3 De Velocidad",
        descriptionProduct: "Diviertete con el nuevo diseño del legendario cubo de Rubiks, compite con tus amigos para armarlo en el menor tiempo posible, Dentro del instructivo podrás encontrar una página de internet en donde encontraras diferentes formas de armarlo.",
        stock: 3,
        category: "Juegos de Mesa",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_836663-MLA52310848906_112022-O.webp',
        idProduct: 5,
        price: 500
    },
    {
        titleProduct: "Buzz Lightyear Figura De Accion 30 Cm Toy Story",
        descriptionProduct: "Cuerpo de plástico con brazos, piernas, cabeza, muñecas y cintura articulados. Casco con visera retráctil.",
        stock: 10,
        category: "Figuras de Acción",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_689190-MLA50317134187_062022-O.webp',
        idProduct: 6,
        price: 100
    },
    {
        titleProduct: "Sony PlayStation 5 825GB Standard",
        descriptionProduct: "Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.",
        stock: 10,
        category: "Videojuegos",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp',
        idProduct: 7,
        price: 2300
    },
    {
        titleProduct: "Cocinita Con Accesorios",
        descriptionProduct: "Excelente juego e cocina infantil marca Dibu-Toys con accesorios, fabricado con plástico PVC, libre de materiales tóxicos y amigable con el medio ambiente. Ideal para niños de 1 año a 6 años.",
        stock: 14,
        category: "Juguetes de Oficio",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_676339-MLA45608086908_042021-O.webp',
        idProduct: 8,
        price: 100
    },
    {
        titleProduct: "Dragon Ball Super Goku Ultra Instinto",
        descriptionProduct: "18 a 19 cm de pura potencia de excelente calidad y terminación.",
        stock: 10,
        category: "Figuras de Acción",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_964667-MLA47754955710_102021-O.webp',
        idProduct: 9,
        price: 120
    },
    {
        titleProduct: "Peluche Ely",
        descriptionProduct: "Peluche de Ely de pocoyo, suavidad y calidad, 27cm",
        stock: 10,
        category: "Peluches",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_843272-MLA49075885962_022022-O.webp',
        idProduct: 10,
        price: 100
    },
    {
        titleProduct: "Peluche Pocoyo",
        descriptionProduct: "Peluche de Pocoyo, suavidad y calidad, 27cm",
        stock: 10,
        category: "Peluches",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_704591-MLA43027485845_082020-O.webp',
        idProduct: 11,
        price: 110
    },
    {
        titleProduct: "Lampara Velador Proyector Estrella Luna Luz Rgb 360 Usb",
        descriptionProduct: "Este proyector de estrellas es ideal para la habitación de un bebé, de un niño, para decorar bodas, cumpleaños y otras fiestas. Es un gran velador romántico y decorativo.",
        stock: 10,
        category: "Iluminación",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_644129-MLA52910054366_122022-O.webp',
        idProduct: 12,
        price: 150
    },
    {
        titleProduct: "Auto Jeep Radio Control Remoto Spiderman Babymovil",
        descriptionProduct: "Auto Radio Control SpidermanAvanza y retrocede ¡Prepárate para la accion y divertite con tu personaje favorito de Marvel Spiderman! Medidas: 18cm*10cm*8cm",
        stock: 10,
        category: "Control Remoto",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_701617-MLA53007226439_122022-O.webp',
        idProduct: 13,
        price: 150
    },
    {
        titleProduct: "Dinosaurio Camina Ruge Luz Y Pone Huevos",
        descriptionProduct: "DINOSAURIO TYRANNOSAURUS CAMINA, RUGE, LUZ Y PONE HUEVOS - IDEAL PARA REGALAR Y SORPRENDER!!!",
        stock: 10,
        category: "Figuras de Acción",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_990880-MLA49960262552_052022-O.webp',
        idProduct: 14,
        price: 200
    },
    {
        titleProduct: "Ametralladora Luces Sonidos Laser Tripode Vibración Disparo",
        descriptionProduct: "Puntero laser, Largo 62 cm, Con tripode, Con tripode",
        stock: 10,
        category: "Juguetes de Oficio",
        imageProduct:'https://http2.mlstatic.com/D_NQ_NP_891527-MLA48347840129_112021-O.webp',
        idProduct: 15,
        price: 150
    }
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