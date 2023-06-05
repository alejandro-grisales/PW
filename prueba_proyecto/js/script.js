$(document).ready(function() {
  // Obtener el valor del parámetro "username" de la URL
  var storedUsername = localStorage.getItem('username');

  // Asignar el nombre de usuario al campo de entrada con ID "name"
  $('#name').val(storedUsername);

 // Obtener la foto de perfil del usuario desde localStorage
 var profilePicture = localStorage.getItem('profilePicture');

 // Asignar la foto de perfil al elemento <img>
 $('#profilePicture').attr('src', profilePicture);

  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    selectable: true,
    select: function(info) {
      // Obtener la fecha actual y la fecha seleccionada
      var currentDate = new Date();
      var selectedDate = info.start;

      // Comparar la fecha seleccionada con la fecha actual
      if (selectedDate < currentDate) {
        // Mostrar mensaje de error si se selecciona un día anterior al actual
        alert("No puedes agendar citas en días anteriores al actual.");
        return;
      }

      // Obtener la hora actual y la hora seleccionada
      var currentHour = currentDate.getHours();
      var selectedHour = selectedDate.getHours();

      // Comparar la hora seleccionada con la hora actual
      if (selectedHour <= currentHour) {
        // Mostrar mensaje de error si se selecciona la misma hora o una hora anterior a la actual
        alert("No puedes agendar citas en la misma hora o en horas anteriores a la actual.");
        return;
      }

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
          highlightToday(); // Resaltar el día de hoy y mostrar los eventos
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
      start: "btnToday btnWeek btnMonth",
      center: "title",
      end: "prev,next"
    },
    events: function(info, successCallback, failureCallback) {
      // Obtener los eventos almacenados en localStorage (si existen)
      var storedEvents = localStorage.getItem('calendarEvents');
      var events = storedEvents ? JSON.parse(storedEvents) : [];

      // Devolver los eventos para mostrarlos en el calendario
      successCallback(events);
    }
  });

  calendar.render();



  
  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Obtener los valores seleccionados del formulario
    var name = document.getElementById("name").value;
    var vehicle = document.getElementById("vehicle").value;
    var service = document.getElementById("service").value;
    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var time = document.getElementById("time").value;

    // Obtener la fecha seleccionada del campo correspondiente
    var date = document.getElementById("date").value;

    // Obtener los eventos almacenados en localStorage (si existen)
    var storedEvents = localStorage.getItem('calendarEvents');
    var events = storedEvents ? JSON.parse(storedEvents) : [];

    // Verificar si ya existe una cita en la misma fecha y hora
    var existingEvent = events.find(function(event) {
      return event.start === date + "T" + time;
    });

    if (existingEvent) {
      // Mostrar mensaje de error si ya existe una cita en la misma fecha y hora
      alert("Ya tienes una cita programada en esta fecha y hora.");
      return;
    }

    // Agregar el nuevo evento al arreglo de eventos
    events.push({
      title: name + " - " + vehicle + " - " + service,
      start: date + "T" + time,
      backgroundColor: "blue"
    });

    // Guardar los eventos actualizados en localStorage
    localStorage.setItem('calendarEvents', JSON.stringify(events));

    // Agregar el nuevo evento al calendario
    calendar.addEvent({
      title: name + " - " + vehicle + " - " + service,
      start: date + "T" + time,
      backgroundColor: "blue"
    });

    // Reiniciar el formulario y cerrar el formulario modal
    document.getElementById("appointmentModal").reset();
    document.getElementById("appointmentModal").style.display = "none";
  });
});