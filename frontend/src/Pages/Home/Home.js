import { useEffect, useState } from "react";
import { searchProducts } from "../../Services/productService";
import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import Toolbar from "../../Components/Toolbar/Toolbar.js";
import { useDebounce } from "../../Hooks/useDebounce";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedSearch = useDebounce(searchTerm, 500)

  
  useEffect(() => {
    if (debouncedSearch.length > 0 && debouncedSearch.length < 2) return;

    setLoading(true);
    
    searchProducts({ query: debouncedSearch })
      .then((data) => setProducts(data.content))
      .finally(() => setLoading(false));
    }, [debouncedSearch]);

  return (
    <>
      <Toolbar
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p>Cargando...</p>}

      <ProductGrid products={products} />
    </>
  );
}

export default Home;

