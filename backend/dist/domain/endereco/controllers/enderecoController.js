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
exports.EnderecoController = void 0;
const services_1 = require("../services");
//import { usuario } from '../../usuarios/models/usuario'
const endereco_1 = require("../models/endereco");
//import { endereco } from '..models/endereco'
//interface Request, res: Response extends Request{ auth: any } 
exports.EnderecoController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novoEndereco = yield services_1.enderecoService.cadastrarEndereco(req.body, req.params);
                return res.status(201).json(novoEndereco);
            }
            catch (error) {
                return res.status(500).json(error);
            }
            ;
        });
    },
    // async update(req:Request, res: Response) {
    //     try {
    //         const alterarEndereco = await enderecoService.alterarEndereco(req.body, req.params);
    //         return res.status(200).json(alterarEndereco);
    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // },
    // async delete(req:Request, res: Response) {
    //     try {
    //         const deletarEndereco = await enderecoService.excluirEndereco(req.params, req.body.auth);
    //         return res.status(204).json(deletarEndereco)
    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { rua, numero, complemento, cidade, estado, cep, usuario_id } = req.body;
                const existId = yield endereco_1.endereco.count({
                    where: {
                        id: id,
                    }
                });
                if (!existId) {
                    return res.status(400).json('Usuário não encontrado');
                }
                const updateEndereco = yield endereco_1.endereco.update({ rua, numero, complemento, cidade, estado, cep, usuario_id }, {
                    where: {
                        id: id,
                    }
                });
                res.json({ message: 'Dados atualizados com sucesso' }).status(201);
            }
            catch (error) {
                res.status(404).json('Verfique os dados e tente novamente');
                console.error(error);
            }
            ;
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const existeId = yield endereco_1.endereco.count({
                    where: {
                        id: id,
                    }
                });
                if (!existeId) {
                    return res.status(400).json({ message: 'Endereco não encontrado' });
                }
                yield endereco_1.endereco.destroy({
                    where: {
                        id: id
                    }
                });
                return res.status(204).json({ message: 'Endereco deletado' });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //console.log(req)
                const enderecos = yield services_1.enderecoService.listarEnderecos();
                return res.json(enderecos);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const endereco = yield services_1.enderecoService.umEndereco(req.params);
                return res.json(endereco);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
};
