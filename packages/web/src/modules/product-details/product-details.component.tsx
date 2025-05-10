import { useEffect, useState } from "react";

// Define the Product interface
interface Product {
  name: string;
  price: number;
  images: string[]; // Array of image URLs
}

export function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);

  // Fetch the product data
  async function products() {
    try {
      const response = await fetch("http://localhost:9090/products/get");
      const res = await response.json();
      setProduct(res[0]); // Assuming the response is an array of products, we take the first one
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    products();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <div>
        <h3>Images:</h3>
        {/* Here, we're mapping over product.images, which is an array */}
        {product.images.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:5000${image}`} // Adjust the image path if needed
            alt={product.name}
            style={{ width: "100px", height: "auto", margin: "10px" }}
          />
        ))}
      </div>
    </section>
  );
}
