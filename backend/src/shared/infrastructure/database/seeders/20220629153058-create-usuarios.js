'use strict';
const { faker } = require('@faker-js/faker');

let arrayFaker = [];

for (let i = 0; i <= 10; i++) {
    arrayFaker.push({
        nome: faker.name.findName(),
        email: faker.internet.email(),
        senha: faker.random.alphaNumeric(10),        
        createdAt: new Date(),
        updatedAt: new Date(),
    })
}

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('usuarios', arrayFaker)
    },


    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('usuarios');

    }
};