Fundamentos de la programación JavaScript
Para entender JavaScript y sus fundamentos debemos pensar en éste como un lenguaje de escritura de guiones (lenguaje de scripting). Un guión Script es un programa que está contenido internamente dentro de una página HTML (que es el método original de escribir guiones) o reside en un archivo externo (el método preferido actualmente).

En las páginas HTML, como está incluido en la etiqueta <script>, el texto del guión no aparece en la pantalla del usuario, y el navegador web es el que ejecuta el programa JavaScript.

La etiqueta <script> se encuentra muy a menudo dentro de la sección <head> de la página HTML, pero también puede incluir guiones, si lo desea, en la sección <body>.

#Qué es Javascript

Programar en JavaScript es ridículamente fácil pues se trata de un lenguaje muy tolerante para todo lo que queramos hacer. Esto hace que podamos usar diferentes técnicas para poder hacer nuestro código lo más eficiente posible. En otras palabras el lenguaje se adapta a tu estilo de programación. Pero siendo sincero no vas a aprender JavaScript en una semana, posiblemente te tome más de 6 meses en entender el lenguaje y las herramientas para crear aplicaciones increíbles. El esfuerzo es algo que valdrá totalmente la pena y vas a estar en un viaje de aprendizaje increíble.

Conceptos básicos: clases, variables, operadores, condicionales, bucles
Programar en JavaScript es muy sencillo. Muchas de sus características son comunes para la mayoría de lenguajes de programación por lo que si ya tienes experiencia con otros lenguajes encontrarás JavaScript muy familiar.

Por ejemplo, declarar variables - contenedores en los que puedes almacenar valores - es un buen ejemplo. Primero declaramos la variable con la palabra clave var, seguida del nombre que le quieras dar:

var nombreVariable;
Tras declarar una variable, asignamos un valor:

nombreVariable = 'pato';
Y por supuesto podemos ahorrar tiempo si hacemos las dos cosas a la vez:

var nombreVariable = 'pato';
A partir de aquí vamos definiendo nuestro Script con una lista de enunciados que se van ejecutando a medida que se cargan pero, para organizar mejor nuestro código, podemos necesitar estructuras de flujo control de para su ejecución estableciendo caminos o rutas alternativas. Es decir, según un supuesto, que nuestro programa tome un camino u otro. Para permitir esto existen las estructuras condicionales.

if … else
Se trata de la estructura de control más simple. Básicamente lo que decimos es que sí se cumple una condición se tomará un camino y en caso que no se cumpla tomará otro camino alternativo.

La sintaxis de esta estructura es la siguiente:

if(condición){
//si se cumple la condición
} else {
//si NO se cumple la condición
}
Por ejemplo:

if (p_manzana>100){
alert("El precio del kilo de manzanas es caro");
} else {
alert("El precio del kilo de manzanas es barato");
}
Claro está que si necesitamos concatenar diferentes If...else nuestro árbol de decisión puede ser un poco complicado de mantener por lo que se suele ser más efectivo emplear la estructura condicional conocida como switch.

Switch
Por medio de switch se puede listar una serie de bloques de enunciados que se ejecuten dependiendo del valor de una variable. Esto resulta en un manejo mucho más eficiente de nuestro código.

La sintaxis sería:

switch (variable){
case(valor1):
#código
break;
case(valor2):
#código
break;
case(valor3):
#código
break;
default:
#código a ejecutar cuando el valor no
coincida con ninguno de los anteriores
break;
}
Nota: break indica que el bloque de código puede dejar de interpretarse cuando se haya dado una coincidencia. default es opcional.

Operadores lógicos
Las posibilidades de establecer condiciones permite hacer nuestro código mucho más fácil de entender y mantener. Para mejorar sus posibilidades y al igual que todos los lenguajes de programación se suele usar operadores lógicos.

Este tipo de operadores permite obtener solo dos resultados, por lo que se conocen también como booleanos, porque hacen uso de los principios del álgebra de Boole. Los resultados son Verdadero o Falso. La sintaxis especifica una serie de reglas de construcción que deberán cumplir las fórmulas para ser sintácticamente correctas.

