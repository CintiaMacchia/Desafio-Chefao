import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://app-back-passo-repasso.herokuapp.com/",

})

export default baseApi