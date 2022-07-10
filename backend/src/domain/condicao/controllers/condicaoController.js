const { condicaoService } = require('../services')
const { Condicao } = require('../models/condicao')

export const CondicaoController = {
    async create(req, res) {
        try {
            const novaCondicao = await condicaoService.cadastrarCondicao(req.body);
            return res.status(201).json(novaCondicao);
        } catch (error) {
            return res.status(500).json(error);
        }
    },


    // async update(req: Request, res: Response) {
    //     try {
    //         const updateCondicao = await condicaoService.alterarCondicao(req.body, req.params, req.body.auth);
    //         return res.status(200).json(updateCondicao);
    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { condicao } = req.body;

            const existeId = await Condicao.count({
                where: {
                    id: id,
                }
            });
            if (!existeId) {
                return res.status(400).json('Condição de produto não localizada')
            }

            const updateCategoria = await Condicao.update({ condicao }, {
                where: {
                    id: id
                }
            });
            res.json({ message: "Condição  Atualizada" }).status(201)
        } catch (error) {
            return res.status(500).json(error)
        }
    },



    async delete(req, res) {
        try {
            const { id } = req.params;

            const existeId = await Condicao.count({
                where: {
                    id: id,
                }
            });
            if (!existeId) {
                return res.status(400).json('Categoria não encontrada')
            }

            await Condicao.destroy({
                where: {
                    id: id
                }
            });

            return res.status(204).json('categoria deletada');
        } catch (error) {
            return res.status(500).json("Falha ao deletar a categoria")
        }
    },
    // async delete(req: Request, res: Response) {
    //     try {
    //         const deletarCondicao = await condicaoService.excluirCondicao(req.params, req.body.auth);
    //         return res.sendStatus(204).json(deletarCondicao)
    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // },

    async getAll(req, res) {
        try {
            const condicao = await condicaoService.todasCondicoes();
            return res.json(condicao);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getOne(req, res) {
        try {
            const condicao = await condicaoService.umaCondicao(req.params);
            return res.json(condicao);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};