Operador Uso Descripción
AND (&&) lógico expr1&&expr2 Retorna true Si ambas expresiones son correctas.
OR (||) lógico expr1||expr2 Retorna true Si alguna de las expresiones es correctas.
NOT (!) lógico !expr Retorna true Si la expresión son incorrectas.
Bucles
Los bucles ofrecen una manera rápida y sencilla de hacer algo repetidamente. Esto es especialmente útil si necesitamos que nuestro programa realice una acción de manera reiterada.

En JavaScript hay varias formas de representar los bucles. El emplear el más adecuado depende de nuestra preferencia para determinar sus puntos de inicio y fin. Quizá el más conocido es for:

var contar;
for (contar = 1; contar < 5; paso++) {
// contamos del 1 al 4
console.log('cuento' + contar);
};
Otro bucle que debemos conocer es do...while. Esta sentencia establece que mientras se cumpla la condición el bucle seguirá ejecutándose. Una sentencia do...while se mostrará como sigue:

do
sentencia
while (condicion);
Ejemplo:

do {
i += 1;
console.log(i);
} while (i < 5);
En el siguiente ejemplo, mientras que el valor de la variable i sea inferior a 5 el bucle tendrá lugar.

Clases
Las clases fueron una de las grandes novedades introducidas en ECMAScript 2015 y son de hecho "funciones especiales", son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

Las clases son de hecho "funciones especiales", tal y como el caso de las expresiones de funciones y declaraciones de funciones, la sintaxis de la clase tiene dos componentes:

class Poligono {
constructor(alto, ancho) {
this.alto = alto;
this.ancho = ancho;
}
}
Funciones, objetos, eventos
En JavaScript las funciones van encerradas por llaves. Una función no deja de ser una declaración de instrucciones que se deben ejecutar tras invocar en nuestro programa a ésta.

La definición de una función (también llamada declaración de función o sentencia de función) consiste de la palabra clave (reservada) function, seguida por {}.

Por ejemplo, el siguiente código define una función simple llamada square:

function square(number) {
return number \* number;
}
Las últimas versiones de JavaScript siguen un diseño pensando para resolver los paradigmas de la programación basada en objetos. Un objeto es por definición una colección de propiedades. Dichas propiedades suelen ser el resultado de una asociación entre un nombre y un valor pero también podemos asociar una función o método que permite realizar operaciones o lanzar eventos.

Los objetos en JavaScript, al igual que en muchos otros lenguajes de programación, pueden ser comparados con objetos de la vida real. El concepto de Objetos en JavaScript se puede entender como en la vida real, objetos tangibles.

var miAuto = new Object();
miAuto.marca = "Seat";
miAuto.modelo = "127";
miAuto.año = 1972;
Eventos:
Cuando hablamos de eventos en JavaScript tenemos que pensar en cómo el HTML interactúa con el usuario. Una web no solo ofrece un contenido estático, a menudo se muestran formularios o se requiere estar atentos a lo que hace el navegador. Algunos ejemplos de eventos en HTML son los siguientes:

Una página web HTML ha finalizado la carga.
Se cambió un campo de entrada HTML
Se hizo clic en un botón HTML
Una de las características de JavaScript es el permitir ejecutar código cuando se detectan estos eventos. Por ejemplo:

<button onclick="this.innerHTML = Date()">The time is?</button>
Tipos de eventos HTML frecuentes:

Evento Descripción
onchange Un elemento HTML se ha cargado
onchange Un elemento HTML se ha cargado
onclick Usado cuando hacemos click en un elemento
onmouseover Cuando el cursor está sobre un elemento HTML
onmouseout Cuando separamos el cursor del ratón sobre un elemento HTML
onkeydown Cuando pulsamos la tecla de dirección superior de nuestro teclado
onload Cuando el navegador a terminado de cargar la página HTML
Ventajas y desventajas de JavaScript: Comparativa con otros lenguajes
A día de hoy algunos programadores se resisten en programar en JavaScript pues no lo consideran un lenguaje de programación digno. Esto es debido a que en sus comienzos JavaScript contaba con cierta leyenda negra. Los programadores más puristas de la época veían a este lenguaje como algo demasiado sencillo y limitado como para considerarlo un lenguaje de programación. Con el tiempo esto ha dejado de ser así, sobre todo con la llegada de ECMAScript 4 y su evolución posterior, hasta el punto de ser uno de los lenguajes de programación más demandado en la actualidad.

