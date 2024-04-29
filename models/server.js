const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');



class Server {


    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Connectar a base de datos
        this.connectarDB();

        //Middlewares
        this.Middlewares();

        //Rutas de mi aplicacion

        this.routes();
    }

    async connectarDB(){
        await dbConnection();

    }


    Middlewares(){

        //cors
        this.app.use(cors());

        //Lectura y parsero del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
     
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Seguidor corriendo en puerto', this.port);

        });
    }
}






module.exports = Server;