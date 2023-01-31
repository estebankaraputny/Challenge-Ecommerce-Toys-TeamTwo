// *titleProduct<string>
//  *descriptionProduct<string>
//  *stock<number>
//  *category<string>
//  * imageProduct (en formato URL) <string>
//  *idProduct<number>
//  *price<number>

const productsToysDesglose = [
  {
    titleProduct: "Pelota",
    descriptionProduct: "Pelota de goma",
    stock: 10,
    category: "Deportes",
    imageProduct:
      "https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    idProduct: 1,
    price: 100,
  },
  {
    titleProduct: "Helicoptero",
    descriptionProduct: "Helicoptero a control remoto",
    stock: 4,
    category: "Juguetes control remoto",
    imageProduct:
      "https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    idProduct: 2,
    price: 200,
  },
  {
    titleProduct: "Patineta",
    descriptionProduct: "Patineta de madera",
    stock: 2,
    category: "Deportes",
    imageProduct:
      "https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    idProduct: 3,
    price: 300,
  },
  {
    titleProduct: "TEG",
    descriptionProduct: "Juego de mesa TEG",
    stock: 5,
    category: "Juegos de mesa",
    imageProduct:
      "https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    idProduct: 4,
    price: 400,
  },
  {
    titleProduct: "Cubo de Rubik",
    descriptionProduct: "Cubo de Rubik 3x3",
    stock: 3,
    category: "Juegos disacticos",
    imageProduct:
      "https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    idProduct: 5,
    price: 500,
  },
  {
    titleProduct: "Buzz Lightyear",
    descriptionProduct: "Buzz Lightyear articulado",
    stock: 10,
    category: "Juguetes de accion",
    imageProduct:
      "https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    idProduct: 6,
    price: 600,
  },
];




// EVENTO ONLOAD PARA CARGAR LA PAGINA
// const contentLoader = document.getElementById("loader");

function fadeOut(el) {
  el.style.opacity = 1;
  (function fade() {
      if ((el.style.opacity -= .1) < 0) {
          el.style.display = "none";
      } else {
          requestAnimationFrame(fade);
      }
  })();
};

// ** FADE IN FUNCTION **
function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";
  (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
      }
  })();
};

const loaderPage = document.querySelector("#loader");
const bodyPage = document.querySelector("body")

window.onload = function(){
  fadeOut(loaderPage);
  bodyPage.classList.remove("hiddenBody");
};






// localStorage.setItem("productsToys", JSON.stringify(productsToysDesglose));
localStorage.setItem("cuponDescuento", "123456");
localStorage.setItem("descuento", 0.25);
//cargar dinamicamente los valores a pagar en el carrito
const totalPagar = document.getElementById("totalPagar");
const subtotalPagar = document.getElementById("subtotalPagar");
const impuestosPagar = document.getElementById("impuestosPagar");
const totalBtnPagar = document.getElementById("totalBtnPagar");

const ProductsList = document.getElementById("productsList");
const renderProduct = (product) => {
  const ProductCard = ` 
<div class="card mb-3 mb-lg-0 productos-desglose sinPadding">
<div class="card-body">
  <div  class="d-flex justify-content-between">
    <div class="d-flex flex-row align-items-center">
      <div>
        <img
          src="${product.imageProduct}"
          class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
      </div>
      <div class="ms-3">
        <h5 class="tituloProducto">${product.title}</h5>
       
      </div>
    </div>
    <div class="d-flex flex-row align-items-center">
      <div style="width: 50px;">
        <h5 class="fw-normal mb-0 " id="cantidad" style="text-align:center;">${product.quantityProduct} </h5>

      </div>
      <div style="width: 80px;">
        <h5 class="mb-0 " style=";">$${product.price * product.quantityProduct}</h5>
      </div>
      <a href="#!" style="color: #cecece;" class="btnDelete" id="${
        product.id
      }" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
    </svg></a>
    </div>
  </div>
</div>
</div>

</div>`;

  ProductsList.innerHTML += ProductCard;
  buttonsProducts();
};
        // <button type="button" class="btn restarCantidad">-</button>
        // <a  class="btn sumarCantidad " id="">+</a>

const renderProducts = (products) => {
  ProductsList.innerHTML = "";
  //vacio los valores a pagar para cargarlos nuevamente
  totalPagar.innerHTML = 0;
  subtotalPagar.innerHTML = 0;
  totalBtnPagar.innerHTML = 0;

  if (products == null || products.length == 0) {
    ProductsList.innerHTML = `<div class="alert alert-danger alertCarritoVacio" role="alert">
    No hay productos en el carrito <a href="../index.html"><button class="btn btn-secondary" >Volver</button></a></div> `;
  } else {
   
    products.forEach((product) => {
     
      renderProduct(product);
      //cargo los valores actualizados para pagar

      //al valor anterior le sumo el nuevo valor, parseo a entero para que no me sume strings
      totalPagar.innerHTML = `${
        parseInt(totalPagar.innerHTML) + product.price * product.quantityProduct
      }`;
      //totalPagar.innerHTML += `${product.price * product.stock +20}`;
      subtotalPagar.innerHTML =
        parseInt(subtotalPagar.innerHTML) + product.price * product.quantityProduct;
      totalBtnPagar.innerHTML =
        parseInt(totalBtnPagar.innerHTML) + product.price * product.quantityProduct;
    });
  }
  //agrego simbolos de pesos a los valores y sumo el valor de los impuestos.
  totalPagar.innerHTML = `$${
    parseInt(totalPagar.innerHTML) + 20
  }`;
  totalBtnPagar.innerHTML = `$${
    parseInt(totalBtnPagar.innerHTML) + 20
  }`;
  subtotalPagar.innerHTML = `$${  parseInt(subtotalPagar.innerHTML) }`;
};

