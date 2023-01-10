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
                    products=productsAux;
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
        products=[];
        renderCart()
})
    
    //

const carro=JSON.parse(localStorage.getItem('carrito'));
   
    
let products=(carro!=null)?
carro: [];


// Contador del precio final 
const valorTotal = document.querySelector(".total__pagar");

//contador de productos en el carrito
const contadorProduct = document.querySelector("#contadorProducto");

 // RENDERIZAMOS LOS PRODUCTOS AL CARRITO
    
    
const renderCart = () =>{
    const productosCarrito = JSON.parse(localStorage.getItem('carrito')) ;
    // const products = productosCarrito;
    console.log(productosCarrito);
    productsCart.innerHTML = "";
    if(productosCarrito === null){
        productsCart.innerHTML = `
            <p class="cart-empty">No hay productos en tu carrito</p>
        `
    };
    let totalPrice = 0;
    let productTotal = 0;
    if(productosCarrito!=null){
    
        productosCarrito.forEach(product => {
            //console.log(product.imageProduct)
        
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
    }
        valorTotal.innerText = `$${totalPrice}`;
        contadorProduct.innerText = productTotal;
    
        console.log(valorTotal);
        btnDelete()

    }
;
  renderCart();
      
  


     //Agrega producto al carrito
    const addproduct=document.querySelector('.btn_Add');
    addproduct.addEventListener("click",(event)=>{
        
        const product = event.target.parentElement;
        //console.log(event.target.parentElement)

         // console.log( product.parentElement.querySelector("img").src)
          const infoProduct = {
              title : product.parentElement.querySelector("h3").textContent,
              price : Number(product.querySelector("h4").textContent.slice(1)),
              quantityProduct : 1,
              id : product.querySelector("span").id,
              imageProduct : product.parentElement.querySelector("img").src
          };
          // console.log("id cuando agrego", product.querySelector("span").id);
          
          // Sumar la cantidad si el producto existe 
          console.log(infoProduct.imageProduct)
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
         // swal("GENIAL","Producto agregado con éxito al carrito", "success");
          localStorage.removeItem('carrito');
          localStorage.setItem('carrito', JSON.stringify(products));
          renderCart();
    })