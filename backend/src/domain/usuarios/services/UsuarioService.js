import usuarios from "../models/usuario";
import bcrypt from "bcryptjs";


export class UsuarioService {

    // async loginUsuario(data: any) {
    //     const { email, senha } = data;

    //     const usuario = await usuarios.findOne({
    //         where:{
    //             email,
    //         },
    //     });
        
    //     if(!usuario || !bcrypt.compareSync(senha, usuario.senha)){
    //         return
    //     }

    //     const token = jwt.sign({
    //         id: usuario.id,
    //         email: usuario.email,
    //         name: usuario.nome,
    //         senha: usuario.senha,
    //         
    //     },
    //     process.env.SECRET_KEY
    //     );
    //     return token;
    // }

    async cadastrarUsuario(data) {
        const { senha } = data;
        const novaSenha = bcrypt.hashSync(senha, 10);

        const novoUsuario = await usuarios.create({
            ...data,
            senha: novaSenha
            
        });
        return novoUsuario;
    }

    
    async alterarUsuario(data, params, auth ) {
        const { id } = params;
        const { senha } = data;
        const payloadUpdate = {};


        if(auth.id != id){
            return
        }
        Object.assign(payloadUpdate, data);

        if (senha) {
            const novaSenha = bcrypt.hashSync(senha, 10);
            Object.assign(payloadUpdate, { senha: novaSenha });
        }

        await usuarios.update({
            ...payloadUpdate,
        }, {
            where: { id },
        });

        const usuario = await usuarios.findByPk(id);
        return usuario;
    }

    async excluirUsuario(params, auth) {
        const { id } = params;

        if(auth.id != id){
            return
        }
              
        await usuarios.destroy({
            where: {
                id,
            },
        });
        return
    }

    async todosUsuarios() {
        const todosOsUsuarios = await usuarios.findAll();
        return todosOsUsuarios;
    }

    async umUsuario(params) {
        const { id } = params;
        const usuarioUnico = await usuarios.findByPk(id);
        return usuarioUnico;
    }

}