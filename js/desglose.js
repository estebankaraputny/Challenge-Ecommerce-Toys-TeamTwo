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

localStorage.setItem("productsToys", JSON.stringify(productsToysDesglose));
localStorage.setItem("cuponDescuento", "123456");
localStorage.setItem("descuento", 0.4);
//cargar dinamicamente los valores a pagar en el carrito
const totalPagar = document.getElementById("totalPagar");
const subtotalPagar = document.getElementById("subtotalPagar");
const impuestosPagar = document.getElementById("impuestosPagar");
const totalBtnPagar = document.getElementById("totalBtnPagar");

const ProductsList = document.getElementById("productsList");
const renderProduct = (product) => {
  const ProductCard = ` 
<div class="card mb-3 mb-lg-0">
<div class="card-body">
  <div  class="d-flex justify-content-between">
    <div class="d-flex flex-row align-items-center">
      <div>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
          class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
      </div>
      <div class="ms-3">
        <h5>${product.titleProduct}</h5>
        <p class="small mb-0">${product.descriptionProduct}</p>
      </div>
    </div>
    <div class="d-flex flex-row align-items-center">
      <div style="width: 50px;">
        <button type="button" class="btn restarCantidad">-</button><h5 class="fw-normal mb-0" id="cantidad">${
          product.stock
        }</h5><a  class="btn sumarCantidad " id="">+</a>
      </div>
      <div style="width: 80px;">
        <h5 class="mb-0">$${product.price * product.stock}</h5>
      </div>
      <a href="#!" style="color: #cecece;" class="btnDelete" id="${
        product.idProduct
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

const renderProducts = (products) => {
  ProductsList.innerHTML = "";
  //vacio los valores a pagar para cargarlos nuevamente
  totalPagar.innerHTML = 0;
  subtotalPagar.innerHTML = 0;
  totalBtnPagar.innerHTML = 0;

  if (products.length == 0) {
    ProductsList.innerHTML = `<div class="alert alert-danger alertCarritoVacio" role="alert">
    No hay productos en el carrito <a href="../index.html"><button class="btn btn-secondary" >Volver</button></a></div> `;
  } else {
    products.forEach((product) => {
      renderProduct(product);
      //cargo los valores actualizados para pagar

      //al valor anterior le sumo el nuevo valor, parseo a entero para que no me sume strings
      totalPagar.innerHTML = `${
        parseInt(totalPagar.innerHTML) + product.price * product.stock
      }`;
      //totalPagar.innerHTML += `${product.price * product.stock +20}`;
      subtotalPagar.innerHTML =
        parseInt(subtotalPagar.innerHTML) + product.price * product.stock;
      totalBtnPagar.innerHTML =
        parseInt(totalBtnPagar.innerHTML) + product.price * product.stock;
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
      let products = JSON.parse(localStorage.getItem("productsToys"));
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      let productsSinEliminado = [];
      products.forEach((product) => {
        console.log(e.target.parentElement.parentElement);
        if (product.idProduct != e.target.parentElement.parentElement.id) {
          productsSinEliminado.push(product);
        }
        console.log("delete");

        localStorage.removeItem("productsToys");
        localStorage.setItem(
          "productsToys",
          JSON.stringify(productsSinEliminado)
          
        );
        renderProducts(productsSinEliminado);
      });
    });
  });

  const btnsSumar = document.querySelectorAll(".sumarCantidad");
  const cantidad = document.getElementById("cantidad");
  console.log(btnsSumar);
  btnsSumar.forEach((btnSumar) => {
    btnSumar.addEventListener("click", (e) => {
      console.log("restar");
      e.target.parentElement.children[1].innerHTML =
        parseInt(e.target.parentElement.children[1].innerHTML) + 1;
    });
  });

  const btnsRestar = document.querySelectorAll(".restarCantidad");
  btnsRestar.forEach((btnRestar) => {
    btnRestar.addEventListener("click", (e) => {
      if (e.target.parentElement.children[1].innerHTML > 0) {
        e.target.parentElement.children[1].innerHTML =
          parseInt(e.target.parentElement.children[1].innerHTML) - 1;
      }
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
  sortBy(e.target.value, productsToysDesglose);
});
// sortBy("stock",productsToys);

//funcionalidad para vaciar el carrito desde el boton
const btnVaciarCarrito = document.getElementById("btnVaciarCarrito");
btnVaciarCarrito.addEventListener("click", (e) => {
  localStorage.removeItem("productsToys");
  renderProducts([]);
});

//mueztro modal cuando se hace click en el boton de pagar
// const btnPagar = document.getElementById("pay");
// btnPagar.addEventListener("click", (e) => {
//   const modal = document.getElementById("modal");
//   modal.style.display = "block";




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
    const descuento = document.getElementById("descuentoPagar");
    const descuentoLocal = localStorage.getItem("descuento");
    const totalPagar = document.getElementById("totalPagar");
    const totalPagarSin$ = parseInt(totalPagar.innerHTML.slice(1));
    descuento.innerHTML = `$${totalPagarSin$ * descuentoLocal}`;
    totalPagar.innerHTML = `$${totalPagarSin$ - totalPagarSin$ * descuentoLocal}`;
    totalBtnPagar.innerHTML = `$${totalPagarSin$ - totalPagarSin$ * descuentoLocal}`;
    localStorage.removeItem("cuponDescuento");
  }
  else{
    alert("cupon incorrecto");
  }

})


renderProducts(productsToysDesglose);
