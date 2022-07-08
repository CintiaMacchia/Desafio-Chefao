import {NextFunction, Request, Response} from 'express'
import { ValidationError } from 'express-validation'
import { UnauthorizedError } from 'express-jwt'

export default function (err: Error, req: Request, res: Response, next: NextFunction){
    if (err instanceof ValidationError) {
        return res
           .status(400)
           .json({
              message: `Preencha corretamente todos os campos! - ${err.message}`,
           });
     }
  
     if (err instanceof UnauthorizedError) {
        return res.status(401).json({
           message: "E-mail ou senha inválido, verifique e tente novamente",
        });
     }
    return res.status(500).json(err)

    
}