'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('categoria', [{
                categoria: 'Livros',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                categoria: 'Mochila',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                categoria: 'Lancheira',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                categoria: 'Uniforme',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                categoria: 'Papelaria',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                categoria: 'Lista Escolar',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('categoria');

    }
};