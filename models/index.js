const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'local';
const settings = {
    "production": {
        "username": process.env.USER,
        "password": process.env.PW,
        "database": process.env.DB,
        "host": "/cloudsql/" + process.env.HOST,
        "dialect": "postgres"
    },
    "development": {
        "username": process.env.DEV_USER,
        "password": process.env.DEV_PW,
        "database": process.env.DEV_DB,
        "host": process.env.DEV_HOST,
        "port": process.env.DEV_DB_PORT,
        "dialect": "postgres"
    },
    "local": {
        "username": process.env.LOCAL_USER,
        "password": process.env.LOCAL_PW,
        "database": process.env.LOCAL_DB,
        "host": process.env.LOCAL_HOST,
        "port": process.env.LOCAL_DB_PORT,
        "dialect": "postgres"
    }
};
const config = settings[env];

const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Board = require('./board')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
//db.Post.belongsTo(db.Board, {foreignKey: { allowNull: false }, onDelete: 'restrict'}); boards not in use

module.exports = db;