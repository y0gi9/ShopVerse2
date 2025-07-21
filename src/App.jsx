import React from "react";
import ProductList from "./ProductList";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="logo-container">
        <img src="/uploads/logo.png" alt="ShopVerse 2" className="logo-img" />
      </div>
      <h1 className="main-title">ShopVerse 2</h1>
      <ProductList />
    </div>
  );
} 