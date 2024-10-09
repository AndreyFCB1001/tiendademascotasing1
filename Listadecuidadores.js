let idCounter = 109; // Contador inicial para IDs

// Obtener datos de la mascota desde localStorage
const mascotaGuardada = localStorage.getItem('cuidador');

if (mascotaGuardada) {
    const mascota = JSON.parse(mascotaGuardada);

    // Obtener referencia a la tabla
    const table = document.getElementById('mascotasTable').getElementsByTagName('tbody')[0];

    // Crear una nueva fila y añadirla a la tabla
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${idCounter++}</td>
        <td>${mascota.nombre}</td>
        <td>${mascota.cuidador}</td>
        <td>${mascota.fechaCreacion}</td>
        <td>${mascota.ultimaModificacion}</td>
        <td><a href="#">Ver</a> | <a href="#">Editar</a></td>

    `;
}