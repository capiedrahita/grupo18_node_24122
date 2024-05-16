import { lista } from "./js/fakeAPI/productos.js";
import { slider } from "./js/slider/slider.js";

/*TARJETAS PAGINA PRINCIPAL*/
//Creación de tarjetas
export function createCards(data, titulo) {
  //Creo el contenedor
  var cardContainer = "";
  //intero sobre la lista y creo las tarjetas
  data.product.produtos.map((element) => {
    let a = `
    <div class="content--card">
      <img src="${element.infos.img}" alt="${element.infos.alt}">
      <div class="card--info">
        <p class="content--card--title">${element.infos.nombre}</p>
        <p class="content--card--price">$ ${element.infos.precio}</p>
        <p class="content--card--cantidad">Cantidad:${element.infos.cantidad}</p>
        <div class="content--card--icon">
          <i class="fa fa-shopping-cart addToCart" aria-hidden="true" data-titulo=${titulo} data-product-id="${element.infos.id}" data-quantity="1" data-price="${element.infos.precio}"></i>
          <i class="fa fa-commenting" aria-hidden="true"></i>
          </div>
      </div>
    </div>`;
     //Agrego la tarjeta al contenedor
    cardContainer += a;
  });
  //Retornno el contenedor con las tarjetas
  return cardContainer;
}

// Agregar event listener una vez que se carga el documento
document.addEventListener("click", function (event) {
  //Si se cliquea obtengo el titulo, id de producto, cantidad y precio para mandar al carrito
  if (event.target && event.target.classList.contains("addToCart")) {
    const cartIcon = event.target;
    const title = cartIcon.getAttribute("data-titulo");
    const productId = cartIcon.getAttribute("data-product-id");
    const quantity = parseInt(cartIcon.getAttribute("data-quantity"));
    const price = parseFloat(cartIcon.getAttribute("data-price"));
    const product = {
      titulo: title,
      id: productId,
      quantity: quantity,
      price: price,
    };
    //Agrego los datos al carrito
    addToCart(product);
  }
});
//Agrego los titulos, contenedores y Slider al HTML
function HTML(data) {
  let innerHTML = `
    <div class="content--container">
        <div class="content--title">
          <h2 class="content-title">${data.title}</h2>
          <input type="button" class="content--button" onclick="verTodo('${data.title}')" value="VerTodo">
        </div>
        <div class="card--container">
           <span class="span voltar"><img src="${data.path.imgSlider}" alt="" class="img"></span>
        <div class="cards">
           ${data.cards}
        </div>
           <span class="span avancar"><img src="${data.path.imgSlider}" alt=""></span>
        </div>
    </div>`;
  return innerHTML;
}
//FUNCION PARA VER POR TIPO DE PRODUCTO//

window.verTodo = function(titulo) {
  window.location.href = `./product.html?titulo=${titulo}`;
};
//CONTENEDOR DEL HTML PARA SECCIONES Y TARJETAS//
export function containerCards(paths) {
  //Selección del contenedor de tarjetas
  var cardSection = document.querySelector(".content");
  //Limpia el contenido del contenedor
  cardSection.innerHTML = "";

  if (paths.productAmount > 1) {
    //Iterasobre la lista de productos
    paths.productList.forEach((item, index) => {
      //Creo datos para pasar a la función createCards()
      let data = { product: item, index: index};
      //Creo las tarjetas (cardContainer) utilizando createCards()
      let cardContainer = createCards(data, item.titulo);
      //Creo un objeto info con los datos de las tarjetas
      let info = { title: item.titulo, cards: cardContainer, path: paths };
      //Añado las tarjetas al contenedor (cardSection) utilizando HTML()
      cardSection.innerHTML += HTML(info);
      cardContainer = "";
    });
    //Llamo a la función slider() para inicializar el deslizador
    slider();

    return;
  } else {
    let data = {
      product: paths.productList,
      index: paths.listIndex,
      url: paths.url,
    };
    let cardContainer = createCards(data, paths.productList.titulo);
    let info = {
      title: paths.productList.titulo,
      cards: cardContainer,
      path: paths,
    };
    cardSection.innerHTML += HTML(info);
  }
  slider();
}

/*CARRITO DE COMPRA*/

//Creo la variable para lamanecnar
let cart = [];

function addToCart(product) {
  //Me fijo si el producto exsite
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    //Si existe sumo uno a la cantidad
    existingProduct.quantity++;
  } else {
    //Si no existe mando los datos a la variable cart
    cart.push({
      titulo: product.titulo,
      id: product.id,
      quantity: 1,
      price: product.price,
    });
  }
  //Actualizo Carrito
  updateCart();
}
//Carrito de compras
function updateCart() {
  let total = 0;
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cart-count").textContent = totalItems;

  cart.forEach((element) => {
    total += element.price * element.quantity;
  });
  document.getElementById("cart-total").textContent = total;
}



window.onload = function () {

  const paths = {
    productList: lista,
    productAmount: lista.length,
    imgSlider: "./assets/img/flecha/setaSlider.png",
  };

  containerCards(paths);
};
