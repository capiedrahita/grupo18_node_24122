const nav = document.getElementById("encabezado");
nav.innerHTML = `
    <nav class="menu">
        <ul class="menu__lista">
            <li class="menu__item">
                <a class="menu__link activo" href="/">
                    <i class="fas fa-home"></i>
                    Inicio
                </a>
                <a class="menu__link" href="/productos">
                    <i class="bi bi-file-person-fill"></i>
                    Productos
                </a>
                <a class="menu__link" href="/contacto">
                    <i class="fa fa-comments" aria-hidden="true"></i>
                    Contacto
                </a>
                <div class="menu__item--dropdown">
                    <a class="menu__link" href="/login" id="login-link">
                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                        Loguin
                    </a>
                    <div class="dropdown-content">
                        <a href="/login" id="loguin-link">Ingresar</a>
                        <a href="/registro" id="loguin-registro">Registrate</a>
                        <a href="/" id="logout-link" onclick="logout()">Salir</a>
                        <a href="/perfilDeUsuario" id="profile-link">Ver Perfil</a>
                    </div>
                </div>
                <a class="menu__link" href="/checkout">
                    <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                    <span id="cart-count">0</span>
                    <span id="cart-total">$0</span>
                </a>
            </li>
        </ul>
    </nav>
    <div class="logo">
        <img class="logo--img" src="/assets/img/logo/logo5.png">
    </div>
`;
