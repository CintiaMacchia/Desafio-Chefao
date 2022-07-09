import { createSlice } from "@reduxjs/toolkit"
import { UserState } from "../../@types"

const initialState: UserState = {
    isLogged: false,
    accessToken: "",
    id: undefined,
    email: undefined,
    endereco: undefined,
    numero: undefined,
    cep: undefined,
    cidade: undefined,
    estado: undefined,
    completemento: undefined,
}

const userReduce = createSlice({
    name: "@user",
    initialState,
    reducers:{
        logIn(state, action){
            Object.assign(state, {
                isLogged: true,
                accessToken: action.payload.accessToken,
                id: action.payload.user.id,
                email: action.payload.user.email,
                endereco: action.payload.user.endereco,
                numero: action.payload.user.numero,
                cep: action.payload.user.cep,
                cidade: action.payload.user.cidade,
                estado: action.payload.user.estado,
                completemento: action.payload.user.completemento
            })
        },
        logOut(state){
            Object.assign(state, initialState)
        }
    }
})

export const { logIn, logOut } = userReduce.actions

export default userReduce.reducer;