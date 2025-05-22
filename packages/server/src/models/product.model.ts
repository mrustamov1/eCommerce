import { z } from "zod";

export const ProductModelSchema = z.object({
  id: z.string(),
  verstion: z.string(),
  title: z.string(),
  subTitle: z.string(),
  price: z.string(),
  colors: z.string().array()
})

export type ProductModel = z.infer<typeof ProductModelSchema>
