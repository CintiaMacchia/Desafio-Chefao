'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('condicao', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            novo: {
                type: Sequelize.STRING
            },
            semi_novo: {
                type: Sequelize.STRING
            },
            usado: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('condicao');
    }
};