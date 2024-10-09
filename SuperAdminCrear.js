document.getElementById('animalForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recargar la página

    // Capturar los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const cuidador = document.getElementById('cuidador').value;
    const fechaCreacion = new Date().toISOString().split('T')[0] + " " + new Date().toLocaleTimeString();

    // Crear objeto con los datos de la mascota
    const mascota = {
        nombre,
        cuidador,
        fechaCreacion,
        ultimaModificacion: fechaCreacion
    };

    // Guardar el objeto en localStorage
    localStorage.setItem('mascota', JSON.stringify(mascota));

    // Mostrar alerta de éxito y redirigir a la página de listado
    Swal.fire({
        title: "¡Mascota Guardada!",
        text: `La información de ${nombre} ha sido guardada.`,
        icon: "success"
    }).then(function() {
        window.location.href = "SuperAdmin.html";
        // window.location.href = "prueba1.html";
    });
});



/*---------------------------------ISTA DE EXAMENES----------------------------------------*/ 
/*---------------------------------ISTA DE EXAMENES----------------------------------------*/ 


        // Inicializar un contador para el ID automático
        let idCounter = 1;

        // Obtener elementos del DOM
        const modal = document.getElementById("nuevoExamenModal");
        const btn = document.getElementById("nuevoExamenBtn");
        const span = document.getElementsByClassName("close")[0];
        const form = document.getElementById('examenForm');
        const tableBody = document.getElementById('examenesTable').getElementsByTagName('tbody')[0];

        // Función para obtener la fecha actual en formato yyyy-mm-dd hh:mm:ss
        function obtenerFechaActual() {
            const fecha = new Date();
            const yyyy = fecha.getFullYear();
            const mm = String(fecha.getMonth() + 1).padStart(2, '0'); // Mes con 0 adelante
            const dd = String(fecha.getDate()).padStart(2, '0'); // Día con 0 adelante
            const hh = String(fecha.getHours()).padStart(2, '0');
            const min = String(fecha.getMinutes()).padStart(2, '0');
            const sec = String(fecha.getSeconds()).padStart(2, '0');
            return `${yyyy}-${mm}-${dd} ${hh}:${min}:${sec}`;
        }

        // Abrir el modal al hacer clic en el botón
        btn.onclick = function() {
            modal.style.display = "block";

            // Asignar ID automático
            document.getElementById('id').value = idCounter;

            // Asignar fecha actual automática
            document.getElementById('fecha').value = obtenerFechaActual();
        }

        // Cerrar el modal al hacer clic en la 'x'
        span.onclick = function() {
            modal.style.display = "none";
        }

        // Cerrar el modal si se hace clic fuera del contenido del modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Manejar el envío del formulario
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

            // Obtener los valores del formulario
            const id = document.getElementById('id').value;
            const examen = document.getElementById('examen').value;
            const resultados = document.getElementById('resultados').value;
            const fecha = document.getElementById('fecha').value;

            // Crear una nueva fila en la tabla
            const newRow = tableBody.insertRow();
            newRow.innerHTML = `
                <td>${id}</td>
                <td>${examen}</td>
                <td>${resultados}</td>
                <td>${fecha}</td>
                <td><a href="#">Ver</a> | <a href="#">Editar</a></td>
            `;

            // Incrementar el contador de ID
            idCounter++;

            // Limpiar formulario
            form.reset();

            // Cerrar el modal
            modal.style.display = "none";

            // Eliminar la fila "SIN DATOS" si existe
            const sinDatosRow = tableBody.querySelector('tr td[colspan="5"]');
            if (sinDatosRow) {
                sinDatosRow.parentElement.remove();
            }
        });
  

/*---------------------------------ISTA DE EXAMENES----------------------------------------*/ 
/*---------------------------------ISTA DE EXAMENES----------------------------------------*/ 
