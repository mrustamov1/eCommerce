import { z } from "zod";

export enum UserKind {
  user = "user",
  admin = "admin",
}

export const UserSchema = z.object({
  id: z.string(),
  created_at: z.number(),
  updated_at: z.number(),
  surname: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  // role: z.enum([UserKind]),
  refreshToken: z.string(),
});

export type UserType = z.infer<typeof UserSchema>;
