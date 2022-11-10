require('dotenv').config()

const { inquirerMenu, pausa, leerInput, listarLugares} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

//console.log(process.env.MAPBOX_KEY);

const main = async() => {
    const busquedas = new Busquedas();
    let opt = '';

    do {
        opt = await  inquirerMenu();
        
        switch (opt) {
            case 1:
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ');

                //Buscar lugares
                const lugares =  await busquedas.ciudad(termino);

                //Seleccionar lugar
                const idSeleccionado = await listarLugares(lugares);

                if(idSeleccionado === '0') continue; 

                const lugarSeleccionado = lugares.find( l => l.id === idSeleccionado ); 

                busquedas.agregarHistorial( lugarSeleccionado.nombre);          

                //Clima
                const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng);

                //Mostrar resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Cuidad: ', lugarSeleccionado.nombre.cyan);
                console.log('Lat: ', lugarSeleccionado.lat);
                console.log('Lng: ', lugarSeleccionado.lng);
                console.log('Temperatura: ', clima.temp);
                console.log('Mínima: ', clima.min);
                console.log('Máxima: ', clima.max);
                console.log('Estado del clima: ', clima.desc.cyan);
            break;

            case 2:
                busquedas.historialCapitalizado.forEach( (lugar, i) => {
                    const indice = `${i + 1}.`.cyan;
                    console.log(`${indice} ${lugar}`);
                });
            break;

        }

        if (opt !== 0) await pausa();
    } while( opt !== 0 );
}

main();