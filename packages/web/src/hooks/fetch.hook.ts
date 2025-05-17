import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../products";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });
}
