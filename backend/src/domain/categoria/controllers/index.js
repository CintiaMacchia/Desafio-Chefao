const Categoria = require('../models/categoria')
    //const categoriaService = require('../services/CategoriaService');

const CategoriaController = {

    async create(req, res) {
        try {
            const { categoria } = req.body;
            if (!categoria)
                return res.status(400).json("Todas as informações são obrigatórias")

            const novaCategoria = await Categoria.create({
                categoria
            })
            res.json(novaCategoria)
        } catch (error) {
            return res.status(500).json(error);
            console.log(error)
        }

    },


    async update(req, res) {
        try {
            const { id } = req.params;
            const { categoria } = req.body;

            const existeId = await Categoria.count({
                where: {
                    id: id,
                }
            });
            if (!existeId === id) {
                return res.status(400).json('Categoria não encontrada')
            }

            const updateCategoria = await Categoria.update({ categoria }, {
                where: {
                    id: id
                }
            });
            res.json('Categoria Atualizada').status(201)
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            const existeId = await Categoria.count({
                where: {
                    id: id,
                }
            });
            if (!existeId) {
                return res.status(400).json('Categoria não encontrada')
            }

            await Categoria.destroy({
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
            const Listarcategorias = await Categoria.findAll();
            return res.json(Listarcategorias);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const categoria = await Categoria.findByPk(id);
            return res.json(categoria)
        } catch (error) {
            return res.status(500).json('Categoria não encontrada!')
        }
    }
}

module.exports = CategoriaController