$('#loadDataButton').click(function() {
  // Realizar solicitud a la API para obtener un usuario aleatorio
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      var user = data.results[0];
      var randomUsername = user.login.username;
      var randomPassword = user.login.password;
      var profilePicture = user.picture.large;

      // Asignar los valores generados aleatoriamente a los campos de usuario y contraseña
      $('#username').val(randomUsername);
      $('#password').val(randomPassword);

      // Mostrar la foto de perfil
      $('#profilePicture').attr('src', profilePicture);

      // Guardar el nombre de usuario y la foto de perfil en localStorage
      localStorage.setItem('username', randomUsername);
      localStorage.setItem('profilePicture', profilePicture);
    },
    error: function() {
      console.log('Error al obtener los datos del usuario');
    }
  });

  // Evitar el envío del formulario (ya que no se está utilizando un formulario real)
  return false;
});
  
  $('#loginButton').click(function() {
    var username = $('#username').val();
    var password = $('#password').val();
  
    if (username && password) {
      // Guardar el nombre de usuario en localStorage
      localStorage.setItem('username', username);
  
          // Redirigir al usuario a la página de calendario
        window.location.href = 'https://agrisales.neocities.org/Proyecto/Calendario?username=' + username;
    } else {
        alert('Por favor, ingresa un nombre de usuario y contraseña.');
    }
  
    // Evitar el envío del formulario (ya que no se está utilizando un formulario real)
    return false;
  });
  