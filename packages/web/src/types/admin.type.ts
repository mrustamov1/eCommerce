import { z } from "zod";

export const AdminSchema = z.object({
  id: z.number(),
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  role: z.string(),
});

export type AdminType = z.infer<typeof AdminSchema>;
