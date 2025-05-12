import { z } from "zod";

export const CategoriesSchema = z.object({
  id: z.string(),
  model: z.string(),
  description: z.string(),
  photo: z.string(),
});

export type CategoriesType = z.infer<typeof CategoriesSchema>;
