
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
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
