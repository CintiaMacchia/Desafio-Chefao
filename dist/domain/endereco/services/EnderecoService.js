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
exports.EnderecoService = void 0;
const models_1 = require("../models");
class EnderecoService {
    cadastrarEndereco(data, params, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario_id } = params;
            if (auth.usuario_id != usuario_id) {
                return;
            }
            const novoEndereco = yield models_1.Endereco.create(Object.assign(Object.assign({}, data), { where: {
                    usuario_id
                } }));
            return novoEndereco;
        });
    }
    alterarEndereco(data, params, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            const payloadUpdate = {};
            if (auth.id != id) {
                return;
            }
            Object.assign(payloadUpdate, data);
            yield models_1.Endereco.update(Object.assign({}, payloadUpdate), {
                where: {
                    id,
                }
            });
            const endereco = yield models_1.Endereco.findByPk(id);
            return endereco;
        });
    }
    excluirEndereco(params, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            if (auth.id != id) {
                return;
            }
            yield models_1.Endereco.destroy({
                where: {
                    id,
                },
            });
            return;
        });
    }
    listarEnderecos() {
        return __awaiter(this, void 0, void 0, function* () {
            const listarEnderecos = yield models_1.Endereco.findAll();
            return listarEnderecos;
        });
    }
    umEndereco(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            const enderecoUnico = yield models_1.Endereco.findByPk(id);
            return enderecoUnico;
        });
    }
}
exports.EnderecoService = EnderecoService;
;
