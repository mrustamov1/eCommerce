import { number, string, z } from "zod";

export enum UserKind {
  admin = "admin",
  user = "user",
}

export const UserSchema = z.object({
  id: string(),
  name: string(),
  surname: string(),
  created_at: number(),
  updated_at: number(),
  email: string().email(),
  password: string().min(8),
  role: z.enum([UserKind.admin, UserKind.user]),
});

export type UserType = z.infer<typeof UserSchema>;
