import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.BOOLEAN, // Convierte en 1 o 0 automáticamente
    }
});

export default Usuario;