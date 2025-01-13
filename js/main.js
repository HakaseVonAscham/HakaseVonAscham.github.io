document.addEventListener("DOMContentLoaded", function() {
    // Redireccionar después de X segundos (por ejemplo, 3 segundos)
    setTimeout(function() {
        window.location.href = "html/main/main.html"; // Cambia "principal.html" por la ruta de tu página principal
    }, 300000); // 3000 milisegundos = 3 segundos

    // Redireccionar al hacer clic en el logo
    var logo = document.querySelector(".logo img");
    logo.addEventListener("click", function() {
        window.location.href = "html/main/main.html"; // Cambia "principal.html" por la ruta de tu página principal
    });
});