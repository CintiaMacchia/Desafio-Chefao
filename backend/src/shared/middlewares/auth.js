require ('dotenv').config()
const expressjwt = require("express-jwt")

export default expressjwt({
   secret: process.env.SECRET_KEY,
   algorithms: ["HS256"],
});
