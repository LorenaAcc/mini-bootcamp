const fs = require('fs');

const guardarDb = ( datosTareas ) => {

    const archivo = './db/datosTareas.json'

    fs.writeFileSync(archivo, JSON.stringify(datosTareas));
}

module.exports = {
    guardarDb
}