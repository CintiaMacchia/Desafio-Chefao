import axios from "axios"

interface Contact {
    name: string,
    email: string,
    message: string
}

const baseUrl = axios.create({
    baseURL: "http://localhost:3333"
})

export const postContact = async ({name, email,message}: Contact) => {
    try {
        const response = await baseUrl.post("/contacts", {name, email, message})
        return response.data
    } catch (error) {
        throw new Error("Não foi possivel realizar o cadastro")
    }
}