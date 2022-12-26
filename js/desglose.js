// *titleProduct<string>
//  *descriptionProduct<string>
//  *stock<number>
//  *category<string>
//  * imageProduct (en formato URL) <string>
//  *idProduct<number>
//  *price<number>

const productsToys = [
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

localStorage.setItem("productsToys", JSON.stringify(productsToys));

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
        <button type="button" class="btn restarCantidad">-</button><h5 class="fw-normal mb-0" id="cantidad">${product.stock}</h5><a  class="btn sumarCantidad " >+</a>
      </div>
      <div style="width: 80px;">
        <h5 class="mb-0">$${product.price}</h5>
      </div>
      <a href="#!" style="color: #cecece;" id="${product.idProduct}" class="btnDelete" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
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

const renderProducts = () => {
  const products = JSON.parse(localStorage.getItem("productsToys"));
  ProductsList.innerHTML = "";
  products.forEach((product) => {
    renderProduct(product);
  });
};
const buttonsProducts = () => {
  const btnsDelete = document.querySelectorAll(".btnDelete");
  btnsDelete.forEach((btnDelete) => {
    btnDelete.addEventListener("click", (e) => {
      console.log("delete");
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      let products = JSON.parse(localStorage.getItem("productsToys"));
      let productsToys = products.filter((product) => {
        console.log(
          "product.idProduct",
          product.idProduct,
          "e.target.id",
          e.target.parentElement.parentElement.id
        );
        if (product.idProduct != e.target.parentElement.parentElement.id) {
          return product;
        }
      });
      localStorage.removeItem("productsToys");
      console.log(productsToys);
      localStorage.setItem("productsToys", JSON.stringify(productsToys));
    });
  });

  const btnsSumar = document.querySelectorAll(".sumarCantidad");
  const cantidad = document.getElementById("cantidad");

  btnsSumar.forEach((btnSumar) => {
    btnSumar.addEventListener("click", (e) => {
      let products = JSON.parse(localStorage.getItem("productsToys"));
      e.target.parentElement.children[1].innerHTML =
        parseInt(e.target.parentElement.children[1].innerHTML) + 1;
      let productsModificados = products.map((product) => {
        if (
          product.idProduct ==
          e.target.parentElement.parentElement.id
        ) {
          products[product.idProduct - 1].stock =
            parseInt(e.target.parentElement.children[1].innerHTML);

        }
        return product;
       
      });
      localStorage.removeItem("productsToys");
      localStorage.setItem("productsToys", JSON.stringify(products));
      //modifico la cantidad de productos en el local storage
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

//ordenar productos por valor seleccionado(precio,nombre,stock)
const optionOrder = document.getElementById("orderBy");
optionOrder.addEventListener("change", (e) => {
  sortBy(e.target.value, productsToys);
});
// sortBy("stock",productsToys);

//generar codigo de descuento para la compra

const generateCode = () => {
  const code = Math.floor(Math.random() * 1000000);
  //genero el porcentaje de descuento (entre 10 y 70%)
  const percentageDiscount = Math.floor(Math.random() * 60 + 10);
  alert(
    `Su codigo de descuento es: ${code}. Con un descuento del: ${percentageDiscount}%`
  );
  localStorage.setItem("code", code);
  localStorage.setItem("percentageDiscount", percentageDiscount);
};

renderProducts();
generateCode();
