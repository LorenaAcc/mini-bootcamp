const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config.db');
const fileUpload = require('express-fileupload');

class Server{

    constructor() {
        //Crea en el servidor la app express como una propiedad en la clase Server
        this.app = express();
        //Configuración del puerto
        this.port= process.env.PORT;

        //Define url de auth, usuarios, categorias
        this.paths = {
            auth: '/api/auth',
            buscar: '/api/buscar',
            categorias: '/api/categorias',
            productos: '/api/productos',
            usuarios: '/api/usuarios',
            uploads: '/api/uploads'
        }

        //Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio público
        this.app.use(express.static('public'));

        //Fileupload - Carga de archivo
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));

    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/auth.route'));
        this.app.use(this.paths.buscar, require('../routes/buscar.route'));
        this.app.use(this.paths.categorias, require('../routes/categorias.route'));
        this.app.use(this.paths.productos, require('../routes/productos.route'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios.route'));
        this.app.use(this.paths.uploads, require('../routes/uploads.route'));
    }

    listen() {
        this.app.listen(this.port , () => {
            console.log('Servidor corriendo en puerto: '.magenta, this.port.red);
        })
    }


}







module.exports = Server;