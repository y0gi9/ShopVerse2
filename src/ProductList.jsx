import React, { useEffect, useState } from "react";

const SMS_PHONE = process.env.REACT_APP_SMS_PHONE || "+1234567890";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="product-grid" style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 16,
      marginBottom: 32,
    }}>
      {products.map((product) => (
        <div key={product.id} style={{
          boxShadow: '0 2px 8px #eee',
          borderRadius: 8,
          overflow: 'hidden',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: 160, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
          />
          <div style={{ padding: 14, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: 18, margin: '0 0 8px 0' }}>{product.name}</h2>
            <p style={{ color: '#555', margin: 0, marginBottom: 12 }}>{product.description}</p>
            <a
              href={`sms:${SMS_PHONE}?body=I'm interested in purchasing: ${encodeURIComponent(product.name)}`}
              style={{
                display: 'inline-block',
                marginTop: 'auto',
                padding: '12px 0',
                background: '#22c55e',
                color: '#fff',
                borderRadius: 6,
                textDecoration: 'none',
                fontWeight: 600,
                letterSpacing: 1,
                textAlign: 'center',
                fontSize: 16,
                width: '100%',
                touchAction: 'manipulation',
              }}
            >
              Purchase via SMS
            </a>
          </div>
        </div>
      ))}
      <style>{`
        @media (min-width: 600px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
        @media (min-width: 900px) {
          .product-grid {
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 32px;
          }
        }
      `}</style>
    </div>
  );
} 