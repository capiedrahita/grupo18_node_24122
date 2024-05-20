let cart = [];
export function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
        // Si existe, incrementar la cantidad
        existingProduct.quantity++;
    } else {
        // Si no existe, agregarlo al carrito
        cart.push({
            titulo: product.titulo,
            id: product.id,
            quantity: 1,
            price: product.price,
        });
    }

    // Actualizar el carrito
    updateCart();

    // Guardar el carrito en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para actualizar el carrito
export function updateCart() {
    let total = 0;
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cart-count").textContent = totalItems;

    cart.forEach((element) => {
        total += element.price * element.quantity;
    });
    document.getElementById("cart-total").textContent = total;
}

// Cargar el carrito desde localStorage al cargar la página
export function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCart();
    }
}

