import React, { useEffect, useState } from "react";
import api from "../api";

function ProductList({ onEdit }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await api.get("/products/");
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    await api.delete(`/products/${id}/`);
    fetchProducts();
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ₹{p.price}
            <button onClick={() => onEdit(p)}>Edit</button>
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
