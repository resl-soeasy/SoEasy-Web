/* models/person.js */
module.exports =(sequelize, DataTypes) => {
    return sequelize.define('configure', {
        name: {
            type:key.STRING(30),
            primaryKey: true,
            allowNull: false
        },
        value: {
            type:DataTypes.STRING(100),
            allowNull: false
        }
    });
}