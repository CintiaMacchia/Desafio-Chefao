'use strict';
//const usuarios = require('./usuarios');
//const categoria = require('./categoria')

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class produto extends Model {

        static associate(models) {
                // define association here
                // usuarios.hasMany(models.produto, { foreignKey: 'usuario_id', as: 'usuarios' })
            }
            // static associate({ models }) {
            //     // define association here
            //     categoria.hasMany(models.produto, { foreignKey: 'categoria_id', as: 'categoria' })
            // }

    }
    produto.init({
        descricao: DataTypes.STRING,
        valor: DataTypes.DOUBLE,
        foto: DataTypes.STRING,
        categoria_id: DataTypes.INTEGER,
        usuario_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'produto',
    });
    return produto;
};