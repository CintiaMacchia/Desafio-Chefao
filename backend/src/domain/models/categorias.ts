const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Categorias = db.define(
  "Categorias",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoria: {
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
    tableName: "categoria",    
  }
);
