const { crearArchivo } = require('./helpers/multiplicar');
//utilizando yargs - me interesa que esxtraiga del paquete de yargs: argv
const argv = require('yargs').argv;

console.clear();

//argv que se encuentra en los procesos propios de node
console.log( process.argv );
//argv que se encuentra en yargs
console.log(argv.base);

//si yo quisiera la base
console.log('base: yargs', argv.base);





// console.log(process.argv);
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);


//const base = 3;

// crearArchivo( base )
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));