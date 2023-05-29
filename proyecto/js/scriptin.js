$(document).ready(function() {
    // Manejador de evento para el botón de inicio de sesión
    $('#loginButton').click(function() {
        // Realizar solicitud a la API para obtener un usuario aleatorio
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
                var user = data.results[0];
                var username = user.login.username;

                // Asignar el valor generado aleatoriamente al campo de usuario
                $('#username').val(username);

                // Redirigir al usuario a la página de calendario
                window.location.href = 'calendario.html?username=' + username;
            },
            error: function() {
                console.log('Error al obtener los datos del usuario');
            }
        });

        // Evitar el envío del formulario (ya que no se está utilizando un formulario real)
        return false;
    });
});