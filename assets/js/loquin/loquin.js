// login.js
export function login() {
    var username = document.querySelector('input[name="user"]').value;
    var password = document.querySelector('input[name="password"]').value;

    console.log(username);
    console.log(password);

    // Validación simple para el ejemplo
    if (username === 'figuriando' && password === 'figuriando') {
        // Guardar el estado de login en localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);

        // Redirigir a la página de inicio
        window.location.href = 'index.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function logout() {
    // Borrar el estado de login de localStorage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');

    // Ocultar los enlaces de perfil y logout
    document.getElementById('profile-link').style.display = 'none';
    document.getElementById('logout-link').style.display = 'none';
}


function checkLoginStatus() {
    const loggedIn = localStorage.getItem('loggedIn');
    const username = localStorage.getItem('username');

    if (loggedIn === 'true') {
        // Mostrar los enlaces de perfil y logout
        document.getElementById('profile-link').style.display = 'block';
        document.getElementById('logout-link').style.display = 'block';
        console.log('Usuario logueado:', username);
    } else {
        // Ocultar los enlaces de perfil y logout
        document.getElementById('profile-link').style.display = 'none';
        document.getElementById('logout-link').style.display = 'none';
    }
}

window.onload = function() {
    checkLoginStatus();
};




