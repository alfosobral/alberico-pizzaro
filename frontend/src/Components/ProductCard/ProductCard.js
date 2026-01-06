import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/product/${product.id}`);

  return (
    <div 
      onClick={handleClick}
      className={styles.card}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className={styles.image}
      />

      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
