const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Listas = db.define(
  "Listas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descricao: {
      type: DataTypes.STRING,
    },    
    categoria_id: {
      type: DataTypes.INTEGER,
    },
    idadeescolar_id: {
      type: DataTypes.INTEGER,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "listacompras",    
  }
);