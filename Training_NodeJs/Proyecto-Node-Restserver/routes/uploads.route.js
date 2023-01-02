const { Router } = require('express');
const { check } = require('express-validator');
const { cargarArchivo, actualizarImagen } = require('../controllers/uploads.controller');
const { coleccionesPermitidas } = require('../helpers');

const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();


router.post('/', cargarArchivo);

router.put('/:coleccion/:id', [
    check('id','Debe ser un Id de Mongo válido').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas(c, ['usuarios', 'productos'])),
    validarCampos
], actualizarImagen)



module.exports = router;