require('dotenv').config()

const { inquirerMenu, pausa, leerInput} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

//console.log(process.env.MAPBOX_KEY);

const main = async() => {
    const busquedas = new Busquedas();
    let opt = '';

    do {
        opt = await  inquirerMenu();
        
        switch (opt) {
            case 1:
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);

                //await fetch('https://jhjhj.com/ghcghc');
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Cuidad: ');
                console.log('Lat: ',);
                console.log('Lng: ',);
                console.log('Temperatura: ',);
                console.log('Mínima: ',);
                console.log('Máxima: ',);
                break;
            case 2:
                console.log( 'Opcion 2' );
                break;
            case 0:
                console.log( 'Salir' );
            break;
        }

        //await pausa();
        if (opt !== 0) await pausa();
    } while( opt !== 0 );
}

main();