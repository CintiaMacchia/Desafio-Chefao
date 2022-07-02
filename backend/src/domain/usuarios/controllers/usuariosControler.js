import { Request, Response } from "express";
import { usuarioService } from "../services";




export const UsuarioController = {

  // async login(req: Request, res: Response) {
  //   try {
  //     const accessToken = await usuarioService.loginUsuario(req.body);

  //     if(!accessToken){
  //       return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
  //     }
  //     return res.status(200).json(accessToken);
  //   } catch (error) {

  //     return res.status(500).json(error);
  //   }
  // },

  async create(req, res) {
    try {
      const novoUsuario = await usuarioService.cadastrarUsuario(req.body);
      return res.status(201).json(novoUsuario);
    } catch (error) {

      return res.status(500).json(error);
    }
  },
  
  async update(req, res) {
    try {
      const usuarioAlterado = await usuarioService.alterarUsuario(req.body, req.params, req.auth);
      return res.status(200).json(usuarioAlterado);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async delete(req, res) {
    try {      
      await usuarioService.excluirUsuario(req.params, req.auth);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  
  async getAll(req, res) {
    try {
      const usuarios = await usuarioService.todosUsuarios();
      return res.json(usuarios);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async getOne(req, res) {
    try {
      const usuario = await usuarioService.umUsuario(req.params);
      return res.json(usuario);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};