const nav = document.getElementById("encabezado");
nav.innerHTML = `
<nav class="menu">
            <ul class="menu__lista">
                <li class="menu__item">
                    <a class="menu__link activo" href="./index.html">
                        <i class="fas fa-home"></i>
                        Inicio
                    </a>
                    <a class="menu__link" href="./productos.html">
                        <i class="bi bi-file-person-fill"></i>                        Productos</a>
                    <a class="menu__link" href="./contacto.html">
                        <i class="fa fa-comments" aria-hidden="true"></i>
                        Contaco
                    </a>
                    <a class="menu__link" href="./login.html">
                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                        Loguin
                    </a>
                        <a class="menu__link" href="./checkout.html">
                            <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                            <span id="cart-count">0</span>
                            <span id="cart-total">$0</span>
                        </a>
                </li>
            </ul>
        </nav>
        <div class="logo">
            <img class="logo--img" src="./assets/img/logo/logo5.png">
        </div>
        `;