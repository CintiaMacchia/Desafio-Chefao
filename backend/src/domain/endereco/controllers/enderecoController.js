const { enderecoService } = require('../services');
const endereco = require('../models/endereco');


module.exports = EnderecoController = {
    async create(req, res) {
        try {
            const novoEndereco = await enderecoService.cadastrarEndereco(req.body, req.params);
            return res.status(201).json(novoEndereco);
        } catch (error) {
            return res.status(500).json(error);
        };
    },

    // async update(req:Request, res: Response) {
    //     try {
    //         const alterarEndereco = await enderecoService.alterarEndereco(req.body, req.params);
    //         return res.status(200).json(alterarEndereco);

    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // },


    // async delete(req:Request, res: Response) {
    //     try {
    //         const deletarEndereco = await enderecoService.excluirEndereco(req.params, req.body.auth);
    //         return res.status(204).json(deletarEndereco)
    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { rua, numero, complemento, cidade, estado, cep, usuario_id } = req.body;

            const existId = await endereco.count({
                where: {
                    id: id,

                }
            });

            if (!existId === id) {
                return res.status(400).json('Usuário não encontrado');
            }

            const updateEndereco = await endereco.update({ rua, numero, complemento, cidade, estado, cep, usuario_id }, {
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

    async delete(req, res) {
        try {
            const { id } = req.params;

            const existeId = await endereco.count({
                where: {
                    id: id,

                }
            });
            if (!existeId === id) {
                return res.status(400).json({ message: 'Endereco não encontrado' })
            }

            await endereco.destroy({
                where: {
                    id: id
                }
            });

            return res.status(204).json({ message: 'Endereco deletado' });
        } catch (error) {
            return res.status(500).json(error);
        }
    },


    async getAll(req, res) {
        try {
            //console.log(req)
            const enderecos = await enderecoService.listarEnderecos();
            return res.json(enderecos);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getOne(req, res) {
        try {
            const endereco = await enderecoService.umEndereco(req.params);
            return res.json(endereco);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

};