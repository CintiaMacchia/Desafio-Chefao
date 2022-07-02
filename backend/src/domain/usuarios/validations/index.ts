import { create } from "./usuarios/create";
import { getOne } from "./usuarios/getOne";
import { destroy}  from "./usuarios/destroy";
import { update } from "./usuarios/update";

export const UserValidation = {
  create,
  getOne,
  destroy,
  update,
};