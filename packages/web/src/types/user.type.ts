import { z } from "zod";

export const UserKindEnum = z.enum(["user", "admin"]);
export type UserKind = z.infer<typeof UserKindEnum>;

export const UserTypeSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  surname: z.string().optional(),
  email: z.string().email().optional(),
  role: UserKindEnum.optional(),
  token: z
    .object({
      access: z.string().optional(),
      refresh: z.string().optional(),
    })
    .optional(),
});

export type UserType = z.infer<typeof UserTypeSchema>;
