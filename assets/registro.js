document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita el envío del formulario

        const formData = new FormData(registerForm);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message); 
            } else {
                alert(result.error); 
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al registrar el usuario');
        }
    });
});
