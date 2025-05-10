import { z } from "zod";
import { UserKindEnum } from "./user.type";

export const UserRegisterSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().nonempty("Name is required"),
    surname: z.string().nonempty("Surname is required"),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
    // role: UserKindEnum,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not matched",
    path: ["confirmPassword"],
  });

export type UserRegisterType = z.infer<typeof UserRegisterSchema>;

export const UserLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type UserLoginType = z.infer<typeof UserLoginSchema>;
