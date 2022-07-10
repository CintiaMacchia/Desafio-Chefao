import { createSlice } from "@reduxjs/toolkit"
import { User, UserState } from "../../@types"

const initialState: UserState = {
    isLogged: false,
    accessToken: '',
    email: '',
    cidade: '',
    estado: ''
}

const usersSlice = createSlice({
    name: "@user",
    initialState,
    reducers:{
        //SignIn
        logIn(state, action){
            Object.assign(state, {
                isLogged: true,
                accessToken: action.payload.accessToken,
                email: action.payload.email,
                cidade: action.payload.cidade,
                estado: action.payload.estado
            })
        },
        //SignOut
        logOut(state){
            Object.assign(state, initialState)
        }
    }
})

export const { logIn, logOut } = usersSlice.actions

export default usersSlice.reducer;