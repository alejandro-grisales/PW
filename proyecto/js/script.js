document.addEventListener("DOMContentLoaded", function() {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    selectable: true,
    select: function(info) {
      // Mostrar el formulario modal al seleccionar una fecha
      var modal = document.getElementById("appointmentModal");
      modal.style.display = "block";
      
      // Obtener la fecha seleccionada y establecerla en el campo correspondiente
      var dateField = document.getElementById("date");
      dateField.value = info.startStr;
    },
    customButtons: {
      btnToday: {
        text: "Hoy",
        click: function() {
          calendar.today();
        }
      },
      btnWeek: {
        text: "Semana",
        click: function() {
          calendar.changeView("timeGridWeek");
        }
      },
      btnMonth: {
        text: "Mes",
        click: function() {
          calendar.changeView("dayGridMonth");
        }
      }
    },
    headerToolbar: {
      start: "btnToday btnWeek btnMonth", // Agregar los botones a la barra de herramientas del encabezado
      center: "title",
      end: "prev,next"
    }
  });

  calendar.render();


 // Manejar el envío del formulario
 var submitButton = document.getElementById("submitButton");
 submitButton.addEventListener("click", function(event) {
   event.preventDefault();

   // Obtener la fecha actual
   var today = new Date();
   
   // Obtener la fecha seleccionada del campo correspondiente
   var date = document.getElementById("date").value;
   var selectedDate = new Date(date);

   // Calcular la fecha límite permitida (hasta dos días después del día actual)
   var limitDate = new Date();
   limitDate.setDate(today.getDate() + 3);

   // Validar si la fecha seleccionada está dentro del rango permitido
   if (selectedDate >= today && selectedDate <= limitDate) {
     // Obtener los valores seleccionados del formulario
     var name = document.getElementById("name").value;
     var vehicle = document.getElementById("vehicle").value;
     var service = document.getElementById("service").value;
     var time = document.getElementById("time").value;

     // Agregar un evento al calendario con el nombre del cliente y color azul
     calendar.addEvent({
       title: name + " - " + vehicle + " - " + service,
       start: date + "T" + time,
       backgroundColor: "blue"
     });

     // Reiniciar el formulario y cerrar el formulario modal
     document.getElementById("appointmentModal").reset();
     document.getElementById("appointmentModal").style.display = "none";
   } else {
     // Mostrar un mensaje de error si se selecciona una fecha fuera del rango permitido
     alert("Solo puedes agendar citas hasta dos días después del día actual.");
   }
 });

 calendar.render();
});

$(document).ready(function() {
  // Obtener el valor del parámetro "username" de la URL
  var urlParams = new URLSearchParams(window.location.search);
  var username = urlParams.get('username');

  // Asignar el nombre de usuario al campo de entrada con ID "name"
  $('#name').val(username);
});
