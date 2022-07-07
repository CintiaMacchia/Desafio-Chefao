import db from "../../../shared/infrastructure/database";
import { DataTypes } from "sequelize/types";

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
          }
    },
    {
        tablename:"categoria"
    }
)