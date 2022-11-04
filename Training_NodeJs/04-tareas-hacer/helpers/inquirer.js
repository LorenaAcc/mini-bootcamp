const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opción',
        message: '¿Qué desea hacer?\n\n',
        choices: [
            {
                value: '1',
                name: `${'1'.red}. ${'Crear tarea'.italic}`
            },
            {
                value: '2',
                name: `${'2'.red}. ${'Listar tareas'.italic}`
            },
            {
                value: '3',
                name: `${'3'.red}. ${'Listar tareas completadas'.italic}`
            },
            {
                value: '4',
                name: `${'4'.red}. ${'Listar tareas pendientes'.italic}`
            },
            {
                value: '5',
                name: `${'5'.red}. ${'Completar tarea/s'.italic}`
            },
            {
                value: '6',
                name: `${'6'.red}. ${'Borrar tarea/s'.italic}`
            },
            {
                value: '0',
                name: `${'0'.red}. ${'Salir'.italic}`
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

const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if(value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }

        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}


