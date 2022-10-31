
console.log('Ejemplo UNO:');
var nombre = 'Wolverine';

if (true){
    nombre = 'Magneto';
}

console.log(nombre);


console.log('Ejemplo DOS:');
let nombre_2 = 'Wolverine 2';

if (true){
    let nombre_2 = 'Magneto 2';
    console.log(nombre_2);
}

console.log(nombre_2);


console.log('Ejemplo TRES:');
let nombre_3 = 'Wolverine 3';

if (true){
    nombre_3 = 'Magneto 3';
    console.log(nombre_3);
}
console.log(nombre_3);

// console.log('Ejemplo CUATRO:');
// const nombre_4 = 'Wolverine 4';

// if (true){
//     nombre_4 = 'Magneto 4'; // Esto da ERROR porque "nombre_4" ya estaba declarada como constante.
//     console.log(nombre_4);
// }

// console.log(nombre_4);



console.log('Ejemplo CINCO:');
const nombre_5 = 'Wolverine 5';

if (true){
    const nombre_5 = 'Magneto 5';
    console.log(nombre_5);
}
console.log(nombre_5);



console.log('Ejemplo SEIS (ojo!, utilización incorrecta!!!):');
nombre_6 = 'Wolverine 6';

if (true){
    nombre_6 = 'Magneto 6';
}

var nombre;
console.log(nombre_6);