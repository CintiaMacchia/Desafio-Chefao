const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Idades = db.define(
  "Idades",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    faixaEtaria: {
      type: DataTypes.STRING,
    }, 
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "idadeescolar",    
  }
);
