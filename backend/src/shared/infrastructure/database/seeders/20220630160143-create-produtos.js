'use strict';
const { faker } = require('@faker-js/faker');

let arrayFaker = [];

for (let i = 0; i <= 5; i++) {
    arrayFaker.push({
        descricao: faker.lorem.words(10),
        valor: faker.finance.amount(),
        foto: faker.image.abstract(),
        categoria_id: 2,
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
}

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('produtos', arrayFaker)
    },


    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('produtos');

    }
};