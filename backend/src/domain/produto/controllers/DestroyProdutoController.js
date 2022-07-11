const Produtos = require("../models/produto")

const DestroyProdutoController = {
    //   async destroy(req: Request, res: Response) {
    //     try {
    //       await DestroyProdutosUseCase.deleteProduto(req.params);
    //       return res.sendStatus(204).json({);
    //     } catch (error) {
    //       console.log(error);
    //       return res.status(500).json(error);
    //     }
    //   },
    // };
    async delete(req, res) {
        try {
            const { id } = req.params;

            const existeId = await Produtos.count({
                where: {
                    id: id,

                }
            });
            if (!existeId) {
                return res.status(400).json({ message: 'Produto não encontrado' })
            }

            await Produtos.destroy({
                where: {
                    id: id
                }
            });

            return res.status(204).json({ message: 'Produto deletado' });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
}
module.exports = DestroyProdutoController