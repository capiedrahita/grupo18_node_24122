document.addEventListener('DOMContentLoaded', (event) => {
    // Manejo de envío del formulario
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // Obtén los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value.trim();
        const condition = document.getElementById('condition').checked;

        console.log(nombre);
        console.log(apellido);
        console.log(email);
        console.log(telefono);
        console.log(asunto);
        console.log(mensaje);
        console.log(condition);

        // Validar que los campos no estén vacíos
        if (!nombre) {
            alert('Por favor, ingrese su nombre.');
            event.preventDefault();
            return;
        }

        if (!apellido) {
            alert('Por favor, ingrese su apellido.');
            event.preventDefault();
            return;
        }

        // Validar el formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            event.preventDefault();
            return;
        }

        if (!telefono) {
            alert('Por favor, ingrese su número de teléfono.');
            event.preventDefault();
            return;
        }

        if (!asunto) {
            alert('Por favor, seleccione un motivo.');
            event.preventDefault();
            return;
        }

        if (!mensaje) {
            alert('Por favor, ingrese su comentario.');
            event.preventDefault();
            return;
        }

        if (!condition) {
            alert('Por favor, acepte los términos y condiciones.');
            event.preventDefault();
            return;
        }

        alert('Formulario enviado con éxito.');
    });

    // Manejo de selección de estrellas
    const stars = document.querySelectorAll('.star');

    let star_opcion;

    stars.forEach((star,index) => {
        star.addEventListener('click', () => {
            for(let i=0;i<=index;i++){
                stars[i].classList.add('checked');
            }
            for(let i=index+1;i<stars.length;i++){
                stars[i].classList.remove('checked');
            }
        star_opcion = index + 1; // Actualizar star_opcion después de los bucles
        console.log(star_opcion);
        
        });
    });

    


});
