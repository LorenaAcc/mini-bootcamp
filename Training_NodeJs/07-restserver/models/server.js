const express = require('express')

class Server{

    constructor() {
        //crea en el servidor la app express como una propiedad en la clase Server
        this.app = express();
        this.port= process.env.PORT;

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        //Directorio público
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.send('Hello World')
          });
    }

    listen() {
        this.app.listen(this.port , () => {
            console.log('Servidor corriendo en puerto: ', this.port);
          })
    }


}







module.exports = Server;