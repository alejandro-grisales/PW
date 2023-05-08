function calcularEdad() {
  // Obtener los valores ingresados por el usuario
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;

  // Validar que se haya ingresado un nombre y una edad
  if (nombre && edad) {
    // Calcular la edad del próximo año
    const edadProximoAnio = parseInt(edad) + 1;

    // Crear el mensaje utilizando template strings
    const mensaje = `Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edadProximoAnio} años`;

    // Mostrar el mensaje en un cuadro de diálogo
    alert(mensaje);
  } else {
    alert("Por favor ingrese su nombre y su edad");
  }
}

function calcularArea() {
  // Obtener el valor ingresado en el cuadro de diálogo
  const figura = document.getElementById("figura").value.toLowerCase();

  if (figura === "triángulo") {
    const base = parseFloat(prompt("Ingrese la base del triángulo:"));
    const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    const area = (base * altura) / 2;
    alert("El área del triángulo es: " + area);
  } else if (figura === "rectángulo") {
    const base = parseFloat(prompt("Ingrese la base del rectángulo:"));
    const altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
    const area = base * altura;
    alert("El área del rectángulo es: " + area);
  } else if (figura === "círculo") {
    const radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    const area = Math.PI * Math.pow(radio, 2);
    alert("El área del círculo es: " + area);
  } else {
    alert("Figura no válida. Por favor, ingrese triángulo, rectángulo o círculo.");
  }
}


function imprimirParesImpares(numero) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar el contenido previo

  for (let i = 1; i <= numero; i++) {
    const mensaje = `${i} - es ${i % 2 === 0 ? "par" : "impar"}`;
    const elemento = document.createElement("p");
    elemento.textContent = mensaje;
    resultado.appendChild(elemento);
  }
}

function imprimir() {
  const numero = parseInt(document.getElementById('numero').value);
  imprimirParesImpares(numero);
}



function verificarPrimo() {
  var numero = parseInt(document.getElementById("numero").value);
  var esPrimo = true;

  if (numero <= 1) {
    document.getElementById("resultado").innerHTML = "El número debe ser mayor que 1.";
    return;
  }

  for (var i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }

  if (esPrimo) {
    document.getElementById("resultado").innerHTML = "El número " + numero + " es primo.";
  } else {
    document.getElementById("resultado").innerHTML = "El número " + numero + " no es primo.";
  }
}


function calculateFactorial() {
  var numberInput = document.getElementById("number");
  var resultOutput = document.getElementById("result");

  var number = parseInt(numberInput.value);

  if (isNaN(number) || number <= 0) {
    resultOutput.textContent = "Please enter a positive integer.";
  } else {
    var factorial = 1;

    for (var i = number; i >= 1; i--) {
      factorial *= i;
    }

    resultOutput.textContent = "!" + number + " = " + factorial;
  }
}


function sumarNumeros() {
  var total = 0;
  var contador = 0;

  while (total <= 50) {
    var numero = parseFloat(prompt("Introduce un número:"));

    if (isNaN(numero)) {
      alert("El valor introducido no es un número válido. Inténtalo de nuevo.");
      continue;
    }

    total += numero;
    contador++;
  }

  alert("La suma total es: " + total);
  alert("Se han introducido " + contador + " números.");
}


function clasificarNumeros() {
  // Crear el primer array solicitando al usuario que ingrese 5 números
  var numeros = [];
  for (var i = 0; i < 5; i++) {
    var numero = parseInt(prompt("Ingresa un número:"));
    numeros.push(numero);
  }

  // Crear los arrays pares e impares
  var pares = [];
  var impares = [];

  // Multiplicar los números y clasificarlos en los arrays correspondientes
  numeros.forEach(function (numero) {
    var aleatorio = Math.floor(Math.random() * 10) + 1; // Generar número aleatorio entre 1 y 10
    var resultado = numero * aleatorio;

    console.log(numero + ' x ' + aleatorio + ' = ' + resultado);

    if (resultado % 2 === 0) {
      pares.push(resultado);
    } else {
      impares.push(resultado);
    }
  });

  // Mostrar los arrays de pares e impares
  console.log('Array de pares:', pares);
  console.log('Array de impares:', impares);

}



function calcularLetraDNI() {
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  var numeroDNI = parseInt(prompt("Introduce el número de DNI:"));

  // Validar el número de DNI
  if (isNaN(numeroDNI) || numeroDNI < 0 || numeroDNI > 99999999) {
    alert("El número de DNI no es válido.");
    return;
  }

  var posicionLetra = numeroDNI % 23;
  var letraDNI = letras[posicionLetra];

  alert("La letra correspondiente al número de DNI " + numeroDNI + " es: " + letraDNI);
}




function analizarPalabra() {
  var palabra = prompt("Introduce una palabra:");

  // Convertir la palabra a minúsculas para facilitar el análisis
  palabra = palabra.toLowerCase();

  var longitud = palabra.length;
  var vocales = 0;
  var consonantes = 0;

  // Recorrer cada letra de la palabra
  for (var i = 0; i < longitud; i++) {
    var letra = palabra.charAt(i);

    // Verificar si la letra es una vocal
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
      vocales++;
    } else {
      consonantes++;
    }
  }

  console.log("Palabra: " + palabra);
  console.log("Longitud: " + longitud);
  console.log("Vocales: " + vocales);
  console.log("Consonantes: " + consonantes);
}



function verificarColor() {
  var colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
  var colorUsuario = prompt("Introduce un color:");

  // Convertir el color introducido a minúsculas para facilitar la comparación
  colorUsuario = colorUsuario.toLowerCase();

  if (colores.includes(colorUsuario)) {
    console.log("El color " + colorUsuario + " se encuentra en el array.");
  } else {
    console.log("El color " + colorUsuario + " no se encuentra en el array.");
  }
}

