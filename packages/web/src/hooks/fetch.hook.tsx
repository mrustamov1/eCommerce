import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FetchData } from "../fetch/fetch.component";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => FetchData.fetchProducts(),
  });
}

export function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => FetchData.fetchUsers(),
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => FetchData.fetchCategories(),
  });
}

export function useFaq() {
  return useQuery({
    queryKey: ["faq"],
    queryFn: () => FetchData.fetchFaq(),
  });
}

export function useProductDetails() {
  const { id } = useParams<{ id: string }>();
  return useQuery({
    queryKey: ["ProductDetails"],
    queryFn: () =>
      id ? FetchData.fetchProductDetails(id) : Promise.resolve(null),
  });
}
