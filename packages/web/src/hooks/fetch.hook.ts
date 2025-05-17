import { useQuery } from "@tanstack/react-query";
import { fetchProducts, getUser } from "../fetch/fetch.component";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });
}

export function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUser(),
  });
}
