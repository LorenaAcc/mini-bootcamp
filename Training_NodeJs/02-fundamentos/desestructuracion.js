const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }

}

console.log( deadpool.getNombre() );

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// console.log(nombre, apellido, poder);


//UTILIZANDO DESESTRUCTURACION
// const { nombre, apellido, poder } = deadpool;

// console.log(nombre, apellido, poder);

//UTILIZANDO FUNCTION CON DESESTRUCTURACION
function imprimirHeroe2(heroe) {
    const { nombre, apellido, poder, edad=0 } = heroe;
    console.log(nombre, apellido, poder, edad)
}

imprimirHeroe2( deadpool );



//UTILIZANDO FUNCTION CON DESESTRUCTURACION (desestructuracion dentro del argumento)
// function imprimirHeroe({ nombre, apellido, poder, edad=0 }) {
//     console.log(nombre, apellido, poder, edad)
// }

// imprimirHeroe( deadpool );

function imprimirHeroe3({ nombre, apellido, poder, edad=0 }) {
    nombre = 'Lorena',
    console.log(nombre, apellido, poder, edad)
}

imprimirHeroe3( deadpool );

//////////////////////////////////////////////////////


const heroes = [ 'Deadpool', 'Superman', 'Bataman' ];

const h1 = heroes[0];

console.log(h1);

//Desestructurar arreglo
const heroes2 = [ 'Deadpool', 'Superman', 'Bataman' ];
const [ , , h3_2] = heroes2;

console.log(h3_2);




