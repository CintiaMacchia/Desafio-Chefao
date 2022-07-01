'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.addColumn(
            'produtos',
            'nome', { type: Sequelize.STRING });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColomn(
            'produtos',
            'nome'
        );

    }
};