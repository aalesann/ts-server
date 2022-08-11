"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('ts_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', // Qué base de datos estoy usando
    // logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map