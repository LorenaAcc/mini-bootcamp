const Tarea = require('./tarea');


class Tareas {

    _listado = {
        'abc':123
    };

    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea( id= '' ) {
        if ( this._listado[id] ) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( tareas = [] ) {
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log();
        this.listadoArr.forEach( (tarea, indiceTarea) => {
            const indice = `${indiceTarea + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${indice} ${desc} :: ${estado}`);
        });
    }

    listarPendientesCompletadas( completadas= true) {
        console.log();
        let indice = 0;
        this.listadoArr.forEach( tarea => {           
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) ? 'Completada'.green : 'Pendiente'.red;

            if(completadas) {
                if(completadoEn) {
                    indice += 1;
                    console.log(`${(indice + '.').toString().green} ${desc} :: ${completadoEn.green}`);
                }
            } else {
                if(!completadoEn) {
                    indice += 1;
                    console.log(`${(indice + '.').toString().green} ${desc} :: ${estado}`);
                }
            }

        });
    }

    toggleCompletadas( ids = [] ) {
        ids.forEach( id => {
            const tarea = this._listado[id];
            if( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString()
            }
        });

        this.listadoArr.forEach( tarea => {
            if( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoEn = null;
            }
        }); 
    }

}

module.exports = Tareas;