import db from "../../../shared/infrastructure/database";
import { DataTypes } from "sequelize";

export const Categoria = db.define(
    "categoria",
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
        tablename:"categoria"
    }
)