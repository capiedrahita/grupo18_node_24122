document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.grid-container');
    for (let i = 1; i <= 500; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-item';
        cell.textContent = i;

        // Agregar evento de clic para cambiar el estado de "seleccionado"
        cell.addEventListener('click', function() {
            cell.classList.toggle('selected'); // Alternar la clase "selected"
        });

        container.appendChild(cell);
    }
});
