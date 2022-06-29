'use strict';
//const endereco = require('../models/endereco')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('usuarios', {
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
                type: Sequelize.STRING,
                references: {
                    model: 'endereco',
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
    async down(queryInterface) {
        await queryInterface.dropTable('usuarios');
    }
};