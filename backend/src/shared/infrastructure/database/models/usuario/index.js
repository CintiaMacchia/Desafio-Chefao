'use strict'

const { Sequelize, DataTypes, Model } = require('sequelize');


class usuarios extends Model {

    static associate({ endereco }) {
        // console.log(Users);
        // define association here
        usuarios.belongsTo(endereco, { foreignKey: 'endereco_id', as: 'endereco' })
    }


    static initialize(sequelize, DataTypes) {
        usuarios.init({
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nome: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            senha: {
                type: Sequelize.STRING
            },
            endereco_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                field: 'endereco_id',
                foreignKey: true,
                references: {
                    model: 'endereco',
                    key: 'id'
                },

            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }, {
            sequelize,
            tableName: 'usuarios',
            modelName: 'usuarios'
        });
    }
}

module.exports = usuarios