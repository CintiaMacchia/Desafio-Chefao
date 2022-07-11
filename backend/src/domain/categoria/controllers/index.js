const Categoria = require('../models/categoria')
const categoriaService = require('../services');



module.exports = CategoriaController = {

    async create(req, res) {
        try {
            const novaCategoria = await categoriaService.cadatrarCategoria(req.body);
            return res.status(200).json(novaCategoria);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //     async update(req:Request, res:Response) {
    //         try {
    //             const alterarCategoria = await categoriaService.updateCategoria(req.body, req.params);
    // return res.status(200).json(alterarCategoria)
    //         } catch (error) {
    //             return res.status(500).json(error)
    //         }
    //     },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { categoria } = req.body;

            const existeId = await Categoria.count({
                where: {
                    id: id,
                }
            });
            if (!existeId) {
                return res.status(400).json('Categoria não encontrada')
            }

            const updateCategoria = await Categoria.update({ categoria }, {
                where: {
                    id: id
                }
            });
            res.json({ message: "Categoria Atualizada" }).status(201)
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
            const categorias = await categoriaService.listarCategorias();
            return res.json(categorias);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getOne(req, res) {
        try {
            const categoria = await categoriaService.umaCategoria(req.params);
            return res.json(categoria)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}