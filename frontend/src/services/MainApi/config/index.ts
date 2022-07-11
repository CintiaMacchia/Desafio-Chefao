import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://app-back-passo-repasso.herokuapp.com/",
  // baseURL: "http://localhost:3333/",
})

export default baseApi