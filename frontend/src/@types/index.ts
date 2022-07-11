export interface Login {
    email: string,
    password: string
}

export interface User extends Login {
    id: number,
    endereco: string,
    numero: number,
    cep: string,
    cidade: string,
    estado: string,
    completemento?: string
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
