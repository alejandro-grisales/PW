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
  const numero = parseInt(document.getElementById("numero").value);

  if (numero > 1) {
    let esPrimo = true;

    for (let i = 2; i < numero / 2; i++) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }

    if (esPrimo) {
      console.log(numero + " es un número primo.");
    } else {
      console.log(numero + " no es un número primo.");
    }
  } else {
    console.log("El número debe ser mayor que 1.");
  }
}

function sumarNumeros() {
  let suma = 0;
  let contador = 0;

  while (suma <= 50) {
    const numero = parseInt(prompt("Introduce un número"));
    suma += numero;
    contador++;
  }

  console.log(`La suma total es ${suma}`);
  console.log(`Se introdujeron ${contador} números`);
}
function multiplicarNumeros() {
  const numeros = [2, 5, 7, 10, 12];
  const pares = [];
  const impares = [];

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    const random = Math.floor(Math.random() * 10) + 1;
    const resultado = numero * random;

    console.log(`${numero} x ${random} = ${resultado}`);

    if (resultado % 2 === 0) {
      pares.push(resultado);
    } else {
      impares.push(resultado);
    }
  }

  console.log("Array de pares:", pares);
  console.log("Array de impares:", impares);
}
function calcularLetraDNI() {
  const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  const dni = parseInt(prompt("Introduce el número de DNI"));

  if (dni < 0 || dni > 99999999) {
    console.log("El número de DNI no es válido");
    return;
  }

  const indiceLetra = dni % 23;
  const letraDNI = letras[indiceLetra];

  console.log(`La letra correspondiente al número de DNI ${dni} es ${letraDNI}`);
}
function contarConsonantesVocales() {
  const palabra = prompt("Introduce una palabra");
  const longitud = palabra.length;
  let contadorConsonantes = 0;
  let contadorVocales = 0;

  for (let i = 0; i < longitud; i++) {
    const letra = palabra[i].toLowerCase();

    if (letra.match(/[a-z]/)) {
      if (letra.match(/[aeiou]/)) {
        contadorVocales++;
      } else {
        contadorConsonantes++;
      }
    }
  }

  console.log(`La palabra "${palabra}" tiene ${contadorConsonantes} consonantes, ${contadorVocales} vocales y una longitud de ${longitud}`);
}
function verificarColor() {
  const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
  const colorUsuario = prompt("Introduce un color");

  if (colores.includes(colorUsuario)) {
    console.log(`${colorUsuario} se encuentra dentro del array`);
  } else {
    console.log(`${colorUsuario} no se encuentra dentro del array`);
  }
}
