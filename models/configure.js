/* models/person.js */
module.exports =(sequelize, DataTypes) => {
    return sequelize.define('configure', {
        name: {
            type:key.STRING(30),
            primaryKey: true,
            allowNull: true
        },
        value: {
            type:DataTypes.STRING(100),
            allowNull: true
        }
    });
}