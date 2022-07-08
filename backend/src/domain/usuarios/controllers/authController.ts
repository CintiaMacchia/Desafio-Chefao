// import { Request, Response } from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// import { Usuarios} from "../models/usuario"
// const secret = require('../../../config/secret');

// export const authController= {
//     async create(req: Request, res: Response) {
//         try {
//             const { email , senha } = req.body;

//             if(!email || !senha)
//              return res.status(400)
//              .json({message: "Todas as informações são obrigatórias"});

//              const loginUsuario = await Usuarios.findOne({where : {email}});

//              if(!loginUsuario){
//                 return res.status(401)
                
//                 .json({message: "Usuário ou senha inválidos!!"});
//              }

//              if(!bcrypt.compareSync(senha, loginUsuario.senha)){
//                 return res.status(401)
//                 .json({message: "Usuário ou senha inválidos!!"})
//              }

//              const token = jwt.sign(
//                 {
//                     id: loginUsuario.id,
//                     email: loginUsuario.email,
//                     senha: loginUsuario.senha,
//                },
//                secret.key
//                );

//                res.cookie("autenticacao", token);
//                return res.status(200).json(token);
//         } catch (error) {
//             return res.status(500).json("Ocorreu algum erro contate o administrador do sistema!");
//         }
//     }
// }