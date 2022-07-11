export interface Login {
    email: string,
    senha: string
}

export interface User extends Login {
    id: number,
    nome: string,
    estado: string,
    cidade: string,
    endereco: string,
    numero: string,
    cep: string,
    bairro: string,
    complemento: string,
    termos: false
}

export interface Endereco {
    endereco: string,
    numero: number,
    cep: string,
    cidade: string,
    estado: string,
    completemento?: string,
}

export interface Categorias {
    id: number,
    categoria: string
}

export interface UserState {
    isLogged: boolean,
    accessToken: string,
    email: string,
    cidade: string,
    estado: string
}
