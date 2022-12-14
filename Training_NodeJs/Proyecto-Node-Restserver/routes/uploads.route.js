const { Router } = require('express');
const { check } = require('express-validator');
const { cargarArchivo, actualizarImagen, mostrarImagen, actualizarImagenCloudinary } = require('../controllers/uploads.controller');
const { coleccionesPermitidas } = require('../helpers');

const { validarCampos, validarArchivoSubir } = require('../middlewares');


const router = Router();


router.post('/', cargarArchivo);

router.put('/:coleccion/:id', [
    validarArchivoSubir,
    check('id','Debe ser un Id de Mongo válido').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas(c, ['usuarios', 'productos'])),
    validarCampos
], actualizarImagenCloudinary);    
//], actualizarImagen);

router.get('/:coleccion/:id', [
    check('id','Debe ser un Id de Mongo válido').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas(c, ['usuarios', 'productos'])),
    validarCampos
], mostrarImagen);

module.exports = router;