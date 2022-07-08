'use strict';
//const produtos = require('./usuarios');
//const categoria = require('./categoria')

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class produtos extends Model {

        static associate({ models }) {
                // define association here
                produtos.belongsTo(models.usuarios, { foreignKey: 'usuario_id', as: 'id' }),
                    produtos.belongsTo(models.categoria, { foreignKey: 'categoria_id', as: 'id' }),
                    produtos.belongsTo(models.condicao, { foreignKey: 'condicao_id', as: 'id' })
            }
            // static associate({ models }) {
            //     // define association here

        // }

    }
    produtos.init({
        descricao: DataTypes.STRING,
        valor: DataTypes.DOUBLE,
        foto: DataTypes.STRING,
        categoria_id: DataTypes.INTEGER,
        usuario_id: DataTypes.INTEGER,
        condicao_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'produtos',
    });
    return produtos;
};