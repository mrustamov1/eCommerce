export async function fetchProducts() {
  const response = await fetch("http://localhost:9090/products/get");
  const res = await response.json();
  return res;
}
