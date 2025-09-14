import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import "./App.css";   

function App() {
  const [productToEdit, setProductToEdit] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="container">
      <h1>Product CRUD App</h1>
      <ProductForm
        productToEdit={productToEdit}
        onSuccess={() => {
          setProductToEdit(null);
          setRefresh(!refresh);
        }}
      />
      <ProductList
        key={refresh}
        onEdit={(product) => setProductToEdit(product)}
      />
    </div>
  );
}

export default App;
