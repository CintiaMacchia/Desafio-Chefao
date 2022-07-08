'use strict';

const { faker } = require('@faker-js/faker');

let arrayFaker = [];

for (let i = 0; i <= 5; i++) {
    arrayFaker.push({
        rua: faker.address.streetName(),
        numero: faker.address.buildingNumber(),
        complemento: faker.address.streetSuffix(),
        cidade: faker.address.cityName(),
        estado: faker.address.state(),
        CEP: faker.address.zipCode(),
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
}


module.exports = {
    async up(queryInterface, Sequelize) {


        await queryInterface.bulkInsert('enderecos', arrayFaker)
    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('enderecos');
    }
};