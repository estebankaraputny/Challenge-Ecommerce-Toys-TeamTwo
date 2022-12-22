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
    productsToys.map((event) => {
       return (card += `
        <div class="card" style="width: 18rem;">
            <img src="${event.imageProduct}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${event.titleProduct}</h5>
                <p class="card-price">$${event.price}</p>
                <div class="gradient">
                    <a href="#" class="btn">Agregar al carrito</a>
                </div>
            </div>
      </div>
                `);
    });
    contentCards.innerHTML = card;
}
renderCards();


// const contentCards = document.getElementById("contentCards");
// let div = ``;

// const pokemonesFull = (arrayPokemones) => {
//   const pokemones = arrayPokemones.map((pokemon) => {
//     return (div += `
//             <div class="pokeCard">
//                 <div class="contentImage">
//                     <img src="${pokemon.sprites.front_default}" alt="" class="imageOfPokemon"></img>
//                 </div>
//                 <h2 class="namePokemon">${pokemon.name}</h2>
//                 <p class="idPokemon">ID: ${pokemon.id}</p>
//             </div>
//         `);
//   });
//   contentCards.innerHTML = div;
// };


