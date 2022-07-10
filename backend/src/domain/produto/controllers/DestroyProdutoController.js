const Produtos = require ("../models/produto")

export const DestroyProdutoController = {
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
                return res.status(400).json({ message: 'Endereco não encontrado' })
            }

            await Produtos.destroy({
                where: {
                    id: id
                }
            });

            return res.status(204).json({ message: 'Endereco deletado' });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
}