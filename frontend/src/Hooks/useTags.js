import { useEffect, useState } from "react";

export function useTags() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/tags")
      .then(res => res.json())
      .then(data => setTags(data))
      .finally(() => setLoading(false));
  }, []);

  return { tags, loading };
}
