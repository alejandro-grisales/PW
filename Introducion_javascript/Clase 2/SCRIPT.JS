


var contar;
let nombre;
const dato="soy un genio";
console.log(contar);
console.log(nombre);
console.log(dato);  

/*
var N1=13;
var N2=18;
var s=N1+N2;
console.log("la suma de: " +N1 + " y " + N2 + " es " + s)

 N1= prompt("digite un numero1");
 N2= prompt("digite un numero2");
 s=parseInt(N1) + parseInt(N2);
console.log("la suma de: " +N1 + " y " + N2 + " es " + s);
alert("la suma de: " + N1 + " y " + N2 + " es " + s);
*/



for (contar=1; contar < 15; ++contar)  
{
console.log('cuento:' + contar);
};

for (contar=1; contar < 15; ++contar)  
{
console.log('esto es una hora es bonita:' + contar);
};


N=prompt("Digite el numero de tabla que deseee");
for (contar = 1 ; contar < 11; ++contar){
t= contar *parseInt(N);
console.log(contar + '*' + N + "=" + t);
};

let i=0;
do {
    i+=1;
    console.log(i);

} while (i<5);

let c=2;
while (c<18){
    c+=1;
    console.log(c + ' -item');

}


let m=0.8;

console.log(typeof(m));
function square(number){
    m=number * number;
    return m;
}

console.log(square(5));


var miauto = new Object ();
miauto.marca = "seat";
miauto.modelo ="127";
miauto.año=1972;
console.log(miauto.marca + " , "+ miauto.modelo + " , " + miauto.año);









