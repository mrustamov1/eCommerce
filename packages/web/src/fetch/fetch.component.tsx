const BASE_URL = "http://localhost:9090";
const error = "Failed to fetch";

export const FetchData = {
  async fetchProducts() {
    const response = await fetch(`${BASE_URL}/products/get`);
    if (!response.ok) throw new Error(error);
    const res = await response.json();
    return res;
  },

  async fetchUsers() {
    const response = await fetch(`${BASE_URL}/api/user/get`);
    if (!response.ok) throw new Error(error);
    const result = response.json();
    return result;
  },

  async fetchCategories() {
    const response = await fetch(`${BASE_URL}/categories/get`);
    if (!response.ok) throw new Error(error);
    const res = response.json();
    return res;
  },

  async fetchFaq() {
    const response = await fetch(`${BASE_URL}/faq/get`);
    if (!response.ok) throw new Error(error);
    const res = await response.json();
    return res;
  },

  async fetchProductDetails(id: string) {
    const response = await fetch(`${BASE_URL}/product/details/get/${id}`);
    if (!response.ok) throw new Error(error);
    const res = await response.json();
    return res;
  },
};
