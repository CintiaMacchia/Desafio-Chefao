const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Usuarios = db.define(
  "Usuarios",
  {
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
  },
  {
    tableName: "Usuarios",
  }
);
