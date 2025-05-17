export async function fetchProducts() {
  const response = await fetch("http://localhost:9090/products/get");
  const res = await response.json();
  return res;
}

export async function getUser() {
  const reponse = await fetch("http://localhost:9090/api/user/get");
  const result = reponse.json();
  return result;
}
