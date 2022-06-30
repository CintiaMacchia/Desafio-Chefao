'use strict';
const endereco = require('../endereco')

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class usuarios extends Model {

        static associate({ models }) {
            // define association here
            endereco.hasMany(models.usuarios, { foreignKey: 'endereco_id', as: 'id' })


        }
    }
    usuarios.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        endereco_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'usuarios',
    });
    return usuarios;
};