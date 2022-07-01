'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class condicao extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    condicao.init({
        novo: DataTypes.STRING,
        semi_novo: DataTypes.STRING,
        usado: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'condicao',
        tableName: 'condicao'
    });
    return condicao;
};