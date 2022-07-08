'use strict';

//const usuarios = require('../models/usuarios');
//const categoria = require('../models/categoria')


module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('produtos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nome: {
                type: Sequelize.STRING
            },
            descricao: {
                type: Sequelize.STRING
            },
            valor: {
                type: Sequelize.DOUBLE
            },
            foto: {
                type: Sequelize.STRING
            },
            categoria_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: {
                    model: 'categoria',
                    key: 'id'
                },
            },
            condicao_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: {
                    model: 'condicao',
                    key: 'id'
                },

            },
            usuario_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                foreignKey: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'usuarios',
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
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('produtos');
    }
};