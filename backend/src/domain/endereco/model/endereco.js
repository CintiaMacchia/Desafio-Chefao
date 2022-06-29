'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class endereco extends Model {
        static associate(models) {
            // define association here

        }
    }
    endereco.init({
        rua: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        complemento: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        CEP: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'endereco',
    });
    return endereco;
};