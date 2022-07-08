import axios   from "axios";

const baseApi = axios.create({
 baseURL: "http://localhost:3333",
 headers: {
   " content-type":"applcation/json",
 }
})

export default baseApi