let models = require('../models');
module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define('Board', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        urlPath: {
            type: DataTypes.STRING(16),
            allowNull: false,
            unique: true,
            set: val => {
                this.setDataValue('urlPath', val.toLowerCase());
            },
            validate: {
                isAlphanumeric: true
            }
        }
    }, {
        underscored: true,
        timestamps: false
    });
    return Board;
};