Las ventajas más destacadas de JavaScript:

Es un lenguaje muy sencillo.
Es rápido, por lo tanto tiende a ejecutar las funciones inmediatamente.
Cuenta con múltiples opciones de efectos visuales.
Es soportado por los navegadores más populares y es compatible con los dispositivos más modernos, incluyendo el navegador nativo para iPhone y Android.
Es muy versátil, puesto que es muy útil para desarrollar páginas dinámicas y aplicaciones web.
Es una buena solución para poner en práctica la validación de datos en un formulario.
Es multiplataforma, puede ser ejecutado de manera híbrida en cualquier sistema operativo móvil.
Es el único lenguaje que permite trabajar modo FullStack en cualquier tipo de desarrollo de programación.
Pero como decíamos también tiene otras características no tan positivas, estas son:

En el FrontEnd sus códigos son visibles, por lo tanto pueden ser leídos por cualquier usuario.
Tiende a introducir gran cantidad de fragmentos de código en los sitios web.
Sus opciones 3D son limitadas, si se quiere utilizar este lenguaje de programación para crear un juego, deben emplearse otras herramientas.
No es compatible en todos los navegadores de manera uniforme. No es su culpa. Lo mismo ocurre con CSS.
Los usuarios tienen la opción de desactivar JavaScript desde su navegador.
Sus script son limitados por razones de seguridad y no es posible realizar todo con JavaScript, por lo tanto es necesario complementarlo con otros lenguajes evolucionados y más seguros.
Frameworks JavaScript
Como lenguaje de programación la evolución de JavaScript ha sido enorme y sigue creciendo mediante nuevas implementaciones, frameworks y librerías que se utilizan para diferentes usos. Todo esto hace imposible para los desarrolladores poder conocer todo de este lenguaje. Es aquí donde los frameworks se presentan como una especie de navaja suiza para facilitar su trabajo.

Estos son los más populares:

Angular.js: este framework es desarrollado por Google y por tanto uno de los más populares. En la práctica no necesita presentación al ser el framework MVW ( Model View WhatEver) que se ha encargado de traer orden a las aplicaciones JavaScript y potenciar las Arquitecturas SPA.
React.js: la librería de Facebook orientada a la gestión de Interfaces de usuario. Muy extendido a la hora de desarrollar aplicaciones móviles.
Meteor.js: uno de los frameworks JavaScript que está adquiriendo mayor tracción en el mercado. Pensado para desarrollar aplicaciones JavaScript puedan ejecutar su código en entornos cliente cliente y servidor.
jQuery.js: uno de los clásicos, han pasado muchos años desde que apareció en el mercado y se convirtió en el standard de facto a la hora me manipular el árbol DOM.
El Futuro de JavaScript
En sus inicios JavaScript era utilizado para crear animaciones e interacciones sencillas en los sitios web. En la actualidad y gracias a nodeJS, JavaScript puede ser ejecutado en servidores y no solo en el navegador del usuario. Esto ha generado un cambio de paradigma importante hasta el punto que en la actualidad podemos utilizar código JavaScript para cualquier cosa que se nos ocurra.

Para darnos cuenta de la importancia que esto ha supuesto solo citar que Netflix utiliza JavaScript para construir sus aplicaciones para todos los dispositivos que soporta.

Con el salto al entorno servidor JavaScript se ha convertido en no solo un lenguaje “fácil y divertido” sino también algo que nos permite programar lo que queramos en completa libertad y casi sin recurrir a código procedente de otros lenguajes. Es fácil entender que su futuro y tendencia es en la actualidad la razón de porqué más empresas solicitan programadores con alguna experiencia en desarrollo de aplicaciones basado en JavaScript o alguno de sus frameworks.
