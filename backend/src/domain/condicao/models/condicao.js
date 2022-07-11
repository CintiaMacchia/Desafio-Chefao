const db = require('../../../shared/infrastructure/database')
const { DataTypes } = require('sequelize')

const Condicao = db.define(
    "condicoes", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        condicao: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    }, {
        tablename: 'condicoes'
    }
)

module.exports = Condicao