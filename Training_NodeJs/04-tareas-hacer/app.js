require('colors');

const { guardarEnArch, leerArchivo } = require('./helpers/guardarArchivo');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar } = require('./helpers/inquirer');
//const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();


const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const infoArchivo= leerArchivo();

    if(infoArchivo) {
        tareas.cargarTareasFromArray(infoArchivo);
    }

    do {
        //opt = await  mostrarMenu();

        opt = await  inquirerMenu();
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea( desc );
                break;
            case '2':
                tareas.listadoCompleto();
                //console.log( tareas.listadoArr );
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
            break;
            case '4':
                tareas.listarPendientesCompletadas(false);
            break;
            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                console.log({ id });
            break;
        }

        //const tareas = new Tareas();
        //const tarea = new Tarea('Comprar Comida');
       //console.log(tareas);
        //guardarEnArch( tareas.listadoArr );

        await pausa();
        //if (opt !== '0') await pausa();
    } while( opt !== '0' );


   // pausa();
}



main();