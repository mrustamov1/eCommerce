import { useQuery } from "@tanstack/react-query";
import {
  fetchFaq,
  fetchUsers,
  fetchProducts,
  fetchCategories,
} from "../fetch/fetch.component";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });
}

export function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });
}

export function useFaq() {
  return useQuery({
    queryKey: ["faq"],
    queryFn: () => fetchFaq(),
  });
}
