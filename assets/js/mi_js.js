$(document).ready(function () {
    // Inicializar el carousel
    $('.carousel').carousel();

    // Validar formulario de contacto antes de enviar
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;

        if (nombre && email && mensaje) {
            alert('Formulario enviado correctamente.');
            this.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});
