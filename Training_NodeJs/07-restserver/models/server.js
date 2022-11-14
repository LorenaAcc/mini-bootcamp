const express = require('express');
const cors = require('cors');

class Server{

    constructor() {
        //crea en el servidor la app express como una propiedad en la clase Server
        this.app = express();
        this.port= process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use(cors());
        //Directorio público
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios.route'));
    }

    listen() {
        this.app.listen(this.port , () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        })
    }


}







module.exports = Server;