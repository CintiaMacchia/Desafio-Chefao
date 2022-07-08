import db from '../../../shared/infrastructure/database'
import { DataTypes } from "sequelize";

export const endereco  = db.define(
    "enderecos", 
    { id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      rua: {
        type: DataTypes.STRING,
      },
        numero: {
        type: DataTypes.INTEGER,
      },
      complemento: {
        type: DataTypes.STRING,
      },
      cidade: {
        type: DataTypes.STRING,
      },
      estado: {
        type: DataTypes.STRING,
      },
      CEP: {
        type: DataTypes.STRING,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        references: { model: 'usuarios',
        key: "id" },
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
        tablename:"enderecos"
    }
)
