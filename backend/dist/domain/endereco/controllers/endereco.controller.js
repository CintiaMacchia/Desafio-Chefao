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
exports.EnderecoController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novoEndereco = yield services_1.enderecoService.cadastrarEndereco(req.body, req.params, req.auth);
                return res.status(201).json(novoEndereco);
            }
            catch (error) {
                return res.status(500).json(error);
            }
            ;
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alterarEndereco = yield services_1.enderecoService.alterarEndereco(req.body, req.params, req.auth);
                return res.status(200).json(alterarEndereco);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletarEndereco = yield services_1.enderecoService.excluirEndereco(req.params, req.auth);
                return res.status(204).json(deletarEndereco);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    },
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const endereco = yield services_1.enderecoService.listarEnderecos();
                return res.json(endereco);
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
