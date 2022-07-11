const { usuarioService } = require('../services/UsuarioService')
const { Usuarios } = require('../models/usuario')



const UsuarioController = {

    async login(req, res) {
        try {
            const accessToken = await usuarioService.loginUsuario(req.body);

            if (!accessToken) {
                return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
            }
            return res.status(200).json(accessToken);
        } catch (error) {

            return res.status(500).json(error);
        }
    },

    async create(req, res) {
        try {
            const novoUsuario = await usuarioService.cadastrarUsuario(req.body);
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
            const usuarios = await usuarioService.todosUsuarios();
            return res.json(usuarios);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async getOne(req, res) {
        try {
            const usuario = await usuarioService.umUsuario(req.params);
            return res.json(usuario);
        } catch (error) {
            console.log(error)
            return res.status(500).json(error);
        }
    },
};

module.exports = UsuarioController