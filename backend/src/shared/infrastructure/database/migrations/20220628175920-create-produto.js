'use strict';

const usuarios = require('../models/usuarios');
const categoria = require('../models/categoria')


module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('produtos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
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
                type: Sequelize.INTEGER,
                references: {
                    model: 'categoria',
                    key: 'id'
                },
                allowNull: false,
            },
            usuario_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'usuarios',
                    key: 'id'
                },
                allowNull: false,
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