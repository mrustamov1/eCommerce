import { useQuery } from "@tanstack/react-query";
import {
  fetchFaq,
  fetchUsers,
  fetchProducts,
  fetchCategories,
  fetchProductDetails,
} from "../fetch/fetch.component";
import { useParams } from "react-router-dom";

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

export function useProductDetails() {
  const { id } = useParams<{ id: string }>();
  return useQuery({
    queryKey: ["faq"],
    queryFn: () => (id ? fetchProductDetails(id) : Promise.resolve(null)),
  });
}
