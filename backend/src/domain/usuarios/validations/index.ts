import { create } from "./usuarios/create";
import { getOne } from "./usuarios/getOne";
import { destroy}  from "./usuarios/destroy";
import { update } from "./usuarios/update";
import { loginValidation } from "./usuarios/login";

export const UsuarioValidation = {
  create,
  getOne,
  destroy,
  update,
  loginValidation,
};