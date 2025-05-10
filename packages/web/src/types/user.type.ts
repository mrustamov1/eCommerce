import { z } from "zod";

export const UserKindEnum = z.enum(["user", "admin"]);
export type UserKind = z.infer<typeof UserKindEnum>;

export const UserRegisterSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().nonempty("Name is required"),
    surname: z.string().nonempty("Surname is required"),
    email: z.string().email().trim(),
    password: z.string().min(8),
    confirmPassword: z.string(),
    role: UserKindEnum,
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

export const UserTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  role: UserKindEnum,
  token: z.object({
    access: z.string(),
    refresh: z.string(),
  }),
});

export type UserType = z.infer<typeof UserTypeSchema>;
