//const usuarioService = require("../services")
const  Usuarios  = require('../models/usuario')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
require('dotenv').config()



const UsuarioController = {

    async login(req, res) {
        try {
            const { email, senha } = req.body;

            const usuario = await Usuarios.findOne({
             where: {
                 email,
             },
            });

            if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
                return
            }

            const token = jwt.sign({
                id: usuario.id,
                email: usuario.email,
                name: usuario.nome,
                senha: usuario.senha,

            },
            process.env.SECRET_KEY
            )

            if (!token) {
                return res.status(401).json("E-mail ou senha inválido, verifiquee tente novamente");
                }

            return res.status(200).json(token)

        } catch (error) {

            return res.status(500).json(error);
        }
    },

    async create(req, res) {
        try {
            const {senha}= req.body
            const novaSenha = bcrypt.hashSync(senha, 10)
            const novoUsuario = await Usuarios.create({
                ...req.body,
                senha: novaSenha
            });
            return res.status(201).json(novoUsuario);
        } catch (error) {

            return res.status(500).json(error);
        }
    },

    // async update(req: Request, res: Response) {
    //   try {
    //     const usuarioAlterado = await usuarioService.alterarUsuario(req.body, req.params, req.body.auth);
    //     return res.status(200).json(usuarioAlterado);
    //   } catch (error) {
    //     return res.status(500).json(error);
    //   }
    // },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, senha } = req.body;

            const existId = await Usuarios.count({
                where: {
                    id: id,
                }
            });

            if (!existId) {
                return res.status(400).json('Usuário não encontrado');
            }

            const updatedUser = await Usuarios.update({ nome, email, senha }, {
                where: {
                    id: id,
                }
            });

            res.json({ message: 'Dados atualizados com sucesso' }).status(201);
        } catch (error) {
            res.status(404).json('Verfique os dados e tente novamente');
            console.error(error);
        };
    },

    // async delete(req:Request, res:Response) {
    //   try {      
    //     await usuarioService.excluirUsuario(req.params, req.body.auth);
    //     return res.sendStatus(204);
    //   } catch (error) {
    //     console.log(error)
    //     return res.status(500).json(error);
    //   }
    // },

    async delete(req, res) {
        try {
            const { id } = req.params;

            const existIdUser = await Usuarios.count({
                where: {
                    id: id
                }
            });

            if (!existIdUser) {
                return res.status(400).json('Usuário não encontrado');
            }

            await Usuarios.destroy({
                where: {
                    id: id
                }
            });

            res.status(201).json('Usuário deletado com sucesso');
        } catch (error) {
            res.json('Falha ao deletar usuário')
            console.error(error);
        }
    },

    async getAll(req, res) {
        try {
            const usuarios = await Usuarios.findAll()
            return res.json(usuarios);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async getOne(req, res) {
        try {
            const usuario = await Usuarios.findByPk(req.params.id);
            return res.json(usuario);
        } catch (error) {
            console.log(error)
            return res.status(500).json(error);
        }
    },
};

module.exports = UsuarioController