'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('condicao', [{
                novo: faker.datatype.boolean(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                semi_novo: faker.datatype.boolean(),
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                usado: faker.datatype.boolean(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('condicao');

    }
};