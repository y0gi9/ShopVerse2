import React from "react";
import products from "./data/products.json";
import PropTypes from "prop-types";

const SMS_PHONE = process.env.REACT_APP_SMS_PHONE || "+1234567890";

const ProductCard = React.memo(function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-img"
        onError={e => { e.target.src = "/uploads/logo.png"; }}
      />
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-desc">{product.description}</p>
        <a
          href={`sms:${SMS_PHONE}?body=I'm interested in purchasing: ${encodeURIComponent(product.name)}`}
          className="sms-btn"
        >
          Purchase via SMS
        </a>
      </div>
    </article>
  );
});

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default function ProductList() {
  return (
    <main>
      <section className="flex-box">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
} 