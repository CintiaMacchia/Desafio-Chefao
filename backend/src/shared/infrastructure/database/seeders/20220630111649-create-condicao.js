'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('condicoes', [{
                condicao: 'Novo',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                condicao: 'Semi-Novo',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                condicao: 'Usado',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, 
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('condicoes');

    }
};