'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('endereco', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            rua: {
                type: Sequelize.STRING
            },
            numero: {
                type: Sequelize.INTEGER
            },
            complemento: {
                type: Sequelize.STRING
            },
            cidade: {
                type: Sequelize.STRING
            },
            estado: {
                type: Sequelize.STRING
            },
            CEP: {
                type: Sequelize.STRING
            },
             usuario_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                field: 'usuario_id',
                foreignKey: true,
                references: {
                    model: 'usuarios',
                    key: 'id'
                }
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
        await queryInterface.dropTable('endereco');
    }
};