require('colors');

const mostrarMenu = () => {
    console.log();
    console.log('============================'.rainbow);
    console.log('   Seleccione una opción    '.bgCyan);
    console.log('============================\n'.rainbow);

    console.log(`${ '1.'.cyan } Crear tarea`);
    console.log(`${ '2.'.cyan } Listar tareas`);
    console.log(`${ '3.'.cyan } Listar tareas completadas`);
    console.log(`${ '4.'.cyan } Listar tareas pendietes`);
    console.log(`${ '5.'.cyan } Completar tarea(s)`);
    console.log(`${ '6.'.cyan } Borrar tarea`);
    console.log(`${ '0.'.cyan } Salir \n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Seleccione una opción: ', (opt) => {
        console.log({ opt });
        readline.close();
    })

}

const pausa = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`\nPresione ${ 'ENTER'.yellow } para continuar\n`, (opt) => {
        readline.close();
    })
}

module.exports = {
    mostrarMenu,
    pausa
}