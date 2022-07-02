import { NextFunction, Request, Response} from "express";
import { ValidationError } from "express-validation";
import { Json } from "sequelize/types/utils";
const { UnauthorizedError } = require("express-jwt");

export default (error, req, res, next) => {
   if (error instanceof ValidationError) {
      return res
         .status(400)
         .json({
            message: `Preencha corretamente todos os campos! - ${error.message}`,
         });
   }

   if (error instanceof UnauthorizedError) {
      return res.status(401).json({
         message: "E-mail ou senha inválido, verifique e tente novamente",
      });
   }

   return res
      .status(500)
      .json({ message: `${message.error} - Erro interno do servidor!` });
};
