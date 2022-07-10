"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const endereco_1 = require("../models/endereco");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class EnderecoService {
    cadastrarEndereco(data, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario_id } = params;
            if (!usuario_id === usuario_id) {
                return;
            }
            const novoEndereco = yield endereco_1.endereco.create(Object.assign(Object.assign({}, data), { where: {
                    usuario_id
                } }));
            return novoEndereco;
        });
    }
    // async alterarEndereco(data:any, params: any) {
    //     const { id, usuario_id,  } = params;
    //     const payloadUpdate = {};
    //     if (id != id) {
    //         return
    //     }
    //     Object.assign(payloadUpdate, data);
    //     await endereco.update({
    //         ...payloadUpdate,
    //     }, {
    //         where: {
    //             id,
    //         }
    //     })
    //     const Endereco = await endereco.findByPk(id);
    //     return Endereco
    // }
    excluirEndereco(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            if (id != id) {
                return;
            }
            yield endereco_1.endereco.destroy({
                where: {
                    id,
                },
            });
            return;
        });
    }
    listarEnderecos() {
        return __awaiter(this, void 0, void 0, function* () {
            const listarEnderecos = yield endereco_1.endereco.findAll();
            return listarEnderecos;
        });
    }
    umEndereco(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            const enderecoUnico = yield endereco_1.endereco.findByPk(id);
            return enderecoUnico;
        });
    }
}
exports.EnderecoService = EnderecoService;
;
