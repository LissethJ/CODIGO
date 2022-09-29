// * va
// * let
// * const

//* var es una palabra reservada que nos permite declarar variables en javascript

var n1 = 1;  //number
n1 = "hola"  //string

//! var ya no se usa 
// var es global
// var es reasignable 
// var es pesado
var n1 = true;

// actualmente no es recomendable usar var 

//* let es una palabra reservada que nos permite declarar variables en javascript
// let solo funciona en el scope donde fue declarado 
//se puede cambiar de valor como el ejemplo de abajo

let nombre = "Linder";  // el valor inicial

nombre = 10;  //cambiando el valor 
nombre = true;  //cambiando el valor 
nombre = null;  //cambiando el valor 
nombre = undefined;


// Una nueva variable, no esta permitido
//let nombre = "Juan"; 

console.log(nombre);


//* const es una palabra reservada que nos permite declarar variables en javascript
//const solo funciona en el scopr donde fue declarado 
// const no se puede reasignar 
const nombre3 = "linder";

//Esto no es posible con const porque una vez tenga este un valor ya no se puede cambiar
// A esto se le llaa //! INMUTABILIDAD
// no se puede hacer luego nombre3 = "Pepe";
