import { UserKind } from "../types/user.type";

export type RegisterModel = {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: UserKind;
};

export type LoginModel = {
  email: string;
  password: string;
};
