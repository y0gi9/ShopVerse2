import React from "react";
import ProductList from "./ProductList";

export default function App() {
  return (
    <div style={{
      fontFamily: 'sans-serif',
      maxWidth: 900,
      margin: '0 auto',
      padding: 16,
      background: '#f9f9f9',
      minHeight: '100vh',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <img src="/uploads/logo.png" alt="ShopVerse 2" style={{ maxWidth: 120, width: '60vw' }} />
      </div>
      <h1 style={{ textAlign: 'center', marginBottom: 24, fontSize: 28, letterSpacing: 1 }}>ShopVerse 2</h1>
      <ProductList />
      <style>{`
        @media (min-width: 600px) {
          h1 { font-size: 2.2rem !important; }
        }
        @media (min-width: 900px) {
          .product-grid {
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          }
        }
      `}</style>
    </div>
  );
} 