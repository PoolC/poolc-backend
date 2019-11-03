module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.literal("NOW()")
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }, {
        underscored: true,
        timestamps: true,
        paranoid: true
    });
};