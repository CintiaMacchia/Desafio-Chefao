import db from '../../../shared/infrastructure/database'
import { DataTypes } from 'sequelize'

export const Condicao = db.define(
  "condicoes",
  { id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    condicao:{
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
)