document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.grid-container');
    for (let i = 1; i <= 500; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-item';

        // Crear y añadir el checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'cb' + i; // ID único para cada checkbox
        checkbox.className = 'item-checkbox';

        // Crear y añadir la etiqueta numérica
        const label = document.createElement('label');
        label.htmlFor = 'cb' + i;
        label.textContent = i;
        label.style.marginLeft = '10px'; // Espacio entre checkbox y número

        cell.appendChild(checkbox);
        cell.appendChild(label);

        container.appendChild(cell);
    }
});
