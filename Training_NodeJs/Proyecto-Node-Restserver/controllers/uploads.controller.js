
const path = require('path');
const fs = require('fs');

// Require the Cloudinary library
const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const { response } = require("express");
const { subirArchivo } = require("../helpers");
const { Usuario, Producto } = require('../models')



const cargarArchivo = async(req, res = response) => {

    try{
        //txt,md
        //const nombre = await subirArchivo(req.files, ['txt','md'], 'textos');

        //img
        const nombre = await subirArchivo(req.files, undefined, 'imgs');
        res.json({ nombre });
    }catch(msg){
        res.status(400).json({msg});
    }
        
}

const actualizarImagen = async(req, res = response) => {

    const {id, coleccion} = req.params;

    let modelo;

    switch(coleccion) {
        case 'usuarios':
            modelo = await Usuario.findById(id);
            if(!modelo) {
                return res.status(400).json({
                    msg: `No existe usuario con id ${id}`
                });
            }

        break;

        case 'productos':
            modelo = await Producto.findById(id);
            if(!modelo) {
                return res.status(400).json({
                    msg: `No existe producto con id ${id}`
                });
            }

        break;

        default:
            return res.status(500).json({ msg: 'Se me olvidó validar esto' })
    }

    //Limpiar imágenes previas
    if(modelo.img){
        //Hay que borrar la imágen del servidor
        const pathImagen = path.join(__dirname, '../uploads', coleccion, modelo.img);
        if(fs.existsSync(pathImagen)) {
            fs.unlinkSync(pathImagen);
        }
    }

    const nombre = await subirArchivo(req.files, undefined, coleccion);
    modelo.img = nombre; 

    await modelo.save();

    res.json(modelo);

}


const actualizarImagenCloudinary = async(req, res = response) => {

    const {id, coleccion} = req.params;

    let modelo;

    switch(coleccion) {
        case 'usuarios':
            modelo = await Usuario.findById(id);
            if(!modelo) {
                return res.status(400).json({
                    msg: `No existe usuario con id ${id}`
                });
            }

        break;

        case 'productos':
            modelo = await Producto.findById(id);
            if(!modelo) {
                return res.status(400).json({
                    msg: `No existe producto con id ${id}`
                });
            }

        break;

        default:
            return res.status(500).json({ msg: 'Se me olvidó validar esto' })
    }

    //Limpiar imágenes previas
    if(modelo.img){



    }

    const {tempFilePath} = req.files.archivo

    const {secure_url} = await cloudinary.uploader.upload(tempFilePath);

    modelo.img = secure_url; 

    await modelo.save();

    res.json(modelo);

}


const mostrarImagen = async(req, res = response) => {

    const {id, coleccion} = req.params;

    let modelo;

    switch(coleccion) {
        case 'usuarios':
            modelo = await Usuario.findById(id);
            if(!modelo) {
                return res.status(400).json({
                    msg: `No existe usuario con id ${id}`
                });
            }

        break;

        case 'productos':
            modelo = await Producto.findById(id);
            if(!modelo) {
                return res.status(400).json({
                    msg: `No existe producto con id ${id}`
                });
            }

        break;

        default:
            return res.status(500).json({ msg: 'Se me olvidó validar esto' })
    }

    //Limpiar imágenes previas
    if(modelo.img){
        //Hay que borrar la imágen del servidor
        const pathImagen = path.join(__dirname, '../uploads', coleccion, modelo.img);
        if(fs.existsSync(pathImagen)) {
            return res.sendFile(pathImagen)
        }
    }

    const pathImagen = path.join(__dirname, '../assets/no-image.jpg');
    return res.sendFile(pathImagen);

}



module.exports = {
    cargarArchivo,
    actualizarImagen,
    mostrarImagen,
    actualizarImagenCloudinary
}