import { z } from "zod";

export const UserKindSchema = z.enum(["user", "admin"]);
export type UserKind = z.infer<typeof UserKindSchema>;

export const UserSchema = z.object({
  id: z.string(),
  created_at: z.number(),
  updated_at: z.number(),
  surname: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: UserKindSchema,
  refreshToken: z.string(),
});

export type UserType = z.infer<typeof UserSchema>;
