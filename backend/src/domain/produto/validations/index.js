import { create } from './produtos/create';
import { update } from './produtos/update';
import { getOne } from './produtos/getOne';
import { destroy } from './produtos/destroy';

export const ProdutoValidation = {
    create,
    update,
    getOne,
    destroy,
};