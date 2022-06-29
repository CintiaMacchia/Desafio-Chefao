'use strict';
//const endereco = require('./endereco').default

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class usuarios extends Model {

        static associate(models) {
            // define association here
            // usuarios.hasMany(models.endereco, { foreignKey: 'endereco_id', as: 'id' })


        }
    }
    usuarios.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        endereco_id: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'usuarios',
    });
    return usuarios;
};