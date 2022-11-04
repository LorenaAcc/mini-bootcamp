const fs = require('fs');

const archivoJSON = './db/datosTareas.json'

const guardarEnArch = ( datosTareas ) => {



    fs.writeFileSync(archivoJSON, JSON.stringify(datosTareas));
}

const leerArchivo = () => {
    if(!fs.existsSync(archivoJSON)) {
        return 'HOla';
    }

    const infoArchivo = fs.readFileSync(archivoJSON, 'utf8');
    const datosArchivoJSON = JSON.parse(infoArchivo);

    console.log(datosArchivoJSON);

    return datosArchivoJSON;
}

module.exports = {
    guardarEnArch,
    leerArchivo
}