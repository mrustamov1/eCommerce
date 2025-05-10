import { z } from "zod";

export const UserKindEnum = z.enum(["user", "admin"]);
export type UserKind = z.infer<typeof UserKindEnum>;

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
