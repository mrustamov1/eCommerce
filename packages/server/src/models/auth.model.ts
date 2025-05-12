import { z } from "zod";
// import { UserKindEnum } from "./user.type";

export const RegistrationSchema = z.object({
  id: z.string().optional(),
  name: z.string().nonempty("Name is required"),
  surname: z.string().nonempty("Surname is required"),
  email: z.string().email().nonempty(),
  password: z.string().min(8).nonempty(),
  // role: UserKindEnum,
});

export type RegistrationModel = z.infer<typeof RegistrationSchema>;

export const LoginSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().min(8).nonempty(),
});

export type LoginModel = z.infer<typeof LoginSchema>;
