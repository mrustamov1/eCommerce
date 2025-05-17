export async function fetchProducts() {
  const response = await fetch("http://localhost:9090/products/get");
  const res = await response.json();
  return res;
}

export async function fetchUsers() {
  const reponse = await fetch("http://localhost:9090/api/user/get");
  const result = reponse.json();
  return result;
}

export async function fetchCategories() {
  const response = await fetch("http://localhost:9090/categories/get");
  const res = response.json();
  return res;
}

export async function fetchFaq() {
  const response = await fetch("http://localhost:9090/faq/get");
  const res = await response.json();
  return res;
}
