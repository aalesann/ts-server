import { Sequelize } from 'sequelize';

const db = new Sequelize( 'ts_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', // Qué base de datos estoy usando
    // logging: false,
});

export default db;