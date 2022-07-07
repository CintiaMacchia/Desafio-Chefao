'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.addColumn(
            'produtos',
            'condicao_id', {
                type: Sequelize.INTEGER,
                // allowNull: false,
                // foreignKey: true,
                // references: {
                //     model: 'condicao',
                //     key: 'id'
                // },
            });

    },

    async down(queryInterface, Sequelize) {



        await queryInterface.removeColumn(
            'produtos',
            'condicao_id'
        );

    }
};