import express, { Application } from 'express';
import helmet from 'helmet';
import db from '../db/connection';
import userRoutes from '../routes/usuario';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        
        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    // TODO: Conectar base de datos
    
    async dbConnection() {
        try {
            await db.authenticate();
            console.log('DB connected');
        } catch (error) {
            console.log(error);
            throw new Error('Error al conectar a la base de datos');
        }
    }

    middlewares(){
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on https://localhost:${this.port}`);

        });
    }
}

export default Server;