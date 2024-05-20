import { lista } from "./js/fakeAPI/productos.js";
import { slider } from "./js/slider/slider.js";
import { addToCart, loadCart } from "./js/carrito/carrito.js";

// Restante código para crear tarjetas y manejar el DOM
export function createCards(data, titulo) {
    // Creo el contenedor
    var cardContainer = "";
    // Itero sobre la lista y creo las tarjetas
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
        // Agrego la tarjeta al contenedor
        cardContainer += a;
    });
    // Retornno el contenedor con las tarjetas
    return cardContainer;
}

// Agregar event listener una vez que se carga el documento
document.addEventListener("click", function (event) {
    // Si se cliquea obtengo el titulo, id de producto, cantidad y precio para mandar al carrito
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
        // Agrego los datos al carrito
        addToCart(product);
    }
});

// Resto de tu código para manejar el HTML y el slider
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

window.verTodo = function(titulo) {
    window.location.href = `./product.html?titulo=${titulo}`;
};

export function containerCards(paths) {
    var cardSection = document.querySelector(".content");
    cardSection.innerHTML = "";

    if (paths.productAmount > 1) {
        paths.productList.forEach((item, index) => {
            let data = { product: item, index: index };
            let cardContainer = createCards(data, item.titulo);
            let info = { title: item.titulo, cards: cardContainer, path: paths };
            cardSection.innerHTML += HTML(info);
        });
        slider();
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

window.onload = function () {
    loadCart();

    const paths = {
        productList: lista,
        productAmount: lista.length,
        imgSlider: "./assets/img/flecha/setaSlider.png",
    };

    containerCards(paths);
};
