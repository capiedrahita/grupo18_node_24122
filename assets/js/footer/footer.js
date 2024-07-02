const foot = document.getElementById("footer");
foot.innerHTML = `
<div class="rodapie--conatiner">
            <div class="footer--servicios">
                <h3 class="footer--titulo">Nuestros Servicios</h3>
                <nav class="footer--servicios--menu">
                    <ul class="footer--menu--lista">
                        <li class="footer--menu--item">
                            <a class="footer--menu--link" href="/">
                                <i class="fas fa-home"></i>
                                Inicio
                            </a>
                            <a class="footer--menu--link" href="/productos">
                                <i class="fas fa-book"></i>
                                Productos
                            </a>
                            <a class="footer--menu--link" href="/contacto2">
                                <i class="fa fa-comments" aria-hidden="true"></i>
                                Contacto
                            </a>
                        </li>
                    </ul>
                    
                </nav>
            </div>
            <div class="footer--logo">
                <img class="footer--logo--img" src="/assets/img/logo/logo5.png">
            </div>
            
            <div>
                <div class="footer--lista">
                    <h3 class="footer--titulo">Nuestras Redes</h3>
                    <ul class="footer--lista--redes">
                        <li class="footer--lista--redes--item">
                            <a class="footer--lista--redes--item--link" href="#">
                                <i class="fa fa-twitter footer--redes--sociales " aria-hidden="true"></i>Twitter
                            </a>
                            <a class="footer--lista--redes--item--link" href="#">
                                <i class="fa fa-facebook footer--redes--sociales" aria-hidden="true"></i>Facebook
                            </a>
                            <a class="footer--lista--redes--item--link" href="#">
                                <i class="fa fa-instagram footer--redes--sociales" aria-hidden="true"></i>Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
        <div class="footer--copi">
            Todos los derechos reservados &copy; Grupo 18 - 2024 
        </div>
        `;