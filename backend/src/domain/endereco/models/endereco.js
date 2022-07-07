'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class enderecos extends Model {

        static associate({ models }) {
                // define association here
                produtos.belongsTo(models.usuarios, { foreignKey: 'usuario_id', as: 'id' })
            }
            

    }
    endereco.init({
        rua: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        complemento: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        CEP: DataTypes.STRING,
        usuario_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'endereco',
    });
    return endereco;
};