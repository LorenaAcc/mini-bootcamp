const Role = require('../models/role');
const {Usuario, Categoria, Producto} = require('../models');

const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`)
    }
}

const emailExiste = async(correo = '') => {
    //Verificar si el correo existe
    const existeMail = await Usuario.findOne({ correo });
    if(existeMail) {
        throw new Error(`El correo '${correo}' ya está registrado`);
    }
}

const existeUsuarioPorId = async(id) => {
    //Verificar si el correo existe
    const existeUsuario = await Usuario.findById( id );
    if(!existeUsuario) {
        throw new Error(`El id '${id}' no existe`);
    }
}

/*Categorias*/
const existeCategoriaPorId = async(id) => {
    const existeCategoria = await Categoria.findById( id );
    if(!existeCategoria) {
        throw new Error(`El id '${id}' no existe`);
    }
}

/*Productos*/
const existeProductoPorId = async(id) => {
    const existeProducto = await Producto.findById( id );
    if(!existeProducto) {
        throw new Error(`El id '${id}' no existe`);
    }
}


/*Validar colecciones permitidads*/
const coleccionesPermitidas = (coleccion = '', colecciones = [] ) => {

    const incluida = colecciones.includes(coleccion);
    if (!incluida) {
        throw new Error(`La colección ${coleccion} no es permitida. Colecciones Permitidas: ${colecciones}`);
    }
    return true;
}




module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId,
    coleccionesPermitidas 
}