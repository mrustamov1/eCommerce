import { z } from "zod";

export const FaqSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  photo: z.string(),
});

export type FaqType = z.infer<typeof FaqSchema>;
