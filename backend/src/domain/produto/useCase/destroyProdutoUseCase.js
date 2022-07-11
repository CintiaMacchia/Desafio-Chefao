//import * as dotenv from "dotenv"
//dotenv.config()
const { Produtos } = require('../models/produto')
require('dotenv').config();
export const DestroyProdutosUseCase = {

    //     async deleteProduto(params: any,){
    //         const { id } = params;

    //         if(id !=  id){
    //             return 
    //         }

    //         else{
    //             await Produtos.destroy({
    //                 where: {
    //                     id,
    //                 },
    //             });
    //             return 
    //         }
    //     }
    // }

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