const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opción',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea/s'
            },
            {
                value: '6',
                name: '6. Borrar tarea/s'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
];


const inquirerMenu = async () => {

    //console.clear();
    console.log('============================'.rainbow);
    console.log('   Seleccione una opción    '.bgCyan);
    console.log('============================\n'.rainbow);

    const {opción} = await inquirer.prompt(preguntas);

    return opción;
}


const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.yellow } para continuar\n`
        }

    ]

    console.log('\n')
    await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu,
    pausa
}


