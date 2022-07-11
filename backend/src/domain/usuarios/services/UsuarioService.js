const Usuarios = require("../models/usuario");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
require('dotenv').config()




const UsuarioService = {



    async loginUsuario(data) {
        const { email, senha } = data;

        const usuario = await Usuarios.findOne({
            where: {
                email,
            },
        });

        if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
            return
        }

        const token = jwt.sign({
                id: usuario.id,
                email: usuario.email,
                name: usuario.nome,
                senha: usuario.senha,

            },
            process.env.SECRET_KEY
        );
        return token;
    },

    async cadastrarUsuario(data) {
        const { senha } = data;
        const novaSenha = bcrypt.hashSync(senha, 10);

        const novoUsuario = await Usuarios.create({
            ...data,
            senha: novaSenha,

        });
        return res.json(novoUsuario);
    },


    async alterarUsuario(data, params) {
        const { id } = params;
        const { senha } = data;
        const payloadUpdate = {};


        if (id != id) {
            return
        }
        Object.assign(payloadUpdate, data);

        if (senha) {
            const novaSenha = bcrypt.hashSync(senha, 10);
            Object.assign(payloadUpdate, { senha: novaSenha });
        }

        await Usuarios.update({
            ...payloadUpdate,
        }, {
            where: { id },
        });

        const usuario = await Usuarios.findByPk(id);
        return usuario;
    },

    // async excluirUsuario(params: any, auth: any) {
    //     const { id } = params;

    //     if(auth.id != id){
    //         return
    //     }

    //     await Usuarios.destroy({
    //         where: {
    //             id,
    //         },
    //     });
    //     return
    // }



    async todosUsuarios(x) {
        const todosOsUsuarios = await Usuarios.findAll();
        return todosOsUsuarios;
    },

    async umUsuario(params) {
        const { id } = params;
        const usuarioUnico = await Usuarios.findByPk(id);
        return usuarioUnico;
    },

}
module.exports = UsuarioService