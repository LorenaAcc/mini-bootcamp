const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opción',
        message: '¿Qué desea hacer?\n\n',
        choices: [
            {
                value: 1,
                name: `${'1'.red}. ${'Buscar cuidad'.italic}`
            },
            {
                value: 2,
                name: `${'2'.red}. ${'Historial'.italic}`
            },
            {
                value: 3,
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

const listadoTareasBorrar = async( tareas = [] ) => {
    const choices = tareas.map( (tarea, i) => {
        const indiceTarea = `${i + 1}.`.green;
        return{ value: tarea.id, name: `${indiceTarea} ${ tarea.desc }`}
    });

    choices.unshift(
        {
            value: '0',
            name: '0.'.green + ' Cancelar'
        }
    );

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);

    return id;
}

const confirmar = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoChecklist = async( tareas = [] ) => {
    const choices = tareas.map( (tarea, i) => {
        const indiceTarea = `${i + 1}.`.green;
        return{ value: tarea.id, 
                name: `${indiceTarea} ${ tarea.desc }`,
                checked: (tarea.completadoEn) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);

    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}


