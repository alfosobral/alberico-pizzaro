import { useEffect, useState } from "react";
import { searchProducts } from "../../Services/productService";
import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import Toolbar from "../../Components/Toolbar/Toolbar.js";
import TagSelector from "../../Components/TagSelector/TagSelector.js";
import { useDebounce } from "../../Hooks/useDebounce";
import { useTags } from "../../Hooks/useTags";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { tags, loading: tagsLoading } = useTags();
  const [selectedTags, setSelectedTags] = useState([]);
  const debouncedSearch = useDebounce(searchTerm, 500);

    
  useEffect(() => {
    searchProducts({
      query: searchTerm,
      tags: selectedTags
    })
      .then(data => setProducts(data.content))
      .catch(console.error);
  }, [searchTerm, selectedTags]);


  return (
    <>
      <Toolbar
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
      />


      <TagSelector
        availableTags={tags}
        value={selectedTags}
        onChange={setSelectedTags}
      />

      <ProductGrid products={products} />
    </>
  );
}

export default Home;