const buttonsProducts = () => {
  const btnsDelete = document.querySelectorAll(".btnDelete");
  btnsDelete.forEach((btnDelete) => {
    btnDelete.addEventListener("click", (e) => {
      let products = JSON.parse(localStorage.getItem("carrito"));
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      let productsSinEliminado = [];
      products.forEach((product) => {
        console.log(e.target.parentElement.parentElement);
        if (product.id != e.target.parentElement.parentElement.id) {
          productsSinEliminado.push(product);
        }
        console.log("delete");

        localStorage.removeItem("carrito");
        localStorage.setItem(
          "carrito",
          JSON.stringify(productsSinEliminado)
          
        );
        renderProducts(productsSinEliminado);
        calcularDescuento();
      });
    });
  });

};

const sortBy = (criterio, productos) => {
  productos.sort((a, b) => {
    if (a[criterio] > b[criterio]) {
      return 1;
    }
    if (a[criterio] < b[criterio]) {
      return -1;
    }
    return 0;
  });

  renderProducts(productos);
};

const optionOrder = document.getElementById("orderBy");
optionOrder.addEventListener("change", (e) => {
  let productsToysDesglose = JSON.parse(localStorage.getItem("carrito"));
  sortBy(e.target.value, productsToysDesglose);
});
// sortBy("stock",productsToys);

//funcionalidad para vaciar el carrito desde el boton
const btnVaciarCarrito = document.getElementById("btnVaciarCarrito");
btnVaciarCarrito.addEventListener("click", (e) => {
  localStorage.removeItem("carrito");
  renderProducts([]);
  calcularDescuento();
});

// //muestro modal cuando se hace click en el boton de pagar y redirijo a la pagina de principal
const btnPagar = document.getElementById("pay");
btnPagar.addEventListener("click", (e) => {
  e.preventDefault();
  const loginState = JSON.parse(localStorage.getItem("login"));
  if(loginState == true){
  if(document.getElementById("cardName").value != "" && document.getElementById("cardNumber").value != "" && document.getElementById("expiration").value != "" && document.getElementById("cvv").value != "" ){
    localStorage.removeItem("carrito");
    $('#exampleModalCenter').modal("show");
  setTimeout(function(){
    window.location = '/index.html';
}, 3000);}
  
  }
  else{
    window.location = '/pages/login.html';
  }
});

//confirmo que los datos de el formulario de tarjeta esten completos, para habilitar el boton de pago
// const btnConfirmarTarjeta = document.getElementById("confirmarTarjeta"); 

// btnConfirmarTarjeta.addEventListener("click", (e) => {
//   e.preventDefault();
  
//     btnPagar.disabled = false;
  
//     $('#exampleModalCenter').modal("show");
 

// });

//funcionalidad para ingresar cupon de descuento
const btnCupon = document.getElementById("cuponDescuento");
btnCupon.addEventListener("click", (e) => {
  console.log("cupon");
  const cupon = document.getElementById("cupon").value;
  const cuponLocal = localStorage.getItem("cuponDescuento");
  console.log(cupon,"cupon ingresado");
  console.log(cuponLocal,"cupon local");
  if (cupon == cuponLocal) {
    localStorage.removeItem("cuponDescuento");
    calcularDescuento();
  }
  else{
    alert("cupon incorrecto");
  }

})

const calcularDescuento = () => {
  const descuento = document.getElementById("descuentoPagar");
  if(localStorage.getItem("cuponDescuento") == null){
    const descuentoLocal = localStorage.getItem("descuento");
    const subtotalPagar = document.getElementById("subtotalPagar");
    const subtotalPagarSin$ = parseInt(subtotalPagar.innerHTML.slice(1));
    descuento.innerHTML = `<small>(${descuentoLocal * 100}%)</small> $${subtotalPagarSin$ * descuentoLocal} `;
    totalPagar.innerHTML = `$${subtotalPagarSin$ - subtotalPagarSin$ * descuentoLocal}`;
    totalBtnPagar.innerHTML = `$${subtotalPagarSin$ - subtotalPagarSin$ * descuentoLocal + 20}`;}
    else{
      descuento.innerHTLM = "$0";}
}
const productosCarrito = JSON.parse(localStorage.getItem("carrito"));

const linksMenu = document.getElementById("contentLinks");
const botonMenu = document.getElementById("botonMenu");
botonMenu.addEventListener("click",() =>{
    linksMenu.classList.toggle(`activo`)
});
renderProducts(productosCarrito);
