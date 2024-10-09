// Swal.fire({
//     title: "Good job!",
//     text: "You clicked the button!",
//     icon: "success"
//   });

    // Agregar evento de clic al botón
    document.getElementById('myButton').addEventListener('click', function() {
        Swal.fire({
            title: "¡Buen trabajo!",
            text: "¡Has hecho clic en el botón!",
            icon: "success"
        }).then(function() {
            // Recargar la página después de cerrar la alerta
            window.location.href = "SuperAdmin.html";
        });
    });