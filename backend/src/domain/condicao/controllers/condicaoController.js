//const condicaoService = require('../services');
const Condicao = require('../models/condicao');

const CondicaoController = {
    async create(req, res) {
        try {
            const { condicao } = req.body;
            if (!condicao)
                return res.status(400).json("Todas as informações são obrigatórias")

            const novaCondicao = await Condicao.create({
                condicao
            })
            res.json(novaCondicao)
        } catch (error) {
            return res.status(500).json(error);
            console.log(error)
        }

    },



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


    async getAll(req, res) {
        try {
            const condicao = await Condicao.findAll();
            return res.json(condicao);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const listarCondicao = await Condicao.findByPk(id);
            return res.json(listarCondicao);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};

module.exports = CondicaoController