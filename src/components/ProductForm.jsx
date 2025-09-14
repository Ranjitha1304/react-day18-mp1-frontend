import React, { useState, useEffect } from "react";
import api from "../api";

function ProductForm({ productToEdit, onSuccess }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setPrice(productToEdit.price);
    }
  }, [productToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (productToEdit) {
      await api.put(`/products/${productToEdit.id}/`, { name, price });
    } else {
      await api.post("/products/", { name, price });
    }

    setName("");
    setPrice("");
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{productToEdit ? "Edit Product" : "Add Product"}</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">
        {productToEdit ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default ProductForm;
