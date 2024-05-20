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
    const stars = document.querySelectorAll('.rating input');

    stars.forEach(star => {
        star.addEventListener('change', () => {
            let checked = false;
            stars.forEach(s => {
                if (s.checked) {
                    checked = true;
                }
                s.nextElementSibling.style.color = checked ? "#f5b301" : "#ddd";
            });
        });
    });

    const labels = document.querySelectorAll('.rating label');
    labels.forEach(label => {
        label.addEventListener('mouseover', () => {
            label.style.color = '#f5b301';
            let prevLabel = label.previousElementSibling;
            while (prevLabel) {
                prevLabel.style.color = '#f5b301';
                prevLabel = prevLabel.previousElementSibling;
            }
        });

        label.addEventListener('mouseout', () => {
            labels.forEach(l => l.style.color = '#ddd');
            stars.forEach(star => {
                if (star.checked) {
                    star.nextElementSibling.style.color = '#f5b301';
                    let prevLabel = star.nextElementSibling.previousElementSibling;
                    while (prevLabel) {
                        prevLabel.style.color = '#f5b301';
                        prevLabel = prevLabel.previousElementSibling;
                    }
                }
            });
        });
    });
});
