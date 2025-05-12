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
  refreshToken: z.string().nullable(),
});

export type UserType = z.infer<typeof UserSchema>;
