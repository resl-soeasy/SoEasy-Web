/* models/person.js */
module.exports =(sequelize, DataTypes) => {
    return sequelize.define('pinmap', {
        phy: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        V: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        mode: {
            type:DataTypes.STRING(10),
            allowNull: false
        },
        name: {
            type:DataTypes.STRING(10),
            allowNull: false
        },
        wpi: {
            type:DataTypes.STRING(10),
            allowNull: false
        },
        bcm: {
            type:DataTypes.STRING(10),
            allowNull: false
        }
    });
}