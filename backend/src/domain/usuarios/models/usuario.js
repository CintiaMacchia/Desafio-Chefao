<<<<<<< HEAD
const db = require("../../../shared/infrastructure/database")
const DataTypes = require("sequelize")

module.exports = Usuarios = db.define(
    "usuarios", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        senha: {
            type: DataTypes.STRING(300),
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },

    }, {
        tablename: 'usuarios'
=======
const db = ('../../../shared/infrastructure/database')
const DataTypes = require ("sequelize")

module.exports = Usuarios = db.define(
    "usuarios",
    { id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      senha: {
        type: DataTypes.STRING(300),
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },

>>>>>>> 27013ca2c467e5fd9407a39d01f9c1612e330b8b
    },
)

module.exports = Usuarios;