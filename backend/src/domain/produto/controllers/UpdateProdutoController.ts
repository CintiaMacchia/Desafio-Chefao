import { Request, Response } from 'express';
import { Produtos } from "../models/produto";
//import cloudinary from '../../../config/cloudinary'

export const updateProdutoController = {
    async update(req: Request, res: Response) {
        try {
          const { id } = req.params;
          const { nome, descricao, valor ,  categoria_id, usuario_id, condicao_id } = req.body;
    
          const existId = await Produtos.count({
            where: {
              id: id,
                          }
          }); 
    
          if (!existId) {
            return res.status(400).json('Produto não encontrado');
          }
    
     
          const updateProduto = await Produtos.update({ nome, descricao, valor , categoria_id, usuario_id, condicao_id  }, {
            where: {
              id: id,
            }
          });
    
          res.json({message: updateProduto}).status(201);
        }
    
        catch (error) {
          res.status(404).json('Verfique os dados e tente novamente');
          console.error(error);
        };
      },
}
