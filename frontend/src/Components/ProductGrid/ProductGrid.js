import { nav } from "framer-motion/client";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";
import { useNavigate } from "react-router-dom";

function ProductGrid({ products }) {

  if (products.length === 0) {
    return <p>Lo sentimos, no econtramos productos.</p>;
  }

  return (
    <div className={styles.grid}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
