import {React, useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { searchProductById } from "../../Services/productService";
import Toolbar from "../../Components/Toolbar/Toolbar";

const ProductInfo = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const data = await searchProductById(id);
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Cargando producto...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Producto no encontrado.</p>;

    return (
      <div>
        <Toolbar searchBarOff={true} />
        <h1>{product.name}</h1>
        <div>
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            
          />
        </div>
        <p>{product.description}</p>
        <span>Precio: ${product.price}</span>
      </div>
    );
};

export default ProductInfo;