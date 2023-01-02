

const dbValidators = require('./db-validators');
const generarJWT   = require('./generar-jwt');
const googleVeryfy = require('./google-verify');
const subirArchivo = require('./subir-archivo');


//exportar esparciendo contenido
module.exports = {
    ...dbValidators,
    ...generarJWT,
    ...googleVeryfy,
    ...subirArchivo
}