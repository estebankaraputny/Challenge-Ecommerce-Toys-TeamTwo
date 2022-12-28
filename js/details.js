
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
        <div class="container_img">
          <img src="${productsToys[i].imageProduct}" width="500px">
                      </div>
          <div class="container_details">
                  <span>Home / Category / Position actual</span>
  
                  <div class="details">
                  <h3 class="">PRODUCT: ${productsToys[i].titleProduct}</h3>
                  </div>
                  <div class="details">
                  <h3 >$ ${productsToys[i].price}</h3>
                  </div>
                  <div class="details">
                  <h3>CUOTAS:</h3>
                  <ul class="listaCuotas">
                    <li> En 3 cuotas de: $ ${cuota3} </li>
                    <li> En 6 cuotas de: $ ${cuota6}</li>
                    <li> En 12 cuotas de: $ ${cuota12}</li>
                  </ul>
                  <div class="metodos__dePago">
                    <h3 class="details">Metodos de Pago:</h3>
                    <ul class="listaLogosPago">
                      <li><img src="../assent/image/visa.png" alt="logo de visa" class="logo-pagar"></li>
                      <li><img src="../assent/image/logo-masterCard.webp" alt="logo de mastercard" class="logo-pagar"></li>
                      <li><img src="../assent/image/logo-mercadopago.png" alt="logo de mercado pago" class="logo-pagar"></li>
                    </ul>
                  </div>
                  </div>
                  
                  <div class="details">
                  <p class="details" >${productsToys[i].descriptionProduct}</p>
  
                  </div>
                  <div class="details">
                  <h3 class="details">STOCK: ${productsToys[i].stock} unidades Disponibles</h3>
                  </div>

                  <button class="btn_Add" id="buttonAddCart">Agregar al carrito</button>
  
                  <h3 class="details">Formas de envio: </h3>
              </div>
          

        `;
      }
        cardup.innerHTML = main;
    }
    }

    detailsDom()
