'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class usuarios extends Model {

        static associate({ models }) {
                // define association here
                
            }
            // static associate({ models }) {
            //     // define association here

        // }

    }
    usuarios.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'usuario',
    });
    return usuarios;
};
