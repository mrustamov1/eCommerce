import { z } from "zod";

export const DeliveryInfoSchema = z.object({
  image: z.string(),
  title: z.string(),
  subTitle: z.string(),
});

export type DeliveryInfoType = z.infer<typeof DeliveryInfoSchema>;

export const ProductSchema = z.object({
  id: z.number(),
  images: z.string().array(),
  title: z.string(),
  subTitle: z.string(),
  price: z.string(),
  highlight: z.string(),
  deliveryInfo: z.array(DeliveryInfoSchema),
});

export type ProductType = z.infer<typeof ProductSchema>;


export type ProductTypes = {
  id: number,
  version: string,
  model: string,
  photo: string
  price: string
  colors: []
} 