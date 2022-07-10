require ('dotenv').config()
import { expressjwt } from "express-jwt";

export default expressjwt({
   secret: process.env.SECRET_KEY as string,
   algorithms: ["HS256"],
});
