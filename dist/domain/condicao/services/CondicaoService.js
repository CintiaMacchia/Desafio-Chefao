"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CondicaoService = void 0;
const condicao_1 = require("../models/condicao");
class CondicaoService {
    cadastrarCondicao(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const novaCondicao = yield condicao_1.Condicao.create(Object.assign({}, data));
            return novaCondicao;
        });
    }
    alterarCondicao(data, params, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            const payloadUpdate = {};
            if (auth.id != id) {
                return;
            }
            Object.assign(payloadUpdate, data);
            yield condicao_1.Condicao.update(Object.assign({}, payloadUpdate), {
                where: {
                    id,
                }
            });
            const condicao = yield condicao_1.Condicao.findByPk(id);
            return condicao;
        });
    }
    excluirCondicao(params, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            if (auth.id != id) {
                return;
            }
            yield condicao_1.Condicao.destroy({
                where: {
                    id,
                }
            });
            return;
        });
    }
    todasCondicoes() {
        return __awaiter(this, void 0, void 0, function* () {
            const todasCondicoes = yield condicao_1.Condicao.findAll();
            return todasCondicoes;
        });
    }
    umaCondicao(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            const umaCondicao = yield condicao_1.Condicao.findByPk(id);
            return umaCondicao;
        });
    }
}
exports.CondicaoService = CondicaoService;
;
