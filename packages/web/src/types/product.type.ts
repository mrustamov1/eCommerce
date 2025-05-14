import { z } from "zod";

export const DeliveryInfoSchema = z.object({
  image: z.string(),
  title: z.string(),
  subTitle: z.string(),
});

export type DeliveryInfoType = z.infer<typeof DeliveryInfoSchema>;

export const ProductDetailsSchema = z.object({
  id: z.number(),
  images: z.string().array(),
  title: z.string(),
  subTitle: z.string(),
  price: z.string(),
  highlight: z.string(),
  deliveryInfo: z.array(DeliveryInfoSchema),
});

export type ProductDetailsType = z.infer<typeof ProductDetailsSchema>;

export const ProductSchema = z.object({
  id: z.number(),
  price: z.string(),
  photo: z.string(),
  model: z.string(),
  version: z.string(),
  description: z.string(),
  colors: z.string().array(),
});

export type ProductType = z.infer<typeof ProductSchema>;
